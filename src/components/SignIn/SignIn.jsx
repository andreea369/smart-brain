import React, { useState } from "react";

function SignIn({onRouteChange, loadUser}) {

    const [signInEmail, setSignInEmail] = useState('');
    const [signInPassword, setSignInPassword] = useState('');

    const onEmailChange = (event) => {
        setSignInEmail(event.target.value);
    }

    const onPasswordChange = (event) => {
        setSignInPassword(event.target.value);
    }
    
    const onSubmitSignIn = () => {
        fetch('https://smart-brain-backend-aixh.onrender.com/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: signInEmail,
                password: signInPassword
            })
        })
        .then(response => response.json())
        .then(user=>{
            if (user.id) //does the user exist?
            {
                loadUser(user);
                onRouteChange('home');
            }
        })
     }
    
  return (      
    <>
    <div className=" center bg-neutral-secondary-dark flex flex-col justify-center py-12 px-6 lg:px-8 rounded-lg shadow-lg shadow-rose-900 max-w-md mx-auto mt-20">
        <h3 className="text-3xl font-semibold text-shadow-violet-600 mb-6 text-center">Sign in to your account</h3>
        <div className="max-w-sm mx-auto ">
        <div className="mb-5">
            <label htmlFor="email" className="block mb-2.5 text-sm font-medium text-heading">Your email</label>
            <input type="email" 
                   id="email" 
                   onChange={onEmailChange}
                   className="bg-neutral-secondary-medium border  text-sm rounded-base focus:ring-amber-200 focus:border-amber-200 block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="name@yahoo.com" required />
        </div>
        <div className="mb-5">
            <label htmlFor="password" className="block mb-2.5 text-sm font-medium text-heading">Your password</label>
            <input type="password" 
                   id="password" 
                   onChange={onPasswordChange}
                   className="bg-neutral-secondary-medium border  text-sm rounded-base focus:ring-amber-200 focus:border-amber-200 block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="••••••••" required />
        </div>
        <div className="center flex-col gap-4 pl-14 pr-14">
        <button type="submit"
                onClick={ onSubmitSignIn}
                value="SignIn"
                className="text-white box-border border border-pink-800 hover:bg-pink-900   shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Sign in</button>
        <button type="submit" 
                onClick={() => onRouteChange("register")}
                value="Register"
                className=" text-pink-900 box-border border border-transparent font-medium leading-5  text-sm px-4 py-2.5 focus:outline-none">Register</button>
        </div>
        </div>
    </div>
        
     </>   
    );  
}
export default SignIn;
