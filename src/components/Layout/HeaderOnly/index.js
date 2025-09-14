import Header from '../DefaultLayout/Header';

export default function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div>
                <div>{ children }</div>
            </div>
        </div>
    )
}