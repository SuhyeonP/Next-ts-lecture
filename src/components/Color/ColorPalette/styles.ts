import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface IColorButtonProps {
  color: string;
  highlight: boolean;
}

export const ColorPaletteStyled = styled.div`
  height: 127px;
  background-color: #222222;
  
  .color-palette-color-wrapper {
    width: 196px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    row-gap: 12px;
  }
`;

export const ColorPaletteTitle = styled.p`
  padding-left: 12px;
  color: #777777;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 15px;
  margin-bottom: 20px;
`;

interface IColorSelection {
  color: string;
}

export const ColorPickerSelection = styled.p<IColorSelection>(({
  color,
}) => css`
  width: 15px;
  height: 15px;
  background-color: ${color};
  border-radius: 3px;
  margin:0 15px;
`);

export const ColorButton = styled.button<IColorButtonProps>(({
  color, highlight,
}) => {
  const customCss = css`
    width: 30px;
    height: 30px;
    border-radius: 20px;
    box-sizing: border-box;
    cursor: ${color === 'inherit' ? 'not-allowed' : 'pointer'};
  `;

  let highlightCss;
  if (highlight) {
    highlightCss = css`
      position: relative;
      &::after {
        display: block;
        content: '';
        position: absolute;
        width: 33px;
        height: 33px;
        border-radius: 20px;
        border: 1px solid pink;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    `;
  }
  if (color === 'none') {
    return css`
      ${customCss};
      ${highlightCss};
      background-color: inherit;
      position: relative;
      border: 1px solid #777;

      &::before {
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        content: "";
        width: 30px;
        height: 1px;
        background: #777;
        transform: translate(-50%,-50%) rotate(-45deg);
      }
    `;
  }
  if (color === 'inherit') {
    return css`
      ${customCss};
      background-color: inherit;
      border: 1px solid #777;
    `;
  }

  return css`
    ${customCss};
    ${highlightCss};
    background-color: ${color};
  `;
});
