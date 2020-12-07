import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTwitter,
	faGoogle,
	faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { authService, firebaseInstance } from '../firebase';
import AuthForm from '../components/AuthForm';

export default function Auth() {
	const onSocialClick = async (e) => {
		const {
			target: { name },
		} = e;
		let provider;
		if (name === 'google') {
			provider = new firebaseInstance.auth.GoogleAuthProvider();
		} else if (name === 'github') {
			provider = new firebaseInstance.auth.GithubAuthProvider();
		}
		await authService.signInWithPopup(provider);
	};

	return (
		<div className="authContainer">
			<FontAwesomeIcon
				icon={faTwitter}
				color={'#04AAFF'}
				size="3x"
				style={{ marginBottom: 30 }}
			/>
			<AuthForm />
			<div className="authBtns">
				<button onClick={onSocialClick} name="google" className="authBtn">
					구글 로그인 <FontAwesomeIcon icon={faGoogle} />
				</button>
				<button onClick={onSocialClick} name="github" className="authBtn">
					깃허브 로그인 <FontAwesomeIcon icon={faGithub} />
				</button>
			</div>
		</div>
	);
}
