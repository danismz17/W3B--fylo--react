import { Logo } from "../A-Header/Logo"
import { Contacto } from "./Contacto"
import { DescripcionFooter } from "./DescripcionFooter"
import { FooterNav } from "./FooterNav"
import { Social } from "./Social"

export const Footer = () => {
    return (
        <>
            <footer className='footer-container'>
                <div className="footer-logo-container">
                    <Logo></Logo>
                </div>

                <div className="footer-info-container">
                    <div className="footer-text-container">
                        <DescripcionFooter></DescripcionFooter>
                    </div>

                    <div className="footer-contact-container">
                        <Contacto></Contacto>
                    </div>

                    <div className='footer-nav-container'>
                        <FooterNav></FooterNav>
                    </div>

                    <div className="footer-social-container">
                        <Social></Social>

                    </div>

                </div>
            </footer>
        </>
    )
}