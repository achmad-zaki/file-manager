import FormGroup from "../Form/FormGroup"
import Label from "../Form/Label"
import Input from "../Form/Input"
import InputPassword from "../Form/InputPassword"
import Button from "../Button/Button"

const FormRegister = () => {
    return (
        <form action="#">
            <FormGroup>
                <Label className="form-label mb-2">Username</Label>
                <Input
                    className="form-input"
                    placeholder="Enter your username"
                    type="text"
                    name="username"
                />
            </FormGroup>
            <FormGroup className="mt-4">
                <Label className="form-label mb-2">Email</Label>
                <Input
                    className="form-input"
                    placeholder="Enter your email"
                    type="text"
                    name="email"
                />
            </FormGroup>
            <FormGroup className="mt-4">
                <Label className="form-label mb-2">Password</Label>
                <InputPassword
                    className="form-input"
                    placeholder="Enter your password"
                    name="password"
                />
            </FormGroup>
            <Button type="submit" className="btn-primary">Register</Button>
        </form>
    )
}

export default FormRegister