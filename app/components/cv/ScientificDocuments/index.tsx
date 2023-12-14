


import React from 'react'
import Image from 'next/image';


import { ducumentList } from './listIDoucments'
import type { ducumentListTypeMe } from './listIDoucments'
import Link from 'next/link';
import { useTranslation } from 'next-i18next';


const DucumentMe = () => {
    const { t, i18n } = useTranslation('cv')


    return (
        <>
            <main
                className="mx-auto max-w-2xl py-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
                aria-labelledby="order-history-heading"
            >
                <div className="max-w-xl">
                    <h1 id="order-history-heading" className="text-3xl font-bold tracking-tight text-gray-900">
                        <Link href={`#${t("DocumentsTitle")}`}>
                            # {t("DocumentsTitle")}
                        </Link>
                    </h1>
                    <p className="mt-2 text-sm text-gray-500">
                        {t("DocumentsDescription")}
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
                    {ducumentList.map((cv: ducumentListTypeMe) => (
                        <div key={cv.id} className="group relative">
                            <Link href={cv.href} target='_blank'>
                                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
                                    <Image src={cv.imageSrc} alt={cv.imageAlt} className="object-cover object-center" />
                                </div>
                            </Link>
                            <h2 className="mt-4 text-sm text-gray-700 text-center">
                                <Link href={cv.href}>{t("DocumentsClick")}</Link>
                            </h2>
                        </div>
                    ))}
                </div>
            </main>
        </>
    )
}


export default DucumentMe;

