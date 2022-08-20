import { render, screen, RenderResult } from '@testing-library/react'
import { Input } from './index'

describe('Input', ()=> {
  let renderResult: RenderResult

  //それぞれのテストケース前にコンポーネントを描画し、renderResultにセットする
  beforeEach(() => {
    renderResult = render( <Input id="username" label="ユーザー名" /> )
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
})
