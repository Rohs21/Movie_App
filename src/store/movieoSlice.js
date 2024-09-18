import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  bannerData:[],
  imageURL:""
}

export const movieoSlice = createSlice({
  name: 'movieo',
  initialState,
  reducers: {
    setBannerData: (state,action) => {
      
      state.bannerData = action.payload
    },
    setImageURL:(state,action)=>{
        state.imageURL=action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const {setBannerData,setImageURL } = movieoSlice.actions

export default movieoSlice.reducer