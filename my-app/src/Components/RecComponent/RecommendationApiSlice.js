import apiSlice from '../app/apiSlice'

const RecommendationApiSlice = apiSlice.injectEndpoints({
    endpoints: (build)=>({
        createRecommendation: build.mutation({
            query: (newRecommendation) => ({
                url: '/api/recommendations',
                method: 'POST',
                body: newRecommendation
            })
        }),
        getRecommendations: build.query({
            query: () => ({
                url: '/api/recommendations',
            })
        }),
        getAwaitingRecommendations: build.query({
            query: () => ({
                url: '/api/recommendations/awaitingRecommendations',
            })
        }),
        updateStatusRecommendation: build.mutation({
            query: ({id, status}) => ({
                url: `/api/recommendations/updateStatus/${id}`,
                method: 'PUT',
                body: {status}
            })
        }),
        deleteRecommendation: build.mutation({
            query: (id) => ({
                url: `/api/recommendations/${id}`,
                method: 'DELETE'
            })
        }),
    })
})

export const { useCreateRecommendationMutation, useGetRecommendationsQuery, useGetAwaitingRecommendationsQuery, useUpdateStatusRecommendationMutation, useDeleteRecommendationMutation } = RecommendationApiSlice