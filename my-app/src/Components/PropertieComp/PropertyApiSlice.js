import apiSlice from '../app/apiSlice'

const PropertyApiSlice = apiSlice.injectEndpoints({
    endpoints: (build)=>({
        createProperty: build.mutation({
            query: (newProperty) => ({
                url: '/api/property',
                method: 'POST',
                body: newProperty
            })
        }),
        getProperies: build.query({
            query: () => ({
                url: '/api/property',
            })
        }),
        getMyProperies: build.query({
            query: () => ({
                url: '/api/property/my-properties',
            })
        }),
        getAwaitingProperies: build.query({
            query: () => ({
                url: '/api/property/awaiting-confirmation-properties',
            })
        }),
        updateProperies: build.mutation({
            query: ({formData, id}) => ({
                url: `/api/property/${id}`,
                method: 'PUT',
                body: formData
            })
        }),
        updateStatusProperies: build.mutation({
            query: ({id, status}) => ({
                url: `/api/property/updateStatus/${id}`,
                method: 'PUT',
                body: {status}
            })
        }),
        deleteProperies: build.mutation({
            query: (id) => ({
                url: `/api/property/${id}`,
                method: 'DELETE'
            })
        }),
        sendEmail: build.mutation({
            query: (email) => ({
                url: 'api/email/send',
                method: 'POST',
                body: email
            })
        }),
        getUserDetails: build.query({
            query: (propertyId) => ({
                url: `/api/property/user-details/${propertyId}`,
            })
        }),
    })
})

export const {useCreatePropertyMutation, useGetProperiesQuery, useGetMyProperiesQuery, useDeleteProperiesMutation, useGetAwaitingProperiesQuery, useUpdateProperiesMutation, useUpdateStatusProperiesMutation, useSendEmailMutation, useGetUserDetailsQuery} = PropertyApiSlice