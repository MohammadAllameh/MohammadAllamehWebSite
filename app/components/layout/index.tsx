'use client';

import { ReactNode, useEffect, useState } from 'react';

import MySwitchMode from '../theme-change'
import { useTranslation } from 'next-i18next';

import SidBar from './sidbar';
import MySwitcLng from '../mySwitcLng';
import AnimtionTransform from '../animtionTransform';


interface Props {
    children: ReactNode,
}

const Layout = ({ children, }: Props) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsMobile(window.matchMedia('(max-width: 1024px)').matches);
            let screenFun = () => {
                setIsMobile(window.matchMedia('(max-width: 1024px)').matches);
            }
            window.addEventListener("resize", screenFun);
            return () => window.removeEventListener("resize", screenFun);
        }
    }, []);
    const { i18n } = useTranslation('footer');
    return (
        <>
              <AnimtionTransform/>

            <div dir={`${i18n.dir(i18n.language)}`} className=" layout-scroll-dir relative flex  font-Vazir ">
                {/* <SidBar  /> */}
                
                <div className="w-full h-full ">
                    {/* Header */}
                    <div className='lg:relative'>
                        <div className=' w-full z-50'>
                            <header className="h-16 w-full  flex items-center relative top-0 max-lg:rtl:justify-start max-lg:ltr:justify-start lg:justify-end px-5  bg-header lg:ltr:pl-20 lg:rtl:pr-20 " >{/* bg-gray-800 dark:bg-gray2  */}
                                
                                    <SidBar key={Date.now()} />

                                <MySwitchMode />
                                <MySwitcLng />
                            </header>
                        </div>
                        {/* Main */}
                        <main className="max-w-full h-full ">
                            <div className="h-full w-full   bg-html ">
                                {children}
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout;