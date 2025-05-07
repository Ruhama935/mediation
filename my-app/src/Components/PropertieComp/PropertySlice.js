import { createSlice} from "@reduxjs/toolkit";

const PropertySlice = createSlice({
    name: "property",
    initialState: {
        properties: [],
        myProperties: []
    },
    reducers: {
        setProperties(state, action){
            state.properties = action.payload;
        },
        setMyProperties(state, action){
            state.myProperties = action.payload;
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