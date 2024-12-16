'use client';

import React from 'react';
import DragDropCanvas from './components/DragDropCanvas';
import NodeList from './components/NodeList';

const Home: React.FC = () => {
  const handleDragStart = (event: React.DragEvent, nodeType: string) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className="flex h-screen">
   
      <div className="flex-[8] p-4">
        <DragDropCanvas />
      </div>

      <div className="flex-[2] p-4 bg-gray-200">
        <NodeList onDragStart={handleDragStart} />
      </div>
    </div>
  );
};

export default Home;
