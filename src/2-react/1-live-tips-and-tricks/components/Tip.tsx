import {formatDate, getTagIcon} from '../helpers';
import tips from '../mock-data/tips.json';

export const Tip = () => {
    const tip = tips[0]

    let ex : TipModel = {
        title : tip.title,
        id : tip.id,
        tag : tip.tag,
        author : tip.author,
        body : tip.body,
        created : tip.created,
        preview : tip.preview
    };

    const TagIcon = getTagIcon(ex.tag.name);

    return (
        <article key={ex.id}>
            <header>
                <TagIcon/> <h1>{ex.title}</h1>
            </header>

            <main>
                <time>
                    <TagIcon/>

                    <div>
                        <span>๐ {formatDate(ex.created)}</span>
                        <span>๐จ๐ผโ๐ ะะฒัะพั: {ex.author}</span>
                    </div>
                </time>

                <h2>{ex.title}</h2>
                <p>{ex.preview}</p>
            </main>

            <footer>
                <p>๐ &nbsp;ะงะธัะฐัั ะฟะพะปะฝะพัััั &rarr;</p>
            </footer>
        </article>
    )
}
