import React from 'react'
import { CheckIcon, ClockIcon, QuestionMarkCircleIcon, XMarkIcon as XMarkIconMini } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'




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
    listArticle: ArticleType[]
}


const TemplateArticle = ({ listArticle }: ArticlesType) => {
    const { i18n } = useTranslation('footer')

    return (

        <>

            <div>
                <div>
                    <section className="flex flex-row flex-wrap mx-auto">
                        {listArticle.map((article) => {
                            return (<div className="transition-all duration-150 flex w-full px-4 py-6  ">
                                <div className="flex flex-col items-stretch min-h-full md:w-full pb-4 mb-6 transition-all duration-150 active-bg-color rounded-lg shadow-lg hover:shadow-2xl">
                                    <Link href={`/article/${article._id}`} className="hover:underline">
                                        <div className="  ">
                                            <img src={article.image} alt="Blog Cover" className="object-fill w-full rounded-lg rounded-b-none " />
                                        </div>
                                    </Link>
                                    <div className="flex items-center justify-between px-4 py-2 overflow-hidden">
                                        <div className="flex flex-row items-center">
                                            <div className="text-xs font-medium color-header flex flex-row items-center mr-2">
                                                <svg className="w-6 h-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                                </svg>
                                                <span>1.5k</span>
                                            </div>
                                            <div className="text-xs font-medium color-header flex flex-row items-center mr-2">
                                                <svg className="w-6 h-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                                                </svg>

                                                <span>{article.writecomment}</span>
                                            </div>
                                            <div className="text-xs font-medium color-header flex flex-row items-center">
                                                <svg className="w-6 h-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                                                </svg>

                                                <span>{article.like}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="border-gray-300" />
                                    <div className="flex flex-wrap items-center flex-1 px-4 py-1 text-center mx-auto">

                                        <Link href={`/article/${article._id}`} className="hover:underline">
                                            <h2 className="text-2xl font-bold tracking-normal text-gray-800">
                                                {i18n.language == "fa" ? article.titlefa : article.titleen}
                                            </h2>
                                        </Link>
                                    </div>
                                    <hr className="border-gray-300" />
                                    <p className="flex flex-row flex-wrap w-full px-4 py-2 overflow-hidden text-sm text-justify text-gray-700">
                                        {i18n.language == "fa" ? article.bodyfa : article.bodyen}
                                    </p>
                                    <hr className="border-gray-300" />
                                    <section className="px-4 py-2 mt-2">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center flex-1">
                                                <img className="object-cover h-10 rounded-full" src="https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg" alt="Avatar" />
                                                <span className='text-sm text-gray-700 mx-2 w-full'>{i18n.language == "fa" ? 'محمد علامه' : 'Mohammad Allameh'} </span>
                                                <div className="flex flex-col mx-2 items-end w-full">
                                                    <span className="mx-1 text-xs text-gray-600">{article.createdAt}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                            )
                        })}
                    </section>
                </div>
                <div>

                </div>
            </div>

        </>
    )
}

export default TemplateArticle;