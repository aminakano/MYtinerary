import React, { Component } from 'react';
import {
    connect
} from 'react-redux';
import * as actionCreator from './Store/Actions/actions';

class UserIcon extends Component {
    render(){
        const styles ={
            width:'55%',          
        } 
            
            if (this.props.userLoggedIn === true){
                return(
                    <div style={styles}>
                        <details>
                            <summary><div className="User"><i className="fas fa-user-circle"></i></div></summary>
                            <div className="build">
                            <div onClick={this.props.LogOutUser}>Log out</div>
                            </div>
                        </details>
                    </div>
                )
            }
            else{          
                return(
                <div style={styles}>
                    <details>
                        <summary><div className="User"><i className="fas fa-user-circle"></i></div></summary>
                        <div className="build">
                            <div className="LoginLinks">
                            <div><a href="/Login">Log in</a></div>
                            <div><a href="/Account">Create Account</a></div>                       
                            </div>
                        </div>
                        
                    </details>                
                </div>
            )
        }
    }
}

// export default UserIcon;

const mapStateToProps = (state) => {

    return {
        userLoggedIn: state.userLoggedIn,

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        LogInUsers: (user) => {
            dispatch(actionCreator.LogInUsers(user))
        },
        LogOutUser: () => {
            dispatch(actionCreator.UserLoggedOut())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserIcon);