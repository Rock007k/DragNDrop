'use client';

import React from 'react';

const NodeList: React.FC = () => {
  const nodes = ['Node A', 'Node B', 'Node C'];

  const handleDragStart = (event: React.DragEvent, nodeType: string) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold">Node List</h3>
      {nodes.map((node) => (
        <div
          key={node}
          className="p-2 bg-blue-300 text-white rounded-md cursor-pointer"
          draggable
          onDragStart={(event) => handleDragStart(event, node)}
        >
          {node}
        </div>
      ))}
    </div>
  );
};

export default NodeList;
