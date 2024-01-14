import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Alisson Peixer</title>
        <meta name="description" content="Bem-vindo ao meu portfólio! Aqui você pode encontrar meus projetos, habilidades e experiências." />
        <meta name="keywords" content="Portfólio, Next.js, React, Desenvolvedor Web, FullStack Dev" />
        <meta name="author" content="Alisson Peixer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className='overflow-hidden' >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
