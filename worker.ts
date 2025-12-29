// 新的 Worker 接口定义
// 使用 Cloudflare Workers 类型
import type { Fetcher, ExecutionContext, Request as WorkerRequest, Response as WorkerResponse } from '@cloudflare/workers-types';

export interface Env {
  ASSETS: Fetcher;
}

export default {
  async fetch(request: WorkerRequest, env: Env, ctx: ExecutionContext): Promise<WorkerResponse> {
    const url = new URL(request.url);

    try {
      // 1. 尝试从 Assets 获取静态资源
      // env.ASSETS.fetch 会自动查找 dist 目录下的文件
      let response = await env.ASSETS.fetch(request);
      
      // 如果找到了资源（状态码 2xx 或 304），直接返回
      if (response.status >= 200 && response.status < 400) {
        return response;
      }

      // 2. 如果是 404，并且请求的不是文件（没有扩展名），
      // 或者是 .html 请求，则返回 index.html (SPA 支持)
      // 注意：API 请求通常带前缀，可以在这里排除，例如 if (!url.pathname.startsWith('/api'))
      const isFile = url.pathname.includes('.');
      if (response.status === 404 && !isFile) {
         // 尝试请求 /index.html
         // 注意：这里需要构造一个新的 Request 对象，但为了避免类型冲突，
         // 我们使用 any 转换一下，或者直接使用 env.ASSETS.fetch 的 url 字符串重载（如果支持）
         // 最稳妥的方式是构造标准 Request 并断言，或者直接构造 URL 字符串请求
         
         const indexUrl = new URL('/index.html', url.origin);
         const indexResponse = await env.ASSETS.fetch(indexUrl.toString(), request);
         
         // 如果 index.html 存在，返回它（状态码 200）
         if(indexResponse.status >= 200 && indexResponse.status < 400) {
            return indexResponse;
         }
      }
      
      // 默认返回之前的 404 响应
      return response;

    } catch (e: any) {
      // 动态导入 Response 以避免与全局冲突（或者直接使用 Response，但需注意环境）
      // 在 Worker 环境中，全局 Response 就是我们需要的。
      // 但 TypeScript 可能会混淆。这里我们简单地构造一个对象返回，或者使用 (Response as any)
      return new Response(`Internal Error: ${e.message}`, { status: 500 }) as unknown as WorkerResponse;
    }
  },
};
