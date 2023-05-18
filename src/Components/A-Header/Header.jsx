import { Logo } from "./Logo";
import { Nav } from './Nav';

export const Header = () => {
    return (
        <>
        <div className="header-background">
            <header className='header-container'>
                <Logo></Logo>
                <Nav></Nav>
            </header>
        </div>
        </>
    )
}