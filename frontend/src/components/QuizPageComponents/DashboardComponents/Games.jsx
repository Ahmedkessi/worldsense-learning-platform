import "./styles.css";
import EasyGames from "./EasyGames";
import MediumGames from "./MediumGames";
import HardGames from "./HardGames";
import { useSelector } from "react-redux";
import { useLocation } from "../../../hooks/LocationContext";


function Games() {
  const level = useSelector(store => store.user.progress.level)
  const {setQueCategory, setQueDificulity} = useLocation()

  const levelNeedToUnlockEasy = 1;
  const levelNeedToUnlockMedium = 10;
  const levelNeedToUnlockHard = 20;
  
  return (
    <div className="games">
        <p className="title">Games</p>
        <div className="games-box">

            <EasyGames 
                setQueCategory={setQueCategory} setQueDificulity={setQueDificulity}
                type={level < levelNeedToUnlockEasy ? `lock` : `unclock`} msg={
                level < levelNeedToUnlockEasy ?
                    <>
                        <p>🔒 Locked</p>
                        <p>Reach Level 1</p>
                    </>
                    :``
            }  />
            
            <MediumGames 
                setQueCategory={setQueCategory} setQueDificulity={setQueDificulity}
                type={level < levelNeedToUnlockMedium ? `lock` : `unlock`} 
                msg={
                level < levelNeedToUnlockMedium ?
                <>
                    <p>🔒 Locked</p>
                    <p>Reach Level 10</p>
                </>
                :``
            }
            />

            <HardGames 
                setQueCategory={setQueCategory} setQueDificulity={setQueDificulity}
                type={level < levelNeedToUnlockHard ? `lock` : `unlock`} 
                msg={
                level < levelNeedToUnlockHard ?
                <>
                    <p>🔒 Locked</p>
                    <p>Reach Level 20</p>
                </>
                : ``}
            />

        </div>
    </div>
  );
};

export default Games ;