import AuthLayouts from '../components/Layouts/AuthLayouts'
import FormLogin from '../components/Layouts/FormLogin'

const Login = () => {
    return (
        <AuthLayouts type="login">
            <FormLogin />
        </AuthLayouts>
    )
}

export default Login