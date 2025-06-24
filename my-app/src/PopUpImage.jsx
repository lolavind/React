import React, { useState } from 'react';

const PopupImage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <>
      <img className="rad_2_bild"
	    width="100%"
        height="100%"
        src={"./img/rad_2_bild.jpg"}
        alt="Bild innuti Eurasia restaurang"
        onClick={openPopup}

      />

      {isOpen && (
        <div className="popup-overlay" onClick={closePopup}>
          <img
            src="./img/rad_2_bild.jpg"
            alt="Bild innuti Eurasia restaurang"
            className="popup-image"
            onClick={(e) => e.stopPropagation()} // förhindra stängning när man klickar på bilden
          />
        </div>
      )}
    </>
  );
};

export default PopupImage;
