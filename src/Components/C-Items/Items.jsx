import { Card } from "./card";
import Access from "../../Images/icons/icon-access-anywhere.svg";
import Security from "../../Images/icons/icon-security.svg";
import Collaborarion from "../../Images/icons/icon-collaboration.svg";
import Files from "../../Images/icons/icon-any-file.svg";

export const Items = () => {
    return (
        <>
            <section className='items-container'>
                <Card
                    Imagen={Access}
                    Titulo={"Access your files, anywhere"}
                    Descripcion={"The ability to use a smartphone, tablet, or computer to accces your account means your files follow you everywhere."}>
                </Card>

                <Card
                    Imagen={Security}
                    Titulo={"Security you can trust"}
                    Descripcion={"2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."}>
                </Card>

                <Card
                    Imagen={Collaborarion}
                    Titulo={"Real-time collaboration"}
                    Descripcion={"Securely share files and folders with friends, family and colleagues for live collaboration. No email attachements required."}>
                </Card>

                <Card
                    Imagen={Files}
                    Titulo={"Store any type of file"}
                    Descripcion={"Whether you're sharing holiday photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."}>
                </Card>
            </section>

        </>
    )
}