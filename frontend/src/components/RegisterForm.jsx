import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

function RegisterForm({ route, method }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Start loading spinner

        try {
          if (password != password2) {
            console.log('Password does not match')
            setError('Password does not match')
            toast.error('Password does not match')
            } else {
            const response = await api.post(route, { username, password });            
            navigate("/login")
            console.log('Successfully Registered')
            toast.success('Successfully Registered!');}
        } catch (error) {
            console.log(JSON.parse(error.request.responseText).detail)
            setError(JSON.parse(error.request.responseText).detail);
            toast.error(JSON.parse(error.request.responseText).detail);
        } finally {
            setLoading(false); // End loading
        }
    };


    return (
        <div>
           <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
             <div className="sm:mx-auto sm:w-full sm:max-w-sm">
               <img
                 className="mx-auto h-10 w-auto"
                 src="/swissit_logo.png"
                 alt="Your Company"
               />
               <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
               Register a new user
               </h2>
             </div>
     
             <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
               <form  onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
                 <div>
                   <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                     Email address
                   </label>
                   <div className="mt-2">
                     <input
                       id="email"
                       name="email"
                       type="email"
                       autoComplete="email"
                       required
                       value={username}
                       onChange={(e) => setUsername(e.target.value)}
                       placeholder="Email"
                       className="shadow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     />
                   </div>
                 </div>
     
                 <div>
                   <div className="flex items-center justify-between">
                     <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                       Password
                     </label>
                   </div>
                   <div className="mt-2">
                     <input
                       id="password"
                       name="password"
                       type="password"
                       autoComplete="current-password"
                       required
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       placeholder="Password"
                       className={`shadow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${error ? 'border-red-500 bg-red-100' : ''}`}
                     />
                   </div>
                 </div>

                 <div>
                   <label htmlFor="password2" className="block text-sm font-medium leading-6 text-gray-900">
                     Confirm password 
                   </label>
                   <div className="mt-2">
                   <input
                       id="password2"
                       name="password2"
                       type="password"
                       autoComplete="confirm-password"
                       required
                       value={password2}
                       onChange={(e) => setPassword2(e.target.value)}
                       placeholder="Confirm password"
                       className={`shadow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${error ? 'border-red-500 bg-red-100' : ''}`}
                     />
                   </div>
                 </div>

                 {error &&
                 <div class="bg-indigo-100 border-t-4 border-indigo-500 rounded-b text-indigo-900 px-4 py-3 shadow-md" role="alert">
                <div class="flex">
                  <div class="py-1"><svg class="fill-current h-6 w-6 text-indigo-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                  <div>
                    <p class="text-sm">{error}</p>
                  </div>
                </div>
              </div>
            }
                 <div>

                  {loading ? 
                  (<button
                     type="submit"
                     className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                   >
                      <span className="loading loading-spinner loading-md"></span></button>
                    )  : 
                   <button
                     type="submit"
                     className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                   >
                     Register</button>}
                 </div>
               </form>
             </div>
           </div>
           </div>
    );
}

export default RegisterForm