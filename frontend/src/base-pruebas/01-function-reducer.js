
export const reducer = (state, action)=>{
    console.log(action)
    switch (action.type){
        case "ADD_TO_BASKET":
        return{
            ...state,
            basket:[...state.basket, action.item]
        }
        case "REMOVE_ITEM":
            const index = state.basket.findIndex((basketItem=> basketItem.id===action.id))
            let newBasket = [...state.basket];
            if (index>=0){
                newBasket.splice(index,1)
            } else{console.log("can't remove it")}
            return{
                ...state,
                basket:newBasket
        }
        case "CLEAN_BASKET":
            return{
                ...state,
                basket:[]
            }    

        default: return state;
    }
}