import React, {Component} from 'react';
import { WrapperForFooter } from "./footer.style";
import { Wrapper } from "../../utils/styles/global.style";

class Footer extends Component {
    render() {
        return (
            <WrapperForFooter>
                <Wrapper>
                    Copyright 2018 Kamila Walkowiak
                </Wrapper>
            </WrapperForFooter>
        );
    }
}

export default Footer;
