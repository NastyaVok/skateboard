import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ISkateboardList } from 'types/types';
import ProductInfo from '@components/ProductPage/ProductInfo';
import { URL_PRODUCT } from '@constants/api';
import { getApiResource } from '@utils/network';
import { withErrorApi } from '@hoc-helpers/withErrorApi';

import styles from './ProductPage.module.css';

const ProductPage = ({ setErrorApi }: any) => {
    const {id} = useParams();
    const [productInfo, setProductInfo] = useState<ISkateboardList[]>([]);

    const getResource = async (url: string) => { 
        const res: ISkateboardList[] = await getApiResource(url);

        if (res) {

            const productList = res.map(
                ({  
                    category, 
                    name,  
                    description, 
                    characteristics, 
                    price,
                }) => {
                    return {
                        category,
                        name,
                        description,
                        characteristics,
                        price,
                    };
                });
            
            setProductInfo(productList);
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }
    };

    useEffect(() => {
        getResource(URL_PRODUCT+id);
    }, []);
    
    return (
        <div className={styles.wrapper}>
            {productInfo && <ProductInfo productInfo={productInfo}/>}
        </div>
    );
};

export default withErrorApi(ProductPage);