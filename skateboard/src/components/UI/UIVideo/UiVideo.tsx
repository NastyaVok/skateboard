import { useEffect, useRef } from 'react';
import cn from 'classnames';

import '../index.css';
import styles from './UiVideo.module.css';

interface IVideo {
    src: string,
    classes?: string,
    playbackRate?: number,
};

const UiVideo = ({ src, classes, playbackRate=1.0 }: IVideo) => {
    const videoRef = useRef<HTMLVideoElement>(null);


    useEffect(()=> {
        if (videoRef.current) {
            videoRef.current.playbackRate = playbackRate;
        };
    }, []);

    return (
        <video 
            loop
            autoPlay
            muted
            className={cn(styles.video, classes)}
            ref = {videoRef}
        >
            <source src={src} />
        </video>
    );
};

export default UiVideo;