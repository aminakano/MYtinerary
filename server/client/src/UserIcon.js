import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreator from './Store/Actions/actions';
import { Link } from 'react-router-dom';
class UserIcon extends Component {
    componentDidMount(){
        if(localStorage['token'])
            this.props.userToken(localStorage["token"]);
    }
    render(){
        const styles ={
            width:'55%',          
        }        
        const userLinks = (
            <div onClick={this.props.LogOutUser}>Log out</div>
        );
        const guestLinks = (
                <div className="LoginLinks">
                    <div><Link to="/Login">Log in</Link></div>
                    <div><Link to="/Account">Create Account</Link></div>
                </div>                      
        );
        const userLoggedIn = this.props.userLoggedIn;
        console.log(this.props.user)
        return(
            <div style={styles}>
                <details>
                    <summary><div className="User"><i className="fas fa-user-circle"></i></div></summary>
                    <div className="build">
                        {userLoggedIn ? userLinks : guestLinks}
                    </div>
                </details>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        userLoggedIn: state.userLoggedIn,
        user: state.user
        
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        LogInUsers: (user) => {
            dispatch(actionCreator.LogInUsers(user))
        },
        LogOutUser: () => {
            dispatch(actionCreator.UserLoggedOut())
        },
        userToken: (token) => {
            dispatch(actionCreator.userToken(token));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserIcon);