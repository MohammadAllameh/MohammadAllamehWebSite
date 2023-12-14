import React ,{ useEffect } from 'react';


import DevlopScroll from './scroll';
import DevlopProgress from './progress';

const MyParallaxComponent = () => {
  useEffect( () => {
    
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
    // console.clear();
  }, [])
  
    return (
      <main className='h-full w-full'>
        <DevlopScroll/>
        <DevlopProgress/>
      </main>
    )
};

export default MyParallaxComponent;
