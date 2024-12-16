'use client';

import React, { useEffect, useState } from 'react';

interface Node {
  id: number;
  title: string;
}

interface NodeListProps {
  onDragStart: (event: React.DragEvent<HTMLDivElement>, nodeType: string) => void;
}
const NodeList: React.FC<NodeListProps> = ({ onDragStart }) => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch nodes from API
  useEffect(() => {
    const fetchNodes = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();

        // Use only the first 10 nodes for simplicity
        setNodes(data.slice(0, 20));
        setLoading(false);
      } catch (err) {
        setError((err as Error).message);
        setLoading(false);
      }
    };

    fetchNodes();
  }, []);

  if (loading) {
    return <div>Loading nodes...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold">Node List</h3>
      {nodes.map((node) => (
        <div
          key={node.id}
          className="p-2 bg-blue-300 text-white rounded-md cursor-pointer"
          draggable
          onDragStart={(event) => onDragStart(event, node.title)}
        >
          {node.title}
        </div>
      ))}
    </div>
  );
};

export default NodeList;