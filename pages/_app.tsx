import AnimatedGradient from 'components/AnimatedGradient/AnimatedGradient'
import Layout from 'layout/Layout'
import Head from 'next/head'
import styled from 'styled-components';
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Next.js PWA Example</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      </Head>
     <Layout>
         <Container>
            <AnimatedGradient/>
            <div className='content'>
                <Component {...pageProps} />
            </div>
         </Container>
     </Layout>
    </>
  )
}

const Container = styled.div`
    width: 100%;
    min-height: 100vh;

    .content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%
    }
`
