import { createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: localStorage.getItem("token") || "",
        isUserLoggedIn: localStorage.getItem("token")? true: false,
        userName: localStorage.getItem("userName") || ""
    },
    reducers: {
        setToken(state, action){
            console.log(action.payload)
            state.token = action.payload.accessToken;
            state.isUserLoggedIn = true;
            state.userName = action.payload.user.name || "";
            localStorage.setItem("token", action.payload.accessToken);
            localStorage.setItem("userName", action.payload.user.name || "");
            console.log(state)
        },
        removeToken(state){
            state.token = "";
            state.isUserLoggedIn = false;
            state.userName = "";
        }
    }
});

export default authSlice.reducer;
export const {setToken, removeToken} = authSlice.actions;