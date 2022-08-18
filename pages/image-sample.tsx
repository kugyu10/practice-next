import { GetStaticProps, NextPage } from "next"
import Image from 'next/image'

type ImageSampleProps = {
  uota: string,
}

const ImageSample: NextPage<ImageSampleProps> = (props) => {
  const { uota } = props
  
  return (
    <div>
      <h1>画像表示の比較</h1>
      <p>imgタグで表示した場合：</p>
      <img src="https://kugyu10-post.s3.ap-northeast-1.amazonaws.com/uota510.webp" alt="uota" />
      <hr />
      <p>Imageコンポーネントで表示した場合：</p>
      <Image src={uota} width="510" height="510" placeholder='blur' blurDataURL={uota} alt="uota" />
      <p>Imageの場合事前に描画エリアが用意されます</p>
      <hr />
    </div>
  )
}

export const getStaticProps: GetStaticProps<ImageSampleProps> = async(context) => {
  const uota: string = 'https://' + process.env.S3DOMAIN + '/uota510.webp'

  return {
    props: {
      uota,
    },
  }

}

export default ImageSample