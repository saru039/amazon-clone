export const initialState = {
    basket: [],
    User: null
};

export const getbasketTotal = (basket) =>{
  return basket?.reduce((amount, item)=>item.price + amount, 0);
};

const reducer = (state, action)=>{
    switch(action.type){
        case "SET_USER" : 
          return {
            ...state,
            user:action.user
          };
          case "ADD TO BASKET":
            return{
              ...state,
              basket: [...state.basket, action.item]
            }
            case "REMOVE_FROM_BASKET":
              let newBasket = [...state.basket];
              const index = state.basket.findIndex((basketItem)=>basketItem.id === action.id);
              if(index >= 0){
                newBasket.splice(index, 1)
              }else{
                console.log("Can't find the index")
              }
              return {
                ...state,
                basket: newBasket,
              };
          default: 
          return state;
    }
};

export default reducer;