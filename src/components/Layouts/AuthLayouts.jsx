import { Link } from "react-router-dom"

const AuthLayouts = ({ children, type }) => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="border bg-white w-5/6 md:w-1/2 lg:w-1/3 py-10 px-4 rounded-md shadow-2xl">
                <div className="mb-4">
                    <HeadingTitle type={type} />
                </div>
                {children}
                <Navigate type={type} />
            </div>
        </div>
    )
}

const HeadingTitle = ({ type }) => {
    if (type === "login") {
        return (
            <>
                <h1 className="text-3xl font-bold">Welcome Back! 👋</h1>
                <p className="text-sm font-normal text-gray-400 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, molestias?</p>
            </>
        )
    } else {
        return (
            <>
                <h1 className="text-3xl font-bold">Create an account.</h1>
                <p className="text-sm font-normal text-gray-400 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </>
        )
    }
}

const Navigate = ({ type }) => {
    if (type === "login") {
        return <p className="text-center mt-4">Don't have an account? <Link to="/register" className="text-blue-500 underline">Sign Up</Link></p>
    } else if (type === "register") {
        return <p className="text-center mt-4">Already have an account? <Link to="/" className="text-blue-500 underline">Sign In</Link></p>
    }
}

export default AuthLayouts