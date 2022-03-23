
import RobotoRegular from '../../static/fonts/Roboto-Regular.ttf';
import RobotokRegularItalic from '../../static/fonts/Roboto-Italic.ttf';
import RobotoBold from '../../static/fonts/Roboto-Bold.ttf';
import RobotokBoldItalic from '../../static/fonts/Roboto-BoldItalic.ttf';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: Roboto;
        src: url(${RobotoRegular}) format('truetype');
        font-weight: 400 500;
        font-style: normal;
    }
    @font-face {
        font-family: Roboto;
        src: url(${RobotokRegularItalic}) format('truetype');
        font-weight: 400 500;
        font-style: italic;
    }

    @font-face {
        font-family: Roboto;
        src: url(${RobotoBold}) format('truetype');
        font-weight: 700;
        font-style: normal;
    }
    @font-face {
        font-family: Roboto;
        src: url(${RobotokBoldItalic}) format('truetype');
        font-weight: 700;
        font-style: italic;
    }

    * {
      box-sizing: border-box;
    }

    img {
        max-width: 100%;
        border: 0;
        vertical-align: middle;
    }
    body {
      font-family: 'Roboto', sans-serif;
      color: ${({ theme }) => theme.colors.BLACK};
      line-height: 1.2;
      font-size: 18px;
      @media screen and (min-width: 1024px) {
          line-height: 1.2;
          font-size: 20px;
      }
    }
    p {
        font-family: 'Roboto', sans-serif;
        margin-top: 0;
        font-size: 18px;
        line-height: 1.5;
        font-weight: normal;
        color: ${({ theme }) => theme.colors.BLACK};
    }
    input, span, select, textarea {
      font-family: 'Roboto', sans-serif;
    }
    pre {
      font-family: 'Roboto', sans-serif;
      margin: 0;
      text-align: start;
    }

    h1, h2, h3, h4, h5 {
      font-family: 'Roboto', sans-serif;
      margin-bottom: 10px;
    }

    h2 {
      font-size: 30px;
      line-height: 1.2;
      font-weight: 800;
      color: ${({ theme }) => theme.colors.BLACK};
      margin-top: 0;

      @media screen and (min-width: 768px) {
          font-size: 32px;
      }
      @media screen and (min-width: 1024px) {
          font-size: 35px;
      }
      @media screen and (min-width: 1280px) {
          font-size: 40px;
      }
    }

    h3 {
      font-size: 24px;
      line-height: 1.2;
      font-weight: bold;

      @media screen and (min-width: 768px) {
        font-size: 28px;
        line-height: 48px;
      }
      @media screen and (min-width: 1024px) {
        font-size: 30px;
        line-height: 54px;
      }
      @media screen and (min-width: 1280px) {
        font-size: 32px;
        line-height: 60px;
      }
    }
    a {
      font-family: 'Roboto', sans-serif;
      text-decoration: none;
      &[disabled] {
        cursor: default;
      }
    }
    strong {
      font-family: 'Roboto', sans-serif;
    }

    button {
      cursor: pointer;
      &:disabled {
        cursor: default;
      }
    }

`;
