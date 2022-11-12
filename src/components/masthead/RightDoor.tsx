/**
 * Left masthead door
 *
 * @returns {*}  {JSX.Element}
 */
const RightDoor = (): JSX.Element => {
    return (
        <div className="mx-auto hidden w-full max-w-[var(--container-width)] place-items-center md:grid">
            <img className="h-full w-full object-cover" src="/images/masthead/masthead-home-bg.png" />
        </div>
    );
};

export default RightDoor;
