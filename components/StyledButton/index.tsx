import styled, { css } from 'styled-components'

const variants = {
  primary: {
    color: '#fff',
    backgroundColor: '#1d3461',
    border: 'none',
  },

  success: {
    color: '#fff',
    backgroundColor: '#5AB203',
    border: 'none',
  },

  transparent: {
    color: '#111',
    backgroundColor: 'transparent',
    border: '1px solid black',
  },
} as const

type StyledButtonProps = {
  variant: keyof typeof variants
}

export const StyledButton = styled.button<StyledButtonProps>`
  ${({ variant }) => {
    //variantに与えられたキーを元に、対応すするスタイルを取得する
    const style = variants[variant]

    //cssを使い、複数のスタイルを返す
    return css`
      color: ${style.color};
      background-color: ${style.backgroundColor};
      border: ${style.border};
    `;
  }}

  //共通スタイル
  border-radius: 12px;
  font-size: 14px;
  height: 38px;
  line-height: 22px;
  letter-spacing: 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`
