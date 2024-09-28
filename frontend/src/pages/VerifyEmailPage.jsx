/************************* imports *************************/
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function VerifyEmailPage() {
   /************************* variables *************************/
   const [code, setCode] = useState(["", "", "", "", "", ""]);
   const inputRefs = useRef([]);
   const navigate = useNavigate();

   const isLoading = false;

   const handleChange = (index, value) => {
      const newCode = [...code];

      //handle pasted content
      if (value.length > 1) {
         const pastedCode = value.slice(0, 6).split("");
         for (let i = 0; i < 6; i++) {
            newCode[i] = pastedCode[i] || "";
         }
         setCode(newCode);

         //focus on the last non-empty input or the first empty one
         const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "");
         const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5;
         inputRefs.current[focusIndex].focus();
      } else {
         newCode[index] = value;
         setCode(newCode);

         //move focus to the next input field if value is entered
         if (value && index < 5) {
            inputRefs.current[index + 1].focus();
         }
      }

   }//end of handleChange Function

   const handleKeyDown = (index, e) => {
      if (e.key === "Backspace" && !code[index] && index > 0) {
         inputRefs.current[index - 1].focus();
      }

   }//end of handleKeyDown Function


   const handleSubmit = async (e) => {
      e.preventDefault();
      const verificationCode = code.join("");
      console.log(`Verification oode submitted - ${verificationCode}`)



   }//end of handleSubmit Function

   // Auto submit when all fields are filled
   useEffect(() => {
      if (code.every((digit) => digit !== "")) {
         handleSubmit(new Event("submit"));
      }
   }, [code]);

   return (
      <div
         className='max-w-md w-full bg-neutral-200 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-md shadow-xl overflow-hidden mx-2'>
         <motion.div
            initial={{opacity: 0, y: -50}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
            className='bg-neutral-200 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-md shadow-2xl p-8 w-full max-w-md'
         >
            <h2
               className='text-3xl uppercase font-bold mb-3 text-center bg-gradient-to-r from-blue-01-700 to-blue-01-800 text-transparent bg-clip-text'>
               Verify Email
            </h2>
            <p className='text-center text-blue-01-700 font-semibold mb-6 capitalize tracking-wider'>Enter the 6-digit code</p>

            <form onSubmit={handleSubmit} className='space-y-6'>
               <div className='flex justify-between'>
                  {code.map((digit, index) => (
                     <input
                        key={index}
                        ref={(el) => (inputRefs.current[index] = el)}
                        type='text'
                        maxLength='6'
                        value={digit}
                        onChange={(e) => handleChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        className='w-12 h-12 text-center text-2xl font-monospace font-semibold bg-neutral-100 text-augmented-900 border-2 border-neutral-300 rounded-md focus:border-blue-01-900 focus:outline-none'
                     />
                  ))}
               </div>

               <motion.button
                  whileHover={{scale: 1.05}}
                  whileTap={{scale: 0.95}}
                  type='submit'

                  className='w-full uppercase tracking-wider font-semibold bg-gradient-to-r from-blue-01-700 to-blue-01-800 text-white py-3 px-4 rounded-md shadow-lg hover:from-blue-01-700 hover:to-blue-01-800 focus:outline-none focus:ring-2 focus:ring-blue-01-600 focus:ring-opacity-50 disabled:opacity-50'
               >
                  {isLoading ? "Verifying..." : "Verify Email"}
               </motion.button>
            </form>
         </motion.div>
      </div>

   );
};//end of VerifyEmailPage Function