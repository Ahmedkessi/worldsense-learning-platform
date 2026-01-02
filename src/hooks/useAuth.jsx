import { useSelector } from "react-redux";

function useAuth() {
  const loggedIn = useSelector(state => state?.user?.loggedIn);
  const user = useSelector(state => state?.user?.profile);

  return { loggedIn, user };
}

export default useAuth;