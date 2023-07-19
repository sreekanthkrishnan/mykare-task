// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import DashBoard from "../Screens/App/DashBoard";
import Header from "../General/Header";
import SideBar from "../General/SideBar";
import { useSelector } from "react-redux";
import Users from "../Screens/App/Users";

function AppRouter() {
	const userData = useSelector((state) => state.user?.userData);
	const navigate = useNavigate();
	useEffect(() => {
		if (userData.is_logged_in === false) {
			navigate("/");
		}
	}, [userData]);
	return (
		<AppContainer>
			<SideBar />
			<MainContent>
				<Header />
				<Cover>
					<Routes>
						<Route
							path="/"
							element={<Navigate to="/dashboard" />}
						/>
						<Route path="/dashboard" element={<DashBoard />} />
						<Route path="/users" element={<Users />} />
					</Routes>
				</Cover>
			</MainContent>
		</AppContainer>
	);
}

export default AppRouter;
const AppContainer = styled.div`
	display: flex;
`;

const MainContent = styled.div`
	flex-grow: 1;
`;
const Cover = styled.div`
	padding: 20px;
`;
