import React, {
  memo,
  useCallback, useMemo,
  useState,
} from 'react';
import SubPanelHeader from '@/components/subPanel/SubPanelHeader';
import ColorPalette from '@/components/Color/ColorPalette/ColorPalette';
import { ColorPaletteTitle, ColorPickerSelection } from '@/components/Color/ColorPalette/styles';
import DebounceHexColor from '@/components/Color/DebounceHexColor/DebounceHexColor';
import { HexColorInput } from 'react-colorful';
import { HeaderColorWrapperStyled } from './styles';

export const linkPaletteColors = ['none', '#FF004F', '#FF8200', '#FAFF00', '#00DE62',
  '#00E3FF', '#0093FF', '#0030CC', '#6C00FF', '#FF00C3'];

const HeaderColor = (): JSX.Element => {
  const [highlight, setHighlight] = useState('');
  const [pickColors, setPickColors] = useState<string[]>(new Array(10).fill('inherit'));

  const changeHighlightColors = useCallback((color: string) => {
    if (['inherit', ''].indexOf(color) === -1) {
      setHighlight(color);
    }
  }, [highlight]);

  useMemo(() => {
    const findIndex = pickColors.indexOf(highlight);
    const findIndexOnRecommend = linkPaletteColors.indexOf(highlight);
    if (findIndex === -1 && findIndexOnRecommend === -1 && ['inherit', 'none', ''].indexOf(highlight) === -1) {
      setPickColors((prev) => {
        prev.pop();
        prev.unshift(highlight);
        return prev;
      });
    }
  }, [highlight]);

  return (
    <HeaderColorWrapperStyled>
      <SubPanelHeader title='Header Color' />
      <br />
      <div className='recommended-color'>
        <ColorPalette
          subTitle='Recommended Color'
          colors={linkPaletteColors}
          highlightColor={highlight}
          changeHighLights={changeHighlightColors}
        />
      </div>
      <div className='recent-color'>
        <ColorPalette
          subTitle='Recent Color'
          colors={pickColors}
          highlightColor={highlight}
          changeHighLights={changeHighlightColors}
        />
      </div>
      <div style={{ backgroundColor: '#222222' }}>
        <ColorPaletteTitle>More Colors</ColorPaletteTitle>
        <div className='color-picker-selection-info'>
          <ColorPickerSelection color={highlight} />
          <HexColorInput
            color={highlight}
            onChange={setHighlight}
            className='custom-input'
          />
        </div>
        <DebounceHexColor
          onChange={setHighlight}
          color={highlight}
        />
      </div>
    </HeaderColorWrapperStyled>
  );
};

export default memo(HeaderColor);
