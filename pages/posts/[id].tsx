import { GetStaticPaths, NextPage } from "next"
import Head from "next/head"
import { Router, useRouter } from "next/router"


type PostProps = {
  id: string
}

const Post: NextPage<PostProps> = (props) => {
  const { id } = props
  const router = useRouter()


  //フォールバック向けのページ表示
  if (router.isFallback) {
    return <div>Fallback</div>
  }

  return (
    <div>
      <Head>
        <title>Create Next App #{id}</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <main>
        <p>このページはSSGによってビルド時に生成されたページです。</p>
        <p>{`/post/${id} に対応するページです`}</p>
      </main>
    </div>
  )
}

//getStaticPathsは生成したいページのPathパラメータの組み合わせを返す
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    {params: {id: '1',},},
    {params: {id: '2',},},
    {params: {id: '3',},},
    {params: {id: '4',},},
  ]

  //fallbackをfalseにすると、定義外のページは404ページになる
  return { paths, fallback: false }
}


//getStaticPathsに実行するgetStaticProps
export async function getStaticProps(context: any) {
  const id = Array.isArray(context.params['id'])
    ? context.params['id'][0]
    : context.params['id']

  return {
    props: { id,},
  }
}

export default Post