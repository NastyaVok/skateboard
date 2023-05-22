import { ISkateboardList } from 'types/types';
import { Link } from 'react-router-dom';
import UiButton from '@ui/UiButton';

import styles from './SkateboardList.module.css';

interface ISkateboards {
    skateboards: ISkateboardList[],
}

const SkateboardList = ({skateboards}: ISkateboards) => {
   
    return (
        <>
            <ul className={styles.list__container}>
                {skateboards.map(({
                    id,
                    name,
                    characteristics,
                    price,
                }) => {
                    return (
                        <li className={styles.list__item} key={id}>
                            <Link to={`/skateboards/${id}`}>
                                <h2 className={styles.skateboard__name}>{name}</h2>
                                
                                {characteristics.map(({img}: any) => {
                                    return (
                                        <img 
                                            className={styles.skateboard__photo} 
                                            key={id} 
                                            src={img[0]} //TODO
                                            alt="skateboard"
                                        >
                                        </img>
                                    ); 
                                })}

                                <p className={styles.skateboard__price}>{price.toLocaleString()} р</p>
                                <UiButton content={'Купить'} />
                            </Link>
                        </li>
                    );
                },
                )}
            </ul>
        </>
    );
};

export default SkateboardList;