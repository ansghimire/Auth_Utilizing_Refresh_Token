import {apiSlice} from '../../app/api/apiSlice'


export const noteApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getNotes: builder.query({
            query: () => 'api/note/',
            // keepUnusedDataFor: 5,
        })
    })
})

export const {
    useGetNotesQuery
} = noteApiSlice