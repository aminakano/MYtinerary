import React, { Component } from 'react';

class UserIcon extends Component {
    render(){
        const styles ={
            width:'55%',
            
        }
        
        return(
            <div style={styles}>
                <details >
                    <summary><div className="User"><i className="fas fa-user-circle"></i></div></summary>
                        <div className="build">
                            {/* <h5>Want to build your own MYtenerary?</h5> */}
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

export default UserIcon;