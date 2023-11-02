export const fetchProducts = async  (dispatch:React.Dispatch<{
    type: string;
    payload: any;
}>,data : any) => {
    dispatch({type:"FETCH" , payload : data})
}

export const addToCart = async (dispatch:React.Dispatch<{
    type: string;
    payload: any;
}>,data : any) => {
    dispatch({type:"ADD_TO_CART" , payload :data})
}

export const removeFromCart = async (dispatch:React.Dispatch<{
    type: string;
    payload: any;
}>,data : any) => {
    dispatch({type:"REMOVE_FROM_CART" , payload :data})
}

export const minusQuantity = async (dispatch:React.Dispatch<{
    type: string;
    payload: any;
}>,data:any) => {
    dispatch({type:"MINUS_QUANTITY" , payload :data})
}

export const addQuantity = async (dispatch:React.Dispatch<{
    type: string;
    payload: any;
}>,data : any) => {
    dispatch({type:"ADD_QUANTITY" , payload :data})
}
