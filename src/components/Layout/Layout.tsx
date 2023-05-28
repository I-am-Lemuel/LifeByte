import Header from './Header/Header';
import Navbar from './Navbar/Navbar';

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Navbar />
        </>
    );
};

export default Layout;
