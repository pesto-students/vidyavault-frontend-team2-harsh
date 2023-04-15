import React, { useEffect, useRef } from 'react'

const VideoPlayer = ({ path }) => {

    const videoRef = useRef();

    useEffect(() => {
        videoRef.current?.load();
    }, [path]);


    // useEffect(() => {
    //     console.log("jhvjhvhvhk",path)
    // }, [path])
    return (
        <>
            <video
                ref={videoRef}
                width="100%"
                height="100%"
                controls
                controlsList="nodownload"
                preload="auto"
                loop
                poster='https://icons.veryicon.com/png/o/object/material-design-icons/movie-46.png'
            // poster={player.thumbnail}
            >
                <source src={path}
                    type="video/mp4" />
                <source src={path}
                    type="video/ogg" />
            </video>
        </>
    )
}

export default VideoPlayer