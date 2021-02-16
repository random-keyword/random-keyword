import React from 'react';
import { ColorData } from '@data/OtherData';
import { v4 as uuid } from 'uuid';

export const getColor = () => {
  const colorItem = ColorData.oneColor();
  const contrast = ColorData.contrast(colorItem);

  const red = parseInt(colorItem.substr(0, 2), 16);
  const green = parseInt(colorItem.substr(2, 2), 16);
  const blue = parseInt(colorItem.substr(4, 2), 16);

  const bg = {
    background: `#${colorItem}`,
  };

  const color = {
    color: `${contrast}`,
  };

  return (
    <p className='color-item' style={bg} key={uuid()}>
      <span className='normal' style={color}>#{colorItem} ({red}, {green}, {blue})</span>
    </p>
  );
};

export const get5Color = () => {
  const item = [];
  for (let i = 0; i < 5; i++) {
    item.push(getColor());
  }

  return item;
};