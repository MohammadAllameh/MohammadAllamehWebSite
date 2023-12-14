import React, { useEffect, useState } from 'react'
import { CheckIcon, ClockIcon, QuestionMarkCircleIcon, XMarkIcon as XMarkIconMini } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

import DOMPurify from 'dompurify';


import { motion, useScroll } from "framer-motion";





import imageMe from "public/icon/me.jpg"


interface ArticleType {
    titleen?: string,
    titlefa?: string,
    _id: string,
    bodyfa?: string,
    bodyen?: string,
    image: string,
    createdAt: string,
    updatedAt: string,
    writecomment: number,
    like: number
}


// (`${bodyField} ${titleField} createdAt updatedAt image writecomment like`)
interface ArticlesType {
    ArticleItem: ArticleType
}

const TemplateArticleItem = ({ ArticleItem }: ArticlesType) => {
    const { i18n } = useTranslation('footer')
    const { t } = useTranslation('article')
    const { scrollYProgress } = useScroll();
    let cleanHtml = ``;
    const [cleanHtmlList, setCleanHtmlList] = useState<string>('Hello Iran');
    // let htmltext = 'Hello Iran'
    // const [cleanHtml, setCleanHtml] = useState<string>('');
    useEffect(() => {
        const faBody = ArticleItem.bodyfa || '';
        const enBody = ArticleItem.bodyen || '';
        setCleanHtmlList(i18n.language === 'fa' ? DOMPurify.sanitize(faBody) : DOMPurify.sanitize(enBody))
        // htmltext = i18n.language === 'fa' ? DOMPurify.sanitize(faBody) : DOMPurify.sanitize(enBody);
        // setCleanHtmlList(cleanHtmlList)
        // console.log(htmltext)
        // htmltext = '<p>This is some HTML</p>';
        // cleanHtml = DOMPurify.sanitize(i18n.language == "fa" ? ArticleItem.bodyfa || '' : ArticleItem.bodyen || '') ;
        // setCleanHtml(cleanedHtmlList);
    },[])
    return (
        <>
        <div dir={`${i18n.dir(i18n.language)}`} className="max-w-screen-xl mx-auto">
            <motion.div
                className="progress-bar fixed h-1 right-0 left-0 bottom-0 "
                style={{ scaleX: scrollYProgress }}
            />

            <div className='pt-10 '/>
            <main className="">

                <div className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative" style={{ height: '24em' }}>
                    <div className="absolute left-0 bottom-0 w-full h-full z-10" style={{ backgroundImage: 'linear-gradient(180deg,transparent,rgba(0,0,0,.7))' }}></div>
                    <img src={ArticleItem.image} className="absolute left-0 top-0 w-full h-full z-0 object-cover" />
                    <div className="p-4 absolute bottom-0 rtl:right-0 ltr:left-0 z-20">
                        <a href="#"
                            className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">{cleanHtmlList}</a>
                        <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                            {i18n.language == "fa" ? ArticleItem.titlefa : ArticleItem.titleen}
                        </h2>
                        <div className="flex mt-3">
                            <Image src={imageMe} className="h-10 w-10 rounded-full mr-2 object-cover" alt={'Mohammad Allameh'} />
                            <div>
                                <p className="font-semibold text-gray-200 text-sm">mohammad allameh</p>{/* */}
                                <p className="font-semibold text-gray-400 text-xs">{ArticleItem.updatedAt}</p>
                            </div>
                        </div>
                    </div>
                    
                
                </div>
                <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
                    {/* <p className="pb-6">{i18n.language == "fa" ? ArticleItem.bodyfa : ArticleItem.bodyen}</p> */}
                    <div className="mt-4 text-red-500" dangerouslySetInnerHTML={{ __html: cleanHtmlList  }} />
                    {/* {cleanHtmlList} */}
                </div>
                
            </main>
            
        </div>
        </>
    )
}

export type {ArticleType};

export default TemplateArticleItem;