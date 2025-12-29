
export interface NodeData {
  id: string;
  group?: number;
  label: string;
  tag?: string;
  x?: number;
  y?: number;
  fx?: number | null;
  fy?: number | null;
}

export interface LinkData {
  source: string | NodeData;
  target: string | NodeData;
  type?: 'solid' | 'dashed';
  value?: number;
}

export interface GraphData {
  nodes: NodeData[];
  links: LinkData[];
}

export interface ProjectItem {
  title: string;
  image: string;
}

export interface EventItem {
  title: string;
  image: string;
}
