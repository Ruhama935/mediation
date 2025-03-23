import apiSlice from '../app/apiSlice'

const PropertyApiSlice = apiSlice.injectEndpoints({
    endpoints: (build)=>({
        createProperty: build.mutation({
            query: (newProperty) => ({
                url: '/api/property',
                method: 'POST',
                body: newProperty
            })
        })
        // login: build.mutation({
        //     query: (loginUser) => ({
        //         url: 'api/auth/login',
        //         method: 'POST',
        //         body: loginUser 
        //     })
        // })
    })
})

export const {useCreatePropertyMutation} = PropertyApiSlice