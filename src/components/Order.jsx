import React from 'react';
import '../styles/Order.scss';
import flechita from '../assets/icons/flechita.svg';

const Order = () => {
    return (
        <div className="order">
            <p>
                <span>03.25.21</span>
                <span>6 articles</span>
            </p>
            <p>$560.00</p>
            <img src={flechita} alt="arrow" />
        </div>
    );
};

export { Order };
