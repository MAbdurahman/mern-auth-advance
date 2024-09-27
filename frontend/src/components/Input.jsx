export default function Input({ icon: Icon, ...props }) {

   return (
      <div className='relative mb-6'>
         <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <Icon className='size-5 text-neutral-900' />
         </div>
         <input {...props}
            className='w-full pl-10 pr-3 py-2 bg-neutral-000 bg-opacity-50 rounded-lg border border-neutral-700 focus:border-augmented-500 focus:ring-2 focus:ring-augmented-500 text-augumented-800 placeholder-augmented-400 transition duration-200'
         />
      </div>

   );
}//end of Input Fucntion