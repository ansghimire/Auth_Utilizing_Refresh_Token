import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const authLoadSlice = createApi({
    reducerPath : 'loadAccessApi',
    baseQuery : fetchBaseQuery({baseUrl: 'http://localhost:8000/api/'}),
    endpoints : (builder) => ({   
        reload: builder.mutation({
            query: (token) => ({
                url: 'token/refresh',
                method: 'POST',
                body: {
                    refresh : token
                }
            })
        }),
    })
})

export const {
    useReloadMutation
} = authLoadSlice
