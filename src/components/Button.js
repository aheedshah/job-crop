import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
export const Button = ({ style, size, type, children, onClick }) => {
    const styles = ['primary-button', 'sides'];
    const sizes = ['secondary-button', 'large'];
    const styleChosen = styles.includes(style) ? style : styles[0];
    const sizeChosen = sizes.includes(size) ? size : sizes[0];
    return (
        <Link to='/login' className='responsive'>
              <button
                className={`btn ${styleChosen} ${sizeChosen}`}
                onClick={onClick}
                type={type}
              >
                  {children}
              </button>
        </Link>
    );
};
