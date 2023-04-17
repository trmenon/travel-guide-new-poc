import React from "react";
import ReactPlayer from "react-player";

const VideoComponent = ()=> {
    return(
        <React.Fragment>
            <ReactPlayer
                url="https://www.youtube.com/watch?v=R83BlU5nnbs&t=6s"
                width={'100%'}
                height={'312px'}
            />
            {/* <div className="video-responsive">
                <iframe
                    
                    src={`https://www.youtube.com/watch?v=R83BlU5nnbs&t=6s`}
                    frameborder='0'
                    allow='autoplay; encrypted-media'
                    allowfullscreen
                    title='video'
                />
            </div> */}
        </React.Fragment>
    )
}

export default VideoComponent;