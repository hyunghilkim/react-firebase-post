import React, { useState } from 'react';
import { authService } from '../firebase';
import { useHistory } from 'react-router-dom';

export default function Profile({ refreshUser, userObj }) {
	const [NewDisplayName, setNewDisplayName] = useState(userObj.displayName);
	const history = useHistory();

	const onLogOutClick = () => {
		authService.signOut();
		history.push('/');
	};

	/* const getMyNweets = async () => {
		const nweets = await dbService
			.collection('nweets')
			.where('creatorId', '==', userObj.uid)
			.orderBy('createdAt')
			.get();
		console.log(nweets.docs.map((doc) => doc.data()));
	};

	useEffect(() => {
		getMyNweets();
		console.log(userObj.displayName);
	}, []);
 */
	const onChange = (e) => {
		const {
			target: { value },
		} = e;
		setNewDisplayName(value);
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		if (userObj.displayName !== NewDisplayName) {
			await userObj.updateProfile({
				displayName: NewDisplayName,
			});
		}
		refreshUser();
	};

	return (
		<div className="container">
			<form onSubmit={onSubmit} className="profileForm">
				<input
					onChange={onChange}
					type="text"
					placeholder="프로필 명"
					value={NewDisplayName}
					autoFocus
					className="formInput"
				/>
				<input
					type="submit"
					value="수정"
					className="formBtn"
					style={{
						marginTop: 10,
					}}
				/>
			</form>
			<span className="formBtn cancelBtn logOut" onClick={onLogOutClick}>
				로그아웃
			</span>
		</div>
	);
}
