import styled from 'styled-components';
import { colors } from '../../utils/styles/color.style';


export const Container = styled.div`
`;

export const UserLoginBox = styled.div`
  border: 1px solid ${colors.dark};
  border-radius: 2.5px;
  color: ${colors.dark};
  margin: 50px auto;
  padding: 20px;
  text-align: center;
  width: 500px
`;

export const UserInput = styled.input`
  border: 1px solid ${colors.light};
  margin-top: 15px;
  padding: 5px;
`;

export const UserButton = styled.button`
  background: ${colors.dark};
  border: 0;
  color: ${colors.white};
  cursor: pointer;
  margin-top: 15px;
  padding: 6px;
  
  &:hover {
    background: ${colors.medium};
  }
`;

export const UsersContainer = styled.div`
`;