import React, { useCallback, useState } from 'react';
import Head from 'next/head';
import AppLayout from '@components/AppLayout';
import { getKeyword } from '@utils/getKeyword';
import StyledArticle from '@components/StyledArticle';
import { count, getBackStory, getStatus, getSuperPower, getClass } from '@utils/getCharcterKeyword';
import { CharacterData } from '@data/CharacterData';
import { RandomKeywordData } from '@data/RandomKeywordData';

const text = {
  title: '캐릭터 컨셉 - 랜덤 키워드',
  link: 'https://random-keyword.github.io/keyword/character',
};

const KeywordCharacter = () => {
  const [ keyword, setKeyword, ] = useState(<span className='blue'>버튼을 클릭하세요.</span>);
  const [ size, setSize, ] = useState('normal');
  const [ name, setName, ] = useState('no-scroll');

  const onClickGenre = useCallback(() => {
    setKeyword(<span className='blue'>{getKeyword(RandomKeywordData.genre).replace('장르/', '')}</span>);
    setSize('normal');
  }, []);

  const onClickBackStory = useCallback(() => {
    setKeyword(getBackStory());
    setSize('normal');
  }, []);

  const onClickRole = useCallback(() => {
    setKeyword(<span className='blue'>{getKeyword(CharacterData.characterRole)}</span>);
    setSize('normal');
  }, []);

  const onClickType = useCallback(() => {
    setKeyword(<span className='blue'>{getKeyword(CharacterData.characterImage)}</span>);
    setSize('normal');
  }, []);

  const onClickRace = useCallback(() => {
    setKeyword(<span className='blue'>{getKeyword(CharacterData.race)}</span>);
    setSize('normal');
  }, []);

  const onClickClass = useCallback(() => {
    setKeyword(getClass());
    setSize('normal');
  }, []);

  const onClickStatus = useCallback(() => {
    setKeyword(<span className='blue'>{getStatus()}</span>);
    setSize('normal');
  }, []);

  const onClickGender = useCallback(() => {
    setKeyword(<span className='blue'>{getKeyword(CharacterData.gender)}</span>);
    setSize('normal');
  }, []);

  const onClickPositive = useCallback(() => {
    setKeyword(<span className='blue'>{getKeyword(CharacterData.positive)}</span>);
    setSize('normal');
  }, []);

  const onClickNegative = useCallback(() => {
    setKeyword(<span className='blue'>{getKeyword(CharacterData.negative)}</span>);
    setSize('normal');
  }, []);

  const onClickAlignment = useCallback(() => {
    setKeyword(<span className='blue'>{getKeyword(CharacterData.alignment)}</span>);
    setSize('normal');
  }, []);

  const onClickFeature = useCallback(() => {
    setKeyword(<span className='blue'>{getKeyword(RandomKeywordData.state).replace('특징/', '')}</span>);
    setSize('normal');
  }, []);

  const onClickAttrubute = useCallback(() => {
    setKeyword(<span className='blue'>{getKeyword(CharacterData.attribute)}</span>);
    setSize('normal');
  }, []);

  const onClickWeapon = useCallback(() => {
    setKeyword(<span className='blue'>{getKeyword(RandomKeywordData.weapon).replace('무기/', '')}</span>);
    setSize('normal');
  }, []);

  const onClickShield = useCallback(() => {
    setKeyword(<span className='blue'>{getKeyword(RandomKeywordData.shield).replace('방패/', '')}</span>);
    setSize('normal');
  }, []);

  const onClickSuperPower = useCallback(() => {
    setKeyword(getSuperPower());
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
            <button onClick={onClickGenre}>장르 ({count.genre}개)</button>
            <button onClick={onClickBackStory}>배경 스토리 ({count.backStory}개)</button>
            <button onClick={onClickRole}>역할 ({count.role}개)</button>
            <button onClick={onClickType}>유형 ({count.type}개)</button>
            <button onClick={onClickRace}>종족 ({count.race}개)</button>
            <button onClick={onClickClass}>직업 ({count.charClass}개)</button>
            <button onClick={onClickStatus}>신분 ({count.status}개)</button>
            <button onClick={onClickGender}>성별 ({count.gender}개)</button>
            <button onClick={onClickPositive}>성격(긍정적인) ({count.positive}개)</button>
            <button onClick={onClickNegative}>성격(부정적인) ({count.negative}개)</button>
            <button onClick={onClickAlignment}>성향(D&D) ({count.alignment}개)</button>
            <button onClick={onClickFeature}>특징 ({count.state}개)</button>
            <button onClick={onClickAttrubute}>속성 ({count.attribute}개)</button>
            <button onClick={onClickWeapon}>무기 ({count.weapon}개)</button>
            <button onClick={onClickShield}>방패 ({count.shield}개)</button>
            <button onClick={onClickSuperPower}>초능력 ({count.superPower}개)</button>
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

export default KeywordCharacter;