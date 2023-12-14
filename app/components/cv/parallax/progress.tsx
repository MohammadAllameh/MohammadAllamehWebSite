import React, { useState, useLayoutEffect, useRef,useEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

// import {listPeogpress} from './listItem/progress'
// import type {ProgressType , ProgressItem} from './listItem/progress'

interface ProgressItem {
    id : number,
    status : number,
    name : string,
}

interface ProgressType {
    id : number,
    name : string,
    group : ProgressItem[]
}

const listPeogpress: ProgressType[] = [
    {
        id : 1,
        name : "Designing web",
        group : [
            {
                id : 1,
                status : 88,
                name : "Html"
            },
            {
                id : 2,
                status : 83,
                name : "Css"
            },
            {
                id : 3,
                status : 76,
                name : "Sass"
            },
            {
                id : 4,
                status : 97,
                name : "Tailwind css"
            },
            
        ]
    },
    {
        id : 2,
        name : "JavaScript Backend",
        group : [
            {
                id : 5,
                status : 87,
                name : "JavaScript"
            },
            {
                id : 6,
                status : 83,
                name : "TypeScript"
            },
            {
                id : 7,
                status : 77,
                name : "NodeJs"
            },
            {
                id : 8,
                status : 68,
                name : "ExpressJs"
            },
        ]
    },
    {
        id : 2,
        name : "JavaScript Backend",
        group : [
            {
                id : 9,
                status : 85,
                name : "React"
            },
            {
                id : 10,
                status : 90,
                name : "Nextjs"
            },
            {
                id : 11,
                status : 79,
                name : "Mui"
            },
            {
                id : 12,
                status : 82,
                name : "gasp"
            },
            
        ]
    },
    {
        id : 4,
        name : "language programming",
        group : [
            {
                id : 13,
                status : 53,
                name : "C#"
            },
            {
                id : 14,
                status : 76,
                name : "Python"
            },
            {
                id : 15,
                status : 91,
                name : "Dart"
            },
            {
                id : 16,
                status : 84,
                name : "Flutter"
            },
            
        ]
    },{
        id : 5,
        name : "General skills",
        group : [
            {
                id : 17,
                status : 77,
                name : "WordPress"
            },
            {
                id : 18,
                status : 93,
                name : "Vs.code"
            },
            {
                id : 19,
                status : 78,
                name : "Figma"
            },
            {
                id : 20,
                status : 84,
                name : "Prompt Engineer"
            },
            
        ]
    },
    {
        id : 6,
        name : "Databases and StateManger",
        group : [
            {
                id : 21,
                status : 70,
                name : "Moongodb NoSql"
            },
            {
                id : 22,
                status : 65,
                name : "MySql"
            },
            {
                id : 23,
                status : 80,
                name : "Redux"
            },
        ]
    }
] 

const DevlopProgress = () => {
    gsap.registerPlugin(ScrollTrigger);

    const scrollAnimation = () => {
        
        listPeogpress.forEach((progressList : ProgressType) => {
            progressList.group.forEach((progressItem :ProgressItem ) => {
                gsap.fromTo(`.progressItem-${progressItem.id}`, {
                    opacity: 0,
                    x : 0,
                    width : 0
                }, {
                    width : progressItem.status + '%',
                    opacity: 1,
                    scrollTrigger: {
                        trigger: `.progressItem-${progressItem.id}`,
                        start: "top 80%",
                        end: "bottom 20%",
                        scrub: true,
                    },
                });
                gsap.fromTo(`.progressItemCounter-${progressItem.id}`,{
                    opacity: 0,
                    y : 50,
                    repeatRefresh : false
                },{
                    y : 0,
                    opacity : 1,
                    duration: 2, 
                    start: 0,
                    end: progressItem.status,
                    scrollTrigger: {
                        trigger: `.progressItemCounter-${progressItem.id}`,
                        start: "top 80%",
                        end: "bottom 20%",
                        scrub: true,
                    },
                })
            })
            gsap.fromTo(`.progress-${progressList.id}`, {
                opacity: 0,
                x : 0,
                completed : 0,
            }, {
                opacity: 1,
                scrollTrigger: {
                    trigger: `.progress-${progressList.id}`,
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: true,
                    toggleActions : "restart pause reverse pause",
                    
                }, 

            });
        });
    }

    useLayoutEffect(() => {
        
        scrollAnimation();
        
    }, []);



    return (
        <>
        {/* 277 height  365 width */}
        <main className='container lg:girds lg:grid-cols-3 mx-auto  flex gap-4 justify-center content-center items-center  flex-wrap '>
            <>
                {
                    listPeogpress.map((itemsGroup : ProgressType) => {
                        return (
                            <>
                            <div key={itemsGroup.id} className={`shadow-lg border rounded-md p-4  con-progress min-w-min progress-${itemsGroup.id}`}>
                                {itemsGroup.group.map((item :ProgressItem) => {
                                    return (
                                        <>
                                            <div className=" flex flex-col items-center " key={item.id}>
                                                <motion.div className="" initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 1 }}>
                                                    <CountUp enableScrollSpy={true}
                                                        className={`progressItemCounter-${item.id} text-progress`} start={0} end={item?.status} prefix={item.name + ' '}  duration={5} suffix=" %"
                                                        />
                                                </motion.div >
                                                <div  className="  w-[300px] h-[5px] bg-progress-no-done  m-4 rounded-full flex items-start ">
                                                    <motion.div   initial={{width : 0 , opacity : 0}} animate={{width:`${item.status}%`, opacity : 1  }} transition={{ duration: 3 }} className={` bg-progress-done h-full rounded-full  progressItem-${item.id}`} style={{width:`${item.status}%`}}/>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                                
                            </div>

                            </>
                        )
                    })
                }
            
            </>
        </main>

        <div  className='h-80'/>
        </>
    )
}

export default DevlopProgress;