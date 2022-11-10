import { Container } from '../container';

/**
 * Masthead component
 *
 * @returns {*}
 */
const MastHead = () => {
    return (
        <div className="w-full md:h-[75rem]">
            <Container className="grid h-full grid-cols-1 px-0">
                <div className="bg-[url('/images/masthead/masthead-home-bg.png')] bg-cover bg-no-repeat px-8 md:bg-none">
                    <h1 className="mt-12 text-teal">Private swimming lessons</h1>
                    <h2 className="text-headingColor">
                        <span className="text-headingColor">S</span>
                        <span className="text-headingColor">W</span>
                        <span className="before relative text-headingColor before:absolute before:left-2/4 before:top-2/4 before:h-2/4 before:w-[calc(100%_-_0.639rem)] before:-translate-x-[51%] before:bg-primary before:content-[''] md:before:w-[calc(100%_-_1.58rem)] md:before:-translate-x-2/4">
                            i
                        </span>
                        <span className="text-headingColor">M</span>
                        <span className="text-primary">R</span>
                        <span className="text-primary">I</span>
                        <span className="text-primary">G</span>
                        <span className="text-primary">H</span>
                        <span className="text-primary">T</span>k
                    </h2>

                    <p className="text-leftt w-full max-w-[29.9rem] pt-12 text-white">
                        Become more comfortable in the water with our private swimming instructors.
                    </p>
                </div>

                <div className="bg-cover bg-no-repeat px-8 md:bg-[url('/images/masthead/masthead-home-bg.png')]">
                    <h1>lasdfj</h1>
                </div>
            </Container>
        </div>
    );
};

export default MastHead;
