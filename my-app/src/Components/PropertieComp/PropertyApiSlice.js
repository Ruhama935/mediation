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
            query: (newProperty) => ({
                url: `/api/property/${newProperty.id}`,
                method: 'PUT',
                body: newProperty
            })
        }),
        updateStatusProperies: build.mutation({
            query: (newProperty) => ({
                url: `/api/property/updateStatus/${newProperty.id}`,
                method: 'PUT',
                body: {status: newProperty.status}
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
    })
})

export const {useCreatePropertyMutation, useGetProperiesQuery, useGetMyProperiesQuery, useDeleteProperiesMutation, useGetAwaitingProperiesQuery, useUpdateProperiesMutation, useUpdateStatusProperiesMutation, useSendEmailMutation} = PropertyApiSlice