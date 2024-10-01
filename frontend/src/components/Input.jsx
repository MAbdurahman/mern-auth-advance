export default function Input({ icon: Icon, ...props }) {

   return (
      <div className='relative mb-6'>
         <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <Icon className='size-5 text-blue-01-800' />
         </div>
         <input {...props}
            className='w-full pl-10 pr-3 py-2 bg-neutral-000 bg-opacity-50 rounded-md border border-blue-01-700 focus:border-blue-01-700 focus:ring-2 focus:ring-blue-01-700 text-augmented-900 placeholder-augmented-400 transition duration-200'
         />
      </div>

   );
}//end of Input Function