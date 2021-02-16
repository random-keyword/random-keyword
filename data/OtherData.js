export const GenreData = [
  'SF', 'SF/스페이스 오페라', 'SF/스팀펑크', 'SF/디젤펑크', 'SF/사이버펑크',
  'SF/포스트 아포칼립스', '포스트 아포칼립스/좀비 아포칼립스', '포스트 아포칼립스/에일리언 아포칼립스', '포스트 아포칼립스/뉴클리어 아포칼립스', '포스트 아포칼립스/판데믹 아포칼립스',
  '포스트 아포칼립스/EMP 아포칼립스', 'SF/디스토피아', '판타지', '판타지/어반 판타지', '판타지/다크 판타지',
  '판타지/로맨스 판타지', '판타지/게임 판타지', '판타지/하이 판타지', '판타지/로우 판타지', '무협',
  '배틀물', '배틀물/이능력 배틀물', '배틀물/대리 몬스터물', '배틀물/미소녀 배틀물', '배틀물/두뇌 배틀',

  '법정물', '추리물', '로맨스물', '이세계물', '마법 소녀물',
  '치유물', '메카물', '루프물', '피카레스크', '히어로물',
  'TS물', '개그물', '일상물', '밀리터리물', '전기물',
  '학원물', '시간여행물', '스릴러', '느와르', '첩보물',
];

export const ZodiacData = [
  '거문고자리', '게자리 (황도 12궁 거해궁)', '고래자리', '고물자리', '공기펌프자리',
  '공작자리', '궁수자리 (황도 12궁 인마궁)', '그물자리', '극락조자리', '기린자리',
  '까마귀자리', '나침반자리', '날치자리', '남십자자리', '남쪽물고기자리',
  '남쪽삼각형자리', '남쪽왕관자리', '도마뱀자리', '독수리자리', '돌고래자리',
  '돛자리', '두루미자리', '마차부자리', '망원경자리', '머리털자리',

  '목동자리', '물고기자리 (황도 12궁 쌍어궁)', '물뱀자리', '물병자리 (황도 12궁 보병궁)', '바다뱀자리',
  '방패자리', '백조자리', '뱀자리', '뱀주인자리 (황도 13궁 사견궁)', '봉황자리',
  '북쪽왕관자리', '비둘기자리', '사냥개자리', '사자자리 (황도 12궁 사자궁)', '살쾡이자리',
  '삼각형자리', '세페우스자리', '센타우루스자리', '시계자리', '쌍둥이자리 (황도 12궁 쌍자궁)',
  '안드로메다자리', '양자리 (황도 12궁 백양궁)', '염소자리 (황도 12궁 마갈궁)', '에리다누스자리', '오리온자리',

  '외뿔소자리', '용자리', '용골자리', '육분의자리', '이리자리',
  '인디언자리', '작은개자리', '작은곰자리', '작은사자자리', '작은여우자리',
  '전갈자리 (황도 12궁 천갈궁)', '제단자리', '조각가자리', '조각칼자리', '조랑말자리',
  '직각자자리', '처녀자리 (황도 12궁 처녀궁)', '천칭자리 (황도 12궁 천칭궁)', '카멜레온자리', '카시오페이아자리',
  '컴퍼스자리', '컵자리', '큰개자리', '큰곰자리', '큰부리새자리',

  '테이블산자리', '토끼자리', '파리자리', '팔분의자리', '페가수스자리',
  '페르세우스자리', '현미경자리', '헤라클레스자리', '화가자리', '화로자리',
  '화살자리', '황새치자리', '황소자리 (황도 12궁 금우궁)',
];

export const ColorData = {
  oneColor: () => {
    const box = [];
    let hex;

    for (let i = 0; i < 3; i++) {
      hex = Math.ceil(Math.random() * 255).toString(16).padStart(2, 0).toUpperCase();
      box.push(hex);
    }

    return box.join('');
  },
  colors: (number) => {
    const hexBox = [];
    let box = [];
    let hex;

    for (let i = 0; i < number; i++) {
      for (let j = 0; j < 3; j++) {
        hex = Math.ceil(Math.random() * 255).toString(16).padStart(2, 0).toUpperCase();
        
        if (box.length === 3) {
          box = [];
          box.push(hex);
        } else {
          box.push(hex);
        }
      }

      hexBox.push(box.join(''));
    }

    return hexBox;
  },
};