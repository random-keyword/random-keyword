import React from 'react';
import { RandomKeywordData } from '@data/RandomKeywordData';
import { v4 as uuid } from 'uuid';

const WordList = () => {
  
  const { 
    zodiac,
  } = RandomKeywordData;

  return (
    <>
      {zodiac.map((value) => (
        <p key={uuid()}>{ `${value}` }</p>
      ))}
    </>
  );
};

export default WordList;