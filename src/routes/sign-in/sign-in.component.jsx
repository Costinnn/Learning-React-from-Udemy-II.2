import {signInWithGooglePopup} from '../../utils/firebase/firebase.utils'

function SignIn(){

    const logGoogleUser = async () =>{
        const response = await signInWithGooglePopup();
    }

    return(
        <div>
            <h1>Sign in page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
        </div>
    );
}

export default SignIn;