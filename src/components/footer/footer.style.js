import styled from 'styled-components';
import {colors} from '../../utils/styles/color.style'

export const WrapperForFooter = styled.footer`
    text-align: center;
    color: ${colors.light};
    font-size: 10px;
    margin-top: 20px;
    
    & > div {
    border-top: 1px solid ${colors.light};
    padding: 5px 0;
`;