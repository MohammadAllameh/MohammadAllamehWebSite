import { useRouter } from "next/router";
import Link from "next/link";

import React , {useEffect} from "react";

import { useTranslation } from "react-i18next";


import type { GetStaticProps, InferGetStaticPropsType } from 'next'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Layout from "app/components/layout";
import Image, { StaticImageData } from "next/image";



type Props = {
  // Add customprops  here
}


import MyParallaxComponent from "app/components/cv/parallax/cvScroll";
import CvFunMe from "app/components/cv/cv/cv";
import DucumentMe from "app/components/cv/ScientificDocuments";
import AnimtionTransform from "app/components/animtionTransform";

const CvPage = () => {

  const router = useRouter()
  const { t, i18n } = useTranslation('cv')
  
  return (

    <>
      <Layout>
        
        <CvFunMe/>
        <DucumentMe/>
        <MyParallaxComponent/>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'cv',
      'footer',
    ])),
  },
})


export default CvPage;