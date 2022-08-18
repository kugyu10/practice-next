import { GetStaticProps, NextPage } from "next";
import Head from 'next/head'

const EnvSample: NextPage = (props) => {
  console.log('process.env.TEST=', process.env.TEST)
  console.log('process.env.NEXT_PUBLIC_TEST=', process.env.NEXT_PUBLIC_TEST)

  return (
    <div>
      <Head>
        <title>Env Test</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <main>
        <p>process.env.TEST:{process.env.TEST}</p>{/* Hydration failed errorになる */}
        <p>process.env.NEXT_PUBLIC_TEST:{process.env.NEXT_PUBLIC_TEST}</p>
      </main>
    </div>
  )
}

const getStaticProps: GetStaticProps = async (context) => {
  console.log('SSG:process.env.TEST=', process.env.TEST)
  console.log('SSG:process.env.NEXT_PUBLIC_TEST=', process.env.NEXT_PUBLIC_TEST) 

  return {
    props: {},
  }
}

export default EnvSample