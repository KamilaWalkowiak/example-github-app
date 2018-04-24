import styled from 'styled-components';
import {colors} from '../../utils/styles/color.style'

export const Container = styled.div`

`;

export const UserLoginBox = styled.div`
    border: 1px solid ${colors.dark};
    width: 500px;
    margin: 50px auto;
    text-align: center;
    color: ${colors.dark};
    padding: 20px;
`;

export const UserInput = styled.input`
    border: 1px solid ${colors.light};
    padding: 5px;
`;

export const UserButton = styled.button`
    background: ${colors.dark};
    color: ${colors.white};
    border: 0;
    padding: 6px;
    &:hover {
            background: ${colors.medium}
        }
    margin-top: 15px;
    cursor: pointer;
`;

export const UserContainer = styled.div`

`;