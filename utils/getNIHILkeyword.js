import React from 'react';
import { getKeyword } from '@utils/getKeyword';

import { NihilData, NihilBackStoryData, AreaData, NihilClothesData } from '@data/NihilData';

const { race, NihilClass, organization, } = NihilData;
const { where, purpose, gender, who, } = NihilBackStoryData;

export const raceCount = race.length;
export const NihilClassCount = NihilClass.length;
export const organizationCount = organization.length;

export const backStoryCount = where.length * purpose.length * gender.length * who.length;

export const organizationDesc = (item) => {
  let desc;
  switch (item) {
    case '구 대제국 황도 13 기사단':
      desc = <p className='small'>황도 13궁 하나 하나를 상징하는 13개의 기사단을 통틀어서 부르는 이름.</p>;
      break;
    case '대제국 흑도 13 기사단':
      desc = <p className='small'>황도 13 기사단이 해체되고 이레귤러에 의해 세워진 새로운 기사단.<br />악을 섬기는 악의 기사단이다.</p>;
      break;
    case '신 제국 기사단':
      desc = <p className='small'><span>신(Sin) 제국</span>에서 운용하는 기사단.<br />다양한 기사단이 존재한다.</p>;
      break;
    case '황금향 기사단':
      desc = <p className='small'>황금을 두른 기사들.<br />빛의 신을 섬기는 신자들이기도 하다.</p>;
      break;
    case '레드 마운틴 도적단':
      desc = <p className='small'>알세이아 대륙단 전체에 걸쳐 수많은 요새와 기지를 보유하고 있는<br /> 강력한 도적집단. 희대의 골칫거리.</p>;
      break;
    case '블루 스피어 도적단':
      desc = <p className='small'>레드 마운틴 도적단과 경쟁하는 마찬가지로 강력한 도적집단.<br />레드 마운틴 도적단보다는 양반이다.</p>;
      break;
    case '다크 스퀘어':
      desc = <p className='small'>다르크 엘피안으로 구성된 비밀결사.<br />데몬스톤 유저들을 모아 이레귤러를 파멸시키려한다.</p>;
      break;
    case '푸른 극락조 수호결사단':
      desc = <p className='small'>신 제국의 어느 한 지역에서부터 탄생한 집단.<br />흑인들로 구성되어있다.</p>;
      break;
    case '블랙 윈터':
      desc = <p className='small'>뛰어난 마법사들만이 들어갈 수 있는 마법사들의 집단.<br />비밀결사이다.</p>;
      break;
    case '데스 아크스':
      desc = <p className='small'>세상을 파괴하려는 미치광이들이 속해있는 집단.<br />데몬스톤을 카피한 붉은 데몬스톤을 보유한다.</p>;
      break;
    case '안티 노른':
      desc = <p className='small'>수 세기 전에 몰락한 집단을 누군가가 다시 일으켰다.<br />미치광이들로 가득하지만 뛰어난 마도과학력을 지니고 있다.</p>;
      break;
    case '매드 스펠즈':
      desc = <p className='small'>안티 노른의 산하 집단. 여기엔 마법사들이 속한다.<br />마찬가지로 미치광이들로만 가득하다.</p>;
      break;
    case '블러드 라인':
      desc = <p className='small'>쉽게 말해 테러리스트들.<br />레드 마운틴보다도 과격하지만 소수정예로 움직인다.</p>;
      break;
    case '데모닉 오더':
      desc = <p className='small'>소유주의 몸을 빼앗은 데몬스톤들의 집단.<br />데몬스톤들을 결집시켜 이레귤러를 파하려한다.<br />이들에게는 인류또한 적이다.</p>;
      break;
    case '북방 레지스탕스':
      desc = <p className='small'>철벽 섬에 요새를 두고 있는 집단. 수호자들로 이루어져 있다.<br />지금은 병력을 보강중에 있다.</p>;
      break;
    case '수호자 연합':
      desc = <p className='small'>범세계적인 집단. 수호자들이라면 수호자 연합에 반드시 소속된다.<br />수호자를 양성, 파견한다.</p>;
      break;
    case '정화기관':
      desc = <p className='small'>이레귤러 헌터라고도 불리는 자들. 수호자 연합과<br />연계하는 정화사들이다. 혼돈을 정화한다.</p>;
      break;
    case '까마귀 마녀단':
      desc = <p className='small'>정확히 무엇을 하는지는 알 수 없는 집단.<br /> 까마귀를 심볼로 하며 여성 마법사들이 속한다.</p>;
      break;
    case '해골 교단':
      desc = <p className='small'>죽음의 신을 섬긴다. 다소 과격하고, 광적이게 섬긴다.<br />산 자를 죽은 자로 만들려한다.</p>;
      break;
    case '명신교단':
      desc = <p className='small'>죽음의 신을 섬긴다. 정상적이게 섬긴다.<br />해골 교단을 이단으로 간주하며 소탕하려한다.</p>;
      break;
    case '파나믹 교단':
      desc = <p className='small'>무기를 사용하지 않으며 맨몸을 단련시키는 수행을 하는 교단.<br /> 무술의 신 파나믹을 섬긴다.</p>;
      break;
    case '기계황신교':
      desc = <p className='small'>기계 숲에 기거하는 교단. 기계 숲의 왕을 신으로 신격화하여 섬기고 있다.<br />침입자를 사살한다.</p>;
      break;
    case '기계신교':
      desc = <p className='small'>기계황신교와 마찬가지로 기계 숲의 왕을 섬기지만 저돌적이지 않다.<br />타지역에도 포진되어있다.</p>;
      break;
    case '신비교':
      desc = <p className='small'>신비와 기적의 신을 섬기는 교단이었으나 현재엔 붕괴되었다.</p>;
      break;
    case '나티레네 교단':
      desc = <p className='small'>물의 여신 나티레네를 섬기는 교단.<br />나티레네의 수족들인 물의 정령과 계약을 하기도 한다.</p>;
      break;
    case '종족연합':
      desc = <p className='small'>수많은 종족들이 하나의 뜻을 이루기 위해 일으킨 연합.<br /> 이레귤러를 이 땅에서 몰아내려고 한다.</p>;
      break;
    case '반 종족연합':
      desc = <p className='small'>종족연합이 탄생하자 이레귤러들이 자신들의<br />수하들을 결집시켜 형성한 이레귤러 집단.</p>;
      break;
    case '파멸신교':
      desc = <p className='small'>파멸의 신을 섬기는 집단. 정상이라고는 볼 수 없다.<br />전세계적인 테러를 일삼는다. 진심으로 파멸을 가져오려고 애쓴다.</p>;
      break;
  }

  return desc;
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
    bottom = maleBottom;
    under = maleUnder;
    shoes = maleShoes;

    topCount = clothMale.top.length;
    bottomCount = clothMale.bottom.length;
    underCount = clothMale.under.length;
    shoesCount = clothMale.shoes.length;
  } else if (genderItem === '여성') {
    top = femaleTop;
    bottom = femaleBottom;
    under = femaleUnder;
    shoes = femaleShoes;

    topCount = clothFemale.top.length;
    bottomCount = clothFemale.bottom.length;
    underCount = clothFemale.under.length;
    shoesCount = clothFemale.shoes.length;
  }

  const result = (
    <>
      성별: <span className='blue'>{genderItem}</span> ({clothGender.length}개)<br />
      외투: <span className='blue'>{outerItem}</span> ({outer.length}개)<br />
      상의: <span className='blue'>{top}</span> ({topCount}개)<br />
      하의: <span className='blue'>{bottom}</span> ({bottomCount}개)<br />
      속옷: <span className='blue'>{under}</span> ({underCount}개)<br />
      신발: <span className='blue'>{shoes}</span> ({shoesCount}개)<br />
      기타: <span className='blue'>{extraItem}</span> ({extra.length}개)<br />
      악세서리: <span className='blue'>{accItem}</span> ({acc.length}개)<br />
      키워드: <span className='blue'>{keywordItem}</span> ({keyword.length}개)
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