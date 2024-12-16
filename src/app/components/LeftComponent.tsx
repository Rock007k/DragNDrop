import React from 'react';
import Node from './Node';

const LeftComponent: React.FC = () => {
  return (
    <div className="p-5 bg-gray-200 h-full">
      <h2 className="text-2xl font-bold">Left Component</h2>
      <p>This is the 70% width component.</p>
      <Node />
    </div>
  );
};

export default LeftComponent;
