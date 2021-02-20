import React from 'react';
import { CharacterData, SuperPowerData, backStoryData } from '@data/CharacterData';
import { getKeyword } from '@utils/getKeyword';
import { RandomKeywordData } from '@data/RandomKeywordData';

const { where, purpose, gender, who, } = backStoryData;

export const count = {
  genre: RandomKeywordData.genre.length,
  backStory: (where.real().length + where.fantasy().length) * (purpose.real.length + purpose.fantasy().length) * gender.length * (who.real.length + who.fantasy.length),
  role: CharacterData.characterRole.length,
  type: CharacterData.characterImage.length,
  race: CharacterData.race.length,
  charClass: CharacterData.class.real.length + CharacterData.class.fantasy.length,
  status: (CharacterData.status.length - 1) + CharacterData.nobility.length,
  gender: CharacterData.gender.length,
  positive: CharacterData.positive.length,
  negative: CharacterData.negative.length,
  alignment: CharacterData.alignment.length,
  state: RandomKeywordData.state.length,
  attribute: CharacterData.attribute.length,
  weapon: RandomKeywordData.weapon.length,
  shield: RandomKeywordData.shield.length,
  superPower: SuperPowerData.power.length,
};

export const getBackStory = () => {
  const d2 = getKeyword([ 1, 2, ]);
  const genderItem = getKeyword(gender);
  let whereItem, purposeItem, whoItem;
  let message;

  if (d2 === 1) {
    whereItem = getKeyword(where.real());
    purposeItem = getKeyword(purpose.real);
    whoItem = getKeyword(who.real);
    message = '현실 기반';
  } else if (d2 === 2) {
    whereItem = getKeyword(where.fantasy());
    purposeItem = getKeyword(purpose.fantasy());
    whoItem = getKeyword(who.fantasy);
    message = '판타지 기반';
  }
  

  const item = (
    <>
      [{message}]<br />
      <span className='blue'>{purposeItem}</span> 위해<br />
      <span className='blue'>{whereItem}</span>에서 온<br />
      <span className='blue'>{genderItem}</span> <span className='blue'>{whoItem}</span>.
    </>
  );

  return item;
};

export const getStatus = () => {
  const statusItem = getKeyword(CharacterData.status);
  const novilityItem = getKeyword(CharacterData.nobility);
  let item;

  if (statusItem === '귀족') {
    item = `${statusItem} - ${novilityItem}`;
  } else {
    item = statusItem;
  }

  return item;
};

export const getSuperPower = () => {
  const typeItem = getKeyword(SuperPowerData.type);
  const powerItem = getKeyword(SuperPowerData.power);

  const item = (
    <>
      [ 타입 ]<br />
      <span className='blue'>{typeItem}</span><br />
      [ 능력 ]<br />
      <span className='blue'>{powerItem}</span>
    </>
  );

  return item;
};

export const getClass = () => {
  const d2 = getKeyword([ 1, 2, ]);
  let item;
  let message;

  if (d2 === 1) {
    item = getKeyword(CharacterData.class.real);
    message = '현실 기반';
  } else {
    item = getKeyword(CharacterData.class.fantasy);
    message = '판타지 기반';
  }
  return (
    <>
      [ {message} ]
      <span className='blue-block'>{item}</span>
    </>
  );
};