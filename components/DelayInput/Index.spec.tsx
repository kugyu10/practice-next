import { render, screen, RenderResult, fireEvent, getByRole, act, } from '@testing-library/react'
import { DelayInput } from './index'

describe('DelayInput', () => {
  let renderResult: RenderResult
  let handleChange: jest.Mock


  beforeEach(() => {
    //モック関数を作成する
    handleChange = jest.fn()
    renderResult = render(<DelayInput onChange={handleChange} />)

    //タイマーをjestのフェイクに置き換える
    jest.useFakeTimers()
  })


  afterEach(() => {
    renderResult.unmount()

    //タイマーを戻す
    jest.useFakeTimers()
  })

  //①初期の表示は空である
  it('should empty in input on initial render', () => {
    const spanNode = screen.getByTestId('display-text') as HTMLSpanElement

    expect(spanNode).toHaveTextContent('入力したテキスト:')
  })

  //②入力直後は「入力中」と表示される
  it('should display "入力中..." immediately after onChange event occurs', () => {
    const inputText = 'Test Input Text'
    const inputNode = screen.getByTestId('input-text') as HTMLInputElement

    //inputのonChangeを呼び出す
    fireEvent.change(inputNode, { target: { value: inputText } })

    const spanNode = screen.getByTestId('display-text') as HTMLSpanElement

    expect(spanNode).toHaveTextContent('入力中...')
  })

  //③1秒経過後、入力した内容が表示される
  it('should display input text 1 second after onChange event occurs', async () => {
    const inputText = 'Test Input Text'
    const inputNode = screen.getByTestId('input-text') as HTMLInputElement

    // inputのonChangeイベントを呼び出す
    fireEvent.change(inputNode, { target: { value: inputText } })

    // act関数内で実行することにより、タイマーのコールバック中で起きる状態変更が反映されることを保証する
    await act(() => {
      // タイマーにセットされたtimeoutをすべて実行する（まで待つ？）
      jest.runAllTimers() 
    })

    const spanNode = screen.getByTestId('display-text') as HTMLSpanElement

    // 入力したテキストが表示されるか確認
    expect(spanNode).toHaveTextContent(`入力したテキスト: ${inputText}`)
  })

  //④1秒経過後、onChangeコールバックが呼ばれる
  it('should call onChange 1 second after onChange event occurs', async() => {
    const inputText = 'Test Input Text'
    const inputNode = screen.getByTestId('input-text') as HTMLInputElement

    fireEvent.change(inputNode, { target: {value: inputText} })

    //タイマーの実行
    await act(()=>{
      jest.runAllTimers()
    })

    expect(handleChange).toHaveBeenCalled()
  })
})
