import React, { useCallback, useState } from 'react';
import AppLayout from '@components/AppLayout';
import Head from 'next/head';
import StyledArticle from '@components/StyledArticle';
import { css } from '@emotion/react';
import { get5Color, getColor } from '@utils/getColor';

const text = {
  title: '랜덤 컬러 - 랜덤 키워드',
  link: 'https://random-keyword.github.io/keyword/color',
};

const KeywordColor = () => {
  const [ keyword, setKeyword, ] = useState(<p className='initial-item'>버튼을 클릭하세요.</p>);

  const onCLickColor = useCallback(() => {
    setKeyword(getColor());
  }, []);

  const onCLick5Color = useCallback(() => {
    setKeyword(get5Color());
  }, []);

  const colorContainer = css`
    flex: 1;
    display: flex;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    margin-top: 10px;

    & > div {
      width: inherit;
      box-sizing: inherit;
      text-align: center;

      & > .initial-item {
        font-weight: 900;
        color: #3178f2;
        font-size: 3rem;

        @media (min-width: 451px) and (max-width: 800px) {
          font-size: 2rem;
        }
        @media (min-width: 1px) and (max-width: 450px) {
          font-size: 1.3rem;
        }
      }

      & > .color-item {
        width: 90%;
        text-align: center;
        padding: 20px;
        font-weight: 900;
        margin-bottom: 5px;
        border-radius: 10px;
        border: 2px solid #000000;

        &:nth-last-of-type(1) {
          margin-bottom: 0px;
        }

        & > .normal {
          font-size: 2rem;
          display: block;

          @media (min-width: 451px) and (max-width: 800px) {
            font-size: 1.5rem;
          }
          @media (min-width: 1px) and (max-width: 450px) {
            font-size: 1.1rem;
          }
        }
      }
    }
  `;

  return (
    <AppLayout>
      <Head>
        <meta property='og:title' content={text.title} />
        <meta name='twitter:title' content={text.title} />
        <meta property='og:url' content={text.link} />
        <title>{text.title}</title>
      </Head>
      <StyledArticle>
        <div id='keyword-display'>
          <header>
            <button onClick={onCLickColor}>색상 1개</button>
            <button onClick={onCLick5Color}>색상 5개</button>
          </header>
          <div id='color-container' css={colorContainer}>
            <div>
              {keyword}
            </div>
          </div>
        </div>
      </StyledArticle>
    </AppLayout>
  );
};

export default KeywordColor;