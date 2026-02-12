import "./styles.css";
import { useState } from "react";
import { Link } from "react-router-dom";

import QuizTabs from "./QuizTabs";
import QuizNav from "./QuizNav";
import DailyTasksCard from "./DashboardComponents/DailyTasksCard";
import QuizCategories from "./DashboardComponents/QuizCategories";
import LearnFavourites from "./DashboardComponents/LearnFavourites";
import Games from "./DashboardComponents/Games";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { readNotification } from "../../features/QuizSlice";




function QuizDasboard() {
  const [isOpen, setIsOpen] = useState(false)
  const [showMsg, setShowMsg] = useState(false)

  const messages = useSelector(store => store?.user?.notifications)
  const isNotification = messages?.length > 0;





  return (
    <div className="dashboard">
    <QuizNav />

    <h3 className="quiz-tab">
        <Link to={`/`} className="flex items-start">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" clipRule="round"></g><g id="SVGRepo_iconCarrier"> <path worldsense="evenodd" clipRule="evenodd" d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z" fill="#ffffff"></path> </g></svg>
          <span className="mt-[3px]">Back</span>
        </Link>
    </h3>


    <div className="quiz">
      <div className="head">
        <h4>Dashboard</h4>
        <div className={`${isNotification && `msg-note`}`}></div>
        <svg onClick={()=> setIsOpen((isOpen)=> !isOpen)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M5 7C5 6.44772 5.44772 6 6 6H18C18.5523 6 19 6.44772 19 7C19 7.55228 18.5523 8 18 8H6C5.44772 8 5 7.55228 5 7ZM5 12C5 11.4477 5.44772 11 6 11H18C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H6C5.44772 13 5 12.5523 5 12ZM11 17C11 16.4477 11.4477 16 12 16H18C18.5523 16 19 16.4477 19 17C19 17.5523 18.5523 18 18 18H12C11.4477 18 11 17.5523 11 17Z" fill="#ffffffff"></path> </g></svg>
        {isOpen && <AdjustBox msg={messages?.length} setShowMsg={setShowMsg} isNotification={isNotification} setIsOpen={setIsOpen} />}
      </div>

      <DailyTasksCard />
      <QuizCategories />
      <LearnFavourites />
      <Games />

      {showMsg && <NotificationPage messages={messages} setShowMsg={setShowMsg} />}

      <QuizTabs />
    </div>
    </div>
  );
};

export default QuizDasboard;




function AdjustBox({setIsOpen, isNotification, setShowMsg, msg}) {

  function handleShow() {
      if(!isNotification) return;
      else {
        setShowMsg(true)
        setIsOpen(false)
      }
  }



  return(
    <div className="adjust-box">
      <li onClick={handleShow}>{isNotification ? `Notifications` : `Empty messages`} {msg}</li>
    </div>
  )
}



function NotificationPage({messages, setShowMsg}) {
  const dispatch = useDispatch();
  const notification = messages?.filter(msg => msg.read === false)

  function handleMsg(msg) {
    dispatch(readNotification(messages.filter(note => note.message !== msg.message)))
  }

  return (
    <div className="note-page">
      <div className="notification-box">
      <div className="note-lists">

        {notification?.map((msg, i) => {
          const date = new Date(msg.createdAt).toISOString().split(`T`)[0]
  
          return(
            <li key={i}>
              <div className="boxx">
                <div className="icon">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffc905" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-medal-icon lucide-medal"><path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"/><path d="M11 12 5.12 2.2"/><path d="m13 12 5.88-9.8"/><path d="M8 7h8"/><circle cx="12" cy="17" r="5"/><path d="M12 18v-2h-.5"/></svg>
                </div>
                <p className="note-date">{date}</p>
              </div>
              <p className="note-name">{msg.message}</p>
              <p className="note-read readed"
              onClick={()=> handleMsg(msg)}
              >readed</p>
            </li>
          )
        })}

      </div>
      <button onClick={()=> setShowMsg(false)}>Close</button>
     </div>
    </div>
  )
}