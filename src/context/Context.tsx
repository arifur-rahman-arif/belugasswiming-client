import { useState, createContext, Dispatch, SetStateAction } from 'react';

export interface AppContextInterface {
    homePageDoorOpen: boolean;
    setHomePageDoorOpen: Dispatch<SetStateAction<boolean>>;
    preferredPhone: boolean;
    setPreferredPhone: Dispatch<SetStateAction<boolean>>;
    preferredEmail: boolean;
    setPreferredEmail: Dispatch<SetStateAction<boolean>>;
    preferredText: boolean;
    setPreferredText: Dispatch<SetStateAction<boolean>>;
    contactName: string;
    setContactName: Dispatch<SetStateAction<string>>;
    contactPhone: string;
    setContactPhone: Dispatch<SetStateAction<string>>;
    contactEmail: string;
    setContactEmail: Dispatch<SetStateAction<string>>;
    contactDescription: string;
    setContactDescription: Dispatch<SetStateAction<string>>;
    submitButtonPressed: boolean;
    setSubmitButtonPressed: Dispatch<SetStateAction<boolean>>;
    formSubmitted: boolean;
    setFormSubmitted: Dispatch<SetStateAction<boolean>>;
}

interface PropInterface {
    children: Array<JSX.Element> | JSX.Element;
}

export const AppCtx = createContext<AppContextInterface | null>(null);

/**
 * Context of this web application
 *
 * @param {PropInterface} { children }
 * @returns {*}  {JSX.Element}
 */
const Context = ({ children }: PropInterface): JSX.Element => {
    const [homePageDoorOpen, setHomePageDoorOpen] = useState<boolean>(false);
    const [preferredPhone, setPreferredPhone] = useState<boolean>(false);
    const [preferredEmail, setPreferredEmail] = useState<boolean>(true);
    const [preferredText, setPreferredText] = useState<boolean>(false);
    const [contactName, setContactName] = useState<string>('');
    const [contactPhone, setContactPhone] = useState<string>('');
    const [contactEmail, setContactEmail] = useState<string>('');
    const [contactDescription, setContactDescription] = useState<string>('');
    const [submitButtonPressed, setSubmitButtonPressed] = useState<boolean>(false);
    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

    return (
        <AppCtx.Provider
            value={{
                homePageDoorOpen,
                setHomePageDoorOpen,
                preferredPhone,
                setPreferredPhone,
                preferredEmail,
                setPreferredEmail,
                preferredText,
                setPreferredText,
                contactName,
                setContactName,
                contactPhone,
                setContactPhone,
                contactEmail,
                setContactEmail,
                contactDescription,
                setContactDescription,
                submitButtonPressed,
                setSubmitButtonPressed,
                formSubmitted,
                setFormSubmitted
            }}
        >
            {children}
        </AppCtx.Provider>
    );
};

export default Context;
