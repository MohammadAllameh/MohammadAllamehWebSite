
import { StaticImageData } from "next/image";


// import image
// import book from '../../public/icon/cv/book.png';
import book from "public/icon/cv/cv/book.png";
import bm from 'public/icon/cv/cv/bm.png';
import rw1387 from 'public/icon/cv/cv/rw1387.png';


interface CvListTypeMe {
    id: number,
    href: string,
    imageSrc: StaticImageData,
    imageAlt: string
}


const cvList: CvListTypeMe[] = [
    {
        id: 1,
        href: '#',
        imageSrc: book,
        imageAlt: 'White canvas tote bag with black drawstring liner and white handle.',

    },
    {
        id: 2,
        href: '#',
        imageSrc: bm,
        imageAlt: 'Light grey canvas backpack with black handle, zipper, and edge details.',
    },
    {
        id: 3,
        href: '#',
        imageSrc: rw1387,
        imageAlt: 'Orange canvas cylindrical bag with drawstring top, front zipper pouch, and black shoulder strap.',

    },
]


export type {CvListTypeMe};
export {cvList}