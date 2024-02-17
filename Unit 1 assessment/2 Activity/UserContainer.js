// functional component

import React, { useEffect, Component } from "react";
import { connect } from 'react-redux';
import { fetchUsers } from "./customers/customerActions";

// function UserContainer(props) {
//     useEffect(() => {
//         props.fetchUsers();
//     }, []);

//     return (
//         <div>
//             <h2>user</h2>
//             {props.userData.loading && <h2>loading...</h2>}
//             {props.userData.error && <h2>{props.userData.error}</h2>}
//             {props.userData.users && (
//                 <div>
//                     {props.userData.users.map(user => (
//                         <p key={user.id}>{user.first_name}</p>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// }

// const mapStateToProps = (state) => {
//     return {
//         userData: state.customer || {} // Provide a default object to avoid null/undefined issues
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchUsers: () => dispatch(fetchUsers())
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);


// class component

// UserContainerClass.js (Class Component)

class UserContainerClass extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        return (
            <div>
                <h2>Users</h2>
                {this.props.userData.loading && <h2>Loading...</h2>}
                {this.props.userData.error && <h2>{this.props.userData.error}</h2>}
                {this.props.userData.users && (
                    <div>
                        {this.props.userData.users.map(user => (
                            <p key={user.id}>{user.first_name}</p>
                        ))}
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userData: state.customer || {}
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainerClass);
