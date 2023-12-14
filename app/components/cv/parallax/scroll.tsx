import React, { useEffect, useLayoutEffect } from 'react'
import Image , {StaticImageData} from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// import {imagesList} from './listItem/scroll';
// import type {ImageTypeMe} from './listItem/scroll';

import { useTranslation } from 'next-i18next';



interface ImageTypeMe {
    id: number;
    alt: string;
    src: StaticImageData;
}

//import image 
import imageWordpress from 'public/icon/cv/parallx/devlop/webp/wordpress.webp'
import imageVscode from 'public/icon/cv/parallx/devlop/webp/vscode.webp'
import imageHtml from 'public/icon/cv/parallx/devlop/webp/html.webp'
import imageCss from 'public/icon/cv/parallx/devlop/webp/css.webp'
import imageTailwind from 'public/icon/cv/parallx/devlop/webp/tailwind.webp'
import imageSass from 'public/icon/cv/parallx/devlop/webp/sass.webp'
import imageJs from 'public/icon/cv/parallx/devlop/webp/js.webp'
import imageTs from 'public/icon/cv/parallx/devlop/webp/ts.webp'
import imageExpress from 'public/icon/cv/parallx/devlop/webp/express.webp'
import imageNodejs from 'public/icon/cv/parallx/devlop/webp/nodejs.webp'
import imageReact from 'public/icon/cv/parallx/devlop/webp/react.webp'
import imageNextjs from 'public/icon/cv/parallx/devlop/webp/nextjs.webp'
import imageMui from 'public/icon/cv/parallx/devlop/webp/mui.webp'
import imageGasp from 'public/icon/cv/parallx/devlop/webp/gasp.webp'
import imageCs from 'public/icon/cv/parallx/devlop/webp/cc.webp'
import imagePython from 'public/icon/cv/parallx/devlop/webp/python.webp'
import imageDart from 'public/icon/cv/parallx/devlop/webp/dart.webp'
import imageFlutter from 'public/icon/cv/parallx/devlop/webp/flutter.webp'
import imageMoongodb from 'public/icon/cv/parallx/devlop/webp/moongodb.webp'
import imageMysql from 'public/icon/cv/parallx/devlop/webp/mysql.webp'
import imageFigma from 'public/icon/cv/parallx/devlop/webp/figma.webp'
import imagePm from 'public/icon/cv/parallx/devlop/webp/pm.webp'

const imagesList: ImageTypeMe[] = [
    {
        id: 1,
        alt: 'icon wordpress',
        src: imageWordpress
    },
    {
        id: 2,
        alt: 'icon vs.code',
        src: imageVscode
    },
    {
        id: 3,
        alt: 'icon html',
        src: imageHtml
    },
    {
        id: 4,
        alt: 'icon css',
        src: imageCss
    },
    {
        id: 5,
        alt: 'icon tailwind',
        src: imageTailwind
    },
    {
        id: 6,
        alt: 'icon sass',
        src: imageSass
    },
    {
        id: 7,
        alt: 'icon js',
        src: imageJs
    },
    {
        id: 8,
        alt: 'icon ts',
        src: imageTs
    },
    {
        id: 9,
        alt: 'icon express',
        src: imageExpress
    },
    {
        id: 10,
        alt: 'icon node.js',
        src: imageNodejs
    },
    {
        id: 11,
        alt: 'icon react',
        src: imageReact
    },
    {
        id: 12,
        alt: 'icon nextjs',
        src: imageNextjs
    },
    {
        id: 13,
        alt: 'icon mui',
        src: imageMui
    },
    {
        id: 14,
        alt: 'icon gasp',
        src: imageGasp
    },
    {
        id: 15,
        alt: 'icon c#',
        src: imageCs
    },
    {
        id: 16,
        alt: 'icon python',
        src: imagePython
    },
    {
        id: 17,
        alt: 'icon dart',
        src: imageDart
    },
    {
        id: 18,
        alt: 'icon flutter',
        src: imageFlutter
    },
    {
        id: 19,
        alt: 'icon moongodb',
        src: imageMoongodb
    },
    {
        id: 20,
        alt: 'icon mysql',
        src: imageMysql
    },
    {
        id: 21,
        alt: 'icon figma',
        src: imageFigma
    },
    {
        id: 22,
        alt: 'icon prompt engineer',
        src: imagePm
    }
]

//import image 
import Animation from 'public/icon/cv/parallx/gif/animation.gif'


const DevlopScroll = () => {
    const {i18n } = useTranslation('footer')

    let isDesktop = false;
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        isDesktop = window.matchMedia('(min-width: 768px)').matches;
      }, [])
    const scrollAnimationImage = () => {
        imagesList.forEach(image => {
            const direction = i18n.dir(i18n.language);
            gsap.fromTo(`.image-${image.id}`, {
                opacity: isDesktop ? .65 : 0,
                xPercent: direction === 'rtl' ? 100 : -100,
            }, {
                opacity: 1,
                xPercent: isDesktop ? direction === 'rtl' ? -200 : 200 : 100,
                x: direction === 'rtl' ? -100 : 100,
                scrollTrigger: {
                    trigger: `.image-${image.id}`,
                    start: "top 90%",
                    end: "bottom 0%",
                    scrub: 1.8,
                },
            });
        }); 
    }
   
    useLayoutEffect(() => {
        scrollAnimationImage();
    }, [isDesktop]);
    
    
    return (
        <>
            <section>
                <div className="sticky md:top-[0] top-[12.5%] left-1/2 ">
                    <div className="w-full  flex justify-center items-center  my-24  ">
                        <Image src={Animation} alt="is gif" className="md:w-[32rem] md:h-[32rem] w-4/5 " />
                    </div>
                </div>
                <div className=" p-8 max-2xl:container   overflow-x-hidden relative " >
                    {imagesList.map((image : ImageTypeMe) => (
                        <div key={image.id} className={` m-4  image-${image.id}  overflow-x-hidden panel  `}>
                            <Image src={image.src} alt={image.alt} className="rounded object-cover  w-24 h-24" />
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}


export default DevlopScroll;

