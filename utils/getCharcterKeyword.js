import React from 'react';
import { CharacterData, SuperPowerData, backStoryData } from '@data/CharacterData';
import { getKeyword } from '@utils/getKeyword';
import { RandomKeywordData } from '@data/RandomKeywordData';

const { where, purpose, gender, who, } = backStoryData;

export const count = {
  genre: RandomKeywordData.genre.length,
  backStory: where.length * purpose.length * gender.length * who.length,
  role: CharacterData.characterRole.length,
  type: CharacterData.characterImage.length,
  race: CharacterData.race.length,
  charClass: CharacterData.class.length,
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
  const whereItem = getKeyword(backStoryData.where);
  const purposeItem = getKeyword(backStoryData.purpose);
  const genderItem = getKeyword(backStoryData.gender);
  const whoItem = getKeyword(backStoryData.who);

  const item = (
    <>
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