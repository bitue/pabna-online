import React from 'react';
import useFirebase from '../../hooks/useFirebase';




const SiginInComponent = () => {

    const {signInWithGoogle} = useFirebase()
   
    const handleGoogleSignIn = () => {
        signInWithGoogle()
   

        console.log(1)
    }
  

    
  
    return (
        <div>
            <h1 className='font-bold text-3xl text-center my-5'>Sign In By google </h1>
            <div className='flex justify-center items-center'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC6czXGwqSeYdIyBT7G3llJBWVhiJ_kp0oXQ&usqp=CAU'/>
               
            </div>
            <div>
                <button onClick={handleGoogleSignIn} className='bg-red-500 py-1 px-3 rounded-2xl font-semibold my-3'>Sign in with Google</button>
            </div>
        </div>
    );
};

export default SiginInComponent;