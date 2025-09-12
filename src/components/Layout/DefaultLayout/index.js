import Header from './Header';
import Sidebar from './Sidebar';

export default function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div>
                <Sidebar />
                <div>
                    { children }
                </div>
            </div>
        </div>
    )
}