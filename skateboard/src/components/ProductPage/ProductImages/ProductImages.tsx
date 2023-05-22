import { useState, useEffect } from 'react';
import { IImagesList } from 'types/types';

import styles from './ProductImages.module.css';

interface IImage {
    img: string[],
};

const ProductImages = ({img}:IImage) => {
    const [imgInd, setImgInd] = useState(0);
    const [length, setLength] = useState(img.length);

    useEffect(() => {
        setLength(img.length);
    }, [img, imgInd]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                {img.map((img, ind) => {
                    return (
                        <button 
                            className={styles.btn} 
                            style={{ backgroundImage: `url(${img})`}} 
                            onClick={ (e) => setImgInd(ind)} 
                            key={ind}
                        >
                        </button> 
                    );
                })}
            </div>
            <img className={styles.img} src={img[imgInd]} alt="skateboard"></img> 
        </div>
    );
};

export default ProductImages;