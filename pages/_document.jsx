import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Global, css } from '@emotion/react';

const AppDocument = () => {
  const globalStyle = css`
    @import url(https://fonts.googleapis.com/earlyaccess/notosanskr.css);

    * {
      margin: 0px auto;
      padding: 0px;
      font-family: "Noto Sans KR", sans-serif;
      list-style: none;
      color: #333333;
    }

    a {
      text-decoration: none;
    }

    ::selection {
      color: #ffffff;
      background: #3178f2;
    }

    html, body, #__next {
      height: 100%;
    }

    #__next {
      display: flex;
      flex-direction: column;

      & > #main-container {
        height: 100%;

        & > main {
          height: 100%;
        }
      }
    }
  `;

  return (
    <Html lang='ko'>
      <Global styles={globalStyle} />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

AppDocument.getInitialProps = Document.getInitialProps;
AppDocument.renderDocument = Document.renderDocument;

export default AppDocument;