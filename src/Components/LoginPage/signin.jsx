
import "./Login.css"
import {Button, Image} from "antd"
import GoogleImg from "../../assets/google.png"
export const SignInButton = () => {

  
  return (
    <div>
      <Button  className="signin-btn">
      <Image src={GoogleImg} style={{width:"1.5rem"}} preview={false} /> Sign in with Google
    
      </Button>
    </div>
  );
};
