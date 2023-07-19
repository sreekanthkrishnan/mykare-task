import { styled } from "styled-components";
import login_img from "../../../assets/Images/login.jpg";
import SignIn from "../../Includes/Auth/SignIn";
import { useState } from "react";
import SignUp from "../../Includes/Auth/SignUp";

function AuthenticationScreen() {
	const [authType, setAuthType] = useState("sign_in");
	return (
		<Container>
			<LeftSection>
				<img src={login_img} alt="Image" />
			</LeftSection>
			<RightSection>
				{authType === "sign_in" ? (
					<SignIn setAuthType={setAuthType} />
				) : authType === "sign_up" ? (
					<SignUp setAuthType={setAuthType} />
				) : null}
			</RightSection>
		</Container>
	);
}

export default AuthenticationScreen;
const Container = styled.div`
	display: grid;
	grid-template-columns: 3fr 5fr;
	padding: 15px;
	height: calc(100vh - 30px);
	overflow: hidden;
	box-sizing: content-box;
	@media all and (max-width: 768px) {
		display: block;
		padding: 0;
	}
`;
const LeftSection = styled.div`
	overflow: hidden;
	img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	@media all and (max-width: 768px) {
		display: none;
	}
`;
const RightSection = styled.div`
	padding: 0 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
`;
