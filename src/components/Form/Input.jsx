const Input = ({ type, name, placeholder, className }) => {
    return (
        <input
            className={className}
            placeholder={placeholder}
            name={name}
            type={type}
        />
    )
}

export default Input