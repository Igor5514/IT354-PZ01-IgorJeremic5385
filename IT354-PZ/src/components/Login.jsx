import "./Components.css"

const Login = ({setLoginVisibility, setRegistrationVisibility}) => {

    
    function handleLoginClick(event) {
        
    }

    function handleRegisterClick(event) {
        event.preventDefault();
        setLoginVisibility(false);
        setRegistrationVisibility(true);
    }

    function handleGuestClick(){
        setLoginVisibility(false);
        setRegistrationVisibility(false);
    }

    return (
        <div className="d-flex justify-content-center custom-font" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <div className="login-container">
                <h2 className="text-center pt-3" style={{backgroundColor: " #1a1a1a"}}>Login</h2>
                <div className='mb-3 component-bg' style={{padding:"0 2em 0 2em"}}>
                    <label htmlFor="firstName" className='mb-1 component-bg' style={{fontSize: "1.2em", padding:"0.2em 1em"}}>user email:</label><br />
                    <input type="text" id="firstName" name="firstName" style={{backgroundColor: "black"}} 
                    className="form-control bg-secondary text-light border-0" required />
                    <p id="email-error-label"></p>
                </div>
                <div className='mb-3 component-bg' style={{padding:"0 2em 0 2em"}}>
                    <label htmlFor="password" className='mb-1 component-bg' style={{fontSize: "1.2em", padding:"0.2em 1em"}}>user password:</label><br />
                    <input type="password" id="password" name="password" style={{backgroundColor: "black"}} 
                    className="form-control bg-secondary text-light border-0" required />
                    <p id="password-error-label"></p>
                </div>
                <div className="d-flex justify-content-center" style={{backgroundColor: " #1a1a1a"}}>
                    <div className="login-buttons text-white"> 
                        <button className="button-class-login" onClick={(event) => handleLoginClick(event)}>login</button>
                        <label htmlFor="firstName" className='component-bg'>don't have an account?</label>
                        <button className="button-class-login" onClick={(event) => handleRegisterClick(event)}>register</button>
                        <button className="button-class-login" onClick={(event) => handleGuestClick(event)}>continue as guest</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;