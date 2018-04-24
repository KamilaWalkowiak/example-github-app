import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// Components
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';

// Styles
import {
    Container,
    UserLoginBox,
    UserInput,
    UserButton,
    UsersContainer
} from './home.style';

import {Wrapper} from "../../utils/styles/global.style";

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

    renderUsers = () => this.state.users.map((item) =>
        <div>
            <Link to={`/user/${item}`}>
                {item}
            </Link>
        </div>
    );


    render() {
        return (
            <Container>
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
                    <UsersContainer>
                        {this.renderUsers()}
                    </UsersContainer>
                </Wrapper>
                <Footer/>
            </Container>

        );
    }
}

export default Home;
