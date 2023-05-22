import { IColorList } from 'types/types';

import styles from './ProductColors.module.css';

interface IColor {
    color: IColorList[],
}

const ProductColors = ({color}: IColor) => {
    return (
        <>
            {color.map(((color,id) => {
                return <p className={styles.color} key={id}>{color.color}</p>; //TODO
            }))}
        </>
    );
};

export default ProductColors;