import { RandomKeywordData } from '@data/RandomKeywordData';
import { getKeyword } from '@utils/getKeyword';
import { v4 as uuid } from 'uuid';

const {
  random, tool, tableWare, astronomy, fruit,
  vegetable, gem, weather, job, status,
  novility, metal, figure, body, state,
  weapon, shield, genre, sins, zodiac,
  breastSize, type, asteria, race, creature,
} = RandomKeywordData;

export const totalCount = (random.length - 27) + tool.length + tableWare.length + astronomy.length + fruit.length
+ vegetable.length + gem.length + weather.length + job.length + (status.length - 1) + novility.length + metal.length
+ figure.length + body.length + state.length + weapon.length + shield.length + genre.length + zodiac.length
+ sins.length + breastSize.length + type.length + asteria.length + race.length + creature.length;

export const getRandomKeywordDetail = () => {
  const item = getKeyword(RandomKeywordData.random);
  let newItem;

  if (item === '공구') {
    newItem = getKeyword(tool);
    return newItem;
  } else if (item === '천체') {
    newItem = getKeyword(astronomy);
    return newItem;
  } else if (item === '천문학') {
    newItem = getKeyword(astronomy);
    return newItem;
  } else if (item === '식기') {
    newItem = getKeyword(tableWare);
    return newItem;
  } else if (item === '과일') {
    newItem = getKeyword(fruit);
    return newItem;
  } else if (item === '야채') {
    newItem = getKeyword(vegetable);
    return newItem;
  } else if (item === '채소') {
    newItem = getKeyword(vegetable);
    return newItem;
  } else if (item === '보석') {
      newItem = getKeyword(gem);
      return newItem;
  } else if (item === '암석') {
    newItem = getKeyword(gem);
    return newItem;
  } else if (item === '기상') {
    newItem = getKeyword(weather);
    return newItem;
  } else if (item === '직업') {
    newItem = getKeyword(job);
    return newItem;
  } else if (item === '신분') {
    newItem = getKeyword(status);

    if (newItem === '귀족') {
      const novilityItem = getKeyword(novility);
      return `신분/${newItem}(${novilityItem})`;
    } else {
      return `신분/${newItem}`;
    }
  } else if (item === '합금') {
    newItem = getKeyword(metal);
    return newItem;
  } else if (item === '도형') {
    newItem = getKeyword(figure);
    return newItem;
  } else if (item === '다면체') {
    newItem = getKeyword(figure);
    return newItem;
  } else if (item === '신체') {
    newItem = getKeyword(body);
    return newItem;
  } else if (item === '특징') {
    newItem = getKeyword(state);
    return newItem;
  } else if (item === '무기') {
    newItem = getKeyword(weapon);
    return newItem;
  } else if (item === '방패') {
    newItem = getKeyword(shield);
    return newItem;
  } else if (item === '장르') {
    newItem = getKeyword(genre);
    return newItem;
  } else if (item === '황도 12궁') {
    newItem = getKeyword(zodiac);
    return newItem;
  } else if (item === '타입') {
    newItem = getKeyword(type);
    return newItem;
  } else if (item === '별자리') {
    newItem = getKeyword(asteria);
    return newItem;
  } else if (item === '칠죄종') {
    newItem = getKeyword(sins);
    return newItem;
  } else if (item === '가슴 사이즈') {
    newItem = getKeyword(breastSize);
    return newItem;
  } else if (item === '종족') {
    newItem = getKeyword(race);
    return newItem;
  } else if (item === '환상종') {
    newItem = getKeyword(creature);
    return newItem;
  } else {
    return item;
  }
};

export const getRandomKeyword = (number) => {
  const box = [];
  const anotherBox = [];
  
  for (let i = 0; i < number; i++) {
    const item = getRandomKeywordDetail();

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

  return box.map((value, index) => (
    <span className='blue-block' key={uuid()}>{index + 1}. {value}</span>
  ));
};