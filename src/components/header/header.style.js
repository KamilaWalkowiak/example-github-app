import styled from 'styled-components';
import {colors} from '../../utils/styles/color.style'

export const Head = styled.header`
    padding: 20px 0;
    background: ${colors.dark}
    a {
        color: ${colors.white};
        text-decoration: none;
        &:hover {
            color: ${colors.light}
        }
    }
`;