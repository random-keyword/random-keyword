import React from 'react';
import { ZodiacData } from '@data/OtherData';
import { PlayingCardData, MajorTarotData, MinorTarotData, MinorMessageData } from '@data/CardData';
import { getKeyword } from '@utils/getKeyword';
import { v4 as uuid } from 'uuid';

export const count = {
  zodiac: ZodiacData.length,
  majorTarot: MajorTarotData.crad.length,
  minorTarot: MinorTarotData.suits.length * MinorTarotData.card.length,
  playing: PlayingCardData.length,
};

export const getPlaying5Card = () => {
  const box = [];
  const anotherBox = [];
  
  for (let i = 0; i < 5; i++) {
    const item = getKeyword(PlayingCardData);

    if (anotherBox.includes(item)) {
      anotherBox.push(item);
      i--;
    } else {
      if (box.includes(item)) {
        anotherBox.push(item);
        i--;
      } else {
        box.push(item);
      }
    }
  }
  
  const item = box.map(value => (
    <span className='blue-block' key={uuid()}>{value}</span>
  ));

  return item;
};

export const getMajor = () => {
  const directionItem = getKeyword(MajorTarotData.direction);
  const cardItem = getKeyword(MajorTarotData.crad);

  return {
    direction: directionItem,
    card: cardItem,
  };
};

export const getMinor = () => {
  const suitItem = getKeyword(MinorTarotData.suits);
  const cardItem = getKeyword(MinorTarotData.card);
  
  return {
    card: `${suitItem} - ${cardItem}`,
    message: MinorMessageData[`${suitItem} - ${cardItem}`],
  };
};