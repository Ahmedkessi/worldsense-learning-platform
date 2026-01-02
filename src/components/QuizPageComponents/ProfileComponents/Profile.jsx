import "./styles.css";
import UserInformation from "./UserInformation";
import Setting from "./Setting";
import { useSelector } from "react-redux";


function Profile() {
    const profile = useSelector(store => store?.user?.profile)
    const createdAt = useSelector(store => store?.user?.createdAt)
    
  return (
    <div className="profile">

       <div className="img-box">
          <div className="info-box">
            <img src={profile.avatar} alt="avatar" />
            <p className="username">{profile.username}</p>
            <p className="password">password: {profile.password}</p>
            <p className="created">created at: {createdAt}</p>
          </div>
       </div>

       
        <UserInformation />
        <Setting />


    </div>
  );
};

export default Profile