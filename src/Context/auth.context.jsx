import {createContext, useContext, useState} from 'react'
const AuthContext = createContext();

export default function AuthStorage({children}) {
    const utc = new Date();
    const offset = utc.getTimezoneOffset();
    const date = new Date(utc.getTime() + offset * 60000);
    const currentDate = date.toISOString().split('T')[0];
    const [posts, setPosts] = useState("");
    const [formData, setFormData] = useState({position: "", ensemble: "", location: "", deadline: currentDate, audDate: currentDate, website: ""})
    const [errors, setErrors] = useState({position: "", ensemble: "", location: "", deadline: "", audDate: "", website: "", form:""});

    return (
        <AuthContext.Provider
            value={{
                posts,
                setPosts,
                formData,
                setFormData,
                errors,
                setErrors
            }}>
                {children}
        </AuthContext.Provider>
    )
}

export function useAuthContext() {
    return useContext(AuthContext);
}