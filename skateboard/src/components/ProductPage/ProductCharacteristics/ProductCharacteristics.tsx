import { ICharacteristicsList } from 'types/types';

import ProductColors from '../ProductColors';
import ProductImages from '../ProductImages';

import styles from './ProductCharacteristics.module.css';

interface ICharacteristics {
    characteristics: ICharacteristicsList[],
}

const ProductCharacteristics = ({characteristics}: ICharacteristics) => {
    return (
        <>
            {characteristics.map(({
                manufacturer, 
                material, 
                weight, 
                size, 
                country, 
                guarantee, 
                color, 
                img,
            }) => {
                return (
                    <div className={styles.wrapper} key="wrapper">
                        <div className={styles.container__img}>
                            <ProductImages img={img} />
                        </div>
                        <ul className={styles.container__characteristics}>
                            <li className={styles.item}>
                                <h4 className={styles.title}>Производитель</h4>
                                <p className={styles.text}>{manufacturer}</p>
                            </li>
                            <li className={styles.item}>
                                <h4 className={styles.title}>Материал</h4>
                                <p className={styles.text}>{material}</p>
                            </li>
                            <li className={styles.item}>
                                <h4 className={styles.title}>Вес</h4>
                                <p className={styles.text}>{weight}</p>
                            </li>
                            <li className={styles.item}>
                                <h4 className={styles.title}>Размер</h4>
                                <p className={styles.text}>{size}</p>
                            </li>
                            <li className={styles.item}>
                                <h4 className={styles.title}>Страна</h4>
                                <p className={styles.text}>{country}</p>
                            </li>
                            <li className={styles.item}>
                                <h4 className={styles.title}>Гарантия</h4>
                                <p className={styles.text}>{guarantee}</p>
                            </li>
                            <li className={styles.item}>
                                <h4 className={styles.title}>Цвет</h4>
                                <ProductColors color={color} />
                            </li>
                        </ul>
                    </div>
                );},
            )}
        </>
    );
};

export default ProductCharacteristics;