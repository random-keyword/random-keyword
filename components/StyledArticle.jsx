import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

const StyledArticle = ({ children, }) => {
  const articleStyle = css`
    padding: 7px 10px 10px 10px;
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
          font-size: 1.3rem;
          margin-top: 3px;
          margin-right: 3px;
          border-radius: 5px;

          @media (min-width: 451px) and (max-width: 800px) {
            font-size: 1.1rem;
          }
          @media (min-width: 1px) and (max-width: 450px) {
            font-size: 0.8rem;
            font-weight: 400;
          }

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
        }

        & > div > .normal {
          font-size: 3rem;

          @media (min-width: 451px) and (max-width: 800px) {
            font-size: 2rem;
          }
          @media (min-width: 1px) and (max-width: 450px) {
            font-size: 1.3rem;
          }
        }

        & > div > .middle {
          font-size: 2rem;

          @media (min-width: 451px) and (max-width: 800px) {
            font-size: 1.5rem;
          }
          @media (min-width: 1px) and (max-width: 450px) {
            font-size: 1.1rem;
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
      font-size: 2.2rem;

      @media (min-width: 451px) and (max-width: 800px) {
        font-size: 1.6rem;
      }
      @media (min-width: 1px) and (max-width: 450px) {
        font-size: 1.3rem;
      }
    }

    & > p {
      margin-top: 20px;
      margin-bottom: 20px;
      text-align: justify;
      text-indent: 15px;
      font-size: 1.3rem;
      line-height: 1.5;
      font-weight: 500;

      @media (min-width: 451px) and (max-width: 800px) {
        font-size: 1.1rem;
      }
      @media (min-width: 1px) and (max-width: 450px) {
        font-size: 0.8rem;
        font-weight: 400;
      }
    }

    & > ul {
      margin-top: 20px;
      margin-bottom: 20px;
      font-size: 1.3rem;
      font-weight: 500;

      @media (min-width: 451px) and (max-width: 800px) {
        font-size: 1.1rem;
      }
      @media (min-width: 1px) and (max-width: 450px) {
        font-size: 0.8rem;
        font-weight: 400;
      }

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