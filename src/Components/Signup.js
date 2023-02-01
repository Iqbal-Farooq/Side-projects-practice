import './signup.css'
const Singup=()=>{

    return(<>
       
        <div className='wrapper1' >
           <div className="wrapper">
              <form >
                <h2>Sign-Up</h2>
                  <div className="input-box">

                  
                
                    <input type="email" placeholder="email"  />
               </div>
                   <div className="input-box">
               
                         <input type="password" placeholder="Password" />
                    </div>
                     <div className="input-box">
               
                         <input type="password" placeholder="Password" />
                    </div>
                          <div className="forgot-password">
                               <span>Forgot Password?</span>
                      </div>
                           <button type="submit">Signup</button>
                           <div className="registration-link">
                              <p> have an account? <span>Login</span></p>
             </div>
        </form>
    </div>
    </div>
    </>)
 }
 export default Singup;