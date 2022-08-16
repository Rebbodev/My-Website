import './Skillblock.scss';
import { FC } from 'react';

export const Skillblock: FC<{ name: string; image: string; imageAlt: string }> = ({ name, image, imageAlt }) => {
    return (
        <div className='skillblock'>
            <img src={image} alt={imageAlt} />
            <p>{name}</p>
        </div>
    )
}