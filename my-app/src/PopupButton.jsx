import React, { useState } from 'react';

const PopupButton = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      <button 
	  	//Visa/dölj texten
        onClick={() => setShowPopup(!showPopup)} 
      >
        {showPopup ? 'Hide Message' : 'Show Message'}
      </button>

      {showPopup && (
        <div
          onClick={() => setShowPopup(false)}
        >
          <div
            onClick={e => e.stopPropagation()}
          >
            <p>
              Hello, JavaScript!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupButton;