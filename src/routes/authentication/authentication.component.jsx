
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import './authentication.styles.scss'

const Authentication = ()=> {

    //when user login with GoogleRedirect this method run when user gets back on site 
    //and the response is stored in response variable
//   useEffect( () => { async function fetchFunction(){
//     const response = await getRedirectResult(auth);
//     if(response){
//         const userDocRef = await createUserDocumentFromAuth(response.user)
//     }
//   }  
//   }, []);


  return (
    <div className="authentication-container">
      <SignInForm/>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
      <SignUpForm/>
    </div>
  );
}

export default Authentication;
