import React, { memo, useCallback, useMemo, useState } from 'react';
import SubPanelHeader from '@/components/subPanel/SubPanelHeader';
import ColorPalette from '@/components/Color/ColorPalette/ColorPalette';
import { HexColorPicker } from 'react-colorful';
import { useInput } from 'custom-hook-react';
import { ColorPaletteTitle } from '@/components/Color/ColorPalette/styles';
import { HeaderColorWrapperStyled } from './styles';

export const linkPaletteColors = ['none', '#FF004F', '#FF8200', '#FAFF00', '#00DE62',
  '#00E3FF', '#0093FF', '#0030CC', '#6C00FF', '#FF00C3'];

const HeaderColor = (): JSX.Element => {
  const [highlight, onChangeHighLights, setHighlight] = useInput('');
  const [pickColors, setPickColors] = useState<string[]>(new Array(10).fill('inherit'));
  const [flag, setFlag] = useState(false)

  const changeHighlightColors = useCallback((color: string) => {
    setHighlight(color);
  }, []);

   useMemo(()=>{
    if(flag) {
      const findIndex = pickColors.indexOf(highlight);
      // if (findIndex !== -1) {
      //   setPickColors(prev => {
      //     prev.splice(findIndex, 1);
      //     prev.unshift(highlight);
      //     return prev;
      //   })
      // } else {
      //   setPickColors(prev => {
      //     prev.pop();
      //     prev.unshift(highlight);
      //     return prev;
      //   })
      // }
      if (findIndex === -1) {
        setPickColors(prev => {
          prev.pop();
          prev.unshift(highlight);
          return prev;
        })
      }
    }
  },[flag, highlight]);


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
        <input type='text' onChange={onChangeHighLights} value={highlight} />
        <HexColorPicker color={highlight} onChange={setHighlight} onClickCapture={() => setFlag(true)} onMouseDown={() => setFlag(false)}/>
      </div>
    </HeaderColorWrapperStyled>
  );
};

export default memo(HeaderColor);
