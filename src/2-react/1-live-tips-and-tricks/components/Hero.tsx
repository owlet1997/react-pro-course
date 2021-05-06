/* Icons */
import { icons } from '../theme/icons/tag';

const nextJs = 'Next.js'
export const Hero = () => {
    return (
        <section className='hero'>
            <div className='title'>
                <h1>Типсы и Триксы</h1>
                <h2>Все темы</h2>
            </div>

            <div className='tags'>

                <span>
                    <icons.React /> React
                </span>
                <span>
                    <icons.TypeScript /> TypeScript
                </span>
                <span>
                    <icons.JavaScript /> JavaScript
                </span>
                <span>
                    <icons.VSCode /> VSCode
                </span>
                <span>
                    <icons.CSS /> CSS
                </span>
                <span>
                    <icons.GraphQL /> GraphQL
                </span>
                <span>
                    <icons.Testing /> Testing
                </span>
                <span>
                    <icons.Npm /> Npm
                </span>
                <span>
                    <icons.Git /> Git
                </span>
                <span>
                    <icons.Tools /> Tools
                </span>
                <span>
                    <icons.NextJS /> Next.js
                </span>
                <span>
                    <icons.NodeJS /> Node.js
                </span>
                <span>
                    <icons.UI_UX /> UI/UX
                </span>
            </div>
        </section>
    )
};
