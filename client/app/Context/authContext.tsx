'use client';
import { createContext,useReducer } from "react";
const initialState = {
     user:null,
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
      default:
        return state;
    }
  };

export const AuthContextProvider = ({children } : any) => {
 
const [state , dispatch] = useReducer(AuthReducer,initialState);
 
    const value = {
        user : state.user,
        error :state.error,
        loading : state.loading,
        dispatch 
    }  

    return  <AuthContext.Provider value={value}>
              {children}
            </AuthContext.Provider>
}