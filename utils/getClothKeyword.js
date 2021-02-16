import React from 'react';
import {
  BikiniData, BlouseData, CardiganData, CoatData, DressData,
  FashionData, HoodieData, JacketData, PantsData, SetClothData,
  ShirtData, ShoesData, SkirtData, SweaterData, TShirtData,
  UnderWearData, VestData
} from '@data/ClothData';
import { getKeyword } from '@utils/getKeyword';
import { ExtraData, AccessoryData } from '@data/ClothData';
import { CharacterData } from '@data/CharacterData';

export const count = {
  fashion: FashionData.length,
  jacket: JacketData.base.length,
  coat: CoatData.length,
  shirt: ShirtData.base.length * DressData.collar.length,
  vest: VestData.length,
  hoodie: HoodieData.length,
  Tshirt: TShirtData.base.length * DressData.neckline.length,
  sweater: SweaterData.length * DressData.neckline.length,
  cardigan: CardiganData.length,
  blouse: ((BlouseData.base.length - 1) * DressData.neckline.length) + ((BlouseData.base.length - 1) * DressData.collar.length),
  pants: PantsData.length,
  dress: DressData.base.length * DressData.neckline.length * DressData.silhouette.length,
  skirt: SkirtData.length,
  set: SetClothData.length,
  bikini: BikiniData.common.length + BikiniData.male.length + BikiniData.female.length,
  shoes: ShoesData.common.length + ShoesData.male.length + ShoesData.female.length,
  under: UnderWearData.male.length + UnderWearData.female.length,
  extra: ExtraData.bag.length + ExtraData.glasses.length + ExtraData.gloves.length + ExtraData.hat.length + ExtraData.manteau.length + ExtraData.mask.length + ExtraData.muffler.length + ExtraData.socks.length + ExtraData.watch.length,
  acc: AccessoryData.bracelet.length + AccessoryData.earring.length + AccessoryData.head.length + AccessoryData.neckclace.length + AccessoryData.ring.length + AccessoryData.wearDeco.length,
  hair: CharacterData.hair.length,
};

export const getJacket = () => {
  const { base, lapelShape, lapelWidth, } = JacketData;
  const baseItem = getKeyword(base);
  const lapelShapeItem = getKeyword(lapelShape);
  const lapelWidthItem = getKeyword(lapelWidth);
  let item;

  if (baseItem === ('블레이저' || '슈트 재킷')) {
    item = `${baseItem}(${lapelWidthItem} ${lapelShapeItem})`;
  } else {
    item = baseItem;
  }

  return item;
};

export const getShirt = () => {
  const baseItem = getKeyword(ShirtData.base);
  const collarItem = getKeyword(DressData.collar);
  let item;

  if (baseItem === '아이비리그 셔츠') {
    item = baseItem;
  } else {
    item = `${baseItem}(${collarItem})`;
  }

  return item;
};

export const getTshirt = () => {
  const baseItem = getKeyword(TShirtData.base);
  const neckItem = getKeyword(DressData.neckline);

  const item = `${neckItem} ${baseItem}`;
  
  return item;
};

export const getSweater = () => {
  const baseItem = getKeyword(SweaterData);
  const neckItem = getKeyword(DressData.neckline);

  const item = `${neckItem} ${baseItem}`;

  return item;
};

export const getBlouse = () => {
  const baseItem = getKeyword(BlouseData.base);
  const collarItem = getKeyword(DressData.collar);
  const neckItem = getKeyword(DressData.neckline);
  const d2 = getKeyword([ '1', '2', ]);
  let item;
  
  if (d2 === '1') {
    if (baseItem === '칼라리스 블라우스') {
      item = baseItem;
    } else {
      item = `${baseItem}(${collarItem})`;
    }
  } else if (d2 === '2') {
    if (baseItem === '칼라리스 블라우스') {
      item = baseItem;
    } else {
      item = `${baseItem}(${neckItem})`;
    }
  }

  return item;
};

export const getDress = () => {
  const baseItem = getKeyword(DressData.base);
  const neckItem = getKeyword(DressData.neckline);
  const silhouetteItem = getKeyword(DressData.silhouette);

  const item = (
    <>
      {neckItem} {baseItem}<br />
      ({silhouetteItem})
    </>
  );

  return item;
};
export const getShoes = () => {
  const male = getKeyword(ShoesData.male);
  const female = getKeyword(ShoesData.female);
  const common = getKeyword(ShoesData.common);

  const maleCount = ShoesData.male.length;
  const femaleCount = ShoesData.female.length;
  const commonCount = ShoesData.common.length;

  const item = (
    <>
      공용: <span className='blue'>{common}</span>({commonCount})<br />
      남성용: <span className='blue'>{male}</span>({maleCount})<br />
      여성용: <span className='blue'>{female}</span>({femaleCount})
    </>
  );

  return item;
};
export const getUnderWear = () => {
  const male = getKeyword(UnderWearData.male);
  const female = getKeyword(UnderWearData.female);

  const maleCount = UnderWearData.male.length;
  const femaleCount = UnderWearData.female.length;

  const item = (
    <>
      남성용: <span className='blue'>{male}</span>({maleCount})<br />
      여성용: <span className='blue'>{female}</span>({femaleCount})
    </>
  );

  return item;
};
export const getBikini = () => {
  const male = getKeyword(BikiniData.male);
  const female = getKeyword(BikiniData.female);
  const common = getKeyword(BikiniData.common);

  const maleCount = BikiniData.male.length;
  const femaleCount = BikiniData.female.length;
  const commonCount = BikiniData.common.length;

  const item = (
    <>
      남성용: <span className='blue'>{common}</span>({commonCount})<br />
      남성용: <span className='blue'>{male}</span>({maleCount})<br />
      여성용: <span className='blue'>{female}</span>({femaleCount})
    </>
  );

  return item;
};

export const getExtra = () => {
  const {
    muffler, hat, manteau, bag, socks,
    gloves, glasses, watch, mask,
  } = ExtraData;

  const mufflerItem = getKeyword(muffler);
  const hatItem = getKeyword(hat);
  const manteauItem = getKeyword(manteau);
  const bagItem = getKeyword(bag);
  const socksItem = getKeyword(socks);
  const glovesItem = getKeyword(gloves);
  const glassesItem = getKeyword(glasses);
  const watchItem = getKeyword(watch);
  const maskItem = getKeyword(mask);

  const item = (
    <>
      목도리: <span className='blue'>{mufflerItem}</span> ({muffler.length}개)<br />
      모자: <span className='blue'>{hatItem}</span> ({hat.length}개)<br />
      망토: <span className='blue'>{manteauItem}</span> ({manteau.length}개)<br />
      가방: <span className='blue'>{bagItem}</span> ({bag.length}개)<br />
      양말: <span className='blue'>{socksItem}</span> ({socks.length}개)<br />
      장갑: <span className='blue'>{glovesItem}</span> ({gloves.length}개)<br />
      안경: <span className='blue'>{glassesItem}</span> ({glasses.length}개)<br />
      시계: <span className='blue'>{watchItem}</span> ({watch.length}개)<br />
      가면(마스크): <span className='blue'>{maskItem}</span> ({mask.length}개)
    </>
  );

  return item;
};

export const getAccessory = () => {
  const {
    bracelet, earring, head, neckclace, ring,
    wearDeco,
  } = AccessoryData;

  const braceletItem = getKeyword(bracelet);
  const earringItem = getKeyword(earring);
  const headItem = getKeyword(head);
  const neckclaceItem = getKeyword(neckclace);
  const ringItem = getKeyword(ring);
  const wearDecoItem = getKeyword(wearDeco);

  const item = (
    <>
      머리 장식: <span className='blue'>{headItem}</span> ({head.length}개)<br />
      반지: <span className='blue'>{ringItem}</span> ({ring.length}개)<br />
      목걸이: <span className='blue'>{neckclaceItem}</span> ({neckclace.length}개)<br />
      귀걸이: <span className='blue'>{earringItem}</span> ({earring.length}개)<br />
      팔찌: <span className='blue'>{braceletItem}</span> ({bracelet.length}개)<br />
      옷 장식: <span className='blue'>{wearDecoItem}</span> ({wearDeco.length}개)<br />
    </>
  );

  return item;
};