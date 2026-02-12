import "./styles.css";
import Button from "../UI/Button";
import { Link, useNavigate } from "react-router-dom";
import { loadUserFromStorage } from "../../features/storage";
import store from "../../store/store";
import { useState } from "react";
import { loadUser } from "../../features/QuizSlice";
import Error from "../UI/Error";


function QuizLogin() {
  const [username, setUsername] = useState(``)
  const [password, setPassword] = useState(``)
  const [error, setError] = useState(``)
  const navigate = useNavigate();
  const [back, setBack] = useState(false)

  function capitalize(string) {
  return string.trim().toLocaleLowerCase().split(` `).map(word => word[0].toUpperCase() + word.slice(1)).join(` `)
}


  function login(username, password) {
    const user = loadUserFromStorage(username);
    if (!user || user === `null`) {
      setError(()=> "User not found");
      return;
    }
  
    if (user.profile.password !== password) {
      setError(()=> "Wrong password");
      return;
    }
  
    localStorage.setItem("WorldWise_currentUser", username);
    store.dispatch(loadUser(user))
    return `login`
  }



  function handlerSubmit(e) {
    e.preventDefault();
    if(back) {
      navigate(`/`)
      return;
    }

    if(!username || !password) {
      setError(()=> `please fill this form...`);
      return;
    }
    
    const log = login(capitalize(username), password.trim().split(` `).join(``))
    log && navigate(`/`)
  }

  

  function handleBack() {
    setBack(()=> true)
  }


  return (
    <div className="login">
        <div className="login--contaiener">

          <div className="box-1">
            <div className="welcome">
              <p className="title">Welcome to the Ultimate Quiz Challenge! 🎉</p>
              <p className="intro">Sharpen your mind, test your knowledge, and compete for the top spot.
              You’ll answer fun and challenging questions across different categories.
              Each correct answer earns you points — the faster you respond, the higher your score!
              Ready to prove yourself? Log in and start your journey to becoming a quiz master
              </p>
            </div>
          </div>

          <div className="login-box">
              <p className="title">Login to begin</p>
              <p className="intro int">Enter your username and password.</p>
          
              <form onSubmit={(e)=> handlerSubmit(e)}>
                <input type="text" placeholder="Enter Your Name" 
                  value={username} onChange={(e)=> setUsername(e.target.value)}/>
                <input type="password" placeholder="Enter Your Password" 
                  value={password} onChange={(e)=> setPassword(e.target.value)}/>
                 {error.length > 0 ? <div className="err">{error}</div> : ``}

                <div className="btns">
                  <Button newStyle="py-1 px-5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-[grey] text-grey-100" handleClick={handleBack}>Back</Button>
                 <Button newStyle="py-1 px-5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-[grey] text-grey-100">Login</Button>
                </div>
              </form>
              
              
              <br />
             
              <p className="footer">Don’t have an account yet? <Link to={`/Signup`} className="text-cyan-400 text-sm">Sign up</Link> and join the fun!</p>
              <p className="footer">I forgot my password. <Link to={`/Help`} className="text-cyan-400 text-sm">Help</Link></p>
           
          </div>

        </div>


    </div>
  );
};

export default QuizLogin