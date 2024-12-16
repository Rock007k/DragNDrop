import React from 'react';
import LeftComponent from './components/LeftComponent';
import RightComponent from './components/RightComponent';
import DragDropCanvas from './components/DragDropCanvas';
import NodeList from './components/NodeList';

const Home: React.FC = () => {

  return (
    <div className="flex h-screen">
      <div className="flex-[8]">
   
        <DragDropCanvas />
      </div>
     
      <div className="flex-[2]">
      
        <NodeList/>
      </div>
    </div>
  );
};

export default Home;
