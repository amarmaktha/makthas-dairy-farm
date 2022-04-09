export const addToCart=(milk,quantity,varient)=>(dispatch,getState)=>{

    var cartItem={
        name : milk.name,
        _id : milk._id,
        image : milk.image,
        varient : varient,
        quantity : Number(quantity),
        prices : milk.prices,
        price : milk.prices[0][varient]*quantity
    }
    if(cartItem.quantity>10)
    {
        alert('sorry you can order max 10 litres of milk 🥲 ')
    }
    else{
        if(cartItem.quantity<1)
        {
         dispatch({type:'DELETE_FROM_CART' , payload:milk});
        }
        else{
            dispatch({type:'ADD_TO_CART' , payload : cartItem})
        }
        }   
         const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
    

}
export const deleteFromCart=(milk)=>(dispatch,getState)=>{
    dispatch({type:'DELETE_FROM_CART' , payload:milk})
    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
}