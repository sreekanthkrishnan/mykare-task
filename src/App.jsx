/* eslint-disable no-unused-vars */
import { styled } from "styled-components";
import "./assets/Css/Style.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainRouter from "./Components/Router/MainRouter";
import { Provider } from "react-redux";
import { store } from "./Components/Store/Store";
import { useEffect } from "react";
function App() {
	const router = createBrowserRouter([
		{
			path: "/*",
			element: <MainRouter />,
		},
	]);
	useEffect(() => {
		const user = localStorage.getItem("users");
		if (user) {
		} else {
			localStorage.setItem(
				"users",
				JSON.stringify([
					{
						name: "admin",
						username: "admin",
						password: "Admin@123",
						email: "samole@example.com",
						user_type: "admin",
					},
				])
			);
		}
	}, []);
	return (
		<Container>
			<Provider store={store}>
				<RouterProvider router={router} />
			</Provider>
		</Container>
	);
}

export default App;
const Container = styled.div``;
