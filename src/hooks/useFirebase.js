import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, updateProfile, getIdToken } from "firebase/auth";


// initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();

    // User register function
    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                // const newUser = { email, displayName: name };
                // setUser(newUser);
                // // save user to the database
                // saveUser(email, name, 'POST');
                // // send name to firebase after creation
                // updateProfile(auth.currentUser, {
                //     displayName: name
                // }).then(() => {
                // }).catch((error) => {
                // });
                // history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    // Login with Email and Password
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/dashboard';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    // observe user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                // getIdToken(user)
                //     .then(idToken => {
                //         // console.log(idToken);
                //         setToken(idToken);
                //     })
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [auth]);

    // Logout function
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {

            })
            .catch((error) => {

            })
            .finally(() => setIsLoading(false));
    };

    return {
        user,
        isLoading,
        authError,
        registerUser,
        loginUser,
        logOut
    };
};

export default useFirebase;