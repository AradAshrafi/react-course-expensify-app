import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

// class LoginPage extends React.Component {
// constructor(props){
//     super(props);
// }
// }

const LoginPage = props => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p>it's time to get your expenses under control.</p>
                <button onClick={props.dispatch(startLogin)} className="button">
                    Login with Google
                </button>
        </div>
    </div>
);

export default connect()(LoginPage);
