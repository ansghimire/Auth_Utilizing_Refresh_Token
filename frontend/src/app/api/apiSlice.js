import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, logOut } from '../../features/auth/authSlice'

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:8000',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.access
        if (token) {
            headers.set("authorization", `Bearer ${token}`)
        }
        return headers
    }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)

    const refreshToken = localStorage.getItem('refresh')
    
    if(!refreshToken) {
        return result   
    }

    if (result.error && result.error.status === 401) {
        console.log('sending refresh token')
       
        const refreshResult = await baseQuery({
            url: 'api/token/refresh',
            method: "POST",
            body : {
                refresh : refreshToken
            }
        },
            api,
            extraOptions
        );

        // console.log(refreshResult)
        if (refreshResult?.data) {
            // const user = api.getState().auth.user
            // store the new token 
            api.dispatch(setCredentials({ ...refreshResult.data }))
            // retry the original query with new access token 
            result = await baseQuery(args, api, extraOptions)
        } else {
            api.dispatch(logOut())
        }
    }

    return result
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({})
})