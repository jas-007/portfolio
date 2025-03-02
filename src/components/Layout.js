import ThemeToggle from './ThemeToggle';

const Layout = ({ children }) => {
    return (
        <>
            <ThemeToggle />
            {children}
        </>
    );
}; 