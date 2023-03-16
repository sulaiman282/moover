import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import store from "../rtk/store/store";
import { addUserActions } from "../rtk/feautes/addUser/addUserSlice";
import { addTokenActions } from "../rtk/feautes/addToken/addTokenSlice";
import axios from "../utils/axios";
import { useSelector } from 'react-redux';

const withAuth = (WrappedComponent) => {
  return (props) => {
    if (typeof window !== "undefined") {
      const router = useRouter();
      const [cookies] = useCookies(["token"]);
      const [, , removeCookie] = useCookies(["token"]);
      const Token = useSelector((state) => state.Token.token);
      const token1 = sessionStorage.getItem("token");
      const token2 = cookies?.token;

      // console.log("i am the don",Token?.length,token1?.length,token2?.length)

      // if(!Token){
      //   console.log("test1")
      // }

      if (!token1 && !Token && !token2) {
        router.push("/login");
        return null;
      } else {
        axios
          .get(`/api/profile`)
          .then((res) => {})
          .catch((err) => {
            store.dispatch(addUserActions.removeUser());
            store.dispatch(addTokenActions.removeToken());
            sessionStorage.removeItem("token");
            removeCookie("token", { path: "/" });
            
            router.push("/login");
            return null;
          });
      }

      return <WrappedComponent {...props} />;
    }

    // If we are on server, return null
    return null;
  };
};

export default withAuth;
