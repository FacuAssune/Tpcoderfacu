import { TYPES } from "../actions/shoppingAction";

export const shoppingInitialState = {
    products:[
        {id:1,name:"Procesador Intel Core i7 9700F 4.7GHz Turbo 1151 Coffee Lake ", price: 31000},
        {id:2,name:"Procesador AMD Ryzen 5 1600 AF Zen+ 12nm AM4 Wraith Stealth Cooler", price: 29200},
        {id:3,name:"Fuente ASUS ROG STRIX 750G 80 Plus Gold 750W Full Modular", price: 27300},
        {id:4,name:"Teclado Mecanico ASUS TUF Gaming K3 US Red", price: 14000},
        {id:5,name:"Memoria GeiL DDR4 16GB 3000MHz Orion RGB Black ", price: 9500},
        {id:6,name:"Silla Gamer Cooler Master Caliber R2C Grey", price: 61830},
    ],
    cart:[],
};

export function shoppingReducer(state,action){
    switch (action.type) {
        case TYPES.ADD_TO_CART:{
            let newItem = state.products.find(
                (product)=> product.id === action.payload
                );
            console.log(newItem);

            let itemInCart= state.cart.find(item=> item.id === newItem.id)
                
            return itemInCart 
            ? {
                ...state,
                cart: state.cart.map((item)=> 
                    item.id===newItem.id 
                    ?{...item, quantity: item.quantity +1}
                    :item
                    ),
            }
            : {
                ...state,
                cart: [...state.cart, {...newItem, quantity: 1}],
            }
        
     }
        case TYPES.REMOVE_ONE_FROM_CART:{
            let itemToDelete = state.cart.find((item) =>item.id === action.payload);

            return itemToDelete.quantity > 1
            ?{
                ...state,
                cart:state.cart.map((item)=>
                item.id === action.payload
                     ?{...item,quantity:item.quantity -1}
                    :item
                ),
            }
            :{
                ...state,
                cart:state.cart.filter((item)=> item.id!==action.payload),
            };
    }
        case TYPES.REMOVE_ALL_FROM_CART:{
    }
        case TYPES.CLEAR_CART:
            return shoppingInitialState;
    default:
        return state;
    }
}