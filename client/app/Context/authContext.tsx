'use client'
import { createContext,useEffect,useReducer } from "react";
import { getUserLS } from "../hooks/getUserFromStorage";
const userLS : any = getUserLS();
const initialState :  {
  user: any;
  loading: boolean;
  error: null;
} = {
     user:  null ,
     loading:false, 
     error:null 
};
  
export const AuthContext = createContext(initialState);

const AuthReducer = (state : any, action: { type: string; payload: any; }) => {
    switch (action.type) {
      case "LOGIN_START":
        return {
            loading : true,
            error : null,
            user : null
        };
      case "LOGIN_SUCCESS":
        return {
            loading : false,
            error : null,
            user : action.payload
        };
      case "LOGIN_FAILED":
        return {
            loading : false,
            error : action.payload,
            user : null
        };
      case "LOGOUT":
        return {
          loading : false,
          error : null,
          user : null
        }
      default:
        return state;
    }
  };

export const AuthContextProvider = ({children } : any) => {

 const [state , dispatch] = useReducer(AuthReducer,initialState);
 useEffect(() => {
  dispatch({type:'LOGIN_SUCCESS' , payload:JSON.parse(userLS)})
 },[])
 useEffect(() => {
 window.localStorage.setItem('trendifyUser' , JSON.stringify(state.user))
 },[state.user])
    const value :{ user: any; loading: boolean; error: null; dispatch :React.Dispatch<{
      type: string;
      payload: any;
  }>}= {
        user : state.user,
        error :state.error,
        loading : state.loading,
        dispatch
    }  

    return  <AuthContext.Provider value={value}>
              {children}
            </AuthContext.Provider>
}