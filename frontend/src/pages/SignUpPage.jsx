/************************* imports *************************/
import { useState } from "react";
import {motion} from 'framer-motion';
import { Loader, Lock, Mail, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Input from '../components/Input.jsx';

export default function SignUpPage() {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const navigate = useNavigate();



 const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handleSubmit');

 }//end of handleSubmit Function



   return (
      <motion.div
         initial={{opacity: 0, y: 20}}
         animate={{opacity: 1, y: 0}}
         transition={{duration: 0.5}}
         className='max-w-md w-full bg-neutral-200 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl
			overflow-hidden'
      >
         <div className='p-8'>
            <h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-neutral-400 to-neutral-500 text-transparent bg-clip-text'>
               Create Account
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
                  placeholder='Email Address'
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
            </form>
         </div>
      </motion.div>

   );
}