import React, { useState, useCallback } from 'react';
import AppLayout from '@components/AppLayout';
import Head from 'next/head';
import { getKeyword } from '@utils/getKeyword';
import StyledArticle from '@components/StyledArticle';
import {
  FashionData, CoatData, VestData, HoodieData, CardiganData,
  PantsData, SkirtData, SetClothData
} from '@data/ClothData';
import { CharacterData } from '@data/CharacterData';
import {
  count, getJacket, getShirt, getTshirt, getSweater,
  getBlouse, getDress, getShoes, getUnderWear, getBikini,
  getExtra, getAccessory
} from '@utils/getClothKeyword';

const text = {
  title: '패션 컨셉 - 랜덤 키워드',
  link: 'https://random-keyword.github.io/keyword/clothes',
};

const KeywordClothes = () => {
  const [ keyword, setKeyword, ] = useState(<span className='blue'>버튼을 클릭하세요.</span>);
  const [ size, setSize, ] = useState('normal');

  const onClickFasion = useCallback(() => {
    setKeyword(<span className='blue'>{getKeyword(FashionData)}</span>);
    setSize('normal');
  }, []);

  const onClickJacket = useCallback(() => {
    setKeyword(<span className='blue'>{getJacket()}</span>);
    setSize('normal');
  }, []);

  const onClickCoat = useCallback(() => {
    setKeyword(<span className='blue'>{getKeyword(CoatData)}</span>);
    setSize('normal');
  }, []);

  const onClickShirt = useCallback(() => {
    setKeyword(<span className='blue'>{getShirt()}</span>);
    setSize('normal');
  }, []);

  const onClickVest = useCallback(() => {
    setKeyword(<span className='blue'>{getKeyword(VestData)}</span>);
    setSize('normal');
  }, []);

  const onClickHoodie = useCallback(() => {
    setKeyword(<span className='blue'>{getKeyword(HoodieData)}</span>);
    setSize('normal');
  }, []);

  const onClickTshirt = useCallback(() => {
    setKeyword(<span className='blue'>{getTshirt()}</span>);
    setSize('normal');
  }, []);

  const onClickSweater = useCallback(() => {
    setKeyword(<span className='blue'>{getSweater()}</span>);
    setSize('normal');
  }, []);

  const onClickCardigan = useCallback(() => {
    setKeyword(<span className='blue'>{getKeyword(CardiganData)}</span>);
    setSize('normal');
  }, []);

  const onClickBlouse = useCallback(() => {
    setKeyword(<span className='blue'>{getBlouse()}</span>);
    setSize('normal');
  }, []);

  const onClickPants = useCallback(() => {
    setKeyword(<span className='blue'>{getKeyword(PantsData)}</span>);
    setSize('normal');
  }, []);

  const onClickDress = useCallback(() => {
    setKeyword(<span className='blue'>{getDress()}</span>);
    setSize('normal');
  }, []);

  const onClickSkirt = useCallback(() => {
    setKeyword(<span className='blue'>{getKeyword(SkirtData)}</span>);
    setSize('normal');
  }, []);

  const onClickShoes = useCallback(() => {
    setKeyword(getShoes());
    setSize('normal');
  }, []);

  const onClickUnder = useCallback(() => {
    setKeyword(getUnderWear());
    setSize('normal');
  }, []);

  const onClickBikini = useCallback(() => {
    setKeyword(getBikini());
    setSize('normal');
  }, []);

  const onClickSet = useCallback(() => {
    setKeyword(<span className='blue'>{getKeyword(SetClothData)}</span>);
    setSize('normal');
  }, []);

  const onClickExtra = useCallback(() => {
    setKeyword(getExtra());
    setSize('middle');
  }, []);

  const onClickAccessory = useCallback(() => {
    setKeyword(getAccessory());
    setSize('middle');
  }, []);

  const onClickHair = useCallback(() => {
    setKeyword(<span className='blue'>{getKeyword(CharacterData.hair)}</span>);
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
            <button onClick={onClickFasion}>패션 스타일 ({count.fashion}개)</button>
            <button onClick={onClickHair}>헤어 스타일 ({count.hair}개)</button>
            <button onClick={onClickSet}>세트 의상 ({count.set}개)</button>
            <button onClick={onClickJacket}>재킷 ({count.jacket}개)</button>
            <button onClick={onClickCoat}>코트 ({count.coat}개)</button>
            <button onClick={onClickShirt}>셔츠 ({count.shirt}개)</button>
            <button onClick={onClickVest}>조끼(베스트) ({count.vest}개)</button>
            <button onClick={onClickHoodie}>후드 ({count.hoodie}개)</button>
            <button onClick={onClickTshirt}>티셔츠 ({count.Tshirt}개)</button>
            <button onClick={onClickSweater}>스웨터 ({count.sweater}개)</button>
            <button onClick={onClickCardigan}>가디건 ({count.cardigan}개)</button>
            <button onClick={onClickBlouse}>블라우스 ({count.blouse}개)</button>
            <button onClick={onClickPants}>바지 ({count.pants}개)</button>
            <button onClick={onClickDress}>드레스 ({count.dress}개)</button>
            <button onClick={onClickSkirt}>치마 ({count.skirt}개)</button>
            <button onClick={onClickShoes}>신발 ({count.shoes}개)</button>
            <button onClick={onClickUnder}>속옷 ({count.under}개)</button>
            <button onClick={onClickBikini}>수영복 ({count.bikini}개)</button>
            <button onClick={onClickExtra}>의류 잡화 ({count.extra}개)</button>
            <button onClick={onClickAccessory}>악세서리 ({count.acc}개)</button>
          </header>
          <div id='keyword-container'>
            <div>
              <p className={size}>{ keyword }</p>
            </div>
          </div>
        </div>
      </StyledArticle>
    </AppLayout>
  );
};

export default KeywordClothes;