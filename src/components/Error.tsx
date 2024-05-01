import React from 'react';

const Error = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className='bg-red-600 my-4 text-white font-bold text-center p-3 uppercase text-sm '>
      {children}
    </p>
  );
};

export default Error;
