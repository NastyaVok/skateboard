import styles from './ProductDescription.module.css';

interface IProductDescriptionProps {
    description: string,
};

const ProductDescription = ({description}: IProductDescriptionProps) => {
    return (
        <div className={styles.container}>
            <h4 className={styles.title}>Описание</h4>
            <p className={styles.description}>{description}</p>
        </div>
    );
};

export default ProductDescription;