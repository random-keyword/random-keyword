import { backStoryData, CharacterData } from '@data/CharacterData';
import { AccessoryData, ExtraData, ShoesData, UnderWearData } from '@data/ClothData';

const { head, earring, bracelet, neckclace, ring, wearDeco, } = AccessoryData;
const { bag, glasses, gloves, hat, manteau, mask, muffler, socks, watch, } = ExtraData;
const { male: shoesMale, female: shoesFemale, common: shoesCommon, } = ShoesData;
const { male: underMale, female: underFemale, } = UnderWearData;

export const NihilData = {
  race: [
    '휴미안', '엘피안', '다르크엘피안', '디엘피안', '우르키안',
    '듀아피안', '고블리안', '아스모디안', '고르고니안', '타이타니안',
    '디아볼리안', '엘리오시안', '오우간', '리아피안', '머메디안',
    '블라디안', '엘레멘티', '엔티안', '그렘리안', '오블리안',
    '불카니안', '드라고니안', '드라큘리안', '락토니안', '디모니안',

    '아스트리안', '엘리오스', '디아볼로스', '데미 셀레스티안',
    '셀레스티안', '아르탈른', '안드로이드', '사이보그', '언데드',
    '기어로비아', '고스티아', '이레귤러', '아크 아르탈른', '신룡',
    '마수', '마룡', '신수', '몬스터',
  ],
  NihilClass: [
    '영웅', '그림자술사', '음악가', '과학자', '암흑 기사',
    '도적', '신성 기사', '기사', '약초사', '검투사',
    '갑옷장인(대장장이)', '정비사', '정화사', '사제', '해결사',
    '무기 상인', '요리사', '강령술사', '정보 상인', '퇴역 장교',
    '사령술사', '무투사(맨몸으로 싸우는 투사)', '농부', '무법자', '소환사',
    '수도승', '살인청부업자', '신관', '점술사', '그림자 기사',
    '이단심판관', '어부', '왕', '왕자', '공주',
    '여왕', '황제', '여제', '용사', '퇴마사',
    '장의사', '시인', '주술사', '마왕', '예언가',
    '갑옷 상인', '약초 상인', '잡품 상인', '무기장인(대장장이)', '자연숭배자',

    '광투사', '야만투사', '정찰꾼', '해적', '산적',
    '현상금 사냥꾼', '교주', '원소 기사', '암살자', '주조사',
    '인형술사', '건달', '병사', '노예', '사냥꾼',
    '집사', '영매사', '암상인', '사서', '촌장',
    '마도과학자', '장교', '의료사', '간호원', '신부(종교)',

    '사기꾼', '파계승', '학자', '마도학자', '음양사',
    '항해사', '선장', '교사', '세계의 수호자', '조선공',
    '수호자', '모험가', '악마 소환사', '악마술사', '악마 기사',
    '교황', '음유시인',

    '원소 마법사', '암흑 마법사', '신성 마법사', '그림자 마법사', '소환 마법사',
    '정령 마법사', '마법투사', '마법 기사',
    
    '투사(검술사)', '투사(대검술사)', '투사(단검술사)', '투사(창술사)', '투사(둔기술사)',
    '투사(쌍검술사)', '투사(도끼술사)', '투사(쌍도끼술사)', '투사(쌍창술사)', '투사(사격술사)',
    '투사(저격술사)', '투사(궁술사)', '투사(석궁술사)', '투사(단창술사)', '투사(장창술사)',
    '투사(방패술사)', '투사(권술사)', '투사(장병기술사)',
  ],
  organization: [
    '구 대제국 황도 13 기사단', '대제국 흑도 13 기사단', '신 제국 기사단', '황금향 기사단', '레드 마운틴 도적단',
		'블루 스피어 도적단', '다크 스퀘어', '푸른 극락조 수호결사단', '블랙 윈터', '데스 아크스',
		'안티 노른', '매드 스펠즈', '블러드 라인', '데모닉 오더', '북방 레지스탕스',
		'수호자 연합', '정화기관', '까마귀 마녀단', '해골 교단', '명신교단',
		'파나믹 교단', '기계황신교', '기계신교', '신비교', '나티레네 교단',

		'종족연합', '반 종족연합', '파멸신교', '신성 교단', '만월교단',
    '태양신교',
  ],
};

export const NihilBackStoryData = {
  where: backStoryData.where.concat([
    '드라스 섬의 어딘가', '발라큐아 섬의 어딘가', '바르기스 대륙의 어딘가', '유센티아 대륙의 어딘가', '썩은 고원의 어딘가',
    '리자루스 제도의 어딘가', '조각 섬의 어딘가', '검은 협곡의 어딘가', '강철 제국의 어딘가', '신 제국의 어딘가',
    '고르고니아 제국의 어딘가', '하얀 숲의 어딘가', '드라코니르 왕국의 어딘가', '철벽 섬의 어딘가', '이름 없는 섬',
    '아란티아 해의 어딘가', '바르기스 해의 어딘가', '네프네린 해의 어딘가', '리자루스 해의 어딘가', '배들의 무덤의 어딘가',
    '셀레스티얼 렐름의 어딘가', '판테온 렐름의 어딘가', '엘레멘티 렐름의 어딘가', '아스트랄 렐름의 어딘가', '보이드 렐름의 어딘가',

    '이레귤러 렐름의 어딘가',
  ]),
  purpose: backStoryData.purpose.concat([
    '이레귤러의 봉인을 풀기', '이레귤러를 봉인하기',
  ]),
  gender: CharacterData.gender,
  who: NihilData.race.concat(NihilData.NihilClass),
};

export const AreaData = {
  대륙: [
    '드라스 섬', '발라큐아 섬', '엘카우스 섬', '셀레오르 섬', '철벽 섬',
    '바르기스 대륙', '유센티아 대륙', '검은 협곡', '하얀 숲', '썩은 고원',
    '조각 섬', '리자루스 제도', '바르기스 해', '네프네린 해', '리자루스 해',
    '배들의 무덤', '베마로스 해', '아란티아 해',
  ],
  드라스: [
    '산디아스 마을', '스톤마운틴 마을',
  ],
  발라큐아: [
    '빌레 마을', '발라큐아 마을', '헤르날 마을',
  ],
  엘카우스: [
    '베르메스 항구',
  ],
  셀레오르: [
    '키아니르 마을',
  ],
  철벽: [
    '엑세르노 마을', '레아닌 항구', '북방 레지스탕스 철벽의 요새', '카라미스 마을',
  ],
  바르기스대륙: [
    '오드론 마을', '레네토스 마을', '로가리아 마을', '블루 스피어 서부캠프', '사이리아 마을',
    '레드 마운틴 북부 기지', '레드 마운틴 남부 기지', '사라마 마을', '모르제 마을', '바르기스 마을',
    '레보네스 항구', '메세니움 마을', '디에스티 마을', '테라우스 고성', '데스트린 마을',
    '라보레누스 마을', '블루 스피어 동부캠프',
  ],
  유센티아대륙: [
    '베리나르 마을', '코르코스 마을', '수호자 연합 본부', '아즈토네아 마을', '바드웬 마을',
    '가르텐시아 마을', '가슈트렘 마을', '올가우스 고성', '엘피디온 마을', '우르고스 마을',
    '네델로스 마을', '레드 마운틴 스파로스 요새', '딜리키아 마을', '엘메우스 고성', '데크레헴 요새',
    '메드린 마을', '제비우스 고성', '고통의 숲', '기계의 숲', '스크렛 마을',
    '고르네우스 고성', '고르고니아 제국', '강철 제국', '신 제국', '드라코니르 왕국',
  ],
  바르기스해: [
    '루켈리아 마을',
  ],
  네프네린해: [
    '네프네린 마을',
  ],
  아란티아해: [
    '아란티아 마을',
  ],
  리자루스해: [
    '하누키아 마을',
  ],
  고르고니아: [
    '엘제이스 항구', '마람키아 마을', '타미움 마을', '레란타 마을', '텔슈타인 마을',
    '아스카플론 마을', '르나힘 마을', '스바티아 요새', '드라네이스 마을', '마그라스 마을',
    '에레디온 요새', '레드 마운틴 고르고니아 서부 기지', '레드 마운틴 고르고니아 동부 기지', '살로우 마을', '수도 딜나르스',
    '네아제른 요새', '마샤 마을', '엘덴타인 마을',
  ],
  드라코니르: [
    '에레니르 마을', '뎀버튼 요새', '브로시아 마을', '페데일 마을', '마르보레스 마을',
    '수도 베마로스', '아즈마르 요새',
  ],
  신: [
    '드람노르 마을', '노르제아 마을', '쉐누아 마을', '드라베이츠 마을', '드라그메른 마을',
    '아트레닐 마을', '마일레누스 마을', '쟈그로 마을', '베르피 마을', '수도 엘카르스',
    '오즈린 요새', '샤샤스 마을', '브키아 마을', '발카니아 요새',
  ],
  강철: [
    '로스네이크 요새', '록사리아 마을', '아스톤 요새', '에르페디 마을', '하르니디움 마을',
    '모레슬리 요새', '샤하리스 마을', '리에니스 마을', '라글레스 마을', '게르힘 마을',
    '수도 데로무스',
  ],
  리자루스: [
    '고른시아 마을', '리자루스 마을', '그론길스 마을', '나르피아 마을', '파르타니엄 마을',
  ],
  썩은고원: [
    '라르그 전투기지', '부글라 전투기지', '라두스 전투기지', '펠레스 전투기지', '랄카리스 마을',
    '아라고스 마을',
  ],
};

export const NihilClothesData = {
  gender: [
    '남성', '여성',
  ],
  male: {
    top: [
      '셔츠 기반', '티셔츠 기반', '스웨터 기반', '후드티 기반', '복대 기반',
      '맨몸', '복부 붕대', '가슴 보호구', '어깨 보호구', '팔 보호구',
      '한쪽 팔 어깨 + 팔 보호구', '양팔 붕대', '한쪽 팔 붕대', '가슴 + 어깨 보호구', '갑옷 상의 풀세트',
      '소매만 있는 의상', '한쪽 소매만 있는 의상', '민소매 기반', '민소매 + 팔토시', '민소매 + 한쪽 팔토시',
      '목 보호대', '목 보호대 + 복대', '목토시', '상의 + 케이프', '한벌옷',

      '어깨 노출이 있는 셔츠 기반', '허리 노출이 있는 셔츠 기반', '가슴 노출이 있는 셔츠 기반', '어깨 노출이 있는 티셔츠 기반', '허리 노출이 있는 티셔츠 기반',
      '가슴 노출이 있는 티셔츠 기반', '어깨 노출이 있는 스웨터 기반', '허리 노출이 있는 스웨터 기반', '가슴 노출이 있는 스웨터 기반', '어깨 노출이 있는 후드티 기반',
      '허리 노출이 있는 후드티 기반', '가슴 노출이 있는 후드티 기반', '긴 티셔츠 기반', '짧은 티셔츠 기반', '긴 셔츠 기반',
      '짧은 셔츠 기반', '긴 스웨터 기반', '짧은 스웨터 기반', '긴 후드티 기반', '짧은 후드티 기반',

      '판금 전신 갑옷', '청동 전신 갑옷', '강철 전신 갑옷',

      '-', '-', '-', '-',
    ],
    bottom: [
      '긴바지 기반', '반바지 기반', '한쪽이 짧은 바지 기반', '아주 짧은 바지 기반', '허리 보호구',
      '다리 보호구', '허벅지 보호구', '한쪽만 다리 보호구', '한쪽만 허벅지 보호구', '허벅지 보호구 + 한쪽 다리 보호구',
      '바지 + 천쪼가리', '천쪼가리만 착용', '다리에 붕대', '발토시', '털이 붙어있는 바지',
      '벨트가 있는 바지', '갑옷 하의 풀세트',

      '-', '-', '-', '-',
    ],
    under: underMale.concat([
      '-', '-', '-', '-',
    ]),
    shoes: shoesMale.concat(shoesCommon, [
      '맨발', '맨발 + 붕대를 감음', '맨발 + 한쪽 발에만 붕대를 감음',

      '-', '-', '-', '-',
    ]),
  },
  female: {
    top: [
      '셔츠 기반', '티셔츠 기반', '스웨터 기반', '후드티 기반', '블라우스 기반',
      '복대 기반', '맨몸', '복부 붕대', '가슴 보호구', '어깨 보호구',
      '팔 보호구', '한쪽 팔 어깨 + 팔 보호구', '양팔 붕대', '한쪽 팔 붕대', '가슴 + 어깨 보호구',
      '갑옷 상의 풀세트', '소매만 있는 의상', '한쪽 소매만 있는 의상', '민소매 기반', '민소매 + 팔토시',
      '민소매 + 한쪽 팔토시', '목 보호대', '목 보호대 + 복대', '드레스 기반',

      '목토시', '상의 + 케이프', '한벌옷', '어깨 노출이 있는 셔츠 기반', '허리 노출이 있는 셔츠 기반',
      '가슴 노출이 있는 셔츠 기반', '어깨 노출이 있는 티셔츠 기반', '허리 노출이 있는 티셔츠 기반', '가슴 노출이 있는 티셔츠 기반', '어깨 노출이 있는 스웨터 기반',
      '허리 노출이 있는 스웨터 기반', '가슴 노출이 있는 스웨터 기반', '어깨 노출이 있는 후드티 기반', '허리 노출이 있는 후드티 기반', '가슴 노출이 있는 후드티 기반',
      '어깨 노출이 있는 블라우스 기반', '허리 노출이 있는 블라우스 기반', '가슴 노출이 있는 블라우스 기반', '어깨 노출이 있는 드레스 기반', '허리 노출이 있는 드레스 기반',
      '가슴 노출이 있는 드레스 기반', '긴 티셔츠 기반', '짧은 티셔츠 기반', '긴 셔츠 기반', '짧은 셔츠 기반',

      '긴 스웨터 기반', '짧은 스웨터 기반', '긴 후드티 기반', '짧은 후드티 기반', '긴 블라우스 기반',
      '짧은 블라우스 기반', '판금 전신 갑옷', '청동 전신 갑옷', '강철 전신 갑옷',

      '-', '-', '-', '-',
    ],
    bottom: [
      '긴바지 기반', '반바지 기반', '한쪽이 짧은 바지 기반', '아주 짧은 바지 기반', '허리 보호구',
      '다리 보호구', '허벅지 보호구', '한쪽만 다리 보호구', '한쪽만 허벅지 보호구', '허벅지 보호구 + 한쪽 다리 보호구',
      '바지 + 천쪼가리', '천쪼가리만 착용', '스커트 기반', '롱 스커트 기반', '미니 스커트 기반',
      '다리에 붕대', '발토시', '털이 붙어있는 바지', '털이 붙어있는 스커트', '벨트가 있는 바지',
      '벨트가 있는 스커트', '갑옷 하의 풀세트',

      '-', '-', '-', '-',
    ],
    under: underFemale.concat([
      '-', '-', '-', '-',
    ]),
    shoes: shoesFemale.concat(shoesCommon, [
      '맨발', '맨발 + 붕대를 감음', '맨발 + 한쪽 발에만 붕대를 감음',

      '-', '-', '-', '-',
    ]),
  },
  outer: [
    '털 망토', '망토', '가디건 기반', '재킷 기반', '롱 코트 기반',
    '코트 기반', '휘장이 달린 외투', '로브 기반', '가운 기반', '점퍼 기반',
    '케이프', '롱 케이프', '숏 케이프', '강화복', '강화 외골격', '롱 가디건 기반',
    '롱 점퍼', '크롭 가디건', '크롭 점퍼', '크롭 망토', '크롭 로브',
    '넝마를 걸침',

    '-', '-', '-', '-',
  ],
  acc: head.concat(ring, bracelet, earring, wearDeco, neckclace, [
    '-', '-', '-', '-',
  ]),
  extra: hat.concat(socks, manteau, mask, muffler, bag, gloves, glasses, watch, [
    '-', '-', '-', '-',
  ]),
  keyword: [
    '보석', '망사', '트임', '사각형', '자수 장식',
    '구형', '삼각형', '육각형', '도형', '고리',
    '패턴', '사슬', '벨트', '리본', '프릴',
    '휘장', '레이스', '날개', '해골', '송곳니',
    '털', '끈', '흉터', '문신', '노출',
    
    '천',

    '-', '-', '-', '-',
  ],
};