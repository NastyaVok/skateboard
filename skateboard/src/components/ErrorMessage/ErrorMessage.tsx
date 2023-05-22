import UiVideo from '@ui/UIVideo';

import video from './video/video.mp4';

import styles from './ErrorMessage.module.css';

const ErrorMessage = () => {
    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.title}>К сожалению, произошла ошибка</h1>
                <p className={styles.text}>
                    Мы не можем отобразить страницу.
                    <br />Пожалуйста, попробуйте позже, когда мы устраним ошибку
                </p>
                <UiVideo src={video} classes={styles.video} playbackRate={0.5} />
            </div>
        </>
    );
};

export default ErrorMessage;