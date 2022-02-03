import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface IColorButtonProps {
  color: string;
  highlight: boolean;
}

export const ColorPaletteStyled = styled.div`
  height: 127px;
  background-color: #222222;
  .color-palette-title {
    padding-left: 12px;
    color: #777777;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 15px;
    margin-bottom: 20px;
  }
  
  .color-palette-color-wrapper {
    width: 196px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    row-gap: 12px;
  }
`;

export const ColorButton = styled.button<IColorButtonProps>(({
  color, highlight,
}) => {
  const customCss = css`
    width: 30px;
    height: 30px;
    border-radius: 20px;
  `;
  if (color === 'none') {
    return css`
      ${customCss};
      background-color: inherit;
      border: 1.3px solid #777;
    `;
  }

  if (highlight) {
    return css`
      ${customCss};
    `;
  }

  return css`
    ${customCss};
    border: 1.3px solid #777;
    background-color: ${color};
  `;
});
