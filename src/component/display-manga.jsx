export default function DisplayManga({ manga }) {
    return (
        <div>
            <div>
                {manga.slice(0, 12).map(obj => 
                    <div key={obj.id}>
                        <img src={obj.image} alt="" />
                    </div>
                )}
            </div>
        </div>
    );
}