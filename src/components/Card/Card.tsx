import React, { FC, ReactNode } from 'react';
import styles from '../Card/Card.module.css';
import {getClasses} from '../../helpers/styles';

interface Card {
    children: ReactNode;
    color: "primary" | "secondary";
    size: "sm" | "lg";
}

const Card : FC<Card> = ({
    children,
    color,
    size
}) => {

    const getStyles = getClasses(styles)({
        color,
        size
    });

    return <div className={getStyles("card", ["color", "size"])}>
        {children}
    </div>
};

export default Card;