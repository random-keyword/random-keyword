import React from 'react';
import AppLayout from '@components/AppLayout';
import Head from 'next/head';
import { css } from '@emotion/react';

const Error404 = () => {
  const errorStyle = css`
    height: 100%;
    display: flex;
    align-items: center;

    & > div {
      text-align: center;

      & > h2 {
        font-size: 48pt;
        font-weight: 900;
        color: #3178f2;

        &:before {
          content: '\\f06a';
          font-family: 'Font Awesome 5 Free';
          font-weight: 900;
          margin-right: 10px;
        }
      }

      & > p {
        font-size: 28pt;
        font-weight: 500;
        color: #3178f2;
      }
    }
  `;

  return (
    <AppLayout>
      <Head>
        <title>에러 404 - 랜덤 키워드</title>
      </Head>
      <article css={errorStyle}>
        <div>
          <h2>에러 404</h2>
          <p>페이지가 존재하지 않습니다.</p>
        </div>
      </article>
    </AppLayout>
  );
};

export default Error404;