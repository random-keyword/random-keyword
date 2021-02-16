import React from 'react';
import Head from 'next/head';
import AppLayout from '@components/AppLayout';
import StyledArticle from '@components/StyledArticle';

const text = {
  title: '홈 - 랜덤 키워드',
  link: 'https://random-keyword.github.io/app/',
};

const App = () => {
  return (
    <AppLayout>
      <Head>
        <meta property='og:title' content={text.title} />
        <meta name='twitter:title' content={text.title} />
        <meta property='og:url' content={text.link} />
        <title>홈 - 랜덤 키워드</title>
      </Head>
      <StyledArticle>
        <h2>뭐하는 곳인가</h2>
        <p>랜덤 키워드는 창작을 하는데에 있어서 불편함을 느끼는 분들을 위해 만들어졌습니다. 어떤 그림을 그릴지, 어떤 글을 쓸 지 고민이 되시는 분들을 위한 창작에 영감을 주는 키워드를 모아봤습니다. 랜덤 키워드는 여러분들에게 다양한 주제의 키워드들을 제공합니다. 여러분들이 할 것이라고는 원하는 주제로 들어가서 버튼을 클릭하기만 하면 됩니다.</p>
        <p>캐릭터 디자인 키워드 같은 경우, 각 버튼은 서로 연계해서 사용해도 됩니다. 물론 결과는 랜덤이기 때문에 키워드간의 조합은 그대로 사용해도 좋지만, 영감을 받는다는 생각으로만 이용하시는 게 정신건강에 좋을지도 모릅니다.</p>
        <h2>제작자 연락처</h2>
        <p>연락처는 이메일과 인스타 중에서 아무거나 편하신 것으로 연락을 주시면 됩니다.</p>
        <ul>
          <li><a href='mailto:nihil_ncunia@naver.com' target='_blank' rel='noopener noreferrer'>이메일</a></li>
          <li><a href='https://www.instagram.com/nihil_illust/' target='_blank' rel='noopener noreferrer'>인스타그램</a></li>
        </ul>
      </StyledArticle>
    </AppLayout>
  );
};

export default App;