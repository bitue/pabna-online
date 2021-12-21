import { createSlice ,  createAsyncThunk} from "@reduxjs/toolkit";



export const fetchProduct = createAsyncThunk(
    'product/fetchByUser',
    async () => {
      const response = await fetch('./fake.json') ;
      const data = await response.json();
      console.log(1)
      

      return data
    }
  )





export const productSlice = createSlice({
    name:'product',
    initialState: {
        checkoutList:[],
        cartList:[],
        discover:[]
    },
    reducers:{
        addToCart: (state, {payload}) => {
          
            
            state.cartList.push(payload) 
          
            
        },
      
      
        removeFromCartList: (state, action) => {
            state.cartList = state.cartList.filter(ele=> ele.key !== action.payload)
        },
        addQuantity : (state, {payload}) =>  {
           payload.qty = payload.qty+1 ;
        }
    },
    extraReducers: (builder) => {
       
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
        
          state.discover = action.payload
        })
      },

})

export const {addToCart, removeFromCartList } = productSlice.actions;

export default productSlice.reducer