import { useCookies } from "react-cookie";
export const useGetToken = () => {
  const [cookies, _] = useCookies(["accesToken"]);

  return {
    headers: { token : cookies.accesToken },
  };
};