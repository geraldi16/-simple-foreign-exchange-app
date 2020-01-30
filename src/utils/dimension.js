import { css } from "styled-components";

const MEDIA_SIZE = {
  desktop: 992,
  tablet: 768,
  mobile: 576,
  laptop: 1025, // 1024 still in tablet size
  laptopXL: 1200
};

/**
 * Encansulate input into width @media css
 */
export const media = Object.keys(MEDIA_SIZE).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${MEDIA_SIZE[label]}px) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});
