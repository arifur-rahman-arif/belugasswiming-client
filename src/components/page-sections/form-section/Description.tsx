import { AppContextInterface, AppCtx } from '@/context/Context';
import { ChangeEvent, useContext } from 'react';

/**
 * Description text area
 *
 * @returns {*}  {JSX.Element}
 */
const Description = (): JSX.Element => {
    const appCtx: AppContextInterface | null = useContext(AppCtx);

    return (
        <div className="flex h-full flex-col items-start justify-start gap-4 self-end">
            <strong className="text-[1.4rem] font-bold leading-[1.6rem]">Message</strong>
            <textarea
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                    appCtx?.setContactDescription(e.target.value as string)
                }
                className={`h-full w-full resize-none rounded-[1.5rem] border border-grey40 px-[1.6rem] py-[1.2rem] outline-none transition-all focus:border-teal ${
                    appCtx?.formSubmitted && 'cursor-not-allowed opacity-50'
                }`}
                placeholder="Your message"
                value={appCtx?.contactDescription}
                disabled={appCtx?.formSubmitted}
            ></textarea>
        </div>
    );
};

export default Description;
