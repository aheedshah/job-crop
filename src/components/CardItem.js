import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
    return (
        <>
            <li className='item'>
                <Link className='link' to={props.path}>
                    <figure className='image' data-category={props.label}>
                        <img className='img' alt='Job Image' src={props.src} />
                    </figure>
                    <div className='aboutCard'>
                        <h5 className='caption'>{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default CardItem;
