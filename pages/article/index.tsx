import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";



import type { GetStaticProps, GetServerSideProps } from 'next'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Layout from "app/components/layout";
import { useEffect } from "react";
import TemplateArticle from "app/components/article/templatelist";
import NavbarArticle from "app/components/article/navbarArticle";


interface Props {
  // params : number,
  // locale : string
    // Add custom props here
}


const ArticlesPage = ({ data,dataposttop,datacommenttop, locale  } : any) => {
    const router = useRouter()
    // useEffect(() => {
    //   console.log(data[1].id)
    // },[])
    const { t } = useTranslation('article')
    return (
        <>
        <Layout>

          <div className="overflow-x-hidden">
            <div className="container lg:grid lg:grid-cols-3 lg:gap-4 lg:mx-20 max-lg:m-auto ">
              <div className="lg:col-span-2">
                <TemplateArticle listArticle={data}/>
              </div>
              <div className="lg:relative">
                <NavbarArticle listPostsTop={dataposttop} listCommentNow={datacommenttop} />
              </div>
            </div>
          </div>
        </Layout>
        
        </>
    )
}

// export const getServerSideProps: GetServerSideProps<Props> = async ({params,locale } )  =>  {
  export const getServerSideProps = async (context: any) => {
  const { locale } = context;
  console.clear()

  // console.log(context,locale,"hello")
  // let res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
  // let res = await axios.get(`localhost:8070/api/v1/post?lang=${locale}`);
  // let res = await axios.get(`http://localhost:8070/api/v1/post?lang=${locale == "fa" ? "fa" : "en"}`);

  // let data = await res.data
  let res = await fetch(`http://localhost:8070/api/v1/post?lang=${locale == "fa" ? "fa" : "en"}`);
  let resTop = await fetch(`http://localhost:8070/api/v1/post/posttop?lang=${locale == "fa" ? "fa" : "en"}`);
  let commentTop = await fetch('http://localhost:8070/api/v1/post/comment/commenttop');
  
  let data;
  let dataposttop;
  let datacommenttop;

  if (res.status == 200 ) {
    data = await res.json();
  } else {
    console.error("is fetch error", res.status);
  }
  
  if (resTop.status == 200 ) {
    console.log(resTop)
    dataposttop = await resTop.json();
  } else {
    console.error("is fetch error", res.status);
  }
  if (commentTop.status == 200) {
    datacommenttop = await commentTop.json();
  } else {
    console.error("is fetch error", res.status);
  }
  

  return {
    props: {
      data,dataposttop,datacommenttop,
      ...(await serverSideTranslations(locale ?? 'en', [
        'article',
        'footer',
      ])),
    }
  }
}

export default ArticlesPage;