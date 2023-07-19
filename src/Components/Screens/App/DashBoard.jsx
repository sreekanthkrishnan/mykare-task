import { Statistic } from "antd";
import styled from "styled-components";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";

const Dashboard = () => {
	return (
		<DashboardContainer>
			<WelcomeText>Welcome to your Dashboard!</WelcomeText>

			<Section>
				<SectionTitle>Statistics</SectionTitle>
				<Cover>
					<Card>
						<Statistic title="Active Users" value={112893} />{" "}
					</Card>
					<Card>
						<Statistic
							title="Account Balance (CNY)"
							value={112893}
							precision={2}
						/>
					</Card>
				</Cover>
			</Section>

			<Section>
				<SectionTitle>Recent Activity</SectionTitle>
				<Cover>
					<Card bordered={false}>
						<Statistic
							title="Active"
							value={11.28}
							precision={2}
							valueStyle={{ color: "#3f8600" }}
							prefix={<ArrowUpOutlined />}
							suffix="%"
						/>
					</Card>{" "}
					<Card bordered={false}>
						<Statistic
							title="Idle"
							value={9.3}
							precision={2}
							valueStyle={{ color: "#cf1322" }}
							prefix={<ArrowDownOutlined />}
							suffix="%"
						/>
					</Card>
				</Cover>
			</Section>
		</DashboardContainer>
	);
};

export default Dashboard;
const DashboardContainer = styled.div`
	padding: 20px;
`;

const WelcomeText = styled.h2`
	font-size: 24px;
	margin-bottom: 20px;
`;

const Section = styled.section`
	margin-bottom: 40px;
`;

const SectionTitle = styled.h3`
	font-size: 18px;
	margin-bottom: 10px;
`;

const Card = styled.div`
	background-color: #f2f2f2;
	padding: 20px;
	border-radius: 4px;
	display: flex;
	justify-content: center;
	gap: 50px;
	flex: 1;
`;
const Cover = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 50px;
`;
