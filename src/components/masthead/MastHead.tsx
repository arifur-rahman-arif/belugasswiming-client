import styles from './styles/MastHead.module.scss';
import LeftDoor from './LeftDoor';
import RightDoor from './RightDoor';
import MastHeadPortfolio from './MastHeadPortfolio';
import { AppContextInterface, AppCtx } from '@/context/Context';
import { useContext } from 'react';

/**
 * Masthead component
 *
 * @returns {*}  {JSX.Element}
 */
const MastHead = (): JSX.Element => {
    const appCtx: AppContextInterface | null = useContext(AppCtx);

    return (
        <>
            <div
                className={`absolute left-0 top-0 z-20 grid h-screen w-full overflow-hidden md:grid-cols-2 ${
                    styles.masthead
                } ${(appCtx?.homePageDoorOpen && styles.mastheadOpen) || ''} ${
                    appCtx?.homePageDoorOpen && 'pointer-events-none'
                }`}
            >
                <LeftDoor />
                <RightDoor />
            </div>

            <MastHeadPortfolio />
        </>
    );
};

export default MastHead;
