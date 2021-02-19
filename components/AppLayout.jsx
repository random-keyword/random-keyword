import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { css } from '@emotion/react';
import { siteData } from '@data/siteData';

const AppLayout = ({ children, }) => {
  const year = new Date().getFullYear();

  const headerStyle = css`
    box-sizing: border-box;
    width: 100%;
    background: #3178f2;
    padding: 10px;
    
    & > h1 {
      text-align: center;
      color: #ffffff;
      font-weight: 900;
      margin-bottom: 10px;
      font-size: 3rem;

      @media (min-width: 451px) and (max-width: 800px) {
        font-size: 2.4rem;
      }
      @media (min-width: 1px) and (max-width: 450px) {
        font-size: 1.7rem;
      }
    }

    & > nav {
      display: block;
      text-align: justify;

      & > a {
        display: inline-block;
        padding: 2px 7px;
        margin-top: 5px;
        margin-right: 5px;
        border-radius: 5px;
        border: 2px solid #ffffff;
        font-weight: 500;
        color: #ffffff;
        font-size: 1.3rem;

        @media (min-width: 451px) and (max-width: 800px) {
          font-size: 1.1rem;
        }
        @media (min-width: 1px) and (max-width: 450px) {
          font-size: 0.8rem;
          font-weight: 400;
        }

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
    text-align: center;
    font-size: 2rem;

    @media (min-width: 451px) and (max-width: 800px) {
      font-size: 1.5rem;
    }
    @media (min-width: 1px) and (max-width: 450px) {
      font-size: 0.9rem;
    }

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
    overflow-y: scroll;
  `;

  return (
    <>
      <header css={headerStyle}>
        <h1>랜덤 키워드 {siteData.version}</h1>
        <nav>
          <Link href='/'><a>홈</a></Link>
          <Link href='/keyword/NIHIL'><a>니힐 전용</a></Link>
          <Link href='/keyword/character'><a>캐릭터 컨셉</a></Link>
          <Link href='/keyword/clothes'><a>패션 컨셉</a></Link>
          <Link href='/keyword/theme'><a>여러가지 테마</a></Link>
          <Link href='/keyword/time'><a>날짜와 시간</a></Link>
          <Link href='/keyword/color'><a>랜덤 컬러</a></Link>
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