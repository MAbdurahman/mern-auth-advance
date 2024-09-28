/************************* imports *************************/
import { useState } from "react";
import {motion} from 'framer-motion';
import { Loader, Lock, Mail, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Input from '../components/Input.jsx';
import PasswordStrengthMeter from '../components/PasswordStrengthMeter.jsx';
import { useAuthStore } from '../store/authStore.js';

export default function SignUpPage() {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const navigate = useNavigate();
   const { signup, error, isLoading } = useAuthStore();



 const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       await signup(email, password, name);
       navigate("/verify-email");

    } catch (err) {
       console.log(err);

    }

 }//end of handleSubmit Function



   return (
      <motion.div
         initial={{opacity: 0, y: 20}}
         animate={{opacity: 1, y: 0}}
         transition={{duration: 0.5}}
         className='max-w-md w-full bg-neutral-200 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-md shadow-xl
			overflow-hidden mx-3'
      >
         <div className='p-8 '>
            <h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-01-700 to-blue-01-800 text-transparent bg-clip-text uppercase'>
               Sign Up
            </h2>
            <form onSubmit={handleSubmit}>
               <Input
                  icon={User}
                  type='text'
                  placeholder='Full Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
               />
               <Input
                  icon={Mail}
                  type='email'
                  placeholder='Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />
               <Input
                  icon={Lock}
                  type='password'
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
               />
               {error && <p className='text-red-500 font-semibold mt-2'>{error}</p>}
               <PasswordStrengthMeter password={password} />

               <motion.button
                  className='mt-5 w-full py-3 px-4 bg-gradient-to-r from-blue-01-700 to-blue-01-800 text-white
						font-semibold rounded-md shadow-lg hover:from-blue-01-800
						hover:to-blue-01-700 focus:outline-none focus:ring-2 focus:ring-blue-01-700 focus:ring-offset-2
						 focus:ring-offset-blue-01-900 transition duration-200 uppercase tracking-wider'
                  whileHover={{scale: 1.02}}
                  whileTap={{scale: 0.98}}
                  type='submit'
                  disabled={isLoading}
               >
                  {isLoading ? <Loader className=' animate-spin mx-auto' size={24} /> : "Sign Up"}
               </motion.button>
            </form>
         </div>
         <div className='px-8 py-4 bg-neutral-200 bg-opacity-50 flex justify-center'>
            <p className='text-sm text-augmented-800 tracking-wide'>
               Already have an account?{" "}
               <Link to={"/sign-in"} className='text-blue-01-800 font-semibold tracking-wider hover:underline'>
                  Sign In
               </Link>
            </p>
         </div>
      </motion.div>

   );
}