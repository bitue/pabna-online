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
        wishList:[],
        cartList:[],
        discover:[]
    },
    reducers:{
        addToCart: (state, action) => {
            state.cartList.push(action.payload)
        },
        addToWishList : (state, action) => {
            state.wishList.push(action.payload)
        },
        removeFromWishList: (state, action) => {
            state.wishList = state.wishList.filter(ele=> ele.key !== action.payload)
        },
        removeFromCartList: (state, action) => {
            state.cartList = state.cartList.filter(ele=> ele.key !== action.payload)
        }
    },
    extraReducers: (builder) => {
       
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
        
          state.discover = action.payload
        })
      },

})

export const {addToCart, addToWishList, removeFromCartList, removeFromWishList} = productSlice.actions;

export default productSlice.reducer