import { CardOpiniones } from "./CardOpiniones"
import FotoPerfil1 from "../../Images/images/profile-1.jpg";
import FotoPerfil2 from "../../Images/images/profile-2.jpg";
import FotoPerfil3 from "../../Images/images/profile-3.jpg";
import { SuscribeContainer } from "./SuscribeContainer";

export const Interactions = () => {
    return (
        <>
            <section className='interactions-containers'>

                <div className='opinions-container'>

                    <CardOpiniones
                        Frase={"Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."}
                        Foto={FotoPerfil1}
                        Nombre={"Satish Patel"}
                        Compania={"Founder & CEO Huddle"}>
                    </CardOpiniones>
                    
                    <CardOpiniones
                        Frase={"Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."}
                        Foto={FotoPerfil2}
                        Nombre={"Bruce McKenzie"}
                        Compania={"Founder & CEO Huddle"}>
                    </CardOpiniones>
                    
                    <CardOpiniones
                        Frase={"Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."}
                        Foto={FotoPerfil3}
                        Nombre={"Iva Boyd"}
                        Compania={"Founder & CEO Huddle"}>
                    </CardOpiniones>


                </div>
                <SuscribeContainer></SuscribeContainer>

            </section>

        </>
    )
}