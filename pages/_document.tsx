import Document, { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

class FourtyTwoiWebDocument extends Document {
  render() {
    const googleCode = process.env.NEXT_PUBLIC_GOOGLE_ID;
    return (
      <Html lang={'en'}>
        <Head>
          {(process.env.VERCEL_ENV === 'preview' ? (
            <meta name="robots" content="noindex" />
          ) : (
            process.env.VERCEL_ENV === 'production'
          )) && <meta name="robots" content="all" />}

          <meta property="og:title" name="title" content="42i - Digital Product Development Company" />
          <meta
            property="og:description"
            name="description"
            content="A Digital Product Development Company helping businesses to bring great products to life."
          />
          {/* Twitter */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="42i - Digital Product Development Company" />
          <meta
            name="twitter:description"
            content="A Digital Product Development Company helping businesses to bring great products to life."
          />
          {/* <meta name="twitter:image" content={baseUrlWithVersion('/img/shareRedes/logo_42i_og.jpg')} /> */}

          {/* Facebook and others */}
          {/* <meta
            property="og:image"
            name="image"
            itemProp="image"
            content={baseUrlWithVersion('/img/shareRedes/logo_42i_og.jpg')}
          /> */}
          <meta property="og:image:width" content="1600" />
          <meta property="og:image:height" content="900" />

          <meta
            property="og:image"
            name="image"
            itemProp="image"
            content={`${process.env.BASE_URL}/img/shareRedes/logo_42i_og.jpg`}
          />
          <meta property="og:image:width" content="400" />
          <meta property="og:image:height" content="400" />

          {/* <link rel="shortcut icon" href={baseUrlWithVersion('/favicon.ico')} /> */}

          {googleCode && googleCode !== '' && (
            <Script strategy="afterInteractive" dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer',"${googleCode}");`
            }}></Script>
          )}

          <meta httpEquiv="content-type" content="text/html; charset=utf-8 ;" />
          <meta httpEquiv="ScreenOrientation" content="autoRotate:disabled" />
          <meta name="theme-color" content="#000000" />
          <meta httpEquiv="cache-control" content="max-age=0" />
          <meta httpEquiv="cache-control" content="no-cache" />
          <meta httpEquiv="expires" content="0" />
          <meta httpEquiv="expires" content="Tue, 01 Jan 1980 1:00:00 GMT" />
          <meta httpEquiv="pragma" content="no-cache" />
          {/* <link rel="apple-touch-icon" sizes="57x57" href={baseUrlWithVersion('/img/favicon/apple-icon-57x57.png')} />
          <link rel="apple-touch-icon" sizes="60x60" href={baseUrlWithVersion('/img/favicon/apple-icon-60x60.png')} />
          <link rel="apple-touch-icon" sizes="72x72" href={baseUrlWithVersion('/img/favicon/apple-icon-72x72.png')} />
          <link rel="apple-touch-icon" sizes="76x76" href={baseUrlWithVersion('/img/favicon/apple-icon-76x76.png')} /> */}
          {/* <link
            rel="apple-touch-icon"
            sizes="114x114"
            href={baseUrlWithVersion('/img/favicon/apple-icon-114x114.png')}
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href={baseUrlWithVersion('/img/favicon/apple-icon-120x120.png')}
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href={baseUrlWithVersion('/img/favicon/apple-icon-144x144.png')}
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href={baseUrlWithVersion('/img/favicon/apple-icon-152x152.png')}
          /> */}
          {/* <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={baseUrlWithVersion('/img/favicon/apple-icon-180x180.png')}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href={baseUrlWithVersion('/img/favicon/android-icon-192x192.png')}
          />
          <link rel="icon" type="image/png" sizes="32x32" href={baseUrlWithVersion('/img/favicon/favicon-32x32.png')} />
          <link rel="icon" type="image/png" sizes="96x96" href={baseUrlWithVersion('/img/favicon/favicon-96x96.png')} />
          <link rel="icon" type="image/png" sizes="16x16" href={baseUrlWithVersion('/img/favicon/favicon-16x16.png')} />
          <meta name="msapplication-TileImage" content={baseUrlWithVersion('/img/favicon/ms-icon-144x144.png')} /> */}
          <meta name="msapplication-TileColor" content="#FC6865" />
          <meta name="theme-color" content="#FC6865" />

          <meta name="application-name" content="&nbsp;" />
          {/* <meta name="msapplication-TileImage" content={baseUrlWithVersion('/img/favicon/mstile-144x144.png')} />
          <meta name="msapplication-square70x70logo" content={baseUrlWithVersion('/img/favicon/mstile-70x70.png')} />
          <meta
            name="msapplication-square150x150logo"
            content={baseUrlWithVersion('/img/favicon/mstile-150x150.png')}
          />
          <meta name="msapplication-wide310x150logo" content={baseUrlWithVersion('/img/favicon/mstile-310x150.png')} /> */}
          {/* <meta
            name="msapplication-square310x310logo"
            content={baseUrlWithVersion('/img/favicon/mstile-310x310.png')}
          />

          <link rel="apple-touch-icon" sizes="180x180" href={baseUrlWithVersion('/favicon/apple-touch-icon.png')} />
          <link rel="icon" type="image/png" sizes="32x32" href={baseUrlWithVersion('/favicon/favicon-32x32.png')} />
          <link rel="icon" type="image/png" sizes="16x16" href={baseUrlWithVersion('/favicon/favicon-16x16.png')} /> */}

          {/* <link rel="mask-icon" href={baseUrlWithVersion('/favicon/safari-pinned-tab.svg')} color="#fc6865" /> */}
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#fc6865" />

          <meta name="msapplication-TileColor" content="#ff0000" />
          {/* <meta name="msapplication-TileImage" content={baseUrlWithVersion('/favicon/ms-tile-144.png')} />
          <link rel="manifest" href={baseUrlWithVersion('/manifest.json')} /> */}
          <link rel="stylesheet" href="/fonts.css" />
        </Head>
        <body>
          {googleCode && googleCode !== '' && (
            <noscript dangerouslySetInnerHTML={{
              __html: `<iframe src={"https://www.googletagmanager.com/ns.html?id=${googleCode}"} height="0" width="0" style="display:none;visibility:hidden"></iframe>`
            }}></noscript>
          )}
          <div className="site-preloader">
            <style
              dangerouslySetInnerHTML={{
                __html: `
                  body { overflow: hidden !important; overflow-y: scroll !important; height: 100% !important; }
                `,
              }}
            />
          </div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default FourtyTwoiWebDocument;
