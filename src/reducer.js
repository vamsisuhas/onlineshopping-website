export const initialState = {
    basket: [],
};

//selector
export const getBasketTotal = (basket) =>
    basket.reduce((amount,item) => item.price + amount, 0);


const reducer = (state,action) => {
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket:[...state.basket, action.item],
            };
        
            case 'EMPTY_BASKET':
                return {
                  ...state,
                  basket: []
                }

            case "REMOVE_FROM_BASKET":
                //copying the entire info of the basket to new basket
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
              );
              let newBasket = [...state.basket];
        
              if (index >= 0) {
                newBasket.splice(index, 1); //splice is like splicing the basket total by 1 item
        
              } else {
                console.warn(`Cant remove product (id: ${action.id}) as its not in basket!`)
              }
        
            return{
                ...state,
                basket: newBasket
            }

            case "SET_USER":
                return{
                    ...state,
                    user:action.user
                }
  
        default:
            return state;
    }
};

export default reducer;