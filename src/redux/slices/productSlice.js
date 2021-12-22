import { createSlice ,  createAsyncThunk} from "@reduxjs/toolkit";



export const fetchProduct = createAsyncThunk(
    'product/fetchByUser',
    async (product) => {
      const response = await fetch('./fake.json') ;
      const data = await response.json();
      console.log(1)
      if(product) {
        const realData = data.filter(ele=> ele.category === product) ;
        return realData
      }
      

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
       
    },
    extraReducers: (builder) => {
       
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
        
          state.discover = action.payload
        })
      },

})

export const {addToCart, removeFromCartList } = productSlice.actions;

export default productSlice.reducer