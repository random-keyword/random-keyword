import React, { useCallback, useState } from 'react';
import Head from 'next/head';
import AppLayout from '@components/AppLayout';
import { getKeyword } from '@utils/getKeyword';
import StyledArticle from '@components/StyledArticle';
import { ZodiacData } from '@data/OtherData';
import { PlayingCardData } from '@data/CardData';
import { count, getMajor, getPlaying5Card, getMinor } from '@utils/getOtherKeyword';

const text = {
  title: '여러가지 테마 - 랜덤 키워드',
  link: 'https://random-keyword.github.io/keyword/theme',
};

const KeywordTheme = () => {
  const [ keyword, setKeyword, ] = useState(<span className='blue'>버튼을 클릭하세요.</span>);
  const [ sub, setSub, ] = useState('');
  const [ size, setSize, ] = useState('normal');
  const [ isSub, setIsSub, ] = useState(false);

  const onClickZodiac = useCallback(() => {
    setKeyword(<span className='blue'>{getKeyword(ZodiacData)}</span>);
    setIsSub(false);
    setSize('normal');
  }, []);

  const onClickPlaying1Card = useCallback(() => {
    setKeyword(<span className='blue'>{getKeyword(PlayingCardData)}</span>);
    setIsSub(false);
    setSize('normal');
  }, []);

  const onClickPlaying5Card = useCallback(() => {
    setKeyword(getPlaying5Card());
    setIsSub(false);
    setSize('normal');
  }, []);

  const onClickMajor = useCallback(() => {
    const item = getMajor();

    setKeyword(<span className='blue-block'>{item.card}</span>);
    setSub(<span className='blue'>{item.direction}</span>);
    setIsSub(true);
    setSize('normal');
  }, []);

  const onClickMinor = useCallback(() => {
    const item = getMinor();

    setKeyword(<span className='blue-block'>{item.card}</span>);
    setSub(<span className='blue'>{item.message}</span>);
    setIsSub(true);
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
            <button onClick={onClickZodiac}>별자리 ({count.zodiac}개)</button>
            <button onClick={onClickPlaying1Card}>플레잉 카드 1장 ({count.playing}개)</button>
            <button onClick={onClickPlaying5Card}>플레잉 카드 5장 ({count.playing}개)</button>
            <button onClick={onClickMajor}>메이저 아르카나 ({count.majorTarot}개)</button>
            <button onClick={onClickMinor}>마이너 아르카나 ({count.minorTarot}개)</button>
          </header>
          <div id='keyword-container'>
            <div>
              <p className={size}>{ keyword }</p>
              {
                isSub ? (
                  <p className='middle'>{sub}</p>
                ) : (
                  ''
                )
              }
            </div>
          </div>
        </div>
      </StyledArticle>
    </AppLayout>
  );
};

export default KeywordTheme;