import IconCalendar from '@/images/icons/icon-calender-outline.svg';
import IconSwimming from '@/images/icons/icon-swimming-black.svg';

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
        <div className="grid h-full w-full grid-cols-[auto_1fr]">
            <span className="h-[15rem] w-[0.8rem] bg-primary"></span>

            <div
                className={`flex flex-col items-start justify-start p-12 shadow-shadow1 ${
                    index % 2 === 0 ? 'bg-grey20' : 'bg-white'
                } xl:py-[8.5rem] xl:px-[6.7rem]`}
            >
                <strong className="text-left text-[2rem] font-bold leading-[2.4rem] text-headingColor">
                    Sprint term 2023
                </strong>
                <span className="mt-4 text-left text-[1.6rem] font-bold uppercase leading-[1.8rem]">All levels</span>

                <div className="mt-12 grid grid-cols-1 justify-items-start gap-[2.5rem]">
                    <div className="grid grid-cols-[1fr_auto] gap-y-[0.5] gap-x-4">
                        <IconCalendar className="max-h-[2.4rem] max-w-[2.4rem]" />
                        <span className="font-medium leading-[1.9rem] text-secondary">
                            Tuesday 3rd January - Sunday 2nd April
                        </span>
                        <span className="col-span-1 col-start-2 font-medium leading-[1.9rem] text-secondary">
                            <strong>Half term:</strong> Monday 1th feb - Sunday 19th Feb
                        </span>
                    </div>

                    <div className="grid grid-cols-[1fr_auto] gap-y-[0.5] gap-x-4">
                        <IconSwimming className="max-h-[2.4rem] max-w-[2.4rem]" />
                        <span className="font-medium leading-[1.9rem] text-secondary">Trainer</span>
                        <span className="col-span-1 col-start-2 font-medium leading-[1.9rem] text-secondary">
                            Mehdi Nessaie
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderCard;
