
import {Route, Routes} from 'react-router-dom';
import SignUpPage from './pages/SignUpPage.jsx';
import SignInPage from './pages/SignInPage.jsx';
import HomePage from './pages/HomePage.jsx';

export default function App() {

   return (
      <div className="min-h-screen bg-gradient-to-br from-neutral-100 via-neutral-000 to-neutral-100
      flex items-center justify-center relative overflow-hidden">
         <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/sign-up" element={<SignUpPage/>} />
            <Route path="/sign-in" element={<SignInPage/>} />

         </Routes>
      </div>);


}//end of App Function