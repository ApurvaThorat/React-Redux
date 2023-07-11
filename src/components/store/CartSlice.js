const {createSlice} = require('@reduxjs/toolkit');

const initialState = [];

const CartSlice = createSlice(
    {
        name : 'cart',
        initialState,
        reducers:{

            add( state, action){
                state.push(action.payload);
            },
            
            remove(state, action) {
               return state.filter((item, index) => {
                return item.productId !== action.payload
                })
            },
        },
    }  
);
export const{add, remove} = CartSlice.actions;
export  default CartSlice.reducer;

