import React, { useEffect, useState } from 'react';

const promotionalItems = [
	{
		id: 1,
		image: './img/kyckling-med-cashew.png',
		description: 'Rea på kyckling med cashewnötter!!!',
	},
	{
		id: 2,
		image: './img/lökringar.jpg',
		description: 'Superdeal på lökringar :)',
	},
	{
		id: 3,
		image: './img/räkor.jpg.webp',
		description: 'Rea rea rea på räkor i stark vitlökssås!!!',
	},
];

function Randomizer() {
	const [selectedItem, setSelectedItem] = useState(null);

	/* Det som faktiskt uppdaterar värdet */
	useEffect(() => {
		const randomIndex = Math.floor(Math.random() * promotionalItems.length);
		setSelectedItem(promotionalItems[randomIndex]);
	}, []);

	/*Om inget har valts visas inget*/
	if (!selectedItem) return null;

	return (
		<div className="container">
			<img src={selectedItem.image} alt={`Product ${selectedItem.id}`} className='promo-image' />
			<p>{selectedItem.description}</p>
		</div>
	);
}

export default Randomizer;
