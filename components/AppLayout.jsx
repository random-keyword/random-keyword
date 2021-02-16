import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { css } from '@emotion/react';

const AppLayout = ({ children, }) => {
  const year = new Date().getFullYear();

  const headerStyle = css`
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 17px;
    background: #3178f2;
    padding: 10px;
    
    & > h1 {
      text-align: center;
      color: #ffffff;
      font-weight: 900;
      margin-bottom: 10px;
    }

    & > nav {
      display: block;
      text-align: justify;

      & > a {
        display: inline-block;
        padding: 5px 10px;
        margin-right: 5px;
        border-radius: 5px;
        border: 2px solid #ffffff;
        font-weight: 500;
        color: #ffffff;

        &:hover {
          background: #ffffff;
          color: #3178f2;
          border: 2px solid #ffffff;
        }
      }
    }
  `;

  const footerStyle = css`
    width: 100%;
    box-sizing: border-box;
    background: #3178f2;
    padding: 10px;
    margin-top: 20px;
    text-align: center;
    font-size: 14pt;

    & > p {
      color: #ffffff;

      &:before {
        content: '\\f1f9';
        font-family: 'Font Awesome 5 Free';
        margin-right: 5px;
        color: #ffffff;
      }
    }

    & a {
      color: #ffffff;
      padding: 0px 5px;
      margin-left: 3px;

      &:hover {
        text-decoration: underline;
        font-weight: 900;
      }
    }
  `;

  const middleStyle = css`
    width: 100%;
    box-sizing: border-box;
    flex: 1;
  `;

  return (
    <>
      <header css={headerStyle}>
        <h1>랜덤 키워드</h1>
        <nav>
          <Link href='/'><a>홈</a></Link>
          <Link href='/keyword/NIHIL'><a>니힐 전용</a></Link>
          <Link href='/keyword/character'><a>캐릭터 컨셉</a></Link>
          <Link href='/keyword/clothes'><a>패션 컨셉</a></Link>
          <Link href='/keyword/theme'><a>여러가지 테마</a></Link>
          <Link href='/keyword/random'><a>랜덤 키워드</a></Link>
        </nav>
      </header>
      <div id='main-container' css={middleStyle}>
        <main>
          { children }
        </main>
      </div>
      <footer css={footerStyle}>
        <p>
          2017-{year}.
          <a href='https://www.instagram.com/nihil_illust/' target='_blank' rel='noopener noreferrer'>NIHILncunia</a>
        </p>
      </footer>
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;