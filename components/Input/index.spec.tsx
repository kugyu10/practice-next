import { fireEvent } from '@storybook/testing-library'
import { render, screen, RenderResult } from '@testing-library/react'
import { Input } from './index'

describe('Input', () => {
  let renderResult: RenderResult

  //それぞれのテストケース前にコンポーネントを描画し、renderResultにセットする
  beforeEach(() => {
    renderResult = render(<Input id="username" label="ユーザー名" />)
  })

  //テストケース後に描画していたコンポーネントを開放する
  afterEach(() => {
    renderResult.unmount()
  })

  //①初期描画時にinput要素が空であることをテスト
  it('should empty in input on initial render', () => {
    const inputNode = screen.getByLabelText('ユーザー名') as HTMLInputElement

    expect(inputNode).toHaveValue('')
  })

  //②文字を入力したら、入力した内容が表示されるかをテスト
  it('should show input text', () => {
    const inputText = 'Text input text'
    const inputNode = screen.getByLabelText('ユーザー名') as HTMLInputElement

    //fireEventを使って、input要素のonChangeイベントを発火
    fireEvent.change(inputNode, { target: { value: inputText } })

    expect(inputNode).toHaveValue(inputText)
  })

  //③ボタンが押されたら、入力テキストがクリアするか確認
  it('should reset when user clicks resetButton', ()=>{
    //まず、inputにテキストを入力しておく
    const inputText = 'このテキストは消えるはず'
    const inputNode = screen.getByLabelText('ユーザー名') as HTMLInputElement
    fireEvent.change(inputNode, {target: { value: inputText } })

    //ボタンを取得
    const buttonNode = screen.getByRole('button', {
      name: 'Reset'
    }) as HTMLButtonElement

    fireEvent.click(buttonNode)

    expect(inputNode).toHaveValue('')
  })
})
