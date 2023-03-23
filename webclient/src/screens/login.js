import React from 'react';

const Login = () => {
    const [loggedIn, setLoggedIn] = React.useState(false);
    return (
        
        <div className="my-5 ">
            <div className="mx-auto my-4 w-50 h-50 p-4 border rounded">
                <form>
                    <h2>Infoctess API Login</h2>
                    <div className="form-group my-3">
                        <input type="email" className="form-control" id="emailID" name="email"/>
                    </div>
                    <div className="form-group my-3">
                        <input type="password" className="form-control" id="pass" name="password"/>
                    </div>
                    <div className="form-group my-3">
                        <button className="btn btn-primary w-75" type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
        
    );
};

export default Login;