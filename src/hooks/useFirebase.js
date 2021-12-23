import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged , signOut} from "firebase/auth";
import { useEffect, useState } from "react";


const useFirebase = () => {

    initializeApp();
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const [user , setUser] = useState({});
    const [loading , setLoading] = useState(true)

    
    
    
    // sign in with google 
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            console.log(1)
            const user = result.user;
            setUser(user)
            }).catch((error) => {
            console.log(error)
         });
    }

    // user state management onAuth State change

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
        });
        return () => unsubscribe
    }, [])


    // sign out user

    const signOutUser = () => {
        setLoading(true)
        signOut(auth).then(() => {
            setUser({})
          }).finally(()=> setLoading(false))
    }




    return {
        user , signInWithGoogle , signOutUser , loading, setLoading
    }


}

export default useFirebase