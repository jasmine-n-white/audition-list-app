import {createContext, useContext, useState} from 'react'
const AuthContext = createContext();

export default function AuthStorage({children}) {
    const [posts, setPosts] = useState("");
    const [formData, setFormData] = useState({position: "", ensemble: "", location: "", deadline: "", date: "", website: ""})
    const [errors, setErrors] = useState({position: "", ensemble: "", location: "", deadline: "", date: "", website: ""});

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