/**
 * Left masthead door
 *
 * @returns {*}  {JSX.Element}
 */
const RightDoor = (): JSX.Element => {
    return (
        <div className="mx-auto hidden w-full place-items-center bg-white md:grid">
            <video
                playsInline
                autoPlay
                muted
                loop
                poster="/images/masthead/masthead-home-bg.png"
                className="h-screen w-full object-cover"
            >
                <source src="/videos/video-masthead-right.mp4" type="video/mp4" />
            </video>
        </div>
    );
};

export default RightDoor;
