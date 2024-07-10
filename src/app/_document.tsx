import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
       
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Tabernacle Baptist Church" />
        <meta name="author" content="An Independent Bible Believing Baptist Church in Lebanon, MO" />
        <meta name="keywords" content="church, faith, community, worship" />
        <title>Tabernacle Baptist Church</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
