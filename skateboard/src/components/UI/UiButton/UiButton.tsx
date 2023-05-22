import cn from 'classnames';

import '../index.css';
import styles from './UiButton.module.css';

interface IButton {
    content: string,
    classes?: string,
};

const UiButton = ({content, classes}: IButton) => {
    return (
        <>
            <button className={cn(styles.btn, classes)}>{content}</button>
        </>
    );
};

export default UiButton;