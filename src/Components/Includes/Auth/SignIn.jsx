import { styled } from "styled-components";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { updateUserData } from "../../Store/Reducers/UserReducer";

function SignIn({ setAuthType }) {
	const dispatch = useDispatch();
	const [users, setUsers] = useState([]);
	const validationSchema = Yup.object().shape({
		username: Yup.string().required("username is required"),
		password: Yup.string()
			.required("Password is required")
			.min(8, "Password must be at least 8 characters")
			.matches(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
				"Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
			),
	});
	useEffect(() => {
		const storedUsers = localStorage.getItem("users");
		if (storedUsers) {
			setUsers(JSON.parse(storedUsers));
		}
	}, []);

	const handleLogin = (value) => {
		const user = users.find(
			(user) =>
				user.username === value.username &&
				user.password === value.password
		);
		if (user) {
			dispatch(updateUserData({ ...user, is_logged_in: true }));
			formik.resetForm();
		} else {
			alert("Invalid username or password.");
		}
	};

	const formik = useFormik({
		initialValues: {
			username: "",
			password: "",
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			handleLogin(values);
		},
	});
	return (
		<Container>
			<Title>
				Welcome to Mykare,
				<br />
				Sign In to Continue.
			</Title>
			<Description>
				Don't have an account?{" "}
				<span onClick={() => setAuthType("sign_up")}>
					Create a account
				</span>
				<br /> It takes less than a minute.
			</Description>
			<FormFields onSubmit={formik.handleSubmit}>
				<InputCover>
					<Label>Username</Label>
					<InputField
						type="text"
						name="username"
						value={formik.values.username}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.username && formik.errors.username ? (
						<ErrorText>{formik.errors.username}</ErrorText>
					) : null}
				</InputCover>{" "}
				<InputCover style={{ marginBottom: 15 }}>
					<Label>Password</Label>
					<InputField
						type="password"
						name="password"
						value={formik.values.password}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.password && formik.errors.password ? (
						<ErrorText>{formik.errors.password}</ErrorText>
					) : null}
				</InputCover>
				<ForgotPassword>Forgot Password?</ForgotPassword>
				<SignInButton type="submit">Sign In</SignInButton>
			</FormFields>
		</Container>
	);
}

export default SignIn;
const Container = styled.div`
	max-width: 500px;
	flex: 1;
`;
const Title = styled.h2`
	font-size: 24px;
	font-weight: 400;
	margin-bottom: 10px;
`;
const Description = styled.p`
	font-size: 14px;

	span {
		font-weight: 500;
		text-decoration: underline;
		font-size: 15px;
		cursor: pointer;
		&:hover {
			opacity: 0.7;
		}
	}
`;
const FormFields = styled.form`
	margin-top: 50px;
`;
const InputCover = styled.div`
	margin-bottom: 30px;
	position: relative;
`;
const Label = styled.p`
	font-size: 14px;
`;
const InputField = styled.input`
	margin-top: 8px;
	width: 100%;
	padding: 10px 15px;
	font-size: 16px;
	outline: none;
	border: 2px solid #fff;
	background-color: #efefef;
	transition: 0.3s;
	&:hover {
		border-color: #000;
		transition: 0.3;
	}
	&:focus {
		border-color: #000;
		transition: 0.3;
	}
`;
const ForgotPassword = styled.p`
	text-align: center;
	text-decoration: underline;
	font-size: 14px;
	cursor: pointer;
	&:hover {
		opacity: 0.7;
	}
`;
const SignInButton = styled.button`
	padding: 12px 15px;
	font-size: 16px;
	background-color: #000;
	display: block;
	text-align: center;
	color: #fff;
	margin-top: 50px;
	font-size: 14px;
	cursor: pointer;
	transition: 0.3s;
	width: 100%;
	border: none;
	&:hover {
		opacity: 0.7;
		transition: 0.3s;
	}
`;
const ErrorText = styled.p`
	position: absolute;
	top: 80px;
	left: 0;
	z-index: 999;
	font-size: 10px;
	color: red;
	margin-bottom: 0;
`;
