
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import store from '../rtk/store/store';
import { useSelector } from 'react-redux';

const withPublic = (WrappedComponent) => {
  return (props) => {
    // checks whether we are on client / browser or server.
    if (typeof window !== 'undefined') {
      const router = useRouter();
      const [cookies] = useCookies(['token']);

      const Token = useSelector((state) => state.User.token);
      const token1 = sessionStorage.getItem("token")
      const token2 = cookies?.token;
   
      // console.log(Token,token1,token2)


      if (token1 || Token || token2 ) {
        router.push('/');
        return null;
      }

      return <WrappedComponent {...props} />;
    }

    // If we are on server, return null
    return null;
  };
};

export default withPublic;
