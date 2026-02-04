import { useState } from "react";
import "./styles.css";
import { useSelector } from "react-redux";


const avatarStyles = [
  "adventurer",
  "adventurer-neutral",
  "avataaars",
  "big-smile",
  "bottts",
  "bottts-neutral",
  "croodles",
  "croodles-neutral",
  "fun-emoji",
  "icons",
  "identicon",
  "initials",
  "lorelei",
  "lorelei-neutral",
  "micah",
  "miniavs",
  "open-peeps",
  "personas",
  "pixel-art",
  "thumbs",
];


const avatars = Array.from({ length: 99 }, (_, i) => {
  const style = avatarStyles[i % avatarStyles.length];
  const seed = `avatar-${i + 1}`;

  return {
    id: i + 1,
    name: `${style.replace("-", " ")} ${i + 1}`,
    src: `https://api.dicebear.com/7.x/${style}/svg?seed=${seed}`,
  };
});
    



function UploadAvatar({avatarImg, setAvatarImg, setShowAvatarPage}) {

  function handleClose() {
    setShowAvatarPage(()=> false)
  }

    return (
     <div className="avatar-page">
        <svg  onClick={handleClose}
         xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
        <div className="avatar-main">
            <div className="img">
                <img src={avatarImg} alt="" />
            </div>

            <p>Select Avatar</p> 
            <div className="avatar-box">
                {avatars.map((alt)=> <Avatar key={alt.id} alt={alt} setAvatarImg={setAvatarImg} selected={alt.src === avatarImg} />)}
            </div>
        </div>
    </div>
  );
};

export default UploadAvatar;





function Avatar({setAvatarImg, alt, selected}) {

    function handleSelect(e) {
        setAvatarImg(e.target.src)
    }

    return(
        <img 
            className={`${selected ? `selected` : ``}`}
            onClick={(e)=> handleSelect(e)}
            src={alt.src}
            alt={alt.name} 
        />
    )
    
}