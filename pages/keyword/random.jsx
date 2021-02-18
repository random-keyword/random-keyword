import React, { useCallback, useState } from 'react';
import AppLayout from '@components/AppLayout';
import Head from 'next/head';
import { totalCount, getRandomKeyword } from '@utils/getRandomKeywordDetail';
import StyledArticle from '@components/StyledArticle';

const text = {
  title: '랜덤 키워드 - 랜덤 키워드',
  link: 'https://random-keyword.github.io/keyword/random',
};

const KeywordRandom = () => {
  const [ keyword, setKeyword, ] = useState(<span className='blue'>버튼을 클릭하세요.</span>);
  const [ size, setSize, ] = useState('normal');
  const [ name, setName, ] = useState('no-scroll');

  const onClickRandom = useCallback(() => {
    setKeyword(getRandomKeyword(1));
    setSize('normal');
    setName('no-scroll');
  }, []);

  const onClick5Random = useCallback(() => {
    setKeyword(getRandomKeyword(5));
    setSize('normal');
    setName('no-scroll');
  }, []);

  const onClick50Random = useCallback(() => {
    setKeyword(getRandomKeyword(50));
    setSize('normal');
    setName('scroll');
  }, []);

  const onClick100Random = useCallback(() => {
    setKeyword(getRandomKeyword(100));
    setSize('normal');
    setName('scroll');
  }, []);
  
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
            <button onClick={onClickRandom}>단어 1개 ({totalCount}개)</button>
            <button onClick={onClick5Random}>단어 5개 ({totalCount}개)</button>
            <button onClick={onClick50Random}>단어 50개 ({totalCount}개)</button>
            <button onClick={onClick100Random}>단어 100개 ({totalCount}개)</button>
          </header>
          <div id='keyword-container' className={name}>
            <div>
              <p className={size}>{keyword}</p>
            </div>
          </div>
        </div>
      </StyledArticle>
    </AppLayout>
  );
};

export default KeywordRandom;