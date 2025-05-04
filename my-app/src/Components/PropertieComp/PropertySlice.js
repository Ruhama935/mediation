import { createSlice} from "@reduxjs/toolkit";

const PropertySlice = createSlice({
    name: "property",
    initialState: {
        properties: [],
        myProperties: []
    },
    reducers: {
        setProperties(state, action){
            // console.log('setProperties')
            // console.log(action.payload)
            state.properties = action.payload;
            // console.log(state)
        },
        // addProperty(state, action){
        //     state.properties = {...state, properties: state.properties.push(action.payload)};
        // },
        setMyProperties(state, action){
            // console.log('setMyProperties')
            // console.log(action.payload)
            state.myProperties = action.payload;
            // console.log(state)
        },
        addMyProperty(state, action){
            if (state.myProperties.length > 0){
                state.myProperties = {...state, myProperties: state.myProperties.push(action.payload)};
            }
        }
    }
});

export default PropertySlice.reducer;
export const {setProperties, setMyProperties, addMyProperty} = PropertySlice.actions;