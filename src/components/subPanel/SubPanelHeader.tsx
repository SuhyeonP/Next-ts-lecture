import React, { useCallback } from 'react';
import { SubPanelHeaderStyled } from './styles';

interface IProps {
  title: string;
}

const SubPanelHeader = ({ title }: IProps): JSX.Element => {
  const onCloseSubPanel = useCallback(() => {
  //
  }, []);

  return (
    <SubPanelHeaderStyled>
      <div className='header-wrapper'>
        <header>
          {title}
        </header>
        <button onClick={onCloseSubPanel}>
          <svg width='7' height='7' viewBox='0 0 7 7' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M5.76939 5.64706L0.738525 0.5M5.76939 0.5L0.738525 5.64706' stroke='white' strokeLinecap='round' />
          </svg>
        </button>
      </div>
    </SubPanelHeaderStyled>
  );
};

export default SubPanelHeader;
