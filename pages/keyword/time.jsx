import React, { useCallback, useState } from 'react';
import Head from 'next/head';
import AppLayout from '@components/AppLayout';
import StyledArticle from '@components/StyledArticle';
import { count, getTime, getCalendar } from '@utils/getTime';

const text = {
  title: '날짜와 시간 - 랜덤 키워드',
  link: 'https://random-keyword.github.io/keyword/time',
};

const KeywordTime = () => {
  const [ keyword, setKeyword, ] = useState(<span className='blue'>버튼을 클릭하세요.</span>);
  const [ size, setSize, ] = useState('normal');
  const [ name, setName, ] = useState('no-scroll');

  const onClickCalendar = useCallback(() => {
    setKeyword(getCalendar());
    setSize('normal');
  }, []);

  const onClickTime = useCallback(() => {
    setKeyword(getTime());
    setSize('normal');
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
            <button onClick={onClickCalendar}>날짜 ({count.calendar})</button>
            <button onClick={onClickTime}>시간 ({count.time})</button>
          </header>
          <div id='keyword-container' className={name}>
            <div>
              <p className={size}>{ keyword }</p>
            </div>
          </div>
        </div>
      </StyledArticle>
    </AppLayout>
  );
};

export default KeywordTime;