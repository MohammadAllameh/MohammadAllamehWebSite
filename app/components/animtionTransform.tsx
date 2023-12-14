
import React from 'react';
import {motion} from 'framer-motion'


const AnimtionTransform = () => {
    return (
        <>
            {/* <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-purple-400'
            initial={{x:"100%",width : "100%"}}
            animate={{x:"0%",width : "0%"}}
            exit={{x :["0%","100%"],width : ["0%","100%"]}}
            transition={{duration:0.8 , ease : "easeInOut"}}
            />
            <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-header'
            initial={{x:"100%",width : "100%"}}
            animate={{x:"0%",width : "0%"}}
            transition={{delay:0.2,duration:0.8 , ease : "easeInOut"}}
            />
            <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-yellow-400'
            initial={{x:"100%",width : "100%"}}
            animate={{x:"0%",width : "0%"}}
            transition={{delay:0.4,duration:0.8 , ease : "easeInOut"}}
            /> */}
            <motion.div
                className='fixed top-0 bottom-0  right-full w-screen h-screen z-[70] bg-blue-400'
                initial={{ x: '100%', width: '100%' }}
                animate={{ x: '0%', width: '0%' }}
                transition={{ delay: 0.6, duration: 0.8, ease: 'easeInOut' }}
            />
            <motion.div
                className='fixed top-0 bottom-0 right-full w-screen h-screen z-[60] bg-header'
                initial={{ x: '100%', width: '100%' }}
                animate={{ x: '0%', width: '0%' }}
                transition={{ delay: 0.8, duration: 0.8, ease: 'easeInOut' }}
                exit={{x :["0%","100%"],width : ["0%","100%"]}}

            />
            <motion.div
                className='fixed top-0 bottom-0 right-full w-screen h-screen z-[50] bg-orange-400'
                initial={{ x: '100%', width: '100%' }}
                animate={{ x: '0%', width: '0%' }}
                transition={{ delay: 1, duration: 0.8, ease: 'easeInOut' }}
            />
        </>
    )
}

export default AnimtionTransform;