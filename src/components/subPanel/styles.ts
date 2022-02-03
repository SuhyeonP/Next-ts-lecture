import styled from '@emotion/styled';

export const SubPanelHeaderStyled = styled.div`
  background-color: gray;
  padding: 7px 14px 5px 13px;

  .header-wrapper {
    display: inline-flex;
    width: 100%;
    height: 19px;
    justify-content: space-between;


    & > header {
      font-size: 13px;
      line-height: 15px;
      font-weight: bold;
    } 
    
    & > button {
      border: 0;
      background-color: inherit;
    }
  }
`;
