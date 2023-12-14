import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";


import type { GetStaticProps, GetServerSideProps, InferGetStaticPropsType } from 'next'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Layout from "app/components/layout";
import TemplateArticleItem from "app/components/article/templatitem";
import TemplateComment from "app/components/article/templatecomment";
import CreateComment from "app/components/article/createComment";
import EmptyList from "app/components/shared/emptyItem";


type Props = {
  // Add custom props here
}

const ArticlePage = ({ article,comment, locale } : any) => {

  const router = useRouter()
  const { t ,i18n} = useTranslation('article')
  // console.log(article, locale)
  // console.log(article,comment)
  return (
    <>
      <Layout>
        <TemplateArticleItem ArticleItem={article} />
        <div dir={`${i18n.dir(i18n.language)}`} >
          <CreateComment   postid={article._id} ArticleItem={article}  />
        </div>
        <div className="flex justify-center items-center w-full my-4 ">
          {
            comment.length == 0  ? (<div className="lg:w-[48rem]" ><EmptyList title='' description='محصول را نمی توان پیدا کرد' /></div>) : (<TemplateComment listComment={comment}/>)
          }
          
        </div>
      </Layout>

    </>
  )
}

// export const getServerSideProps : GetServerSideProps<Props> = async ({
//     locale,params
//   }) => ({
//     props: {
//       ...(await serverSideTranslations(locale ?? 'en', [
//         'article',
//         'footer',
//       ])),
//     },
//   })



// export const getServerSideProps: GetServerSideProps<Props> = async ({params,locale } : any)  =>  {
export const getServerSideProps = async (context: any) => {
  const { locale,params } = context;
  let article ;
  let comment ;
  // let resArticle = await axios.get(`http://localhost:8070/api/v1/post/${params.id}?lang=${locale == "fa" ? "fa" : "en"}`)
  // let article = await resArticle.data
  // let resComment = await axios.get(`http://localhost:8070/api/v1/post/${params.id}/comment`)
  // let comment = await resComment.data
  try {
    let articleResponse = await fetch(`http://localhost:8070/api/v1/post/${params.id}?lang=${locale == "fa" ? "fa" : "en"}`);
    if (articleResponse.ok) {
      article = await articleResponse.json();
    } else {
      console.error("is request error get Article", articleResponse.status);
    }
    let commentResponse = await fetch(`http://localhost:8070/api/v1/post/${params.id}/comment`);
    if (commentResponse.ok) {
      comment = await commentResponse.json();
    } else {
      console.error("is request error get Comment", commentResponse.status);
    }
  } catch (error) {
    console.error("is error request ", error);
  }
  return {
    props: {
      article,comment,
      ...(await serverSideTranslations(locale ?? 'en', [
        'article',
        'footer',
        'connection'
      ])),
    }
  }
}




export default ArticlePage;