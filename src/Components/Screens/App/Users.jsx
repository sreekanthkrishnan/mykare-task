import { Card } from "antd";
import React from "react";
import { styled } from "styled-components";

function Users() {
	const users = JSON.parse(localStorage.getItem("users"));
	console.log(users);
	return (
		<Container>
			<Title>Users</Title>
			<Cover>
				{users?.map((data) => (
					<Card
						title={data.name}
						bordered={true}
						style={{ width: 300 }}
					>
						<p>{data.email}</p>
					</Card>
				))}
			</Cover>
		</Container>
	);
}

export default Users;
const Container = styled.div``;
const Title = styled.h3`
	margin-bottom: 20px;
`;
const Cover = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 30px;
`;
