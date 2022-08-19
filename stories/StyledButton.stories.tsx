import { ComponentMeta, ComponentStory } from '@storybook/react'
import { StyledButton } from '../components/StyledButton'
import { action } from '@storybook/addon-actions'
import { useState } from 'react'
import React from 'react'
import MDXDocument from './StyledButton.mdx' //なぜかエラー解決できず、でもStoryBookは動く？
import { linkTo } from '@storybook/addon-links'


// ファイル内のstoryの設定
export default {
  title: 'StyledButton',
  component: StyledButton,

  //onClickが呼ばれた時にclickedというアクション
  argTypes: {
    //propsに渡すvariantをStorybookから変更できるように追加
    variant: {
      control: {type: 'radio' },
      options: ['primary','success','transparent'],
    },
    //propsにわたすchildrenをStorybookから変更できるように追加
    children: {
      control: { type: 'text'}
    },
  },

  //ドキュメント用のコンポーネントを指定
  parameters: {
    docs: {
      page: MDXDocument,
    },
  },
} as ComponentMeta<typeof StyledButton>


//テンプレートコンポーネントを実装
const Template: ComponentStory<typeof StyledButton> = (args) => <StyledButton { ...args} />

//bindを呼び出しStoryを作成
export const TemplateTest = Template.bind({})

//デフォルトのpropsを設定する
TemplateTest.args = {
  variant: 'primary',
  children: 'Primary',
}

//incrementという名前でactionを出力するための関数をつくる
const incrementAction = action('increment')

export const Primary = (props: any) => {

  /*
  const [count, setCount] = useState(0)
  const onClick = (e: React.MouseEvent) => {
    //現在のカウントを渡してActionを呼ぶ
    incrementAction(e, count)
    setCount( (c) => c+1)
  }
  */

  //クリックしたらStyledButton/Successのストーリーへ遷移する
  return (
  <StyledButton {...props} variant="primary"
    onClick={linkTo('StyledButton', 'Success')}>
      Primary
    </StyledButton>
  )
}

export const Success = (props: any) => {
  //クリックしたらStyledButton/Transparentのストーリーへ遷移する
  return (
    <StyledButton {...props} variant="success"
      onClick={linkTo('StyledButton', 'Transparent')}>
        Success
      </StyledButton>
    )
}

export const Transparent = (props: any) => {
  //クリックしたらStyledButton/primaryのストーリーへ遷移する
  return (
    <StyledButton {...props} variant="transparent"
      onClick={linkTo('StyledButton', 'Primary')}>
        Transparent
      </StyledButton>
    )
}