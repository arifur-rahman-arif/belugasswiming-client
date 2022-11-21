import { AppContextInterface, AppCtx } from '@/context/Context';
import { ChangeEvent, useContext, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

/**
 * Input component for the form component
 *
 * @returns {*}  {JSX.Element}
 */
const InputSection = (): JSX.Element => {
    const appCtx: AppContextInterface | null = useContext(AppCtx);
    const nameError = useRef<HTMLSpanElement>(null);
    const emailError = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (!appCtx?.submitButtonPressed) return;

        if (!appCtx?.contactName && appCtx?.submitButtonPressed) {
            gsap.to(nameError.current, {
                transform: 'translateY(0)',
                opacity: 1,
                height: 'auto',
                duration: 0.4,
                ease: 'sine.inOut'
            });
        }

        if (!appCtx?.contactEmail && appCtx?.submitButtonPressed) {
            gsap.to(emailError.current, {
                transform: 'translateY(0)',
                opacity: 1,
                height: 'auto',
                duration: 0.4,
                ease: 'sine.inOut'
            });
        }

        setTimeout(() => {
            gsap.to([nameError.current, emailError.current], {
                transform: 'translateY(-50%)',
                opacity: 0,
                height: '0',
                duration: 0.4,
                ease: 'sine.inOut'
            });

            appCtx?.setSubmitButtonPressed(false);
        }, 3000);
    }, [appCtx?.submitButtonPressed]);

    return (
        <div className="mt-12 flex w-full flex-col items-start justify-start gap-[1.5rem]">
            <div className="flex w-full flex-col items-start justify-start gap-4">
                <label className="text-[1.4rem] font-bold leading-[1.6rem]" htmlFor="name">
                    Name <span className="text-[#FF0000]">*</span>
                </label>
                <div className="w-full">
                    <input
                        type="text"
                        id="name"
                        value={appCtx?.contactName}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            appCtx?.setContactName(e.target.value as string)
                        }
                        className={`h-[4.8rem] w-full rounded-[1.5rem] border border-grey40 px-[1.6rem] py-[1.2rem] outline-none transition-all focus:border-teal ${
                            appCtx?.formSubmitted && 'cursor-not-allowed opacity-50'
                        }`}
                        placeholder="Your name"
                        disabled={appCtx?.formSubmitted}
                    />
                    <span
                        ref={nameError}
                        className="error-message block h-0 -translate-y-2/4 overflow-hidden text-[1.4rem] text-[#FF0000] opacity-0"
                    >
                        Name is a required field
                    </span>
                </div>
            </div>

            <div className="flex w-full flex-col items-start justify-start gap-4">
                <label className="text-[1.4rem] font-bold leading-[1.6rem]" htmlFor="phoneNumber">
                    Phone <span className="text-[1.4rem]">(Optional)</span>
                </label>
                <div className="w-full">
                    <input
                        type="text"
                        id="phoneNumber"
                        value={appCtx?.contactPhone}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            appCtx?.setContactPhone(e.target.value as string)
                        }
                        placeholder="Your phone number"
                        className={`h-[4.8rem] w-full rounded-[1.5rem] border border-grey40 px-[1.6rem] py-[1.2rem] outline-none transition-all focus:border-teal ${
                            appCtx?.formSubmitted && 'cursor-not-allowed opacity-50'
                        }`}
                        disabled={appCtx?.formSubmitted}
                    />
                </div>
            </div>

            <div className="flex w-full flex-col items-start justify-start gap-4">
                <label className="text-[1.4rem] font-bold leading-[1.6rem]" htmlFor="email">
                    Email <span className="text-[#FF0000]">*</span>
                </label>
                <div className="w-full">
                    <input
                        type="email"
                        id="email"
                        value={appCtx?.contactEmail}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            appCtx?.setContactEmail(e.target.value as string)
                        }
                        placeholder="Email address"
                        className={`h-[4.8rem] w-full rounded-[1.5rem] border border-grey40 px-[1.6rem] py-[1.2rem] outline-none transition-all focus:border-teal ${
                            appCtx?.formSubmitted && 'cursor-not-allowed opacity-50'
                        }`}
                        disabled={appCtx?.formSubmitted}
                    />
                    <span
                        ref={emailError}
                        className="error-message block h-0 -translate-y-2/4 overflow-hidden text-[1.4rem] text-[#FF0000] opacity-0"
                    >
                        Please enter a valid email address
                    </span>
                </div>
            </div>
        </div>
    );
};

export default InputSection;
