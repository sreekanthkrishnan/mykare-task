import styled from "styled-components";
import user from "../../assets/Images/user.jpg";
import { useDispatch } from "react-redux";
import { updateUserData } from "../Store/Reducers/UserReducer";
import { useNavigate } from "react-router-dom";

const Header = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleLogout = () => {
		dispatch(updateUserData({ name: "", email: "", is_logged_in: false }));
		localStorage.setItem(
			"userData",
			JSON.stringify({
				name: "",
				email: "",
				is_logged_in: false,
			})
		);
		navigate("/");
	};
	return (
		<HeaderContainer>
			<ProfileContainer>
				<ProfileImage src={user} alt="Profile" />
				<ProfileName>John Doe</ProfileName>
				<LogoutButton onClick={handleLogout}>Logout</LogoutButton>
			</ProfileContainer>
		</HeaderContainer>
	);
};

export default Header;
const HeaderContainer = styled.header`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	background-color: #f2f2f2;
	padding: 20px;
`;

const ProfileContainer = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	&:hover {
		button {
			display: block;
		}
	}
`;

const ProfileImage = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	margin-right: 10px;
	object-fit: cover;
`;

const ProfileName = styled.span``;

const LogoutButton = styled.button`
	background-color: transparent;
	border: none;
	color: #333;
	cursor: pointer;
	position: absolute;
	right: 0;
	bottom: -40px;
	background-color: #fff;
	padding: 10px 50px;
	box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
	display: none;
`;
