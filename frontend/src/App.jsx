/************************* imports *************************/
import { useEffect } from "react";
import {Route, Routes} from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import SignUpPage from './pages/SignUpPage.jsx';
import SignInPage from './pages/SignInPage.jsx';
import HomePage from './pages/HomePage.jsx';
import VerifyEmailPage from './pages/VerifyEmailPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import { useAuthStore } from "./store/authStore";



// redirect authenticated users to the home page
const RedirectAuthenticatedUser = ({ children }) => {
   const { isAuthenticated, user } = useAuthStore();

   if (isAuthenticated && user.isVerified) {
      return <Navigate to='/' replace />;
   }

   return children;
};

export default function App() {
   /************************* variables *************************/
   const { isCheckingAuth, checkAuth } = useAuthStore();


   useEffect(() => {
      checkAuth();
   }, [checkAuth]);

   return (
      <div className="min-h-screen bg-gradient-to-br from-neutral-100 via-neutral-000 to-neutral-100
      flex items-center justify-center relative overflow-hidden">
         <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/sign-up"
                   element={<RedirectAuthenticatedUser>
                              <SignUpPage />
                           </RedirectAuthenticatedUser>} />
            <Route path="/sign-in"
                   element={<RedirectAuthenticatedUser>
                              <SignInPage />
                           </RedirectAuthenticatedUser>} />
            <Route path="/verify-email" element={<VerifyEmailPage/>} />
            <Route path='*' element={<NotFoundPage/>} />
         </Routes>
         <Toaster />
      </div>);


}//end of App Function