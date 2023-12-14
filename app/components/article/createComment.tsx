import { useFormik } from "formik";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';


import {
    TelegramShareButton,
    TelegramIcon,
  } from 'next-share'

// import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import * as yup from 'yup'
import { useToast } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import dynamic from 'next/dynamic'
import { CreateCommentForm } from 'app/lib/api';
import LoadingBox from "../loadingBox";
import { ArticleType } from "./templatitem";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false, loading: () => <p><LoadingBox/></p> });

interface CreateCommentType {
    postid : number,
    ArticleItem : ArticleType
}


const CreateComment = ({ postid,ArticleItem }: any) => {
    const router = useRouter()
    const { t, i18n } = useTranslation('connection')
    const [spiner, setspiner] = useState(false);
    const toast = useToast();
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            title: "",
            body: "", // مقدار متنی را در اینجا اضافه کردیم
        },
        validationSchema: yup.object().shape({
            name: yup.string().required(`${t('fieldRequired')}`).min(3, `${t('minRequired')}`),
            email: yup.string().required(`${t('fieldRequired')}`).email(`${t('formatEmail')}`),
            title: yup.string().required(`${t('fieldRequired')}`).min(3, `${t('minRequired')}`),
            body: yup.string().required(`${t('fieldRequired')}`).min(3, `${t('minRequired')}`),
        }),
        onSubmit: async (data: any) => {
            setspiner(true);
            console.log('submit oig', data);
            try {
                await CreateCommentForm(data, postid);
                toast({
                    title: `${t('successMessage')}`,
                    status: "success",
                    duration: 2000,
                    position: `${i18n.dir(i18n.language) ? 'top-right' : 'top-left'}`,
                });
                setspiner(false);
                router.reload();
            } catch (error) {
                toast({
                    title: `${t(`errorMessage \n ${error}`)}`,
                    status: "error",
                    duration: 2000,
                    position: `${i18n.dir(i18n.language) ? 'top-right' : 'top-left'}`,
                });

                setspiner(false);

            }

        },
    });
    const [commentitem, setComment] = useState<boolean>(false)

    return (
        <>

            <div className="mx-auto flex justify-center w-full items-center">
                <div className="flex  ">
                    <div>
                        <div>
                            <TelegramShareButton
                                //   url={`https://localhost:3000/${i18n.language == "fa"  ? "fa" : "en"}/article/${ArticleItem._id}`}
                                url='https://rw1387.ir'
                                title={i18n.language == "fa" ? ArticleItem.titlefa || '' : ArticleItem.titleen || ''}
                            >
                                <TelegramIcon size={32} round />
                            </TelegramShareButton>
                        </div>
                    </div>
                    {
                        commentitem ? <></> :

                            <div>
                                <button className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto" onClick={() => setComment(!commentitem)}> اضافه کردن کامنت</button>
                            </div>
                    }
                </div>

                {/* <Link
                    href={`./${postid}?create-comment`}
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                    as={`./${postid}?create-comment`}
                    >
                    اضافه کردن محصول
                </Link> */}
            </div>
            {
                commentitem ? <>
                    <div className="flex justify-center items-center m-8">
                        <form onSubmit={formik.handleSubmit}>
                            <div className="my-4">
                                <input type="text" name="name" placeholder="نام" className="text-gray-800 border-gray-300 rounded-md"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.name}
                                />
                            </div>
                            {formik.touched.name && formik.errors.name ? (<div className="text-red-500">{formik.errors.name}</div>) : null}
                            <div className="my-4">
                                <input type="email" name="email" placeholder="ایمیل" className="text-gray-800 border-gray-300 rounded-md"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email} />
                            </div>
                            {formik.touched.email && formik.errors.email ? (<div className="text-red-500">{formik.errors.email}</div>) : null}
                            <div className="my-4">
                                <input type="text" name="title" placeholder="وب سایت" className="text-gray-800 border-gray-300 rounded-md"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.title} />
                            </div>
                            {formik.touched.title && formik.errors.title ? (<div className="text-red-500 bgr">{formik.errors.title}</div>) : null}
                            <div className="my-4">
                                {/* <textarea name="message" placeholder="پیام" className="text-gray-800 border-gray-300 rounded-md"></textarea> */}
                                <div className="my-4">
                                    <ReactQuill
                                        className="border-4 border-green-400 p-4 ring-4 ring-blue-700 outline-4	outline-red-700"
                                        theme="snow"
                                        value={formik.values.body}
                                        onChange={(value) => formik.setFieldValue("body", value)}
                                        // className={`text-[${color}]`}
                                        modules={{

                                            toolbar: [
                                                [{ header: [1, 2, 3, 4, 5, 6, false] }], // ابزارهای سربرگ‌ها
                                                ['bold', 'italic', 'underline', 'strike'], // ابزارهای متنی
                                                [
                                                    { color: [], background: [] }, // ابزارهای انتخاب رنگ متن به صورت پیش‌فرض
                                                    // { 'custom-color-picker': undefined }, // ابزار انتخاب رنگ شخصی‌سازی‌شده
                                                ],
                                                [{ align: [] }], // ابزارهای تنظیم تراز متن
                                                [{ list: 'ordered' }, { list: 'bullet' }], // ابزارهای لیست‌ها
                                                ['link'], // ابزار ایجاد لینک
                                                ['image'], // ابزار افزودن تصویر
                                            ],
                                        }}

                                    />
                                </div>
                            </div>
                            <div className='flex items-center justify-center hover:bg-none active-bg-color  rounded-md color-html w-20 my-4'>
                                {/* <button  className=" inline-flex items-center justify-center rounded-md border border-transparent  px-4 py-2 text-sm font-medium  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">ارسال</button> */}
                                <button disabled={spiner} type="submit" className={`${spiner ? 'opacity-70' : ''}  btn-style-me btn-shine `}> {/*flex items-center justify-center  px-4 py-3 text-center text-sm font-semibold   cursor-pointer uppercase transition duration-700 ease-in-out   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 active:scale-95s */}
                                    <span className={`span-btn flex justify-center items-center  ${spiner ? 'px-4' : ''}`}>
                                        {!spiner ? t('sendBtn') : ''}
                                        {spiner ? <LoadingBox /> : ''}
                                    </span>

                                </button>
                            </div>

                        </form>

                    </div>
                </> : <></>
            }

        </>
    )
}


export default CreateComment;