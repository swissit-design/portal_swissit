import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast';
import LoginLeftPane from '../components/Authentication/LoginLeftPane'
import { useTranslation } from 'react-i18next';

function PasswordResetRequest ({ }) {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Start loading spinner

        try {
            const response = await api.post("/api/password_reset/", { email });
            const data = response;
            console.log(data)
            setError("If your email exists you will receive an email with a link to reset your password")
            toast.success('If your email exists you will receive an email with a link to reset your password');
        } catch (error) {
            console.log(JSON.parse(error.request.responseText).email[0])
            setError(JSON.parse(error.request.responseText).email[0]);
            toast.error(JSON.parse(error.request.responseText).email[0]);
        } finally {
            setLoading(false);
        }
    };

    return (
      <div className="flex h-screen">
        {/* <!-- Left Pane --> */}
        <LoginLeftPane/>
        {/* <!-- Right Pane --> */}
           <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
             <div className="sm:mx-auto sm:w-full sm:max-w-sm">
               <img
                 className="mx-auto h-10 w-auto"
                 src="/swissit_logo.png"
                 alt="Your Company"
               />
               <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
               {t('reset_password.reset_password_title')} 
               </h2>
             </div>
     
             <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
               <form  onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
                 <div>
                   <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                   {t('reset_password.email')} 
                   </label>
                   <div className="mt-2">
                     <input
                       id="email"
                       name="email"
                       type="email"
                       autoComplete="email"
                       required
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       placeholder="Email"
                       className="shadow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                     />
                   </div>
                 </div>
                 {error &&
                 <div class="bg-sky-100 border-t-4 border-sky-500 rounded-b text-sky-900 px-4 py-3 shadow-md" role="alert">
                <div class="flex">
                  <div class="py-1"><svg class="fill-current h-6 w-6 text-sky-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
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
                     className="flex w-full justify-center rounded-md bg-sky-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                   >
                      <span className="loading loading-spinner loading-md"></span></button>
                    )  : 
                   <button
                     type="submit"
                     className="flex w-full justify-center rounded-md bg-sky-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                   >
                     {t('reset_password.reset_password_button')} </button>}
                 </div>
               </form>
             </div>
           </div>
           </div>
    );
}

export default PasswordResetRequest