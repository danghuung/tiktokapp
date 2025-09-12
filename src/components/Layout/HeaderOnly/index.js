import Header from '../DefaultLayout/Header';

export default function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div>
                <div>{ children }</div>
            </div>
        </div>
    )
}