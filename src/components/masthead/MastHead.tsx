import { useContext, useEffect } from 'react';
import styles from './styles/MastHead.module.scss';
import LeftDoor from './LeftDoor';
import { AppContextInterface, AppCtx } from '../../context/Context';
import RightDoor from './RightDoor';
import MastHeadPortfolio from './MastHeadPortfolio';

/**
 * Masthead component
 *
 * @returns {*}  {JSX.Element}
 */
const MastHead = (): JSX.Element => {
    const appCtx: AppContextInterface | null = useContext(AppCtx);

    /**
     * Open the page door. If its opened already then don't change the state of the door anymore
     */
    const openDoor = () => {
        if (appCtx?.homePageDoorOpen) return;

        appCtx?.setHomePageDoorOpen(true);
        const body = document.querySelector('body');
        body?.classList.remove('overflow-hidden');
        body?.classList.add('overflow-visible');
    };

    useEffect(() => {
        document.querySelector('body')?.classList.add('overflow-hidden');
    }, []);

    return (
        <>
            <div
                className={`absolute left-0 top-0 z-10 grid h-screen w-full overflow-hidden md:grid-cols-2 ${
                    styles.masthead
                } ${(appCtx?.homePageDoorOpen && styles.mastheadOpen) || ''} ${
                    appCtx?.homePageDoorOpen && 'pointer-events-none'
                }`}
                onClick={openDoor}
            >
                <LeftDoor />
                <RightDoor />
            </div>

            <MastHeadPortfolio />
        </>
    );
};

export default MastHead;
