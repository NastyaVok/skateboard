import { useEffect, useState } from 'react';
import { ISkateboardList } from 'types/types';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import { getApiResource } from '@utils/network';
import { URL } from '@constants/api';
import SkateboardList from '@components/SkateboardPage/SkateboardList';

import skate from './img/skate.jpg';
import styles from './SkateboardPage.module.css';

const SkateboardPage = ({ setErrorApi }: any) => {
    const [skateboards, setSkateboards] = useState<any>(null); //TODO

    const getResource = async (url: string) => { 
        const res: ISkateboardList[]  = await getApiResource(url);

        if (res) {
            const skateboardsList = res.map((
                {
                    id,
                    name,
                    characteristics,
                    price,
                }) => {
                return {
                    id,
                    name,
                    characteristics,
                    price,
                };
            });
    
            setSkateboards(skateboardsList);
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }; 
    };

    useEffect(() => {
        getResource(URL);
    }, []);

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.banner}>
                    <img className={styles.img} src={skate} alt="skateboard"></img>
                </div>
                {skateboards && <SkateboardList skateboards={skateboards} />}
            </div>
                   
        </>
    );
};

export default withErrorApi(SkateboardPage);