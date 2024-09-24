import {css} from '@emotion/native';

export const typo = {
  title: css`
    font-family: SUIT;
    font-size: 18px;
    font-weight: 600;
    line-height: 25.2px;
  `,
  body: css`
    font-family: SUIT;
    font-size: 15px;
    font-weight: 500;
    line-height: 25.2px;
  `,
} as const;
