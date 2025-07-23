import React, { useState } from 'react';

function LikeButton() {
	const [liked, setLiked] = useState(false);
	const [likes, setLikes] = useState(0);

	const toggleLike = () => {
		if (liked) {
			setLikes(likes - 1);
		} else {
			setLikes(likes + 1);
		}
		setLiked(!liked);
	};

	return (
		<button onClick={toggleLike} className='like'>
			{liked ? '❤️ Gillad' : '🤍 Gilla'} ({likes})
		</button>
	);
}

export default LikeButton;
