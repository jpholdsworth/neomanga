import { useState } from "react";

export default function DisplayManga({ manga }) {
    const [index, setIndex] = useState(0);

    const maxIndex = Math.floor(manga.length / 12);
    const sectionIndex = index * 12;

    return (
        <div>
            <div>
                {manga.slice(sectionIndex, sectionIndex + 12).map(obj => 
                    <div key={obj.id}>
                        <img src={obj.image} alt="" />
                    </div>
                )}
            </div>
            <div>
                <button disabled={index ? false : true} onClick={() => setIndex(index - 1)}>&#8882;</button>
                <div>
                    {[...Array(maxIndex + 1)].map((_, i) => <div onClick={() => setIndex(i)}>{i + 1}</div>)}
                </div>
                <button disabled={index !== maxIndex ? false : true} onClick={() => setIndex(index + 1)}>&#8883;</button>
            </div>
        </div>
    );
}