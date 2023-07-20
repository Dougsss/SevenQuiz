import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        const userToken = localStorage.getItem("user_token");
        const usersStorage = localStorage.getItem("users_bd");

        if (userToken && usersStorage) {
            const hasUser = JSON.parse(usersStorage)?.filter(
                (user) => user.email === JSON.parse(userToken).email
            );

            if (hasUser) setUser(hasUser[0]);
        }
    }, []);

    //Essa função é responsável por autenticar o usuário comparando o email e a senha fornecidos com os dados armazenados no localStorage.
    const signin = (email, password) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_bd"));
        const hasUser = usersStorage?.filter((user) => user.email === email); 

        if (hasUser?.length){
            if (hasUser[0].email === email && hasUser[0].password === password) {
                const token = Math.random().toString(36).substring(2);
                localStorage.setItem("user_token", JSON.stringify({ email, token }));
                setUser({ email, password });
                return;
            }else {
                return "E-mail ou senha incorretos";
            }
        } else {
            return "Usuário não cadastrado";
        }
    };

    // Essa função é responsável por criar uma nova conta de usuário, armazenando o email e a senha no armazenamento local do navegador.
    const signup = (email, password) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_bd"));
    
        const hasUser = usersStorage?.filter((user) => user.email === email);
    
        if (hasUser?.length) {
            return "Já tem uma conta com esse E-mail";
        }
    
        let newUser;
    
        if (usersStorage) {
            newUser = [...usersStorage, { email, password }];
        } else {
            newUser = [{ email, password }];
        }
    
        localStorage.setItem("users_bd", JSON.stringify(newUser));
    
        return;
    };

    const signout = () => {
        setUser(null);
        localStorage.removeItem("user_token");
    };

    return (
        <AuthContext.Provider
            value={{ user, signed: !!user, signin, signup, signout }}
        >
            {children}
        </AuthContext.Provider>
    );
};