import Plyr from 'plyr';
import { useEffect, useRef } from 'react';
import 'plyr/dist/plyr.css';

interface VideoPlayerInterface {
    videoUrl: string;
    videoPoster: string;
}
/**
 * Video player component
 *
 * @returns {*}  {JSX.Element}
 */
const VideoPlayer = ({ videoUrl, videoPoster }: VideoPlayerInterface): JSX.Element => {
    const videoPlayer = useRef<HTMLVideoElement | null>(null);
    useEffect(() => {
        if (!videoPlayer.current) return;

        new Plyr(videoPlayer.current, {
            captions: { active: true },
            tooltips: {
                controls: true,
                seek: true
            },
            controls: [
                'play-large', // The large play button in the center
                'play', // Play/pause playback
                'fast-forward', // Fast forward by the seek time (default 10 seconds)
                'progress', // The progress bar and scrubber for playback and buffering
                'current-time', // The current time of playback
                'duration', // The full duration of the media
                'mute', // Toggle mute
                'volume', // Volume control
                'captions', // Toggle captions
                'settings', // Settings menu
                'airplay', // Airplay (currently Safari only)
                'fullscreen' //
            ]
        });
    }, []);
    return (
        <div className="!scale-y-105 overflow-hidden">
            <video ref={videoPlayer} playsInline controls data-poster={videoPoster} className="">
                <source src={videoUrl} type="video/mp4" />
            </video>
        </div>
    );
};

export default VideoPlayer;
