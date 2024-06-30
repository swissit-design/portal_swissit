import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import LoadingIndicator from "./LoadingIndicator";

function Form({ route, method }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const name = method === "login" ? "Login" : "Register";

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            const res = await api.post(route, { username, password })
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/")
            } else {
                navigate("/login")
            }
        } catch (error) {
            alert(error)
        } finally {
            setLoading(false)
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
                 Sign in to your account
               </h2>
             </div>
     
             <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
             <h1>{name}</h1>
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
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     />
                   </div>
                 </div>
     
                 <div>
                   <div className="flex items-center justify-between">
                     <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                       Password
                     </label>
                     <div className="text-sm">
                       <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                         Forgot password?
                       </a>
                     </div>
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
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     />
                   </div>
                 </div>
     
                 <div>
                 {loading && <LoadingIndicator />}
                   <button
                     type="submit"
                     className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                   >
                     Sign in
                     {name}
                   </button>
                 </div>
               </form>
             </div>
           </div>
           </div>
    );
}

export default Form