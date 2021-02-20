import React from 'react';
import { getKeyword } from '@utils/getKeyword';
import { organizationText } from '@data/NihilOrganizationText';

import { NihilData, NihilBackStoryData, AreaData, NihilClothesData } from '@data/NihilData';

const { race, NihilClass, organization, } = NihilData;
const { where, purpose, gender, who, } = NihilBackStoryData;

export const raceCount = race.length;
export const NihilClassCount = NihilClass.length;
export const organizationCount = organization.length;

export const backStoryCount = where.length * purpose.length * gender.length * who.length;

export const organizationDesc = (item) => {
  return organizationText[item];
};

const {
  대륙, 드라스, 발라큐아, 엘카우스, 셀레오르,
  철벽, 바르기스대륙, 유센티아대륙, 바르기스해, 아란티아해,
  네프네린해, 리자루스, 리자루스해, 고르고니아, 드라코니르,
  신, 강철, 썩은고원,
} = AreaData;

export const areaCount = (대륙.length - 5) + 드라스.length + 발라큐아.length + 엘카우스.length + 셀레오르.length
+ 철벽.length + 바르기스대륙.length + (유센티아대륙.length - 4) + 바르기스해.length + 아란티아해.length + 네프네린해.length
+ 리자루스.length + 리자루스해.length + 고르고니아.length + 드라코니르.length + 신.length + 강철.length + 썩은고원.length;

export const getArea = () => {
  const first = getKeyword(대륙);
  let second;
  let third;
  
  if (first === '드라스 섬') {
    second = getKeyword(드라스);
  } else if ( first === '발라큐아 섬') {
    second = getKeyword(발라큐아);
  } else if ( first === '엘카우스 섬') {
    second = getKeyword(엘카우스);
  } else if ( first === '셀레오르 섬') {
    second = getKeyword(셀레오르);
  } else if ( first === '철벽 섬') {
    second = getKeyword(철벽);
  } else if ( first === '바르기스 대륙') {
    second = getKeyword(바르기스대륙);
  } else if ( first === '유센티아 대륙') {
    second = getKeyword(유센티아대륙);

    if (second === '고르고니아 제국') {
      third = getKeyword(고르고니아);
    } else if (second === '드라코니르 왕국') {
      third = getKeyword(드라코니르);
    } else if (second === '신 제국') {
      third = getKeyword(신);
    } else if (second === '강철 제국') {
      third = getKeyword(강철);
    }
  } else if ( first === '바르기스 해') {
    second = getKeyword(바르기스해);
  } else if ( first === '아란티아 해') {
    second = getKeyword(아란티아해);
  } else if ( first === '네프네린 해') {
    second = getKeyword(네프네린해);
  } else if ( first === '리자루스 해') {
    second = getKeyword(리자루스해);
  } else if ( first === '리자루스 제도') {
    second = getKeyword(리자루스);
  } else if ( first === '썩은 고원') {
    second = getKeyword(썩은고원);
  }

  if (second !== undefined) {
    return `${first} - ${second}`;
  } else if (third !== undefined) {
    return `${first} - ${second} - ${third}`;
  } else {
    return `${first}`;
  }
};

const {
  gender: clothGender, male: clothMale, female: clothFemale, outer, acc,
  extra, keyword,
} = NihilClothesData;

export const getClothSet = () => {
  const genderItem = getKeyword(clothGender);

  let top, bottom, under, shoes;
  let topCount, bottomCount, underCount, shoesCount;

  const maleTop = getKeyword(clothMale.top);
  const maleBottom = getKeyword(clothMale.bottom);
  const maleUnder = getKeyword(clothMale.under);
  const maleShoes = getKeyword(clothMale.shoes);

  const femaleTop = getKeyword(clothFemale.top);
  const femaleBottom = getKeyword(clothFemale.bottom);
  const femaleUnder = getKeyword(clothFemale.under);
  const femaleShoes = getKeyword(clothFemale.shoes);

  const outerItem = getKeyword(outer);
  const accItem = `${getKeyword(acc)}, ${getKeyword(acc)}`;
  const extraItem = `${getKeyword(extra)}, ${getKeyword(extra)}`;
  const keywordItem = `${getKeyword(keyword)}, ${getKeyword(keyword)}`;
  
  if (genderItem === '남성') {
    top = maleTop;
    under = maleUnder;

    if (top === '한벌옷') {
      bottom = '-';
    } else if (top === '판금 전신 갑옷') {
      bottom = '-';
    } else if (top === '청동 전신 갑옷') {
      bottom = '-';
    } else if (top === '강철 전신 갑옷') {
      bottom = '-';
    } else {
      bottom = maleBottom;
    }

    if (bottom === '하반신 전체가 세트인 의상') {
      shoes = '-';
    } else if (bottom === '갑옷 하의 풀세트') {
      shoes = '-';
    } else {
      shoes = maleShoes;
    }

    topCount = clothMale.top.length - 2;
    bottomCount = clothMale.bottom.length - 2;
    underCount = clothMale.under.length - 2;
    shoesCount = clothMale.shoes.length - 2;
  } else if (genderItem === '여성') {
    top = femaleTop;
    under = femaleUnder;

    if (top === '한벌옷') {
      bottom = '-';
    } else if (top === '판금 전신 갑옷') {
      bottom = '-';
    } else if (top === '청동 전신 갑옷') {
      bottom = '-';
    } else if (top === '강철 전신 갑옷') {
      bottom = '-';
    } else {
      bottom = femaleBottom;
    }

    if (bottom === '하반신 전체가 세트인 의상') {
      shoes = '-';
    } else if (bottom === '갑옷 하의 풀세트') {
      shoes = '-';
    } else {
      shoes = femaleShoes;
    }

    topCount = clothFemale.top.length - 2;
    bottomCount = clothFemale.bottom.length - 2;
    underCount = clothFemale.under.length - 2;
    shoesCount = clothFemale.shoes.length - 2;
  }

  const result = (
    <>
      성별: <span className='blue'>{genderItem}</span> ({clothGender.length}개)<br />
      외투: <span className='blue'>{outerItem}</span> ({outer.length - 2}개)<br />
      상의: <span className='blue'>{top}</span> ({topCount}개)<br />
      하의: <span className='blue'>{bottom}</span> ({bottomCount}개)<br />
      신발: <span className='blue'>{shoes}</span> ({shoesCount}개)<br />
      속옷: <span className='blue'>{under}</span> ({underCount}개)<br />
      기타: <span className='blue'>{extraItem}</span> ({extra.length - 2}개)<br />
      악세서리: <span className='blue'>{accItem}</span> ({acc.length - 2}개)<br />
      키워드: <span className='blue'>{keywordItem}</span> ({keyword.length - 2}개)
    </>
  );

  return result;
};

export const getBackStory = () => {
  const whereItem = getKeyword(NihilBackStoryData.where);
  const purposeItem = getKeyword(NihilBackStoryData.purpose);
  const genderItem = getKeyword(NihilBackStoryData.gender);
  const whoItem = getKeyword(NihilBackStoryData.who);

  const result = (
    <>
      <span className='blue'>{purposeItem}</span> 위해<br />
      <span className='blue'>{whereItem}</span>에서 온<br />
      <span className='blue'>{genderItem}</span> <span className='blue'>{whoItem}</span>.
    </>
  );

  return result;
};