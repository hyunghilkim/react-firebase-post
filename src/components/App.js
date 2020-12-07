import React, { useState, useEffect } from 'react';
import AppRouter from './AppRouter';
import { authService } from '../firebase';

function App() {
	const [Init, setInit] = useState(false);
	const [IsLoggedIn, setIsLoggedIn] = useState(false);
	const [UserObj, setUserObj] = useState(null);

	useEffect(() => {
		authService.onAuthStateChanged((user) => {
			if (user) {
				setIsLoggedIn(true);
				setUserObj({
					displayName: user.displayName,
					uid: user.uid,
					updateProfile: (args) => user.updateProfile(args),
				});
			} else {
				setIsLoggedIn(false);
			}
			setInit(true);
		});
	}, []);

	const refreshUser = () => {
		const user = authService.currentUser;
		setUserObj({
			displayName: user.displayName,
			uid: user.uid,
			updateProfile: (args) => user.updateProfile(args),
		});
	};

	return (
		<>
			{Init ? (
				<AppRouter
					refreshUser={refreshUser}
					isLoggedIn={IsLoggedIn}
					userObj={UserObj}
				/>
			) : (
				'초기화....'
			)}
		</>
	);
}

export default App;
