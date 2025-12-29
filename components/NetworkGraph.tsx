import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { GraphData, NodeData, LinkData } from '../types';

interface NetworkGraphProps {
  className?: string;
}

// Data strictly matching the prototype image
const graphData: GraphData = {
  nodes: [
    { id: 'Digital Nomad Hub', label: 'Digital Nomad Hub', tag: 'Nomad Hub' },
    { id: 'HY', label: 'HY' },
    { id: 'sunburst', label: 'sunburst', tag: 'IP incubation' },
    { id: 'Roy 98', label: 'Roy 98' },
    { id: 'Marilyn', label: 'Marilyn', tag: 'Community Academy' },
    { id: 'OxNought', label: 'OxNought', tag: 'TagAI' },
    { id: 'CK', label: 'CK', tag: 'De - Investment' },
    { id: 'reaper', label: 'reaper', tag: 'Nabox' },
    { id: 'shooter', label: 'shooter', tag: 'Developer' },
    { id: 'TL', label: 'TL' },
    { id: 'Dong', label: 'Dong', tag: 'Indie startup' },
    { id: 'xiaoyu', label: 'xiaoyu', tag: 'Coffee OS' },
    { id: 'ChrisE', label: 'ChrisE', tag: 'Individual Investor' },
    { id: 'Armonio', label: 'Armonio', tag: 'TagAI' },
    { id: 'Terry', label: 'Terry', tag: 'TagAI' },
    { id: 'Kuang', label: 'Kuang' },
    { id: 'Andy', label: 'Andy', tag: 'TagAI' },
    { id: 'DAVID', label: 'DAVID' },
    { id: 'AmyTang', label: 'AmyTang', tag: 'Wellness Community' },
    { id: 'Amos', label: 'Amos', tag: 'Zhangfei Beef' },
    { id: 'Jiang', label: 'Jiang', tag: 'Co-Work' },
    { id: 'quyang', label: 'quyang', tag: 'Vibe Coding' },
    { id: 'JieBai', label: 'JieBai', tag: 'WuDAO' },
    { id: 'Ting', label: 'Ting', tag: 'Coffee OS' },
    { id: 'Hacky', label: 'Hacky', tag: 'IPFUN' },
    { id: 'Dalin', label: 'Dalin', tag: 'Ctalks' },
    { id: 'MoocoolY', label: 'MoocoolY', tag: 'Moocool' },
  ],
  links: [
    // Left side
    { source: 'Digital Nomad Hub', target: 'HY', type: 'dashed' },
    { source: 'Digital Nomad Hub', target: 'Dong', type: 'dashed' },
    { source: 'HY', target: 'sunburst', type: 'dashed' },
    { source: 'HY', target: 'Roy 98', type: 'dashed' },
    { source: 'Roy 98', target: 'Marilyn', type: 'dashed' },
    { source: 'reaper', target: 'shooter', type: 'dashed' },
    { source: 'reaper', target: 'CK', type: 'dashed' },
    { source: 'shooter', target: 'TL', type: 'dashed' },
    { source: 'shooter', target: 'OxNought', type: 'dashed' },
    { source: 'CK', target: 'OxNought', type: 'dashed' },
    { source: 'Marilyn', target: 'OxNought', type: 'solid' },
    { source: 'sunburst', target: 'OxNought', type: 'solid' },
    { source: 'sunburst', target: 'Dong', type: 'solid' },
    
    // Center cluster
    { source: 'OxNought', target: 'Hacky', type: 'solid' },
    { source: 'OxNought', target: 'Amos', type: 'solid' },
    { source: 'OxNought', target: 'Dong', type: 'solid' },
    
    { source: 'Dong', target: 'Amos', type: 'solid' },
    { source: 'Dong', target: 'AmyTang', type: 'solid' },
    { source: 'Dong', target: 'xiaoyu', type: 'dashed' },
    
    { source: 'xiaoyu', target: 'ChrisE', type: 'dashed' },
    { source: 'xiaoyu', target: 'AmyTang', type: 'dashed' },
    
    { source: 'Amos', target: 'AmyTang', type: 'solid' },
    { source: 'Amos', target: 'Ting', type: 'solid' },
    { source: 'Amos', target: 'Jiang', type: 'solid' },
    
    { source: 'Ting', target: 'Hacky', type: 'solid' },
    { source: 'Ting', target: 'Dalin', type: 'solid' },
    { source: 'Ting', target: 'JieBai', type: 'solid' },
    
    { source: 'Hacky', target: 'Dalin', type: 'solid' },
    
    // Right side
    { source: 'ChrisE', target: 'AmyTang', type: 'dashed' },
    { source: 'ChrisE', target: 'Kuang', type: 'dashed' },
    { source: 'ChrisE', target: 'Armonio', type: 'dashed' },
    
    { source: 'AmyTang', target: 'Kuang', type: 'dashed' },
    { source: 'AmyTang', target: 'quyang', type: 'dashed' },
    { source: 'AmyTang', target: 'Jiang', type: 'solid' },
    
    { source: 'Jiang', target: 'quyang', type: 'dashed' },
    { source: 'Jiang', target: 'JieBai', type: 'solid' },
    
    { source: 'JieBai', target: 'quyang', type: 'dashed' },
    { source: 'JieBai', target: 'MoocoolY', type: 'dashed' },
    { source: 'JieBai', target: 'Dalin', type: 'solid' },
  
    { source: 'quyang', target: 'Kuang', type: 'dashed' },
    { source: 'quyang', target: 'DAVID', type: 'dashed' },
    
    { source: 'Armonio', target: 'Kuang', type: 'dashed' },
    { source: 'Armonio', target: 'Terry', type: 'dashed' },
    
    { source: 'Kuang', target: 'Terry', type: 'dashed' },
    { source: 'Kuang', target: 'DAVID', type: 'dashed' },
    
    { source: 'Terry', target: 'Andy', type: 'dashed' },
    { source: 'Terry', target: 'DAVID', type: 'dashed' },
    
    { source: 'Andy', target: 'DAVID', type: 'dashed' },
    { source: 'MoocoolY', target: 'quyang', type: 'dashed' },
  ]
};

export const NetworkGraph: React.FC<NetworkGraphProps> = ({ className = '' }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!svgRef.current || !wrapperRef.current) return;

    const width = wrapperRef.current.clientWidth;
    const height = wrapperRef.current.clientHeight || 700;

    // Clear previous render
    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height]);

    // Definitions for markers (arrowheads)
    const defs = svg.append("defs");
    
    // Arrow marker
    defs.append("marker")
      .attr("id", "arrow")
      .attr("viewBox", "0 -5 10 10")
      .attr("refX", 25) // Position of the arrow relative to the node
      .attr("refY", 0)
      .attr("markerWidth", 8)
      .attr("markerHeight", 8)
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M0,-5L10,0L0,5")
      .attr("fill", "#1a1a1a");

    const nodes = graphData.nodes.map(d => ({ ...d }));
    const links = graphData.links.map(d => ({ ...d }));

    const simulation = d3.forceSimulation(nodes as any)
      .force("link", d3.forceLink(links).id((d: any) => d.id).distance(120))
      .force("charge", d3.forceManyBody().strength(-600))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collide", d3.forceCollide().radius(60).iterations(2));

    // Links
    const link = svg.append("g")
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke", "#1a1a1a")
      .attr("stroke-width", 1.5)
      .attr("stroke-dasharray", (d: any) => d.type === 'dashed' ? "6,4" : "none")
      .attr("marker-end", "url(#arrow)")
      .attr("marker-start", "url(#arrow)"); // Most links in prototype look bidirectional

    // Node Group
    const node = svg.append("g")
      .selectAll("g")
      .data(nodes)
      .join("g")
      .call(d3.drag<any, any>()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

    // 1. Tag Rectangle (Bottom layer, if exists)
    node.filter((d: any) => !!d.tag)
      .append("rect")
      .attr("rx", 6)
      .attr("ry", 6)
      .attr("x", -40) // Approximation, will adjust based on text length if needed, but static is cleaner for this style
      .attr("y", 15)
      .attr("width", 80)
      .attr("height", 24)
      .attr("fill", "#ffcce0")
      .attr("stroke", "#1a1a1a")
      .attr("stroke-width", 1.5);

    // 2. Tag Text
    node.filter((d: any) => !!d.tag)
      .append("text")
      .text((d: any) => d.tag)
      .attr("x", 0)
      .attr("y", 31)
      .attr("text-anchor", "middle")
      .attr("font-family", '"Patrick Hand", cursive')
      .attr("font-size", "12px")
      .attr("fill", "#1a1a1a")
      .style("pointer-events", "none");

    // 3. Main Node Ellipse
    node.append("ellipse")
      .attr("rx", 35)
      .attr("ry", 20)
      .attr("fill", "#ffffff")
      .attr("stroke", "#1a1a1a")
      .attr("stroke-width", 1.5);

    // 4. Main Label
    node.append("text")
      .text((d: any) => d.label)
      .attr("x", 0)
      .attr("y", 5)
      .attr("text-anchor", "middle")
      .attr("font-family", '"Patrick Hand", cursive')
      .attr("font-size", "14px")
      .attr("font-weight", "bold")
      .attr("fill", "#1a1a1a")
      .style("pointer-events", "none");

    simulation.on("tick", () => {
      // Keep nodes within bounds
      nodes.forEach((d: any) => {
        d.x = Math.max(40, Math.min(width - 40, d.x));
        d.y = Math.max(40, Math.min(height - 40, d.y));
      });

      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);

      node
        .attr("transform", (d: any) => `translate(${d.x},${d.y})`);
    });

    function dragstarted(event: any) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event: any) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event: any) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

  }, []);

  return (
    <div ref={wrapperRef} className={`w-full h-full min-h-[600px] ${className}`}>
      <svg ref={svgRef} className="w-full h-full cursor-grab active:cursor-grabbing"></svg>
    </div>
  );
};