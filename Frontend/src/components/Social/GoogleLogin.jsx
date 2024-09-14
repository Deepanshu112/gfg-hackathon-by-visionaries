import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
  
const GoogleLogin = () => {
    const {googleLogin} = useAuth();
    const navigate = useNavigate();
    const handleLogin = () => {
        console.log("done");
        googleLogin().then((userCredential) => {
            const user = userCredential.user;
            if(user){
                const userImp = {
                    name: user?.displayName,
                    email: user?.email,
                    photoURl: user?.photoURL,
                    role: 'user',
                    gender: "Is not spedified",
                    address : "Is not specified",
                    phone: "Is not specified",
                };
                if(user.email && user.displayName){
                    return axios.post('http://localhost:5000/new-user', userImp).then(() => {
                        navigate('/');
                        return "Registration Succesful!"
                    }).catch((err) => {
                        throw new Error(err);
                    })
                }
            }
            
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        })
    }

  return (
    <div className="flex items-center justify-center mt-3">
        <button onClick={() => handleLogin()} className="flex items-center outline-none bg-white border border-gray-300 rounded-lg px-6 py-4 
        text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none">
        <FcGoogle className="w-6 h-6 mr-2"/>
        <span>Continue with Google</span>
        </button>
    </div>

  )
}

export default GoogleLogin