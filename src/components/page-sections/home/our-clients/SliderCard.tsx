import Icon5Star from '@/images/icons/icon-5-star-yellow.svg';
import IconGoogle from '@/images/icons/icon-google.svg';
import { trimText } from '@/utils/miscellaneous';
import Link from 'next/link';

export interface SliderCardInterface {
    name: string;
    description: string;
    link: string;
}

/**
 * Individual slider card
 *
 * @param {PropInterface} { index }
 * @returns {*}
 */
const SliderCard = ({ name, description, link }: SliderCardInterface): JSX.Element => {
    return (
        <div className="grid h-full w-full grid-cols-1 grid-rows-[auto_1fr_auto] justify-items-start gap-8 py-12 px-8 shadow-shadow1 sm:min-h-[41rem] sm:gap-12 md:px-16">
            <div className="ml-[1.5rem] grid grid-cols-1 content-start gap-x-8 gap-y-[0.5rem] sm:grid-cols-[auto_1fr]">
                <strong className="text-[1.6rem] font-bold leading-[1.8rem] text-headingColor">{name}</strong>
                <Icon5Star className="max-h-[2.2rem] max-w-[13rem]" />
                <span className="text-[1.4rem] font-medium leading-[1.8rem] sm:col-span-2">Swimming Student</span>
            </div>

            <div>
                <p className="leading-[2.9rem]">{trimText(description, 200)}</p>
            </div>

            <div className="mt-[3.5rem] flex items-center justify-start gap-[0.5rem] justify-self-end">
                <IconGoogle className="max-[2.3rem] max-h-[2.3rem]" />
                <span className="cursor-pointer">
                    <Link href={link || '#'} target="_blank">
                        Posted on Google
                    </Link>
                </span>
            </div>
        </div>
    );
};

export default SliderCard;
