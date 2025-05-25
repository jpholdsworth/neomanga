export default function Pagination({ index, pageCount, handleSetIndex }) {
    return (
        <div className="index-nav">
            <button disabled={ index === 0 } onClick={() => handleSetIndex(index - 1)}>&#8882;</button>
            {[...Array(pageCount)].map((_, i) => <div key={i} className={'idx-btn' + (index === i ? ' active' : '')} onClick={() => handleSetIndex(i)}>{i + 1}</div>)}
            <button disabled={ index === pageCount - 1 } onClick={() => handleSetIndex(index + 1)}>&#8883;</button>
        </div>
    );
}