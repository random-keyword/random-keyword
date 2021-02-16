import React, { useState, useCallback } from 'react';
import AppLayout from '@components/AppLayout';
import Head from 'next/head';
import { getKeyword } from '@utils/getKeyword';
import {
  raceCount, NihilClassCount, organizationCount, backStoryCount, organizationDesc,
  getArea, areaCount, getClothSet, getBackStory
} from '@utils/getNIHILkeyword';
import { NihilData } from '@data/NihilData';
import StyledArticle from '@components/StyledArticle';

const text = {
  title: '니힐 전용 - 랜덤 키워드',
  link: 'https://random-keyword.github.io/app/keyword/NIHIL',
};

const KeywordNIHIL = () => {
  const [ keyword, setKeyword, ] = useState(<span className='blue'>버튼을 클릭하세요.</span>);
  const [ isDesc, setIsDesc, ] = useState(false);
  const [ desc, setDesc, ] = useState('');
  const [ size, setSize, ] = useState('normal');

  const onClickRace = useCallback(() => {
    setKeyword(<span className='blue'>{getKeyword(NihilData.race)}</span>);
    setIsDesc(false);
    setSize('normal');
  }, []);

  const onClickClass = useCallback(() => {
    setKeyword(<span className='blue'>{getKeyword(NihilData.NihilClass)}</span>);
    setIsDesc(false);
    setSize('normal');
  }, []);

  const onClickOrganization = useCallback(() => {
    setKeyword(<span className='blue'>{getKeyword(NihilData.organization)}</span>);
    setIsDesc(true);
    setDesc(organizationDesc(getKeyword(NihilData.organization)));
    setSize('normal');
  }, []);

  const onClickBackStory = useCallback(() => {
    setKeyword(getBackStory());
    setIsDesc(false);
    setSize('normal');
  }, []);

  const onClickArea = useCallback(() => {
    setKeyword(<span className='blue'>{getArea()}</span>);
    setIsDesc(false);
    setSize('normal');
  }, []);

  const onClickClothSet = useCallback(() => {
    setKeyword(getClothSet());
    setIsDesc(false);
    setSize('middle');
  }, []);

  return (
    <AppLayout>
      <Head>
        <meta property='og:title' content={text.title} />
        <meta name='twitter:title' content={text.title} />
        <meta property='og:url' content={text.link} />
        <title>니힐 전용 - 랜덤 키워드</title>
      </Head>
      <StyledArticle>
        <div id='keyword-display'>
          <header>
            <button onClick={onClickRace}>종족 ({raceCount}개)</button>
            <button onClick={onClickClass}>클래스 ({NihilClassCount}개)</button>
            <button onClick={onClickOrganization}>단체 ({organizationCount}개)</button>
            <button onClick={onClickArea}>지역 ({areaCount}개)</button>
            <button onClick={onClickBackStory}>배경 스토리 ({backStoryCount}개)</button>
            <button onClick={onClickClothSet}>의상 세트</button>
          </header>
          <div id='keyword-container'>
            <div>
              <p className={size}>{keyword}</p>
              {isDesc ? desc : ''}
            </div>
          </div>
        </div>
      </StyledArticle>
    </AppLayout>
  );
};

export default KeywordNIHIL;