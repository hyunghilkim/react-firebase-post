import React, { useEffect, useState } from 'react';
import { dbService } from '../firebase';
import PostFactory from '../components/PostFactory';
import Post from '../components/Post';

export default function Home({ userObj }) {
	const [PostTexts, setPostTexts] = useState([]);

	useEffect(() => {
		dbService.collection('nweets').onSnapshot((snapshot) => {
			const postArray = snapshot.docs.map((info) => ({
				id: info.id,
				...info.data(),
			}));
			setPostTexts(postArray);
		});
	}, []);

	return (
		<div className="container">
			<PostFactory userObj={userObj} />
			<div style={{ marginTop: 15 }}>
				{PostTexts.map((post, index) => {
					return (
						<div key={index} style={{ marginTop: 30 }}>
							<Post
								key={index}
								postObj={post}
								isOwner={post.creatorId === userObj.uid}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}
