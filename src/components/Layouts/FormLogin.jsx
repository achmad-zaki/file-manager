import { Button, Form, Input } from "antd"

const FormLogin = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            layout="vertical"
        >
            <Form.Item
                htmlFor="email"
                name="email"
                label="Email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your email!'
                    }
                ]}
            >
                <Input className="py-2" placeholder="Enter your email" />
            </Form.Item>
            <Form.Item
                htmlFor="password"
                name="password"
                label="Password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!'
                    }
                ]}
            >
                <Input.Password className="py-2" placeholder="Enter your password" />
            </Form.Item>
            <Button htmlType="submit" type="primary" size="large" className="bg-blue-500 w-full mt-3 font-medium">Login</Button>
        </Form>
    )
}

export default FormLogin