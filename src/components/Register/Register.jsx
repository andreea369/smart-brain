import React, {useState} from "react";

function Register({onRouteChange, loadUser})   {
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [registerName, setRegisterName] = useState('');

    const onNameChange = (event) => {
        setRegisterName(event.target.value);
    }
    const onEmailChange = (event) => {
        setRegisterEmail(event.target.value);   
    }
    const onPasswordChange = (event) => {
        setRegisterPassword(event.target.value);
    }
    const onSubmitRegister = () =>{
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                email: registerEmail,
                password:registerPassword,
                name:registerName
        })
    })
    .then(response => response.json())
    .then(user=>{
        if(user.id ){
            loadUser(user);
            onRouteChange('home');
        }   
    });
        
    }
  return (      
    <>
    <div className=" center bg-neutral-secondary-dark flex flex-col justify-center py-12 px-6 lg:px-8 rounded-lg shadow-lg shadow-rose-900 max-w-md mx-auto mt-20">
        <h3 className="text-3xl font-semibold text-shadow-violet-600 mb-6 text-center">Register for an account</h3>
        <div className="max-w-sm mx-auto ">
        <div>
            <label htmlFor="name" className="block mb-2.5 text-sm font-medium text-heading">Your name</label>
            <input type="text"  
            onChange={onNameChange}
                   name= "name" 
                   id="name" 
                   className="bg-neutral-secondary-medium border  text-sm rounded-base focus:ring-amber-200 focus:border-amber-200 block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="John Doe" required />
        </div>    
        <div className="mb-5">
            <label htmlFor="email" className="block mb-2.5 text-sm font-medium text-heading">Your email</label>
            <input type="email" 
                   onChange={onEmailChange}
                   name="email" 
                   id="email" 
                   className="bg-neutral-secondary-medium border  text-sm rounded-base focus:ring-amber-200 focus:border-amber-200 block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="johndoe@yahoo.com" required />
        </div>
        <div className="mb-5">
            <label htmlFor="password" className="block mb-2.5 text-sm font-medium text-heading">Your password</label>
            <input type="password"
                   onChange={onPasswordChange}
                   name= "password" 
                   id="password" 
                   className="bg-neutral-secondary-medium border  text-sm rounded-base focus:ring-amber-200 focus:border-amber-200 block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="••••••••" required />
        </div>
        <div className="center flex-col gap-4 pl-14 pr-14">
        <button type="submit" 
                onClick={onSubmitRegister}
                className=" text-pink-900 box-border border border-transparent font-medium leading-5  text-sm px-4 py-2.5 focus:outline-none">Register</button>
        </div>
        </div>
    </div>
        
     </>   
    );  
}
export default Register;