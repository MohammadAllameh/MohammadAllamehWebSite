import React, { useEffect, useState } from 'react'
import { CheckIcon, ClockIcon, QuestionMarkCircleIcon, XMarkIcon as XMarkIconMini } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'



// import sanitizeHtml from 'sanitize-html';

// import { sanitize, isSupported } from "isomorphic-dompurify";

import DOMPurify from 'dompurify';


export interface CommentType {
    name : string,
    id : string,
    body : string,
    title : string,
    createdAt: string,
    updatedAt: string,
    like: number,
    post : number
}


// (`${bodyField} ${titleField} createdAt updatedAt image writecomment like`)

interface CommentsType {
    listComment : CommentType[]
}


const TemplateComment  = ({listComment} : CommentsType)  => {

    const {  i18n } = useTranslation('footer')
    const [cleanHtmlList, setCleanHtmlList] = useState<string[]>([]);

    useEffect(() => {
        // cleanHtml = DOMPurify.sanitize(listComment[1].body);
        // console.log(cleanHtml)
        const cleanedHtmlList = listComment.map((comment) => {
            return DOMPurify.sanitize(comment.body);
          });
          setCleanHtmlList(cleanedHtmlList);

    },[])
    return (
        <div className="" dir={`${i18n.dir(i18n.language)}`}>
            {/* <div className='bg-white text-red-600 flex justify-center items-center'>
            <div dangerouslySetInnerHTML={{  __html: cleanHtml }} />
            </div> */}
            {listComment.map((comment,index) => {
                // const cleanHtml = DOMPurify.sanitize(comment.body) || `<p>${comment.body}</p>`;
                // const cleanHtml = sanitizeHtml(comment.body, {
                //     allowedTags: [],
                //     allowedAttributes: {},
                // });
                return (
                    <div className="flex justify-center relative top-1/3">
                        <div className="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
                            <div className="relative flex gap-4">
                                <img src="https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/charlie-chaplin-icon.png" className="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20" alt="" loading="lazy"/>
                                <div className="flex flex-col w-full">
                                    <div className="flex flex-row justify-between">
                                        <p className="relative text-xl whitespace-nowrap truncate overflow-hidden">{comment.name}</p>
                                        <a className="text-gray-500 text-xl" href="#"><i className="fa-solid fa-trash"></i></a>
                                    </div>
                                    <p className="text-gray-400 text-sm">{comment.updatedAt}</p>
                                </div>
                            </div>
                            <h2 className='text-gray-800 text-base font-semibold'>{comment.title}</h2>
                            <p className="-mt-4 text-gray-500" dangerouslySetInnerHTML={{ __html: cleanHtmlList[index] || '' }} />
                            {/* <p className="-mt-4 text-gray-500">{comment.body}</p> */}
                            {/* <div dangerouslySetInnerHTML={{ __html: cleanHtml }} /> */}
                            {/* <p className="-mt-4 text-gray-500" dangerouslySetInnerHTML={{ __html: cleanHtml }} /> */}
                            {/* <div dangerouslySetInnerHTML={{  __html: cleanHtml }} /> */}
                        </div>
                    </div>
                )
            })}
            
        </div>
    
    )
}
export default TemplateComment;
