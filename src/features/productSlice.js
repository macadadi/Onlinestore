import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'



export const fetchdata = createAsyncThunk('product/fetchproduct', async()=>{
    const req = await fetch('https://fakestoreapi.com/products/').catch(e=>console.log('this error occured',e))
     return req.json()
})
 const initialState ={
    status : 'finished',
    stock : {},
    cart :''
}
export const productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {
        addtocart : (state,action)=>{
       state.cart +=(action.payload) 
            
      }

  },
  extraReducers : {
      [fetchdata.pending] : (state)=>{
          state.status = 'pending'
      },
      [fetchdata.fulfilled] : (state,action)=>{
          state.status = 'fulfilled'
          state.stock = action.payload 
      },
      [fetchdata.rejected] :(state,action)=>{
          state.status = 'rejected'
      }
  }
})

// Action creators are generated for each case reducer function
export const {addtocart } = productSlice.actions

export default productSlice.reducer