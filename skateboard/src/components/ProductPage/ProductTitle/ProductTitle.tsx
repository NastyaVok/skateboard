import { ISkateboardList } from 'types/types';
import UiButton from '@ui/UiButton';

import styles from './ProductTitle.module.css';

interface ISkateboard {
    name: string,
    category: string,
    price: number,
} //TODO 

const ProductTitle = ({name, category, price }: ISkateboard) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container__title}>
                <h2 className={styles.title}>{name}</h2>
                <h4 className={styles.category}>{category}</h4>
            </div>
            <div className={styles.container__box}>
                <p className={styles.price}>{price.toLocaleString()} р</p>
                <UiButton content={'Купить'} classes={styles.btn} />
            </div>
        </div>
    );
};

export default ProductTitle;