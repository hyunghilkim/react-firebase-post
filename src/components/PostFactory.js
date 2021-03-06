import React, { useState } from 'react';
import { dbService, storageService } from '../firebase';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function PostFactory({ userObj }) {
	const [PostText, setPostText] = useState('');
	const [Attachment, setAttachment] = useState('');

	const onSubmit = async (e) => {
		e.preventDefault();
		let fileUrl = '';
		if (Attachment !== '') {
			const fileRef = storageService.ref().child(`${userObj.uid}/${uuidv4()}`);
			const response = await fileRef.putString(Attachment, 'data_url');
			fileUrl = await response.ref.getDownloadURL();
		}

		const postInfo = {
			text: PostText,
			createdAt: Date.now(),
			creatorId: userObj.uid,
			fileUrl: fileUrl,
		};
		await dbService.collection('nweets').add(postInfo);
		setPostText('');
		setAttachment('');
	};

	const onChange = (e) => {
		const {
			target: { value },
		} = e;
		setPostText(value);
	};

	const onFileChange = (e) => {
		const {
			target: { files },
		} = e;
		const theFile = files[0];
		const reader = new FileReader();

		reader.readAsDataURL(theFile);
		reader.onloadend = (finishedEvent) => {
			const {
				currentTarget: { result },
			} = finishedEvent;
			setAttachment(result);
		};
	};

	const onClearPhoto = () => {
		setAttachment(null);
	};
	return (
		<div>
			<form onSubmit={onSubmit} className="factoryForm">
				<div className="factoryInput__container">
					<input
						className="factoryInput__input"
						value={PostText}
						onChange={onChange}
						type="text"
						placeholder="What's on your mind?"
						maxLength={120}
					/>
					<input type="submit" value="&rarr;" className="factoryInput__arrow" />
				</div>
				<label htmlFor="attach-file" className="factoryInput__label">
					<span>Add photos</span>
					<FontAwesomeIcon icon={faPlus} />
				</label>
				<input
					id="attach-file"
					type="file"
					accept="image/*"
					onChange={onFileChange}
					style={{
						opacity: 0,
					}}
				/>
				{Attachment && (
					<div className="factoryForm__attachment">
						<img
							alt="img"
							src={Attachment}
							style={{
								backgroundImage: Attachment,
							}}
						/>
						<div className="factoryForm__clear" onClick={onClearPhoto}>
							<span>Remove</span>
							<FontAwesomeIcon icon={faTimes} />
						</div>
					</div>
				)}
			</form>
		</div>
	);
}
