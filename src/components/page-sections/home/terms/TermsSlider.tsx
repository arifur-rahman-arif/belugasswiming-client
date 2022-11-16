import SliderCard from './SliderCard';
import IconTop from '@/images/icons/icon-angle-top.svg';
import IconDown from '@/images/icons/icon-angle-down.svg';
import { useRef, useState } from 'react';
import { gsap } from 'gsap';

let sliderPosition = 0;
let activeIndexes = [0, 1];

/**
 * Terms slider component
 *
 * @returns {*}  {JSX.Element}
 */
const TermsSlider = (): JSX.Element => {
    const sliderArray = [1, 2, 3];
    const sliderContainer = useRef<HTMLDivElement>(null);
    const sliderWrapper = useRef<HTMLDivElement>(null);
    const [sliderIndex, setSliderIndex] = useState<number>(0);

    /**
     * Slide the card down position
     */
    const slideDown = () => {
        const sliderContainerWidth = sliderContainer.current?.clientHeight;

        if (sliderIndex >= sliderArray.length - 2) return;
        if (!sliderContainerWidth) return;

        sliderPosition -= sliderContainerWidth / 2 + 30;

        gsap.to(sliderWrapper.current, {
            top: sliderPosition,
            duration: 0.6,
            ease: 'steps(8)'
        });

        setSliderIndex(sliderIndex + 1);

        // Calculate the current 2 slide active indexes
        activeIndexes = [...activeIndexes.map((value) => value + 1)];
    };

    /**
     * Slide the card top position
     */
    const slideUp = () => {
        const sliderContainerWidth = sliderContainer.current?.clientHeight;

        if (sliderIndex < 1) return;
        if (!sliderContainerWidth) return;

        sliderPosition += sliderContainerWidth / 2 + 30;

        gsap.to(sliderWrapper.current, {
            top: sliderPosition,
            duration: 0.6,
            ease: 'steps(12)'
        });

        setSliderIndex(sliderIndex - 1);

        // Calculate the current 2 slide active indexes
        activeIndexes = [...activeIndexes.map((value) => value - 1)];
    };

    return (
        <div
            ref={sliderContainer}
            className="relative grid h-full grid-cols-[1fr_auto] gap-[7rem] overflow-hidden pl-12"
        >
            <div
                ref={sliderWrapper}
                className={`relative grid h-auto w-full grid-cols-1 gap-12`}
                style={{ gridTemplateRows: `repeat(${sliderArray.length}, 50%)` }}
            >
                {sliderArray.map((item, index) => (
                    <SliderCard key={index} index={index} />
                ))}
            </div>

            <div className="flex flex-col items-center justify-center gap-[1.5rem]">
                <span onClick={slideUp} className="cursor-pointer p-4 transition-all hover:scale-[1.3] hover:bg-grey20">
                    <IconTop />
                </span>

                <div className="flex flex-col items-center justify-center gap-4">
                    {sliderArray.map((item, index) => (
                        <div
                            key={index}
                            className={`h-[2rem] w-[0.4rem] transition-all duration-500 ${
                                (activeIndexes.includes(index) && 'w-[0.5rem] bg-primary') || 'bg-black'
                            }`}
                        ></div>
                    ))}
                </div>

                <span
                    onClick={slideDown}
                    className="cursor-pointer p-4 transition-all hover:scale-[1.3] hover:bg-grey20"
                >
                    <IconDown />
                </span>
            </div>
        </div>
    );
};

export default TermsSlider;
