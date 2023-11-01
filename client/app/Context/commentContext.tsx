'use client'
import { createContext,useReducer } from "react";

const initialState = {
     comments: [],
     loadingC :false, 
};
  
export const CommentContext = createContext(initialState);

const CommentReducer = (state : any, action: { type: string; payload: any; }) => {
    switch (action.type) {
      case "FETCH_START":
      
        return {
            comments:[],
            loadingC:true
        };
      case "FETCH_SUCCESS":
      
        return {
            comments:action.payload,
            loadingC:false
        };
      case "ADD_COMMENT":
       console.log(action.payload)
        return{
             comments:[...state.comments],
             loadingC:false,
        };
      default:
        return state;
    }
  };

export const CommentContextProvider = ({children } : any) => {

 const [state , dispatchc] = useReducer(CommentReducer,initialState);

    const value = {
        comments : state.comments,
        loadingC : state.loadingC,
        dispatchc
    }  

    return  <CommentContext.Provider value={value}>
              {children}
            </CommentContext.Provider>
}