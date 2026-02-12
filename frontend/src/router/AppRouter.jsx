import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import useAuth from "../hooks/useAuth";
import Learn from "../components/QuizPageComponents/LearnComponents/Learn";



import { LandingPage as L } from '../pages/Landing/pages/LandingPage';
import { AboutPage as A } from '../pages/Landing/pages/AboutPage';



const HomePage = lazy(() => import("../pages/HomePage"));
const FavouritesPage = lazy(() => import("../pages/favouritesPage"));
const QuizPage = lazy(() => import("../pages/QuizPage"));
const About_Developer = lazy(() => import("../pages/About&DeveloperPage"));


const QuizLogin = lazy(()=> import("../components/QuizPageComponents/QuizLogin"))
const QuizSignUp = lazy(()=> import("../components/QuizPageComponents/QuizSignUp"))
const QuizDasboard = lazy(()=> import("../components/QuizPageComponents/QuizDashboard"))
const QuizGame = lazy(()=> import("../components/QuizPageComponents/QuizGame"))
const QuizProfile = lazy(()=> import("../components/QuizPageComponents/QuizProfile"))


const Error = lazy(() => import("../components/UI/Error"));
const  LoadingPageSpinner = lazy(() => import("../components/UI/LoadingPageSpinner"));
const  HelpAccount = lazy(() => import("../components/QuizPageComponents/HelpAccount"));
const  UpdateProfile= lazy(() => import("../components/QuizPageComponents/UpdateProfile"));



function AppRouter() {
  const {loggedIn } = useAuth()

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<LoadingPageSpinner type="full" msg={`Loading...`} />}>          
          <Routes>

            {!loggedIn && 
              <>
              <Route index element={<Navigate replace to={`/home`} />} />

                <Route path="/home" element={<L />} />
                <Route path="/about" element={<A />} />
              </>
            }

            <Route path="Signup" element={<QuizSignUp />} />
            <Route path="Login" element={<QuizLogin />} />
            <Route path="/Help" element={<HelpAccount />}/>

            {loggedIn && 
              <>
              <Route index element={<HomePage />} />
            <Route path="/Favourites" element={<FavouritesPage />} />

            <Route path="Quiz" element={<QuizPage />}>
              <Route index element={<QuizDasboard />} />            
              <Route path="/Quiz/UpdateProfile" element={<UpdateProfile />} />
              <Route path="/Quiz/Dashboard" element={<QuizDasboard />} />
              <Route path="/Quiz/Game" element={<QuizGame />}></Route>
              <Route path="/Quiz/Learn" element={<Learn />} />
            </Route>
            
            <Route path="/Profile" element={<QuizProfile />} />

            <Route path="About&Developer" element={<About_Developer />} />
            </>}
            <Route
              path="*"
              element={<Error msg="This Page was not found ;)" type="full" />}
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default AppRouter;

