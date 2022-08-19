import Document, { DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

/* カスタムDocument */
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
      
    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      })

      const initialProps = await Document.getInitialProps(ctx)

      //initialPropsに加えて、styleを追加して返す。
      return {
        ...initialProps,
        styles: [
          initialProps.styles,
          sheet.getStyleElement()
        ],
      }
    } finally {
      sheet.seal()
    }
    
  }
}