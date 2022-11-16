interface PropInterface {
    index: number;
}

/**
 * Individual slider card
 *
 * @param {PropInterface} { index }
 * @returns {*}
 */
const SliderCard = ({ index }: PropInterface) => {
    return (
        // Outline outline-2 outline-red
        <div className="h-full w-full flex-grow shadow-shadow1">
            <h1>asdf {index}</h1>
        </div>
    );
};

export default SliderCard;
