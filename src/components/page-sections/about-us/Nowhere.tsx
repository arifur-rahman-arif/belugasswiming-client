import { Container } from '@/components/container';
import { Section } from '@/components/section';

/**
 * Nowhere section component
 *
 * @returns {*}
 */
const Nowhere = () => {
    return (
        <Section>
            <Container className="relative grid grid-cols-1 gap-24 md:grid-cols-2">
                {/* min-h-[93rem] */}
                <div className="relative w-full max-w-[30rem] pt-[6.3rem] sm:pl-12 md:max-w-[68.9rem] lg:pl-[10.5rem] lg:pt-[12rem]">
                    <span className="block w-full text-[2.4rem] font-bold uppercase leading-[2.8rem] md:text-[3.2rem] md:leading-[3.8rem]">
                        Nowhere is too far for us to share our passion for the sport of swimming
                    </span>
                </div>

                <div className="col-span-2 grid grid-cols-[auto_1fr] sm:pl-12 lg:pl-[10.5rem]">
                    <div className="grid w-[4.7rem] place-items-center bg-primary py-8 md:w-[8.3rem]">
                        <span
                            style={{ WebkitTextStroke: '1px #000', writingMode: 'vertical-lr' }}
                            className="overflow-hidden text-center text-[1.6rem] uppercase leading-8 text-headingColor md:text-[2.4rem] md:leading-[2.8rem]"
                        >
                            The pool is our happy place
                        </span>
                    </div>
                    <div className="w-full">
                        <img src="/images/section-images/blurry-image.webp" alt="" className="h-full w-full" />
                    </div>
                </div>

                <div className="absolute top-0 left-0 -z-[1] h-[calc(100%_+_12rem)] w-[60%] bg-grey20 md:w-[65rem]">
                    <div className="relative h-full w-full">
                        <span className="absolute top-0 right-0 h-[15rem] w-[0.8rem] bg-primary"></span>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default Nowhere;
