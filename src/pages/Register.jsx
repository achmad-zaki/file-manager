import React from 'react'
import AuthPages from '../components/Layouts/AuthLayouts'
import FormRegister from '../components/Layouts/FormRegister'

const Register = () => {
    return (
        <AuthPages type="register">
            <FormRegister />
        </AuthPages>
    )
}

export default Register