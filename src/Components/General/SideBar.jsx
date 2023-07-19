import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
	const userData = useSelector((state) => state.user?.userData);
	return (
		<SidebarContainer>
			<AppName>Mykare</AppName>
			<Menu>
				<MenuItem>
					<MenuLink to="/dashboard" activeClassName="active">
						Dashboard
					</MenuLink>
				</MenuItem>
				{userData?.user_type === "admin" && (
					<MenuItem>
						<MenuLink to="/users" activeClassName="active">
							Users
						</MenuLink>
					</MenuItem>
				)}
				<MenuItem>
					<MenuLink to="/contact" activeClassName="active">
						Contact
					</MenuLink>
				</MenuItem>
			</Menu>
		</SidebarContainer>
	);
};

export default Sidebar;
const SidebarContainer = styled.div`
	width: 200px;
	background-color: #f2f2f2;
	padding: 20px;
	height: 100vh;
`;

const Menu = styled.ul`
	list-style: none;
	padding: 0;
`;

const MenuItem = styled.li`
	margin-bottom: 20px;
`;

const MenuLink = styled(NavLink)`
	color: #333;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
	&.active {
		color: #000;
		font-weight: 600;
	}
`;
const AppName = styled.h1`
	font-size: 24px;
	margin: 0;
	margin-bottom: 30px;
`;
