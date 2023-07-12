const Button = ({ children, className, type }) => {
  return (
    <button type={type} className={`btn ${className}`}>{children}</button>
  )
}

export default Button