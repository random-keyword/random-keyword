import React from 'react';
import { backStoryData } from '@data/CharacterData';
import { v4 as uuid } from 'uuid';

// backStoryData.where.real.splice(40, 8);

const WordList = () => {
  return (
    <>
      {backStoryData.purpose.fantasy().map((value, index) => (
        <p key={uuid()}>{ `${value}` }</p>
      ))}
    </>
  );
};

export default WordList;