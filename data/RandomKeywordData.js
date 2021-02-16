import GemData from '@data/GemData';
import { CharacterData } from '@data/CharacterData';

export const RandomKeywordData = {
	random: [
    '가면', '가루', '가운', '목욕 가운', '영혼',
    '가발', '가방', '가슴 붕대', '가시', '가죽',
    '가죽 장갑', '각목', '갓', '거울', '소녀',
    '계산기', '계약서', '고글', '고아', '고양이 귀 머리띠',
    '고통', '공', '공감각', '청년', '공구',
    '광명', '공기', '공기총', '과거의 망령', '과일',
    '광속', '음속', '야구', '아광속', '아음속',
    '초광속', '초음속', '교복', '군복', '귀걸이',
    '귀도리', '귀마개', '그림자', '글러브', '금속',
    '기갑의', '기모노', '기적', '깃털', '깨끗한',

    '꼬리', '꽃', '나무', '나뭇잎', '나비넥타이',
    '미술용 나이프', '나침반', '낙하산', '날개', '성인',
    '낡은 의상', '낡은 칼', '내복', '넥타이', '노안',
    '노출증', '노트북', '농구공', '농기구', '니트양말',
    '다중인격', '다트', '단단한', '단신', '단안경',
    '담배', '담뱃대', '대걸레', '덫', '로켓(목걸이)',
    '살생부', '데일리', '도감', '도복', '독약',
    '돋보기', '동성애자', '동안', '동정', '두개골',
    '등산 배낭', '진통제', '떡', '라켓', '랜턴',
    '램프', '렌즈', '로리콤', '로브', '로켓 추진기',

    '소년', '마마콤', '마법서', '마석', '마술',
    '마스크 (복면)', '마약', '막대기', '만년필', '망토',
    '맹독', '머리끈', '머리띠', '머리핀', '머플러',
    '메가폰', '메신저백', '명부', '목걸이', '목도리',
    '목줄', '못생긴', '물총', '물풍선', '미다스의 손',
    '무술', '무테안경', '무표정', '문신', '물약',
    '미로', '미망인', '바가지', '바구니', '바리게이트',
    '바이저 마스크', '바퀴', '반무테안경', '반지', '발광',
    '발라클라바(안면마스크)', '발목양말', '발찌', '발차기', '발토시',
    '해군', '밧줄', '방독면', '방사능', '버선',

    '버킷리스트', '범재', '벙어리 장갑', '벨트', '변태',
    '작별', '병풍', '보석', '복수심', '부적',
    '부채', '부케', '부활', '부활석', '불꽃',
    '붓', '붕대', '브로치', '비녀', '비늘',
    '비니', '비상', '비수', '빛', '빠른',
    '빵', '뼈', '뿌리', '뿔', '뿔테안경',
    '이차원', '사이코패스', '사탕', '산소통', '상처',
    '새싹', '새장', '색소', '색안경', '생크림',
    '샤프', '샤프심', '서류가방', '선글라스', '성전환(TS)',
    '성소수자', '성수', '소시오패스', '소환', '손목시계',

    '피난민', '쇠구슬', '쇼타콤', '수면양말', '수염',
    '술', '스냅백', '스마트폰', '스카프', '환각제',
    '스프레이', '스피드 스터', '스피커', '슬픔', '시약',
    '식물', '시체', '식물인간', '신성력', '신호탄',
    '신화', '실내화', '실크 해트', '실험도구', '노랫말',
    '십자가', '씨앗', '아령', '아름다운 미소', '천사 링 머리띠',
    '악마 뿔 머리띠', '악마의 날개', '악장', '안경', '알람시계',
    '알몸', '알비노 (백색증)', '암석', '야구공', '얀데레',
    '양말', '양산', '양성애자', '얼음', '에코백',
    '연필', '염동력', '염주', '예지력', '오존',

    '오토바이', '오페라 글러브', '오피스룩', '와인', '왕관(동양)',
    '왕관(서양)', '외톨이', '요리', '욕데레', '우산',
    '운동복', '운동화', '원반', '은밀한', '합금',
    '의수', '의안', '의족', '이끼', '이빠진 무기',
    '이어폰', '인공심장', '인공지능', '일회용품', '자석',
    '자연', '자폭', '잠옷', '장신', '재생력',
    '잭 오 랜턴', '저울', '전자공학', '전자기기', '전자기파',
    '제 3의 눈', '젤리', '종이', '죄수복', '주사위',
    '주술', '중력', '지뢰', '지우개', '지팡이',
    '채소', '책', '책가방', '처녀', '천리안',

    '천사의 날개', '천재', '철가방', '철조망', '철테안경',
    '체크무늬', '초감각(감지 능력)', '초록', '초커', '촛불',
    '총기', '총알', '축구공', '츄리닝', '츤데레',
    '치마바지', '칠죄종', '카드', '카리스마', '칼날',
    '캐리어', '캐멀백', '캔트지(종이)', '컴퓨터', '케이크',
    '쿠키', '큐브', '키메라', '탄알집', '탈리스만',
    '탈옥', '탈주', '태엽', '털복숭이', '털양말',
    '투포환', '트랜스젠더', '파괴', '파레트', '파장',
    '파파콤', '팔랑귀', '팔찌', '팔토시', '노인',
    '풍선', '페인트', '페인트탄', '펜', '펜던트',

    '폭발물', '프리즘', '피', '피어싱', '항공모함',
    '해골', '해독제', '핸드백', '행운', '향초',
    '허수아비', '헤드셋', '헤드폰', '헤어브릿지', '헬멧',
    '호리병', '호박', '화관', '화장품', '환자복',
    '후라이팬', '흉터', '희망', '히메로리', 'CD',
    'EMP', '유틸리티 벨트', '원한', '미련', '애착',
    '짝사랑', '외사랑', '전기', '바람', '화산',
    '어둠', '폭발', '희생', '아포칼립스', '거래',
    '엑소시즘', '초능력', '초상능력', '마법', '마력',
    '집착', '계승자', '멸망', '구원', '혈흔',

    '지문', '꿰맨 흔적', '도벽', '수술자국', '수술',
    '외지인', '잠입', '암살', '이중인격', '강박증',
    '결벽증', '분노조절장애', '다혈질', '도술', '소환술',
    '살인무술', '권법', '태극권', '검도', '무에타이',
    '복싱', '킥복싱', '태권도', '공수도', '유도',
    '다른 차원', '다른 세계', '돌풍', '파워드 슈트', '에너지 아머',
    '강화 외골격', '기계 슈트', '수건', '패기', '혈안',
    '태블릿 PC', '완장', '동전', '트럼프 카드', '속임수',
    '마그마', '용암', '화염', '불', '물',
    '눈 결정', '돌', '돌덩이', '바위', '꽃잎',

    '이파리', '창조', '섬광', '바이러스', '백신',
    '세포', '면역', '신앙', '종교', '동물',
    '의인화', '살인', '살생', '살해', '곤충',
    '세계', '핵전쟁', '핵미사일', '전략무기', '핵',
    '핵폭탄', '파멸', '멸종', '멸족', '재시작',
    '환생', '괴물', '몬스터', '인형', '스켈레톤',
    '미라', '강시', '좀비', '망자', '불사자',
    '고대인', '고대종족', '고대의', '고대', '태고의',
    '태초의', '태초', '시간', '암거래', '암흑',
    '칠흑', '공간', '시간여행', '타임머신', '시간이동',

    '공간이동', '텔레포트', '미래', '과거', '현재',
    '상상', '초원', '고원', '평원', '과수원',
    '식인', '식인종', '꿈', '수면', '마취',
    '마취탄', '마취총', '화장', '눈물', '금은보화',
    '보물지도', '보물', '유적지', '금단의 구역', '제단',
    '제물', '희생양', '살의', '증오', '희열',
    '족쇄', '기쁨', '분노', '즐거움', '공포',
    '사랑', '혐오', '욕망', '수치심', '질투',
    '죄책감', '승부욕', '악의 조직', '비밀 결사', '자경단',
    '클론', '현자의 돌', '혈석', '소환석', '마법석',

    '천상계', '천국', '지옥', '마계', '마법소녀',
    '난민', '이세계', '저승', '성불', '잎사귀',
    '잎', '왕권', '도그 태그 (군번줄)', '안대', '독극물',
    '독성물질', '발암물질', '핵융합', '번개', '자기장',
    '투명', '전류', '지진', '해일', '쓰나미',
    '재앙', '악기', '리본 장식', '도끼빗', '빗',
    '꼬리빗', '빗자루', '쓰레기통', '보물상자', '나무상자',
    '지도', '마도서', '죽음', '삶', '생명',
    '소멸', '수갑', '쇠사슬', '사슬', '석양',
    '우주', '스승', '제자', '불행', '비극',

    '희극', '코즈믹 호러', '크툴루 신화', '석유', '우유',
    '고대의 문명', '쿨데레', '메가데레', '보코데레', '다루데레',
    '빈데레', '위선자', '위악자', '가슴 사이즈/무유(無乳)', '가슴 사이즈/미유(微乳)',
    '가슴 사이즈/빈유(貧乳)', '가슴 사이즈/평유(平乳)', '가슴 사이즈/거유(巨乳)', '가슴 사이즈/폭유(爆乳)', '가슴 사이즈/초유(超乳)',
    '무기', '갑옷', '리본', '망사', '스타킹',
    '노출', '작위', '19금', '시공간', '도형',
    '스페이드', '클로버', '다이아몬드', '하트', '타로 카드',
    '낙인', '괴인', '광석', '광물', '마이크',
    '양아치', '울상', '미소', '웃음', '고독',
    '봄', '여름', '행복', '가을', '겨울',

    '자연재해', '차원', '창세', '핸드폰', '사전',
    '백과사전', '감각', '촉각', '청각', '시각',
    '미각', '통각', '지각력', '부하', '통솔력',
    '하렘', '수학', '역하렘', '쓰레기', '쓰레기더미',
    '신체 불구', '성불구', '하드 디스크', '플로피 디스크', '방어구',
    '묵주', '교단', '종교인', '사이비 종교', '이빨',
    '짐승의 이빨', '송곳니', '짐승의 송곳니', '짐승 귀', '신사',
    '기사도', '불치병', '전염병', '야채', '돈',
    '화폐', '정장', '주사기', '아이스크림', '외투',
    '방정식', '과학', '수식', '커피', '이종족',

    '우주적 존재', '신', '크래킹', '해킹', '보안카드',
    '자물쇠', '플레잉 카드', '열쇠', '승리자', '패배자',
    '승리', '패배', '굴복', '오만', '자만',
    '색욕', '나태', '절망', '반란', '혁명',
    '매력', '지혜', '지능', '건강', '민첩',
    '근력', '무의식', '랜덤', '보호', '수호자',
    '정의', '천사', '악마', '마귀', '장애',
    '유신론자', '무신론자', '허무주의자', '이타주의자', '이기주의자',
    '정신병', '공포증', '트라우마', '낮은 지위', '높은 지위',
    '소시민', '사악', '조종', '세뇌', '통제',

    '폭주', '역경', '고난', '시련', '무한',
    '궁술', '창술', '무예', '검술', '격투기',
    '신선', '선인', '선지자', '예지', '예언',
    '투시', '정찰', '디스펠', '원거리 딜러', '근거리 딜러',
    '딜러', '탱커', '역적', '힐러', '반역',
    '반역자', '추격자', '스토킹', '스토커', '목재',
    '온기', '한기', '냉기', '열기', '병기',
    '모니터', '액정', '고체', '기체', '액체',
    '전자담배', '화학무기', '독가스', '가스', '막대사탕',
    '뒤끝', '솜사탕', '서류', '협상', '후각 장애',

    '미각 장애', '통각 장애', '시각 장애', '촉각 장애', '후각',
    '청각 장애', '장애인', '정비', '장님', '털',
    '맹인', '광기', '책략가', '미치광이', '이성애',
    '동성애', '이상성애', '이상성애자', '중독', '두려움',
    '훈장', '전술', '전략', '핵무기', '옛날',
    '전투', '전쟁', '책략', '계략', '음모',
    '몰락', '다크서클', '불면증', '피곤함', '졸음',
    '기회주의자', '기회', '보이쉬한 여성', '걸리쉬한 남성', '여성',
    '남성', '가슴골', '명령', '임무', '시',
    '해병대', '노래', '공군', '음악', '재벌 2세',

    '얼음물', '부자', '재벌', '침', '땀',
    '노력하는 천재', '노력', '진화', '발전', '성장',
    '검투사', '노예', '시종', '감찰', '탄생',
    '달력', '사망', '타계', '변절자', '변절',
    '배신자', '배신', '강', '바닷가', '바다',
    '억지력', '고집불통', '고집', '히로인', '고뇌',
    '고민', '번뇌', '괴로움', '동화', '신체',
    '날카로움', '부드러움', '전설의', '전설', '황족',
    '왕족', '공주병', '왕자병', '관심병', '물욕',
    '승부사', '방출', '흡수', '에너지', '독',

    '투척', '포이즌', '자동차', '기차', '비행기',
    '전함', '우주전함', '우주함선', '머나먼 과거', '머나먼 미래',
    '원시부족', '원시인', '원시', '뼈다귀', '눈웃음',
    '바보', '지략가', '지략', '두뇌', '악',
    '환골탈태', '선', '개과천선', '흑마법', '고대마법',
    '고대무기', '고대병기', '고대문자', '문자', '감시자',
    '정령', '나르시스트', '역사개변', '육군', '마법소년',
    '역사', '미래개변', '이방인', '유토피아', '어린아이',
    '도망자', '감시', '비행', '정화', '오염',
    '다크히어로', '안티히어로', '히어로', '하녀', '무서움',

    '타락한 왕', '타락', '퍼즐', '환청', '환각',
    '환상', '망상', '현실', '생각', '플라스틱',
    '개인화기', '냉병기', '총', '화기', '탄알',
    '얼음 조각', '불바다', '돌멩이', '성벽', '벽돌',
    '비밀번호', '암호코드', '암호', '고대의 기록', '졸렬',

    '용기', '매서운 눈매', '날카로운 눈매', '부드러운 눈매', '사악한 미소',
    '환한 미소', '희미한 미소', '초가을', '초겨울', '초여름',
    '늦봄', '온풍', '냉풍', '야만인', '특징',
    '식기', '천체', '다면체', '초합금', '악당',
    '길잡이', '광신도', '살인자', '왕자', '공주',

    '하인', '시녀', '황녀', '황자', '빌런',
    '신분', '직업', '기온', '천문학', '이별',
    '병약', '허약', '약골', '두루마리', '심판',
    '심판자', '처단', '처벌', '처벌자', '처단자',
    '사냥', '사냥꾼', '살인마', '사형수', '방랑자',

    '무법자', '도박꾼', '기술자', '영웅', '용사',
    '떠돌이', '방랑', '강탈', '초능력자', '습격',
    '기습', '공격', '방어', '방패', '신성',
    '신성모독', '퇴역 군인', '사기꾼', '범죄자', '저항군',
    '등불', '횃불', '불빛', '독재자', '아귀',

    '귀신', '유령', '부두술', '생존', '수라',
    '야차', '아수라', '계약', '계약자', '장르',
    '성배', '창조력', '재산', '장엄함', '영주',
    '교역', '무역', '경쟁', '휴식', '평화',
    '협박', '토론', '교섭', '억압', '친숙함',

    '외교', '만족', '지폐', '우정', '균형',
    '성취감', '풍족', '풍족함', '치유', '포식',
    '손실', '소실', '잃어버림', '단절', '후퇴',
    '겸손', '완전함', '힘', '공정함', '비겁함',
    '권력', '은둔', '은둔자', '실망', '환멸',

    '황폐', '새벽', '여명', '아침', '밤',
    '용감함', '대담함', '격노', '선물', '권위',
    '금전', '명성', '장인정신', '관대함', '관대',
    '안정', '부',
  ],
  tool: [
    '공구/곡괭이', '공구/너트(나사)', '공구/니퍼', '공구/펜치', '공구/플라이어',
    '공구/드릴', '공구/망치', '공구/볼트(나사)', '공구/삽', '공구/송곳',
    '공구/스크류(나사)', '공구/스패너', '공구/슬레지해머', '공구/전기톱', '공구/톱',
    '공구/장도리(클로해머)', '공구/몽키 스패너',
  ],
  tableWare: [
    '식기/나무 숟가락', '식기/나무 젓가락', '식기/나무 포크',
    '식기/쇠 숟가락', '식기/쇠 젓가락', '식기/쇠 포크', '식기/플라스틱 숟가락', '식기/플라스틱 젓가락',
    '식기/플라스틱 포크', '식기/쇠 포크 숟가락', '식기/플라스틱 포크 숟가락',
  ],
  astronomy: [
    '천체/달', '천체/태양', '천체/항성', '천체/행성',
    '천체/유성', '천체/혜성', '천체/운석', '천체/태양계', '천체/수성',
    '천체/금성', '천체/지구', '천체/화성', '천체/목성', '천체/토성',
    '천체/천왕성', '천체/해왕성', '천체/명왕성', '천체/항성계', '천체/은하',
    '천체/초은하단', '천체/블랙홀', '천체/화이트홀', '천체/웜홀', '천체/성운',

    '천체/성단', '천체/은하군', '천체/은하단', '천체/소행성', '천체/왜성',
    '천체/위성', '천체/적색왜성', '천체/갈색왜성', '천체/백색왜성', '천체/흑색왜성',
    '천체/청색왜성', '천체/중성자별', '천체/거성', '천체/적색초거성', '천체/황색초거성',
    '천체/청색초거성', '천체/초거성', '천체/적색거성', '천체/청색거성', '천체/황색거성',
    '천체/극대거성', '천체/청색극대거성', '천체/황색극대거성', '천체/적색극대거성', '천문학/태양풍',

    '천문학/항성풍', '천체/암흑물질', '천체/볼프-레이에별',
  ],
  fruit: [
    '과일/석류', '과일/딸기', '과일/머루', '과일/블루베리',
    '과일/야자', '과일/다래', '과일/사과', '과일/자두', '과일/모과',
    '과일/대추', '과일/코코넛', '과일/산딸기', '과일/오렌지', '과일/수박',
    '과일/무화과', '과일/자몽', '과일/체리', '과일/유자', '과일/리치',
    '과일/단감', '과일/슈가애플', '과일/메론', '과일/버찌', '과일/거봉',

    '과일/두리안', '과일/베리', '과일/파인애플', '과일/매실', '과일/복숭아',
    '과일/바나나', '과일/포도', '과일/파파야', '과일/홍시', '과일/한라봉',
    '과일/망고', '과일/망고스틴', '과일/구아바', '과일/아보카도', '과일/살구',
    '과일/레몬', '과일/키위', '과일/배', '과일/카카오', '과일/아로니아',
    '과일/감',
  ],
  vegetable: [
    '야채(채소)/스타후르츠', '야채(채소)/블림빙', '야채(채소)/잠부',
    '야채(채소)/오미자', '야채(채소)/끌렝깽', '야채(채소)/사워', '야채(채소)/도라지', '야채(채소)/고추',
    '야채(채소)/연근', '야채(채소)/우엉', '야채(채소)/양파', '야채(채소)/호박', '야채(채소)/깻잎',
    '야채(채소)/옥수수', '야채(채소)/청경채', '야채(채소)/배추', '야채(채소)/시금치', '야채(채소)/부추',
    '야채(채소)/가지', '야채(채소)/파란고추', '야채(채소)/실파', '야채(채소)/대파', '야채(채소)/미나리',

    '야채(채소)/애호박', '야채(채소)/단호박', '야채(채소)/오이', '야채(채소)/당근', '야채(채소)/감자',
    '야채(채소)/고구마', '야채(채소)/버섯', '야채(채소)/양송이', '야채(채소)/느타리 버섯', '야채(채소)/표고버섯',
    '야채(채소)/말린버섯', '야채(채소)/무', '야채(채소)/단무지', '야채(채소)/피클', '야채(채소)/무청',
    '야채(채소)/상추', '야채(채소)/양배추', '야채(채소)/양상추', '야채(채소)/버질', '야채(채소)/마늘',
    '야채(채소)/생강', '야채(채소)/순무', '야채(채소)/브로콜리', '야채(채소)/인삼', '야채(채소)/쑥갓',
    
    '야채(채소)/피망',
  ],
  gem: GemData.concat([
    '암석(or 보석)/섬록암', '암석(or 보석)/반려암', '암석(or 보석)/감람암',
    '암석(or 보석)/휘록암', '암석(or 보석)/섬록 반암', '암석(or 보석)/석영 반암', '암석(or 보석)/유문암', '암석(or 보석)/안산암',
    '암석(or 보석)/부싯돌', '암석(or 보석)/이암', '암석(or 보석)/엽암', '암석(or 보석)/사암', '암석(or 보석)/역암',
    '암석(or 보석)/석회암', '암석(or 보석)/응회암', '암석(or 보석)/석탄', '암석(or 보석)/현무암', '암석(or 보석)/화강암',
  ]),
  weather: [
    '기상/비', '기상/눈보라', '기상/가뭄', '기상/강우', '기상/소나기',
    '기상/이슬비', '기상/장마', '기상/여우비', '기상/호우', '기상/눈',
    '기상/싸락눈', '기상/함박눈', '기상/진눈깨비', '기상/안개', '기상/안개비',
    '기상/스모그', '기상/우박', '기상/구름', '기상/바람', '기상/태풍',
    '기상/토네이도', '기온/열대야', '기온/폭염', '기온/한파', '기상/오로라',

    '기상/폭풍우', '기상/폭풍', 
  ],
  job: [
    '직업/가수', '직업/간호사', '직업/갑옷장인', '직업/강령술사', '직업/거너',
    '직업/건달', '직업/검사', '직업/검사(법조계)', '직업/검투사', '직업/격투가',
    '직업/경찰', '직업/경찰관', '직업/공무원', '직업/공주', '직업/공학자',
    '직업/과학자', '직업/광대', '직업/광전사', '직업/괴도', '직업/교사',
    '직업/군인', '직업/군장교', '직업/군주', '직업/궁병', '직업/궁사',

    '직업/궁수', '직업/기사', '직업/기타리스트', '직업/길드 안내원', '직업/깡패',
    '직업/네크로맨서', '직업/농부', '직업/닌자', '직업/대장장이', '직업/도끼병',
    '직업/도둑', '직업/도선사', '직업/도적', '직업/드래곤 슬레이어', '직업/드러머',
    '직업/드루이드', '직업/디자이너', '직업/레인저', '직업/로그', '직업/로비스트',
    '직업/마녀', '직업/마법사', '직업/마술사', '직업/마왕', '직업/마피아',

    '직업/만화가', '직업/매드 사이언티스트', '직업/메이드', '직업/모험가', '직업/몽크',
    '직업/무녀', '직업/문지기', '직업/바드', '직업/바바리안', '직업/바운티 헌터',
    '직업/바텐더', '직업/백수', '직업/변호사', '직업/병사', '직업/보모',
    '직업/보병', '직업/사냥꾼', '직업/사령술사', '직업/사서', '직업/사육사',
    '직업/사제', '직업/살인청부업자', '직업/상인', '직업/서포터', '직업/석궁병',

    '직업/성기사', '직업/성전사', '직업/성직자', '직업/소년병', '직업/소믈리에',
    '직업/소방관', '직업/소서러', '직업/소설가', '직업/소환사', '직업/수도승',
    '직업/수호자', '직업/스트리머', '직업/스포츠 선수', '직업/승려', '직업/시장',
    '직업/신관', '직업/신부', '직업/심리학자', '직업/암살자', '직업/암상인',
    '직업/약초사', '직업/약초장인', '직업/어부', '직업/어쌔신', '직업/엑소시스트',

    '직업/여왕', '직업/역병의사', '직업/연금술사', '직업/영매사', '직업/왕',
    '직업/왕자', '직업/요리사', '직업/용병', '직업/원소술사', '직업/저승사자',
    '직업/웨이터', '직업/위자드', '직업/은행지기', '직업/음악가', '직업/음양사',
    '직업/음유시인', '직업/의사', '직업/이단심판관', '직업/인형술사', '직업/작곡가',
    '직업/작사가', '직업/장교', '직업/장군', '직업/재봉사', '직업/저격수',

    '직업/전령', '직업/전사', '직업/점술사', '직업/정령술사', '직업/정비공',
    '직업/정비사', '직업/정원사', '직업/정찰병', '직업/조선공', '직업/조직 폭력배',
    '직업/족장', '직업/주술사', '직업/주조사', '직업/중장보병', '직업/지휘관',
    '직업/집사', '직업/창기병', '직업/첩보원', '직업/첼로리스트', '직업/촌장',
    '직업/최면술사', '직업/카발리어', '직업/크래커', '직업/클레릭', '직업/킥복서',

    '직업/탐정', '직업/퇴마사', '직업/파계승', '직업/파이터', '직업/판관',
    '직업/판사', '직업/팔라딘', '직업/포병', '직업/프로게이머', '직업/프로그래머',
    '직업/피아니스트', '직업/학생', '직업/항해사', '직업/해결사', '직업/해부학자',
    '직업/해적', '직업/해커', '직업/혁명가', '직업/현상금 사냥꾼', '직업/현자',
    '직업/협상가', '직업/회사원', '직업/흑기사', '직업/흑마법사',
  ],
  metal: [
    '합금/강철', '합금/아말감', '합금/청동', '합금/티타늄', '합금/위디아',
    '합금/갈린스탄', '합금/나크', '합금/노르딕 골드', '합금/니크롬', '합금/니티놀',
    '합금/두랄루민', '합금/디디뮴', '합금/리퀴드메탈', '합금/양은', '합금/인바',
    '합금/백동', '합금/위상부도체', '합금/인코넬', '합금/일렉트럼', '합금/하이망간',
    '합금/연철', '합금/주철', '합금/스테인리스', '합금/크로몰리', '합금/황동',
    
    '합금/형상기억합금', '합금/화이트 골드',
  ],
  figure: [
    '다면체/정사면체', '다면체/정육면체', '다면체/정팔면체', '다면체/정십이면체', '다면체/정이십면체',
    '도형/다각형', '도형/육각형', '도형/오각형', '도형/삼각형', '도형/사각형',
    '도형/원', '도형/타원', '도형/점', '도형/선', '도형/칠각형',
    '도형/팔각형', '도형/십각형', '도형/백각형',
  ],
  body: [
    '신체/심장', '신체/간', '신체/비장', '신체/폐', '신체/신장(콩팥)',
    '신체/대장', '신체/소장', '신체/쓸개', '신체/위', '신체/삼초',
    '신체/방광', '신체/손', '신체/발', '신체/손가락', '신체/발가락',
    '신체/손톱', '신체/발톱', '신체/다리', '신체/팔', '신체/팔꿈치',
    '신체/무릎', '신체/손목', '신체/발목', '신체/가슴', '신체/등',

    '신체/배', '신체/눈', '신체/귀', '신체/입', '신체/코',
    '신체/입술', '신체/눈동자', '신체/동공', '신체/홍채', '신체/이(이빨)',
    '신체/혀', '신체/검은자위', '신체/흰자위',
  ],
  status: CharacterData.status,
  novility: CharacterData.nobility,
  weapon: CharacterData.weapon.map(
    item => `무기/${item}`
  ).concat([
    '무기/화살', '무기/단창', '무기/쌍창', '무기/쌍도끼', '무기/쌍단창',
    '무기/쌍장창', '무기/망치', '무기/전쟁 망치',
  ]),
  shield: CharacterData.shield.map(
    item => `방패/${item}`
  ).concat([
    
  ]),
  genre: [
    '장르/SF', '장르/스페이스 오페라', '장르/스팀펑크', '장르/디젤펑크', '장르/사이버펑크',
    '장르/포스트 아포칼립스', '장르/좀비 아포칼립스', '장르/에일리언 아포칼립스', '장르/뉴클리어 아포칼립스', '장르/판데믹 아포칼립스',
    '장르/EMP 아포칼립스', '장르/디스토피아', '장르/판타지', '장르/어반 판타지', '장르/다크 판타지',
    '장르/로맨스 판타지', '장르/게임 판타지', '장르/하이 판타지', '장르/로우 판타지', '장르/무협',
    '장르/배틀물', '장르/이능력 배틀물', '장르/대리 몬스터물', '장르/미소녀 배틀물', '장르/두뇌 배틀',
    
    '장르/법정물', '장르/추리물', '장르/로맨스물', '장르/이세계물', '장르/마법 소녀물',
    '장르/치유물', '장르/메카물', '장르/루프물', '장르/피카레스크', '장르/히어로물',
    '장르/TS물', '장르/개그물', '장르/일상물', '장르/밀리터리물', '장르/전기물',
    '장르/학원물', '장르/시간여행물', '장르/스릴러', '장르/느와르', '장르/첩보물',
  ],
  state: [
    '특징/각력이 센', '특징/감시하는', '특징/겁에 질린', '특징/겸손한', '특징/고뇌하는',
    '특징/고집이 센', '특징/고통스러운', '특징/공격적인', '특징/공포스러운', '특징/광기어린',
    '특징/괴상한', '특징/교활한', '특징/귀가 들리지 않는', '특징/귀여운', '특징/근력이 센',
    '특징/기괴한', '특징/기뻐하는', '특징/기운이 없는', '특징/끔찍한', '특징/끝이 없는',
    '특징/나쁜', '특징/나태한', '특징/난폭한', '특징/날렵한', '특징/날카로운',

    '특징/남성적인', '특징/노력하는', '특징/달콤한', '특징/더운', '특징/돈이 많은',
    '특징/두려운', '특징/두려움이 없는', '특징/뒤끝 있는', '특징/따뜻한', '특징/따분한',
    '특징/따스한', '특징/땀 흘리는', '특징/똑똑한', '특징/마력이 깃든', '특징/말이 안통하는',
    '특징/매력적인', '특징/매서운', '특징/매콤한', '특징/매혹적인', '특징/머리가 나쁜',
    '특징/머리가 좋은', '특징/멍청한', '특징/몰락한', '특징/못된', '특징/무서운',

    '특징/무시무시한', '특징/무한한', '특징/미쳐버린', '특징/바보같은', '특징/발전한',
    '특징/밝은', '특징/변태같은', '특징/보호하는', '특징/부드러운', '특징/분노에 눈이 먼',
    '특징/불량한', '특징/불친절한', '특징/불행한', '특징/비겁한', '특징/비밀스러운',
    '특징/비열한', '특징/빈틈 없는', '특징/사랑스러운', '특징/사랑하는', '특징/사악한',
    '특징/상냥한', '특징/색욕적인', '특징/선한', '특징/성장한', '특징/성적인',

    '특징/섹시한', '특징/수호하는', '특징/순결하지 못한', '특징/순결하지 않은', '특징/순결한',
    '특징/순박한', '특징/순진한', '특징/슬픈', '특징/슬픔에 잠긴', '특징/슬픔에 젖은',
    '특징/시끄러운', '특징/시원한', '특징/신비로운', '특징/심심한', '특징/아름다운',
    '특징/악마같은', '특징/알 수 없는', '특징/앞이 보이지 않는', '특징/야릇한', '특징/야만적인',
    '특징/얍삽한', '특징/어두운', '특징/어여쁜', '특징/억지스러운', '특징/엄격한',

    '특징/여성적인', '특징/예쁜', '특징/오만한', '특징/오염된', '특징/온순한',
    '특징/완력이 센', '특징/용감한', '특징/용기 있는', '특징/용맹한', '특징/우울한',
    '특징/위압적인', '특징/음란한', '특징/음탕한', '특징/이용당하는', '특징/자만스러운',
    '특징/잔악무도한', '특징/잔인한', '특징/잔혹한', '특징/잘생긴', '특징/재빠른',
    '특징/절망에 빠진', '특징/정의로운', '특징/정의롭지 못한', '특징/정화하는', '특징/젖은',

    '특징/조용한', '특징/졸렬한', '특징/졸린', '특징/중독된', '특징/중성적인',
    '특징/즐거운', '특징/즐거워하는', '특징/증오하는', '특징/질투하는', '특징/착한',
    '특징/천사같은', '특징/추운', '특징/친절한', '특징/침 흘리는', '특징/타인을 이용하는',
    '특징/통제가 불가능한', '특징/폭주하는', '특징/피곤한', '특징/행복한', '특징/험악한',
    '특징/현명한', '특징/활기찬', '특징/활발한', '특징/흉측한', '특징/힘이 센',

    '특징/힘이 약한', '특징/더러운', '특징/악력이 센', '특징/추한', '특징/전설적인',
    '특징/야한', '특징/비정한', '특징/말이 많은', '특징/말이 적은', '특징/과묵한',
    '특징/선정적인', '특징/육감적인', '특징/둔한', '특징/느린', '특징/느려터진',
    '특징/강력한', '특징/물러터진', '특징/무른', '특징/정당한', '특징/슬퍼하는',
    '특징/정정당당한', '특징/가여워 하는', '특징/역거운', '특징/두려워 하는', '특징/구역질 나는',

    '특징/뾰족한', '특징/초능력을 가진', '특징/마법을 쓰는', '특징/초능력을 쓰는', '특징/검은',
    '특징/붉은', '특징/뜨거운', '특징/차가운', '특징/미지근한', '특징/병약한',
    '특징/응큼한', '특징/마법에 취약한', '특징/마법에 약한', '특징/마법에 강한', '특징/마법에 걸린',
    '특징/저주에 걸린', '특징/저주에 취약한', '특징/저주에 약한', '특징/저주에 강한', 
    '특징/가슴이 작은(여캐)', '특징/가슴이 큰(여캐)', '특징/각진 얼굴인', '특징/건장한', '특징/광대뼈가 두드러진 얼굴인',

    '특징/근육이 과하게 많은', '특징/근육이 많은', '특징/글래머러스한(여캐)', '특징/길쭉한 얼굴인', '특징/날씬한',
    '특징/동그란 얼굴인', '특징/뚱뚱한', '특징/마른', '특징/말라 비틀어진', '특징/머리가 작은',
    '특징/머리가 큰', '특징/몸매가 에스라인인(여캐)', '특징/뱃살이 나온', '특징/엉덩이가 큰', '특징/브이라인 얼굴인',
    '특징/상체가 긴', '특징/약간 근육이 있는', '특징/짧막한 얼굴인', '특징/통통한', '특징/팔이 긴',
    '특징/하체가 긴', '특징/한쪽 다리가 짧은', '특징/한쪽 팔이 짧은', '특징/짧은 꼬리가 달린', '특징/긴 꼬리가 달린',

    '특징/귀가 긴', '특징/2등신', '특징/3등신', '특징/4등신', '특징/5등신',
    '특징/6등신', '특징/7등신', '특징/8등신', '특징/9등신', '특징/성적으로 끌리는',
    '특징/엉덩이가 작은', '특징/다리가 튼튼한', '특징/팔이 튼튼한', '특징/손이 큰', '특징/손이 작은',
    '특징/발이 큰', '특징/발이 작은', '특징/싸움을 잘하는', '특징/피부가 좋은', '특징/피부가 안좋은',
    '특징/단단한 피부를 가진', '특징/촉촉한 피부를 가진', '특징/무표정인', '특징/표정이 없는', '특징/표정이 많은',

    '특징/잘 웃는', '특징/잘 우는', '특징/화를 잘 내는', '특징/짜증을 잘 내는', '특징/싸움을 못하는',
    '특징/무술을 잘하는', '특징/무술을 못하는', '특징/낡은',
  ],
};