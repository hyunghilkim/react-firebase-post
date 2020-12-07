import React, { useState } from 'react';
import { dbService, storageService } from '../firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

export default function Post({ postObj, isOwner }) {
	const [Edit, setEdit] = useState(false);
	const [NewPost, setNewPost] = useState(postObj.text);

	const onDeleteClick = async () => {
		const ok = window.confirm('정말로 삭제 하시겠습니까?');
		if (ok) {
			await dbService.doc(`nweets/${postObj.id}`).delete();
			await storageService.refFromURL(postObj.fileUrl).delete();
		}
	};

	const toggleEditing = () => {
		setEdit((prev) => !prev);
	};

	const onSubmit = async (e) => {
		e.preventDefault();

		await dbService.doc(`/nweets/${postObj.id}`).update({
			text: NewPost,
		});
		setEdit(false);
	};

	const onChange = (e) => {
		const {
			target: { value },
		} = e;
		setNewPost(value);
	};

	return (
		<div className="nweet">
			{Edit ? (
				<>
					<form onSubmit={onSubmit} className="container nweetEdit">
						<input
							onChange={onChange}
							type="text"
							placeholder="수정 하세요"
							value={NewPost}
							required
							autoFocus
							className="formInput"
						/>
						<input type="submit" value="수정하기" className="formBtn" />
					</form>
					<span onClick={toggleEditing} className="formBtn cancelBtn">
						취소
					</span>
				</>
			) : (
				<>
					<h4>{postObj.text}</h4>
					{postObj.fileUrl && <img alt="img" src={postObj.fileUrl} />}
					{isOwner && (
						<div className="nweet__actions">
							<span onClick={onDeleteClick}>
								<FontAwesomeIcon icon={faTrash} />
							</span>
							<span onClick={toggleEditing}>
								<FontAwesomeIcon icon={faPencilAlt} />
							</span>
						</div>
					)}
				</>
			)}
		</div>
	);
}
