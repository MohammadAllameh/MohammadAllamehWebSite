
import { StaticImageData } from "next/image";


// import image
// import book from '../../public/icon/cv/book.png';
import aiolern from "public/icon/cv/ScientificDocuments/aiolern.jpg";
import cs50x from "public/icon/cv/ScientificDocuments/aiolern.jpg";
import cs50p from "public/icon/cv/ScientificDocuments/aiolern.jpg";
import ai50 from "public/icon/cv/ScientificDocuments/aiolern.jpg";



interface ducumentListTypeMe {
    id: number,
    title : string,
    href: string,
    imageSrc: StaticImageData,
    imageAlt: string,
}


const ducumentList: ducumentListTypeMe[] = [
    {
        id: 1,
        title : 'aiolern ace',
        href: '#',
        imageSrc: aiolern,
        imageAlt: 'White canvas tote bag with black drawstring liner and white handle.',
    },
    {
        id: 2,
        title : 'degree from Harvard University',
        href: '#',
        imageSrc: cs50x,
        imageAlt: 'Harvard University cs50x course certificate',
    },
    {
        id: 3,
        title : 'degree from Harvard University',
        href: '#',
        imageSrc: cs50p,
        imageAlt: "Harvard University cs50p course certificate",
    },
    {
        id: 4,
        title : 'degree from Harvard University',
        href: '#',
        imageSrc: ai50,
        imageAlt: "Harvard University ai50 course certificate",
    },
]


export type {ducumentListTypeMe};
export {ducumentList}