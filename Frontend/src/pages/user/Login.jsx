import React, { useState } from 'react';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import GoogleLogin from '../../components/Social/GoogleLogin';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const [showpassword, setshowPassword] = useState(false);
    const location = useLocation();
    const {login, error, setError, loader, setLoader} = useAuth();
    const navigate = useNavigate();

    const handleSubmit = e => {
        
        e.preventDefault();
        setError('');

        const data = new FormData(e.target);
        const formData = Object.fromEntries(data)
        login(formData.email, formData.password).then(() => {
            alert("Login Successful!");
            navigate('/')
        }).catch((err) => {
            setError(err.code);
            setLoader(false);
        })        
    }

  return (
    
    <div className= 'mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
        <h1 className= 'text-2x1 font-bold Otext-secondary sm:text-3x1 text-center' >Get Started Today</h1>
        <p className= 'mx-auto mt-4 max-w-md text-center text-gray-500'>Exp1ore our comprehensive library of
        courses, meticulously crafted to cater to all levels of expertise.</p>

        <div className='mx-auto max-w-lg mb-e mt-6 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8'>
            <form onSubmit={handleSubmit} className='space-y-4'>
                <p className='text-center text-red-400 text-lg fontmedium'>Sign in to your acount</p>
                <div>
                    <label htmlFor="email" className='sr-only'>Email</label>
                    <div className='relative'>
                        <input type="email" name='email' placeholder='Enter email' className='w-full border outline-none rounded-Ig border-gray-2ee p-4 pe-12 text-sm shadow-sm'/>
                        <span className= 'absolute inset-y-0 end-0 grid place-content-center px-4'> <MdOutlineAlternateEmail className = 'h-4 w-4 text-gray-400'/></span>
                    </div>            
                </div>
                {/* password */}
                <div>
                    <label htmlFor="password" className='sr-only'>Password</label>
                    <div className='relative'>
                        <input type={showpassword ? 'text' : 'password'} name='password' placeholder='Enter password' className='w-full border outline-none rounded-Ig border-gray-2ee p-4 pe-12 text-sm shadow-sm'/>
                        <span onClick={() => setshowPassword(!showpassword)} 
                        className= 'absolute inset-y-0 end-0 grid place-content-center px-4'
                        > 
                        <MdOutlineAlternateEmail className = 'h-4 w-4 text-gray-400'/>
                        </span>
                    </div>            
                    <button type='submit' className='block w-full rounded-lg bg-secondary px-5 py-3 text-sm font-medium text-white'>
                        Sign In
                    </button>
                    <p className='text-center text-sm text-gray-500'>No account? <Link className='underline' to="/register">Sign Up</Link></p>
                </div>
            </form>
            <GoogleLogin/>
        </div>
    </div>
  )
}

export default Login