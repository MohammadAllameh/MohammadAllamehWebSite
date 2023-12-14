import { useTranslation } from "next-i18next";
import Link from "next/link";
import React from "react";

interface listNavType {
    name : string,
    title : string
}

interface listPostTop {
    titleen?: string,
    titlefa?: string,
    _id: string,
    createdAt: string,
    writecomment: number,
    like: number
}

interface listNavsType {
    listCommentNow : listNavType[],
    listPostsTop : listPostTop[]
}

const NavbarArticle = ({listCommentNow,listPostsTop} : listNavsType) => {
    const { t ,i18n} = useTranslation('footer')
    return (
        <>
            {/* <div className="lg:col-span-1 static m-12 mx-auto"> */}
            <div className=" lg:sticky   m-12   z-20 top-[3.8125rem] bottom-0 right-[max(0px,calc(20%-18rem))]  py-10   ">
                    <div className="bg-header mr-4 p-4 shadow rounded">
                        <div className="text-center border-b py-4 text-base color-html">
                            اخرین کامنت ها
                        </div>
                        <ul className="list-reset text-xs pt-4">
                            {listCommentNow.map((nav) => {
                                return (
                                    <li className="flex items-center p-1 flex-row ">
                                        <p className="color-html mx-2">{nav.name + ' :'}</p><p className="active-color ">{nav.title}</p>
                                    </li>
                                )
                            })}
                        </ul>
                        <div className="text-center border-b py-4 text-base color-html">
                            پست های با بیشترین لایک
                        </div>
                        <ul className="list-reset text-xs pt-4">
                            {listPostsTop.map((post) => {
                                return (
                                    <>
                                        <Link href={`/article/${post._id}`}>
                                            <li className="flex items-center p-1">
                                                <p className="color-html mx-2">{i18n.language == "fa" ? post.titlefa + ' :' : post.titleen + ' :'}</p><p className="active-color ">is like {post.like}</p>
                                            </li>
                                        </Link>
                                    </>
                                )
                            })}
                        </ul>
                        
                    </div>
                    
                    
            </div>
        </>
    )
}

export default NavbarArticle;