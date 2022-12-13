import Icon5Star from '@/images/icons/icon-5-star-yellow.svg';
import IconGoogle from '@/images/icons/icon-google.svg';

export interface SliderCardInterface {
    name: string;
    description: string;
}

/**
 * Individual slider card
 *
 * @param {PropInterface} { index }
 * @returns {*}
 */
const SliderCard = ({ name, description }: SliderCardInterface): JSX.Element => {
    return (
        <div className="grid h-full w-full grid-cols-1 grid-rows-[auto_1fr_auto] justify-items-start gap-8 py-20 px-8 shadow-shadow1 sm:min-h-[41rem] sm:gap-12 md:px-16">
            <div className="ml-[1.5rem] grid grid-cols-1 content-start gap-x-8 gap-y-[0.5rem] sm:grid-cols-[auto_1fr]">
                <strong className="text-[1.6rem] font-bold leading-[1.8rem] text-headingColor">{name}</strong>
                <Icon5Star className="max-h-[2.2rem] max-w-[13rem]" />
                <span className="text-[1.4rem] font-medium leading-[1.8rem] sm:col-span-2">Swimming Student</span>
            </div>

            <div>
                <p className="leading-[2.9rem]">{description}</p>
            </div>

            <div className="mt-[3.5rem] flex items-center justify-start gap-[0.5rem] justify-self-end">
                <IconGoogle className="max-[2.3rem] max-h-[2.3rem]" />
                <span>Posted On Google</span>
            </div>
        </div>
    );
};

export default SliderCard;
