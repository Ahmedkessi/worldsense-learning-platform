import { useNavigate } from "react-router-dom";
import image from "../../assets/logo1.png";
import "./styles.css";
import Button from "../UI/Button";

function HelpAccount() {
  const navigate = useNavigate()

function loadData() {
  const users = JSON.parse(localStorage.getItem("WorldWise_users")) || {};
  return Object.values(users)
}
const userData = loadData()
const data = userData.map(data => data.profile)



  return (
    <div className="help-page">

      <div className="help-nav">
        <img src={image} alt="logo" />
        <p>WorldSense</p>
      </div>

      <div className="help-main">
        <div className="help-head">
          <span className="num">NO</span>
          <span className="name">ACCOUNT</span>
          <span className="pass">PASSWORD</span>
        </div>

        <div className="help-list">
          {data.map((user,i) => 
            <li key={i} no={i}>
              <span className="num">{i+1}</span>
              <span className="name">{user?.username}</span>
              <span className="pass">{user?.password}</span>
            </li>
          )}         
        </div>
      </div>


      <Button handleClick={()=> navigate(`/Login`)} newStyle="py-1 px-5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-[grey] text-grey-100" onClick={()=> navigate(`/Login`)}>Cencel</Button>


    </div>
  );
};

export default HelpAccount;