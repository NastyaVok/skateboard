import { ISkateboardList } from 'types/types';

import ProductTitle from '../ProductTitle';
import ProductCharacteristics from '../ProductCharacteristics';
import ProductDescription from '../ProductDescription';

import styles from './ProductInfo.module.css';

interface IProductInfo {
    productInfo: ISkateboardList[],
}

const ProductInfo = ({productInfo}: IProductInfo) => {
    return (
        <> 
            {productInfo.map(({name, category, description, characteristics, price}) => {
                return (
                    <div key="div">
                        <ProductTitle name={name} category={category} price={price} />
                        <ProductCharacteristics characteristics={characteristics} />
                        <ProductDescription description={description} />
                    </div>
                );
            },
            )}
        </>
    );
};

export default ProductInfo;