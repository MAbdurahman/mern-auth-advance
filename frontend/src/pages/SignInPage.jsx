/************************* imports *************************/
import {useState} from 'react';
import { motion } from "framer-motion";
import { Mail, Lock, Loader } from "lucide-react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import { useAuthStore } from "../store/authStore";




export default function SignInPage() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const { signin, isLoading, error } = useAuthStore();


   const handleSubmit = async (e) => {
      e.preventDefault();
      await signin(email, password);

   };//end of handleSubmit Function



   return (
      <motion.div
         initial={{opacity: 0, y: 20}}
         animate={{opacity: 1, y: 0}}
         transition={{duration: 0.5}}
         className='max-w-md w-full bg-neutral-200 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-md shadow-xl
			overflow-hidden mx-3'
      >
         <div className='p-8 '>
            <h2
               className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-01-700 to-blue-01-800 text-transparent bg-clip-text tracking-wider uppercase'>
               Sign In
            </h2>
            <form onSubmit={handleSubmit}>
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

               <motion.button
                  className='mt-1 mb-3 w-full py-3 px-4 bg-gradient-to-r from-blue-01-700 to-blue-01-800 text-white
						font-semibold rounded-md shadow-lg hover:from-blue-01-800
						hover:to-blue-01-700 focus:outline-none focus:ring-2 focus:ring-blue-01-700 focus:ring-offset-2
						 focus:ring-offset-blue-01-900 transition duration-200 uppercase tracking-wider'
                  whileHover={{scale: 1.02}}
                  whileTap={{scale: 0.98}}
                  type='submit'
               >
                  Sign In
               </motion.button>

               <div className='flex ml-52 mb-2'>
                  <Link to='/forgot-password'
                        className="text-sm text-blue-01-800 font-semibold tracking-wider hover:underline">
                     Forgot password?
                  </Link>
               </div>
               {error && <p className='text-semantic-a-400 font-semibold tracking-wider mb-2'>{error}</p>}
            </form>

         </div>
         <div className='px-8 py-4 bg-neutral-200 bg-opacity-50 flex justify-center'>
            <p className='text-sm text-augmented-800 tracking-wide'>
               Don't have an account?{" "}
               <Link to={"/sign-up"}
                     className='text-blue-01-800 font-semibold tracking-wider hover:underline'>
                  Sign up
               </Link>
            </p>
         </div>
      </motion.div>

   );
}