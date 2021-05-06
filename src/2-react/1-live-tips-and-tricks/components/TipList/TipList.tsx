/* Data */
import tips from '../../mock-data/tips.json';

/* Instruments */
import { formatDate, getTagIcon } from '../../helpers';
import {Tip} from '../Tip';

export const TipList: React.FC = () => {
    const tipsJSX = tips?.map((tip) => {
        const TagIcon = getTagIcon(tip.tag.name);

        return (
            <article key={tip.id}>
                <header>
                    <TagIcon/> <h1>{tip.title}</h1>
                </header>

                <main>
                    <time>
                        <TagIcon/>

                        <div>
                            <span>🚀 {formatDate(tip.created)}</span>
                            <span>👨🏼‍🚀 Автор: {tip.author}</span>
                        </div>
                    </time>

                    <h2>{tip.title}</h2>
                    <p>{tip.preview}</p>
                </main>

                <footer>
                    <p>📖 &nbsp;Читать полностью &rarr;</p>
                </footer>
            </article>
        );
    });

    return (
        <section className='tip-list'>
            {/*{tipsJSX}*/}
            <Tip/>
            <Tip/>
            <Tip/>
            <Tip/>
            <Tip/>
            <Tip/>
            <Tip/>
            <Tip/>
            <Tip/>
        </section>
    );
};
