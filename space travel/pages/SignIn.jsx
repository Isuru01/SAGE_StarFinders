import { useContext } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";
import { LoginContext } from "../context/LoginProvider";

const SignIn = () => {
  const { login, setLogin } = useContext(LoginContext);

  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        if (credentialResponse.credential != null) {
          const USER_CREDENTIAL = jwtDecode(credentialResponse.credential);
          setLogin(login);

          console.log(login);
        }
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};

export default SignIn;
