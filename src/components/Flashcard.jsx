
const Flashcard = (props) => {
    return(
        <div className="card-scene" onClick={props.onFlip}>
            <div className={`card ${props.isFlipped ? 'is-flipped' : ''}`}>
                <div className="card-face card-front">
                    <h1>{props.question}</h1>
                </div>
                <div className="card-face card-back">
                    <h1>{props.answer}</h1>
                </div>
            </div>
        </div>
        
    )
}

export default Flashcard;

