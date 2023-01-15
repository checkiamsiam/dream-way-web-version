import JSMpeg from '@cycjimmy/jsmpeg-player';
import React, { useEffect } from 'react';

const Test = () => {
    useEffect(() => {
        const videoUrl = `rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mp4`;
        const player = new JSMpeg.VideoElement('#video-canvas', videoUrl, {
            autoplay: true,
        });
    });

    return (
        <div id="video-canvas" style={{ height: '480px', width: '640px' }} />
    );
};

export default Test;
