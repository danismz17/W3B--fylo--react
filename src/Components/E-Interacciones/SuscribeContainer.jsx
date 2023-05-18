// import { useState } from "react";

// export const SuscribeContainer = () => {
//     const [email, setEmail] = useState("");
//     const [errorMessage, setErrorMessage] = useState("");
//     const [successMessage, setSuccessMessage] = useState("");
//     const [inputClass, setInputClass] = useState("");

//     const actualizarInput = () => {
//         setSuccessMessage("");
//         setErrorMessage("");
//     }

//     const handleInputChange = (event) => {
//         setEmail(event.target.value);
//     };

//     const handleSubmit = () => {
//         const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

//         if (!emailRegex.test(email)) {
//             setErrorMessage("wrong format, please check");
//             setSuccessMessage("");
//             setInputClass("suscribe-container-input-error");
//         } else {
//             setSuccessMessage("success subscription");
//             setErrorMessage("");
//             setInputClass("");
//         }
//     };

//     return (
//         <>
//             <div className="suscribe-container">
//                 <h2>Get early Access today</h2>
//                 <p>
//                     It only takes a minute to sign up and our free starter tier is
//                     extremely generous. If you have any questions, our support team would
//                     be happy to help you.
//                 </p>
//                 <div className="box-container">
//                     <input
//                         type="email"
//                         placeholder="email@example.com"
//                         value={email}
//                         onChange={handleInputChange} 
//                         onKeyUp={actualizarInput}
//                         className="suscribe-container-input error-inp"
//                     />
//                     <button className="formato-boton" onClick={handleSubmit}>
//                         Get Started For Free
//                     </button>
//                     <div className="box-error">
//                         <p id="mensajeERROR" className="mensajeERROR">
//                             {errorMessage}
//                         </p>
//                         <p id="mensajeSUCCESS" className="mensajeSUCCESS">
//                             {successMessage}
//                         </p>
//                     </div>
//                 </div>
//             </div>


//         </>
//     );
// };


import { useState } from "react";

export const SuscribeContainer = () => {
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [hasError, setHasError] = useState(false);

    const actualizarInput = () => {
        setSuccessMessage("");
        setErrorMessage("");
        setHasError(false);
    };

    const handleInputChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = () => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

        if (!emailRegex.test(email)) {
            setErrorMessage("Wrong format, please check");
            setSuccessMessage("");
            setHasError(true);
        } else {
            setSuccessMessage("Success subscription");
            setErrorMessage("");
            setHasError(false);
        }
    };

    return (
        <>
            <div className="suscribe-container">
                <h2>Get early Access today</h2>
                <p>
                    It only takes a minute to sign up and our free starter tier is
                    extremely generous. If you have any questions, our support team would
                    be happy to help you.
                </p>
                <div className="box-container">
                    <input
                        type="email"
                        placeholder="email@example.com"
                        value={email}
                        onChange={handleInputChange}
                        onKeyUp={actualizarInput}
                        className={`suscribe-container-input ${hasError ? "error-inp" : ""
                            }`}
                    />
                    <button className="formato-boton" onClick={handleSubmit}>
                        Get Started For Free
                    </button>
                    <div className="box-error">
                        <p id="mensajeERROR" className="mensajeERROR">
                            {errorMessage}
                        </p>
                        <p id="mensajeSUCCESS" className="mensajeSUCCESS">
                            {successMessage}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
