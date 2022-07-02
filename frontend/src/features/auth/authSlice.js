import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState : {access:null},
    reducers : {
        setCredentials : (state, action) => {
            const result = action.payload
            state.access = result.access
            // console.log(state.access)
           
            if(result?.refresh){
                localStorage.setItem("refresh", result.refresh)
            }              
        },
        logOut: (state) => {
            state.access = null
            localStorage.removeItem("refresh")
        }
    }
})

export const {setCredentials, logOut} = authSlice.actions

export default authSlice.reducer

export const selectCurrentToken = (state) => state.auth.access