import { styled } from "styled-components";
import AppRouter from "./AppRouter";
import AuthRouter from "./AuthRouter";
import { Navigate, Route, Routes } from "react-router-dom";
import { IsAuthenticated } from "../utils/HelperFunctions";

function MainRouter() {
	return (
		<Container>
			<Routes>
				<Route
					path="/"
					element={IsAuthenticated() ? <AppRouter /> : <AuthRouter />}
				/>
				<Route
					path="/*"
					element={
						IsAuthenticated() ? <AppRouter /> : <Navigate to="/" />
					}
				/>
				<Route
					path="*"
					element={IsAuthenticated() ? <AppRouter /> : <AuthRouter />}
				/>
			</Routes>
		</Container>
	);
}

export default MainRouter;
const Container = styled.div``;
