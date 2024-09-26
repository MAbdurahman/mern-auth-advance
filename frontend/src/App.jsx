
import {Route, Routes} from 'react-router-dom';
import SignUp from './pages/SignUp.jsx';
import SignIn from './pages/SignIn.jsx';
import Home from './pages/Home.jsx';

export default function App() {

   return (
      <div className="min-h-screen bg-gradient-to-br from-neutral-100 via-neutral-000 to-neutral-100
      flex items-center justify-center relative overflow-hidden">
         <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/sign-up" element={<SignUp/>} />
            <Route path="/sign-in" element={<SignIn/>} />

         </Routes>
      </div>);


}//end of App Function