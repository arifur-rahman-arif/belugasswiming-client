import { AppContextInterface, AppCtx } from '@/context/Context';
import { useContext } from 'react';

/**
 * Input checkbox for the form component
 *
 * @returns {*}  {JSX.Element}
 */
const PreferredFormOfContact = (): JSX.Element => {
    const appCtx: AppContextInterface | null = useContext(AppCtx);

    return (
        <div className="grid grid-cols-3 grid-rows-2 gap-y-4 gap-x-12">
            <strong className="col-span-3 text-[1.6rem] font-bold capitalize leading-[1.6rem]">
                Preferred form of contact:
            </strong>
            <div className="flex items-center justify-start gap-4">
                <div className="h-[1.6rem] w-[1.6rem] overflow-hidden rounded-[0.5rem]">
                    <input
                        id="phone"
                        type="checkbox"
                        value=""
                        checked={appCtx?.preferredPhone}
                        onChange={() => appCtx?.setPreferredPhone(!appCtx?.preferredPhone)}
                        disabled={appCtx?.formSubmitted}
                        className={`h-full w-full cursor-pointer ${
                            appCtx?.formSubmitted && 'pointer-events-none cursor-not-allowed opacity-50'
                        }`}
                    />
                </div>
                <label
                    htmlFor="phone"
                    className={`cursor-pointer text-[1.4rem] leading-8 text-grey60 ${
                        appCtx?.formSubmitted && 'cursor-not-allowed opacity-50'
                    }`}
                >
                    Phone
                </label>
            </div>

            <div className="flex items-center justify-start gap-4">
                <div className="h-[1.6rem] w-[1.6rem] overflow-hidden rounded-[0.5rem]">
                    <input
                        id="email"
                        checked={appCtx?.preferredEmail}
                        onChange={() => appCtx?.setPreferredEmail(!appCtx?.preferredEmail)}
                        type="checkbox"
                        value=""
                        disabled={appCtx?.formSubmitted}
                        className={`h-full w-full cursor-pointer ${
                            appCtx?.formSubmitted && 'pointer-events-none cursor-not-allowed opacity-50'
                        }`}
                    />
                </div>
                <label
                    htmlFor="email"
                    className={`cursor-pointer text-[1.4rem] leading-8 text-grey60 ${
                        appCtx?.formSubmitted && 'cursor-not-allowed opacity-50'
                    }`}
                >
                    Email
                </label>
            </div>

            <div className="flex items-center justify-start gap-4">
                <div className="h-[1.6rem] w-[1.6rem] overflow-hidden rounded-[0.5rem]">
                    <input
                        id="text"
                        checked={appCtx?.preferredText}
                        onChange={() => appCtx?.setPreferredText(!appCtx?.preferredText)}
                        type="checkbox"
                        value=""
                        disabled={appCtx?.formSubmitted}
                        className={`h-full w-full cursor-pointer ${
                            appCtx?.formSubmitted && 'pointer-events-none cursor-not-allowed opacity-50'
                        }`}
                    />
                </div>
                <label
                    htmlFor="text"
                    className={`cursor-pointer text-[1.4rem] leading-8 text-grey60 ${
                        appCtx?.formSubmitted && 'cursor-not-allowed opacity-50'
                    }`}
                >
                    Text
                </label>
            </div>
        </div>
    );
};

export default PreferredFormOfContact;
