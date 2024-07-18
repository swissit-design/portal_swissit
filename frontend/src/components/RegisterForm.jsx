import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

function RegisterForm({ route, method }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Start loading spinner

        try {
            const response = await api.post(route, { username, password });
            navigate("/login")
            console.log('Successfully Registered')
            toast.success('Successfully Registered!');
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
                 src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
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
                 {error && <p>{error}</p>}
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