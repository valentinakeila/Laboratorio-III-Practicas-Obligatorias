import { useState } from "react";

const Login = () => {
    const [userNameInput, setUserNameInput] = useState("");

    const onChangeHandler = (event) => {
        const inputContent = event.target.value;
        setUserNameInput(inputContent);

        
        if (inputContent.toLowerCase().includes("o")) {
            alert("Por favor, ¡Nombres de usuario sin la letra o!");
            setUserNameInput("");
        }
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (userNameInput === "" || userNameInput.toLowerCase().includes("o")) {
            alert("Usuario inválido para registrarse");
            setUserNameInput("");
        } else {
            alert("¡Usuario registrado correctamente!");
            setUserNameInput("");
        }
    };

    return (
        <>
            <div>
                <div>
                    <form onSubmit={onSubmitHandler}>
                        <div >
                            <label className="form-label">Nombre de Usuario:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Username"
                                value={userNameInput}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <button type="submit" className="button">Registrarse</button>
                    </form>
                </div>
            </div>
            <p>{userNameInput}</p>
        </>
    );
};

export default Login;