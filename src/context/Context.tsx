import { useState, createContext, Dispatch, SetStateAction } from 'react';

export interface AppContextInterface {
    homePageDoorOpen: boolean;
    setHomePageDoorOpen: Dispatch<SetStateAction<boolean>>;
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

    return (
        <AppCtx.Provider
            value={{
                homePageDoorOpen,
                setHomePageDoorOpen
            }}
        >
            {children}
        </AppCtx.Provider>
    );
};

export default Context;
