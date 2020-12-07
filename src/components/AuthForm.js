import React, { useState } from 'react';
import { authService } from '../firebase';

export default function AuthForm() {
	const [Email, setEmail] = useState('');
	const [Password, setPassword] = useState('');
	const [NewAccount, setNewAccount] = useState(true);
	const [Error, setError] = useState('');

	const onChange = (e) => {
		const {
			target: { name, value },
		} = e;
		if (name === 'email') {
			setEmail(value);
		} else if (name === 'password') {
			setPassword(value);
		}
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			if (NewAccount) {
				//계정 만들기
				await authService.createUserWithEmailAndPassword(Email, Password);
			} else {
				// 로그인 하기
				await authService.signInWithEmailAndPassword(Email, Password);
			}
		} catch (e) {
			setError(e.message);
		}
	};

	const toggleAccount = () => {
		setNewAccount((prev) => !prev);
	};

	return (
		<div>
			<form onSubmit={onSubmit} className="container">
				<input
					name="email"
					type="email"
					placeholder="Email"
					value={Email}
					required
					onChange={onChange}
					className="authInput"
				/>
				<input
					name="password"
					type="password"
					placeholder="Password"
					value={Password}
					required
					onChange={onChange}
					className="authInput"
				/>
				<input
					type="submit"
					value={NewAccount ? '회원가입' : '로그인'}
					className="authInput authSubmit"
				/>
				{Error && <span className="authError">{Error}</span>}
			</form>
			<span onClick={toggleAccount} className="authSwitch">
				{NewAccount ? '로그인' : '회원가입'}
			</span>
		</div>
	);
}
