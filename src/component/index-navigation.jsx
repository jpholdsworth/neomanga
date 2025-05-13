export default function IndexNavigation({ index, maxIndex, changeIndexFn }) {
    return (
        <div className="index-nav">
            <button disabled={index ? false : true} onClick={() => changeIndexFn(index - 1)}>&#8882;</button>
                {[...Array(maxIndex + 1)].map((_, i) => <div key={i} className={'idx-btn' + (index === i ? ' active' : '')} onClick={() => changeIndexFn(i)}>{i + 1}</div>)}
                <button disabled={index !== maxIndex ? false : true} onClick={() => changeIndexFn(index + 1)}>&#8883;</button>
        </div>
    );
}