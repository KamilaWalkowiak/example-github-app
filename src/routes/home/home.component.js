import React, {Component} from 'react';

//Styles
import {
    UserLoginBox,
    UserButton,
    UserInput,
    UserContainer
} from "./home.style";
import { Wrapper } from "../../utils/styles/global.style";

//Components
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';

class Home extends Component {
    state = {
        users: [],
        userValue: '',
    };

    componentDidMount() {
        console.log("mount", this.state.users)
    }
    componentDidUpdate() {
        console.log("update", this.state.users)
    }

    addNewUser = () => {
        this.setState({
            users: [...this.state.users, this.state.userValue],
            userValue: '',

        });
    };

    handleChange = (event) => {
        this.setState({
            userValue: event.target.value,
        });
    };

    renderUsers = () => this.state.users.map(item => <div>{item}</div>);

    render() {
        return (
            <div>
                <Header/>
                <Wrapper>
                    <UserLoginBox>
                        <div>
                            Please add GitHub user name to observable.
                        </div>
                        <UserInput value={this.state.userValue} onChange={this.handleChange}/>
                            <UserButton onClick={this.addNewUser}>
                                Add user
                            </UserButton>
                    </UserLoginBox>
                    <UserContainer>
                        {this.renderUsers()}
                    </UserContainer>
                </Wrapper>
                <Footer/>
            </div>

        );
    }
}

export default Home;
