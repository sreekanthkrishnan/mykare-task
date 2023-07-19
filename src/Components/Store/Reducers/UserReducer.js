import { createSlice } from "@reduxjs/toolkit";

const INITAIL_STATE = {
	userData: localStorage.getItem("userData")
		? JSON.parse(localStorage.getItem("userData"))
		: {
				name: "",
				email: "",
				is_logged_in: false,
		  },
};

const userSlice = createSlice({
	name: "user",
	initialState: INITAIL_STATE,
	reducers: {
		updateUserData: (state, action) => {
			state.userData = { ...state.userData, ...action.payload };
			localStorage.setItem("userData", JSON.stringify(state.userData));
		},
	},
});

export const { updateUserData } = userSlice.actions;
export default userSlice.reducer;
