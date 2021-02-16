import React from 'react';
import { NihilData, NihilBackStoryData } from '@data/NihilData';
import { RandomKeywordData } from '@data/RandomKeywordData';
import { CharacterData, backStoryData } from '@data/CharacterData';
import { GenreData } from '@data/OtherData';
import { v4 as uuid } from 'uuid';
import { MinorTarotData } from '@data/CardData';

const WordList = () => {
  // const { race, NihilClass, organization, } = NihilData;
  const { where, purpose, gender, who, } = backStoryData;
  
  const { 
    random, state, weapon, shield, genre,
    job,
  } = RandomKeywordData;

  const {
    race, class: charClass, characterRole, characterImage, positive,
    negative, attribute,
  } = CharacterData;

  return (
    <>
      {/* {attribute.map((value) => (
        <p key={uuid()}>{ `${value}` }</p>
      ))} */}
      {/* {MinorTarotData.suits.map(suit => MinorTarotData.card.map(item => (
        <p key={uuid()}>'{suit} - {item}'</p>
      )))} */}
    </>
  );
};

export default WordList;