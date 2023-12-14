import  { StaticImageData } from 'next/image';




//import image 
import imageWordpress from 'public/icon/cv/parallx//devlop/webp/wordpress.webp'
import imageVscode from 'public/icon/cv/parallx//devlop/webp/vscode.webp'
import imageHtml from 'public/icon/cv/parallx//devlop/webp/html.webp'
import imageCss from 'public/icon/cv/parallx//devlop/webp/css.webp'
import imageTailwind from 'public/icon/cv/parallx//devlop/webp/tailwind.webp'
import imageSass from 'public/icon/cv/parallx//devlop/webp/sass.webp'
import imageJs from 'public/icon/cv/parallx//devlop/webp/js.webp'
import imageTs from 'public/icon/cv/parallx//devlop/webp/ts.webp'
import imageExpress from 'public/icon/cv/parallx//devlop/webp/express.webp'
import imageNodejs from 'public/icon/cv/parallx//devlop/webp/nodejs.webp'
import imageReact from 'public/icon/cv/parallx//devlop/webp/react.webp'
import imageNextjs from 'public/icon/cv/parallx//devlop/webp/nextjs.webp'
import imageMui from 'public/icon/cv/parallx//devlop/webp/mui.webp'
import imageGasp from 'public/icon/cv/parallx//devlop/webp/gasp.webp'
import imageCs from 'public/icon/cv/parallx//devlop/webp/cc.webp'
import imagePython from 'public/icon/cv/parallx//devlop/webp/python.webp'
import imageDart from 'public/icon/cv/parallx//devlop/webp/dart.webp'
import imageFlutter from 'public/icon/cv/parallx//devlop/webp/flutter.webp'
import imageMoongodb from 'public/icon/cv/parallx//devlop/webp/moongodb.webp'
import imageMysql from 'public/icon/cv/parallx//devlop/webp/mysql.webp'
import imageFigma from 'public/icon/cv/parallx//devlop/webp/figma.webp'
import imagePm from 'public/icon/cv/parallx//devlop/webp/pm.webp'


interface ImageTypeMe {
    id: number;
    alt: string;
    src: StaticImageData;
}

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

export {imagesList};
export type {ImageTypeMe};