import { Route, Routes } from "react-router-dom";
import { styled } from "styled-components";
import AuthenticationScreen from "../Screens/Auth/AuthenticationScreen";

function AuthRouter() {
	console.log("hello world");
	return (
		<Container>
			<Routes>
				<Route path="/" element={<AuthenticationScreen />} />
			</Routes>
		</Container>
	);
}

export default AuthRouter;
const Container = styled.div``;
