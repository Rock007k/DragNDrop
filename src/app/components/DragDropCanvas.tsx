"use client";
import { useCallback, useState } from 'react';
import React from 'react';
import {
  ReactFlowProvider,
  addEdge,
  Background,
  Controls,
  Connection,
  Edge,
  Node,
  OnConnect,
} from '@xyflow/react';
import { ReactFlow } from '@xyflow/react';

import '@xyflow/react/dist/style.css';


const DragDropCanvas: React.FC = () => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);

  const onConnect: OnConnect = useCallback(
    (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
    []
  );

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();
      const nodeType = event.dataTransfer.getData('application/reactflow');
      const position = {
        x: event.clientX - event.currentTarget.getBoundingClientRect().left,
        y: event.clientY - event.currentTarget.getBoundingClientRect().top,
      };

      const newNode: Node = {
        id: `${nodeType}-${nodes.length + 1}`,
        type: 'default',
        position,
        data: { label: `${nodeType}` },
      };

      setNodes((nds) => [...nds, newNode]);
    },
    [nodes]
  );

  const onDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  return (
    <ReactFlowProvider>
      <div className="w-full h-full bg-gray-100 border rounded-md" onDrop={onDrop} onDragOver={onDragOver}>
        <ReactFlow nodes={nodes} edges={edges} onConnect={onConnect}>
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
};

export default DragDropCanvas;
