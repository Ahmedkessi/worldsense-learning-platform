import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import useAuth from "../hooks/useAuth";
import Learn from "../components/QuizPageComponents/LearnComponents/Learn";



const HomePage = lazy(() => import("../pages/HomePage"));
const FavouritesPage = lazy(() => import("../pages/favouritesPage"));
const QuizPage = lazy(() => import("../pages/QuizPage"));
const About_Developer = lazy(() => import("../pages/About&DeveloperPage"));


const QuizLogin = lazy(()=> import("../components/QuizPageComponents/QuizLogin"))
const QuizSignUp = lazy(()=> import("../components/QuizPageComponents/QuizSignUp"))
const QuizDasboard = lazy(()=> import("../components/QuizPageComponents/QuizDashboard"))
const QuizGame = lazy(()=> import("../components/QuizPageComponents/QuizGame"))
const QuizProfile = lazy(()=> import("../components/QuizPageComponents/QuizProfile"))


const Error = lazy(() => import("../components/UIComponents/Error"));
const  LoadingPageSpinner = lazy(() => import("../components/UIComponents/LoadingPageSpinner"));
const  HelpAccount = lazy(() => import("../components/QuizPageComponents/HelpAccount"));
const  UpdateProfile= lazy(() => import("../components/QuizPageComponents/UpdateProfile"));



function AppRouter() {
  const {loggedIn } = useAuth()

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<LoadingPageSpinner type="full" />}>          
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/Favourites" element={<FavouritesPage />} />

            <Route path="Quiz" element={<QuizPage />}>
              {!loggedIn && <Route index element={<QuizSignUp />} />}

              <Route index element={<QuizDasboard />} />
              <Route path="Help" element={<HelpAccount />}/>
              <Route path="QuizLogin" element={<QuizLogin />} />
              <Route path="QuizSignUp" element={<QuizSignUp />} />
              <Route path="UpdateProfile" element={<UpdateProfile />} />
              <Route path="QuizDashboard" element={<QuizDasboard />} />
              <Route path="QuizGame" element={<QuizGame />}></Route>
              <Route path="QuizProfile" element={<QuizProfile />} />
              <Route path="/Quiz/Learn" element={<Learn />} />
            </Route>

            <Route path="About&Developer" element={<About_Developer />} />
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