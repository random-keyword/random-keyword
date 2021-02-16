import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

const StyledArticle = ({ children, }) => {
  const articleStyle = css`
    padding: 0px 10px;
    box-sizing: border-box;
    height: 100%;

    & > h2:nth-of-type(1) {
      margin-top: 0px;
    }

    & > #keyword-display {
      display: flex;
      flex-direction: column;
      height: 100%;

      & > header {
        width: 100%;
        box-sizing: border-box;

        & > p {
          margin-bottom: 3px;
          font-weight: 500;
        }

        & > .none {
          color: #ffffff;
        }

        & > .visible {
          color: #333333;
        }

        & > button {
          color: #ffffff;
          font-weight: 500;
          border: 2px solid #3178f2;
          background: #3178f2;
          outline: none;
          cursor: pointer;
          padding: 0px 5px;
          font-size: 12pt;
          margin-top: 3px;
          margin-right: 3px;
          border-radius: 5px;

          &:hover {
            color: #3178f2;
            border: 2px solid #3178f2;
            background: #ffffff;
          }
        }
      }

      & > #keyword-container {
        flex: 1;
        display: flex;
        align-items: center;
        width: 100%;

        & > div > p {
          width: 100%;
          text-align: center;
          font-weight: 500;

          & > .block-span {
            display: block;
          }

          & > .blue {
            color: #3178f2;
            font-weight: 900;
          }

          & > .blue-block {
            color: #3178f2;
            font-weight: 900;
            display: block;
          }

          & > .blue-small {
            color: #3178f2;
            font-size: 24pt;
            font-weight: 900;
          }
        }

        & > div > .normal {
          font-size: 36pt;
        }

        & > div > .middle {
          font-size: 24pt;
        }

        & > div > .small {
          font-size: 16pt;

          & > span {
            font-weight: 900;
          }
        }
      }
    }

    & > h2 {
      font-weight: 900;
      margin-bottom: 20px;
      margin-top: 20px;
      padding: 5px 10px;
      border-left: 20px solid #3178f2;
      color: #3178f2;
      font-size: 24pt;
    }

    & > p {
      margin-top: 20px;
      margin-bottom: 20px;
      text-align: justify;
      text-indent: 15px;
      font-size: 14pt;
      line-height: 1.5;
    }

    & > ul {
      margin-top: 20px;
      margin-bottom: 20px;
      font-size: 14pt;

      & > li:nth-of-type(1) {
        margin-top: 0px;
      }

      & > li {
        margin-top: 5px;
        margin-bottom: 5px;

        &:before {
          content: '\\f061';
          font-family: 'Font Awesome 5 Free';
          font-weight: 900;
          margin-right: 5px;
          color: #3178f2;
        }

        & > a {
          padding: 0px 5px;
          border: 2px solid #3178f2;
          background: #3178f2;
          color: #ffffff;
          display: inline-block;
          border-radius: 5px;
          font-weight: 500;

          &:hover {
            color: #3178f2;
            border: 2px solid #3178f2;
            background: #ffffff;
          }
        }
      }
    }
  `;

  return (
    <>
      <article css={articleStyle}>
        { children }
      </article>
    </>
  );
};

StyledArticle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StyledArticle;