import { AppContextInterface, AppCtx } from '@/context/Context';
import { FormEvent, useContext, useEffect, useRef, useState } from 'react';

import { BELUGA_REST_URL } from '@/utils/constant';
import { Container } from '@/components/container';
import Description from './Description';
import IconRefresh from '@/images/icons/icon-refresh.svg';
import IconSpin from '@/icons/icon-spin.svg';
import InputSection from './InputSection';
import PreferredFormOfContact from './PreferredFormOfContact';
import { Section } from '@/components/section';
import { gsap } from 'gsap';

/**
 * Form component
 *
 * @returns {*}  {JSX.Element}
 */
const FormSection = (): JSX.Element => {
    const appCtx: AppContextInterface | null = useContext(AppCtx);
    const yellowElement = useRef<HTMLDivElement>(null);
    const yellowHorizontalElement = useRef<HTMLDivElement>(null);

    const [formSubmitSuccessFull, setFormSubmitSuccessFull] = useState<boolean>(false);
    const alertElement = useRef<HTMLDivElement>(null);

    /**
     * Reset the contact form
     *
     */
    const resetForm = () => {
        appCtx?.setPreferredPhone(false);
        appCtx?.setPreferredEmail(true);
        appCtx?.setPreferredText(false);
        appCtx?.setContactName('');
        appCtx?.setContactPhone('');
        appCtx?.setContactEmail('');
        appCtx?.setContactDescription('');
    };

    /**
     * Form submit handler
     *
     * @param {FormEvent<HTMLFormElement>} e
     */
    const formSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (appCtx?.formSubmitted) return;

        appCtx?.setSubmitButtonPressed(true);

        if (!appCtx?.contactName || !appCtx.contactEmail) return;

        appCtx?.setFormSubmitted(true);

        const apiUrl =
            process.env.ENVIRONMENT === 'Development' ? process.env.NEXT_PUBLIC_BELUGA_REST_URL : BELUGA_REST_URL;

        fetch(`${apiUrl}/submit-contact-form`, {
            method: 'POST',
            body: JSON.stringify({
                profferedFormOfContact: {
                    phone: appCtx?.preferredPhone,
                    email: appCtx?.preferredEmail,
                    text: appCtx?.preferredText
                },
                name: appCtx.contactName,
                phone: appCtx?.contactPhone,
                email: appCtx?.contactEmail,
                description: appCtx.contactDescription
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((data) => {
                appCtx?.setFormSubmitted(false);
                setFormSubmitSuccessFull(true);
                resetForm();
            })
            .catch((error) => {
                appCtx?.setFormSubmitted(false);
                console.error(error);
            });
    };

    useEffect(() => {
        if (!formSubmitSuccessFull) return;

        gsap.to(alertElement.current, {
            height: '5rem',
            duration: 0.4,
            autoAlpha: 1,
            ease: 'sine.inOut'
        });

        setTimeout(() => {
            gsap.to(alertElement.current, {
                height: 0,
                duration: 0.4,
                autoAlpha: 0,
                ease: 'sine.inOut',
                onComplete: () => {
                    setFormSubmitSuccessFull(false);
                }
            });
        }, 5000);
    }, [formSubmitSuccessFull]);

    useEffect(() => {
        if (!appCtx?.homePageDoorOpen) return;

        gsap.to(yellowElement.current, {
            height: '15rem',
            duration: 1.5,
            ease: 'steps(12)',
            scrollTrigger: {
                trigger: yellowElement.current,
                start: 'top 75%'
            }
        });

        gsap.to(yellowHorizontalElement.current, {
            width: '15rem',
            duration: 1.5,
            ease: 'steps(12)',
            scrollTrigger: {
                trigger: yellowHorizontalElement.current,
                start: 'top 75%'
            }
        });
    }, [appCtx?.homePageDoorOpen]);

    return (
        <Section>
            <form id="contact-form" onSubmit={formSubmit}>
                <Container className="relative grid grid-cols-1 md:grid-cols-[auto_1fr]">
                    <span ref={yellowElement} className="hidden h-[0] w-[0.8rem] bg-primary md:block"></span>

                    <span
                        ref={yellowHorizontalElement}
                        className="h-[0.8rem] w-0 bg-primary md:right-0 md:hidden"
                    ></span>

                    <div className="grid grid-cols-1 shadow-shadow1 md:grid-cols-2">
                        <div className="flex flex-col items-center justify-start gap-24 py-24 px-8 sm:px-12 md:items-start xl:px-[7.4rem]">
                            <img
                                src="/images/section-images/front-swimmer.svg"
                                className="max-h-[12.1rem] w-full max-w-[32.7rem]"
                                alt=""
                                width={327}
                                height={121}
                            />
                            {/* <Image src="/images/section-images/front-swimmer.svg" alt="" width={327} height={120} /> */}
                            <h2 className="max-w-[32.7rem]">Ready to SwimRight?</h2>
                            <div className="flex flex-col items-start justify-start gap-[1.5rem]">
                                <h3 className="font-bold">Get in tocuh</h3>
                                <p>We aim to reply to all enquiry within 24 hours</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-12 bg-grey20 px-8 py-24 sm:px-12 xl:grid-cols-2 xl:py-20">
                            {/* Alert */}
                            {formSubmitSuccessFull && (
                                <div
                                    className="col-span-2 flex h-0 w-full items-center overflow-hidden rounded-lg bg-teal px-6 text-base opacity-0"
                                    role="alert"
                                    ref={alertElement}
                                >
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="check-circle"
                                        className="mr-2 h-8 w-8"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <path
                                            fill="#fff"
                                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                                        ></path>
                                    </svg>
                                    <span className="ml-4 text-[1.6rem] font-bold uppercase text-white">
                                        Thank you. We will contact you soon.
                                    </span>
                                </div>
                            )}

                            {/* Form input area */}
                            <div className="flex flex-col items-start justify-start">
                                <PreferredFormOfContact />

                                <InputSection />
                            </div>

                            {/* Form text area */}
                            <Description />

                            <div className="flex flex-col items-center justify-start sm:flex-row sm:gap-[2.8rem] sm:justify-self-end xl:col-span-2">
                                <span
                                    className="flex cursor-pointer items-center justify-center gap-4 px-8 py-12"
                                    onClick={resetForm}
                                >
                                    <IconRefresh className="max-h-[1.6rem] max-w-[1.6rem]" />
                                    <span className="text-[1.4rem] font-medium uppercase leading-[1.6rem] text-headingColor">
                                        RESET
                                    </span>
                                </span>
                                <button
                                    type="submit"
                                    form="contact-form"
                                    disabled={appCtx?.formSubmitted}
                                    className={`grid cursor-pointer grid-flow-col place-items-center gap-4 rounded-[1.5rem] border-2 border-primary bg-primary p-4 text-[1.6rem] font-bold uppercase leading-8 text-headingColor transition-all hover:bg-transparent sm:py-[1.8rem] sm:px-[2.4rem] ${
                                        appCtx?.formSubmitted && 'cursor-not-allowed opacity-50'
                                    }`}
                                >
                                    {appCtx?.formSubmitted && (
                                        <IconSpin className="h-8 w-8 animate-spin bg-transparent text-headingColor" />
                                    )}
                                    Submit Request
                                </button>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </Container>
            </form>
        </Section>
    );
};

export default FormSection;
