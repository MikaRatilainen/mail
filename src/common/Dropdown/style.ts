import styled from 'styled-components';

export const DropDownStyled = styled.div`
    position: absolute;
    top: 29px;
    
    width: 100%;
    border: 1px solid #000;
    border-radius: 0 0 5px 5px;
    box-sizing: border-box;
    
    overflow: hidden;
`;

export const Option = styled.div`
    width: 100%;
    height: 30px;
    padding: 5px;
    box-sizing: border-box;
    border-bottom: 1px solid #00000050;
    
    cursor: pointer;
    
    &:hover {
        background-color: greenyellow;
    }
    
    &:last-child {
      border-bottom: 0;
    }
`;
