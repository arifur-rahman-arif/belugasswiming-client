import Icon5Star from '@/images/icons/icon-5-star-yellow.svg';
import IconGoogle from '@/images/icons/icon-google.svg';

interface PropInterface {
    index: number;
}

/**
 * Individual slider card
 *
 * @param {PropInterface} { index }
 * @returns {*}
 */
const SliderCard = ({ index }: PropInterface): JSX.Element => {
    return (
        <div className="grid h-full w-full grid-cols-1 justify-items-start py-20 px-8 shadow-shadow1 md:px-16">
            <div className="ml-[1.5rem] grid grid-cols-1 content-start gap-x-8 gap-y-[0.5rem] sm:grid-cols-[auto_1fr]">
                <strong className="text-[1.6rem] font-bold leading-[1.8rem] text-headingColor">Mark Rise</strong>
                <Icon5Star className="max-h-[2.2rem] max-w-[13rem]" />
                <span className="text-[1.4rem] font-medium leading-[1.8rem] sm:col-span-2">Swimming Student</span>
            </div>

            <p className="mt-12 leading-[2.9rem]">
                Lorem ipsum dolor sit amet consectetur. Nisl vulputate bibendum pretium mauris condimentum. Lacus
                venenatis ipsum faucibus elit. Nibh dolor consectetur leo dolor id. Sagittis massa lectus porta justo
                feugiat nisl in. Magna donec arcu facilisis fames hendrerit non duis est ullamcorper. Maecenas in ut non
                vitae ornare.
            </p>

            <div className="mt-[3.5rem] flex items-center justify-start gap-[0.5rem] justify-self-end">
                <IconGoogle className="max-[2.3rem] max-h-[2.3rem]" />
                <span>Posted On Google</span>
            </div>
        </div>
    );
};

export default SliderCard;
