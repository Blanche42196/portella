import React from 'react';

const MasterComponent = ({ children }) => {
  return (
    <div className='bg-stone-400 mx-auto max-w-7xl sm:px-6 lg:px-8 flex items-center flex-col min-h-screen'>
      {children}
    </div>
  );
};

export default MasterComponent;