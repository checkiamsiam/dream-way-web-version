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
        <div id="body">
            <div
                id="title"
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '28px',
                    fontWeight: 'bold',
                    marginTop: '10px',
                    marginBottom: '10px',
                    color: 'blue',
                }}
            >
                Player stream RTSP
            </div>
            <div
                id="video-canvas"
                style={{ height: '480px', width: '640px' }}
            ></div>
        </div>
    );
};

export default Test;
