import { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"

const InputPassword = ({ className, name, placeholder }) => {
    const [showPassword, setShowPassword] = useState(false)
    const handleShowPassword = (e) => {
        e.preventDefault()
        setShowPassword(!showPassword)
    }
    return (
        <div className="relative">
            <input type={showPassword ? "text" : "password"} name={name} placeholder={placeholder} className={className} />
            <button className="absolute right-3 top-3" onClick={handleShowPassword}>{showPassword ? <AiOutlineEye className="text-gray-500" size={20} /> : <AiOutlineEyeInvisible className="text-gray-500" size={20} />}</button>
        </div>
    )
}

export default InputPassword