import {createContext, useContext, useState} from 'react'
const AuthContext = createContext();

export default function AuthStorage({children}) {
    const date = new Date();
    const currentDate = date.toISOString().split('T')[0];
    const [posts, setPosts] = useState("");
    const [formData, setFormData] = useState({position: "", ensemble: "", location: "", deadline: currentDate, audDate: currentDate, website: ""})
    const [errors, setErrors] = useState({position: "", ensemble: "", location: "", deadline: "", audDate: "", website: "", form:""});
    const [showMenu, setShowMenu] = useState(false);


    return (
        <AuthContext.Provider
            value={{
                posts,
                setPosts,
                formData,
                setFormData,
                errors,
                setErrors,
                showMenu,
                setShowMenu
            }}>
                {children}
        </AuthContext.Provider>
    )
}

export function useAuthContext() {
    return useContext(AuthContext);
}