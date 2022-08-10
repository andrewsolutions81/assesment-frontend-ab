import React, { useState, useEffect }from 'react';
import Timer from '../Timer/Timer'
import {useNavigate} from 'react-router-dom'


function SingleProduct({product}) {

  const navigate = useNavigate()

  const [intro, setIntro] = useState(true);
	const [buttonStyle, setButtonStyle] = useState(
		'product_button_available'
	);
	const [availabilityText, setAvailabilityText] = useState('Go to detail');

	const handleIntro = () => {
		if (intro) {
			navigate(`../product-detail/${product.id}`, { replace: true });
		}
	};

	useEffect(() => {
		const changeColorButton = () => {
			if (intro === false) {
				setButtonStyle('product_button_unavailable');
				setAvailabilityText('Product unabailable');
			}
		};
		changeColorButton();
	}, [intro]);

  return(
    <li className="product_card" key={product.id}>
      <h2 className="produc_title">{product.title}</h2>
      <img className="product_image" src={product.image} alt="Cool product, white background"></img>
      <div className={buttonStyle}>
        <button onClick={handleIntro}>{availabilityText}</button>
      </div>
        {intro ?
        <Timer setIntro={setIntro} />
        : null}
    </li>
  )
}

export default SingleProduct
