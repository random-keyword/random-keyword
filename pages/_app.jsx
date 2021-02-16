import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const text = {
  name: '랜덤 키워드',
  desc: '캐릭터 디자인을 하시는 분이나 그림을 그리시는 분들을 대상으로 만든 키워드 선정 프로그램입니다. 어떤 컨셉을 그려야 할 지 혹은 집필해야 할 지 감이 안잡히는 분들을 위해 제작되었고 버튼 하나를 클릭하는 것으로 키워드를 정해주기 때문에 없는 것보다는 낫습니다. 상당히 도움이 됩니다. 오랫동안 키워드를 모아왔고 계속해서 업데이트 되는 중입니다.',
  image: 'https://random-keyword.github.io/random-keyword.png',
  keyword: '창작 아이디어, 창작 키워드, 랜덤 키워드, 랜덤 단어, 단어, 창작, 키워드',
};

const App = ({ Component, }) => {
  return (
    <>
      <Head>
        <meta charSet='UTF-8'/>
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' />
        <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.15.1/css/all.css' integrity='sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp' crossOrigin='anonymous' />
        
        <link rel='shortcut icon' type='image/x-icon' href='/favicon.ico' />

        <meta property='og:site_name' content={text.name} />
        <meta property='og:type' content='website' />
        <meta property='og:description' content={text.desc} />
        <meta property='og:image' content={text.image} />
        <meta property='og:locale' content='ko_KR' />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@NIHILncunia' />
        <meta name='twitter:creator' content='@NIHILncunia' />
        <meta name='twitter:description' content={text.desc} />
        <meta name='twitter:image' content={text.image} />

        <meta name='description' content={text.desc} />
        <meta name='keywords' content={text.keyword} />
        <meta name='author' content='NIHILncunia'/>
        <meta name='generator' content='VS Code'/>
      </Head>
      <Component />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default App;