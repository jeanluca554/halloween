import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet"></link>
      </Head>

      <body className='text-base bg-body-50 text-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
