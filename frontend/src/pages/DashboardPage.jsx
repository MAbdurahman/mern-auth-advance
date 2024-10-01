/************************* imports *************************/
import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import { formatDate} from '../utils/dateUtils.js';

export default function DashboardPage() {
   /************************* variables *************************/
   const { user } = useAuthStore();


   const handleSignOut = () => {
      console.log('handleSignOut');
   }

   return (
      <motion.div
         initial={{opacity: 0, scale: 0.9}}
         animate={{opacity: 1, scale: 1}}
         exit={{opacity: 0, scale: 0.9}}
         transition={{duration: 0.5}}
         className="max-w-md w-full bg-neutral-200 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-md shadow-xl
			overflow-hidden mx-3"
      >
         <div className="p-8 ">
            <h2
               className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-01-700 to-blue-01-800 text-transparent bg-clip-text tracking-wider uppercase">
               Dashboard
            </h2>

            <div className="space-y-6">
               <motion.div
                  className="p-4 bg-neutral-000 bg-opacity-50 rounded-md border border-blue-01-700"
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  transition={{delay: 0.2}}
               >
                  <h3 className="text-xl font-semibold tracking-wider text-blue-01-700 mb-3">Profile
                     Information</h3>
                  <p className="text-augmented-800 tracking-wider"><span className="font-semibold">Name:</span> {user.name}
                  </p>
                  <p className="text-augmented-800 tracking-wider"><span className="font-semibold">Email:</span> {user.email}
                  </p>
               </motion.div>
               <motion.div
                  className="p-4 bg-neutral-000 bg-opacity-50 rounded-md border border-blue-01-700"
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  transition={{delay: 0.4}}
               >
                  <h3 className="text-xl font-semibold text-blue-01-700 tracking-wider mb-3">Account
                     Activity</h3>
                  <p className="text-augmented-800 tracking-wider">
                     <span className="font-semibold">Joined: </span>
                     {new Date(user.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                     })}
                  </p>
                  <p className="text-augmented-800">
                     <span className="font-semibold">Last Signed In: </span>

                     {formatDate(user.lastLogin)}
                  </p>
               </motion.div>
            </div>

            <motion.div
               initial={{opacity: 0, y: 20}}
               animate={{opacity: 1, y: 0}}
               transition={{delay: 0.6}}
               className="mt-4"
            >
               <motion.button
                  whileHover={{scale: 1.05}}
                  whileTap={{scale: 0.95}}
                  onClick={handleSignOut}
                  className='mt-1 mb-3 w-full py-3 px-4 bg-gradient-to-r from-blue-01-700 to-blue-01-800 text-white
						font-semibold rounded-md shadow-lg hover:from-blue-01-800
						hover:to-blue-01-700 focus:outline-none focus:ring-2 focus:ring-blue-01-700 focus:ring-offset-2
						 focus:ring-offset-blue-01-900 transition duration-200 uppercase tracking-wider'
               >
                  Sign Out
               </motion.button>
            </motion.div>
         </div>
      </motion.div>

);
}//end of DashboardPage Function