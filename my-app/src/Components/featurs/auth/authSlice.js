import { createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: localStorage.getItem("token") || "",
        isUserLoggedIn: localStorage.getItem("token")? true: false,
        userName: localStorage.getItem("userName") || "",
        userRole: localStorage.getItem("userRole") || "",
        userPhone: localStorage.getItem("userPhone") || "",
        userEmail: localStorage.getItem("userEmail") || "",
    },
    reducers: {
        setToken(state, action){
            console.log(action.payload)
            state.token = action.payload.accessToken;
            state.isUserLoggedIn = true;
            state.userName = action.payload.user.name || "";
            state.userRole = action.payload.user.permissions || "";
            state.userPhone = action.payload.user.phone || "";
            state.userEmail = action.payload.user.email || "";
            localStorage.setItem("token", action.payload.accessToken);
            localStorage.setItem("userName", action.payload.user.name || "");
            localStorage.setItem("userRole", action.payload.user.permissions || "");
            localStorage.setItem("userPhone", action.payload.user.phone || "");
            localStorage.setItem("userEmail", action.payload.user.email || "");
            console.log(state)
        },
        removeToken(state){
            state.token = "";
            state.isUserLoggedIn = false;
            state.userName = "";
            state.userRole = "";
        }
    }
});

export default authSlice.reducer;
export const {setToken, removeToken} = authSlice.actions;