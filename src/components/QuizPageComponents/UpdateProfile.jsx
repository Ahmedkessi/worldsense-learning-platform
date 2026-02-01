import "./styles.css";
import Button from "../UIComponents/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Error from "../UIComponents/Error";
import { updateProfile } from "../../features/QuizSlice";
import store from "../../store/store";
import LoadingPageSpinner from "../UIComponents/LoadingPageSpinner";
import { useSelector } from "react-redux";
import UploadAvatar from "./UploadAvatar";



function UpdateProfile() {
  const navigate = useNavigate();

  const [password, setPassword] = useState(``)
  const [error, setError] = useState(false)

  const [showAvatarPage, setShowAvatarPage] = useState(false);
  const defAvatar = useSelector(store => store?.user?.profile?.avatar);
  const image  = defAvatar ? defAvatar : `https://avatar.iran.liara.run/public/39`;
  const [avatarImg, setAvatarImg] = useState(image);


  function update(password, avatar) {
    store.dispatch(updateProfile(avatar, password));
}



  function handlerSubmit(e) {
    e.preventDefault();
    setError(``)
    if(!password || avatarImg.length <= 0) {
      setError(`please fill this form...`);
      return;
    }

    update(password.trim().split(` `).join(``), avatarImg)
    navigate(`/Quiz/QuizProfile`)
  }

  function handleBack() {
    navigate(-1)
  }

  function handleUploadAvatar() {
    setShowAvatarPage(true)
  }
  
  return (
     showAvatarPage 
      ?
      <UploadAvatar avatarImg={avatarImg} setAvatarImg={setAvatarImg} setShowAvatarPage={setShowAvatarPage} />
      :
      <div className="login">
        <div className="login--contaiener update">

          <div className="login-box">
              <p className="title">Update Account</p>
              <p className="intro">Updare your profile.</p>
              <p className="nb">NOTE: you cannot change your name</p>
          
              <form onSubmit={(e)=> handlerSubmit(e)}>
                <div className="img" onClick={handleUploadAvatar}>
                  <img src={avatarImg} alt="avatar" />
                </div>

                <input type="password" placeholder="Enter new Password"
                  value={password}  onChange={(e)=> setPassword(e.target.value)} />

                <div className="btns">
                  <Button handleClick={handleBack}>Back</Button>
                 <Button>Save</Button>
                </div>
              </form>
          </div>

        </div>


    </div>
  );
};

export default UpdateProfile;