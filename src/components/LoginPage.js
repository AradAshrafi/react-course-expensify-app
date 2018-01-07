import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

// class LoginPage extends React.Component {
// constructor(props){
//     super(props);
// }
// }

const LoginPage = (props) => (
    <div>
        <button onClick={props.dispatch(startLogin)}>Login</button>
    </div>
);

export default connect()(LoginPage);




