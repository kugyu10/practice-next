import { GetStaticPaths, NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

type ISRProps = {
  message: string
}

const ISR: NextPage<ISRProps> = (props) => {
  const {message} = props
  const router = useRouter()
  
  if(router.isFallback){
    return <div>Fallback</div>
  }

  return (
    <div>
      <Head>
        <title>Create Next App SSR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>このページはISRによってビルドに生成されたページです。</p>
        <p>{message}</p>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps<ISRProps> = async(context) => {
  const timestamp = new Date().toLocaleString()
  const message = `${timestamp}にこのページのgetStaticPropsが実行されました。`

  return {
    props: {
      message,
    },
    revalidate: 60, //ページの有効期限（秒）
  }
}

export default ISR