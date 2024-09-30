import { motion } from 'framer-motion';


export default function LoadingSpinner() {

   return (
      <div
         className='min-h-screen bg-gradient-to-br from-gray-900 via-blue-01-800 to-blue-01-800 flex items-center justify-center relative overflow-hidden'>
         {/* Simple Loading Spinner */}
         <motion.div
            className='w-16 h-16 border-4 border-t-4 border-t-blue-01-700 border-blue-01-600 rounded-full'
            animate={{rotate: 360}}
            transition={{duration: 1, repeat: Infinity, ease: "linear"}}
         />
      </div>

   );
}