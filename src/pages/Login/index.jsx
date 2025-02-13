import { useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Content, Text, ContentText, LoginContainer, Title, Form } from "./styles";


const Login = () => {

    const { control, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log('Dados enviados: ', data)
    };

    return (
        <Content>
            <LoginContainer>
                <Title>Login</Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
            
                    <Input
                        placeholder="Email"
                        name="email"
                        control={control}
                        rules={{
                            required: 'O email é obrigatório',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: 'Formato de email inválido'
                            }
                        }}
                     />
                    <Input
                        type="password"
                        placeholder="Senha"
                        name="password"
                        control={control}
                        rules={{
                            required: "A senha é obrigatoria",
                            minLength: {
                                value: 6,
                                message: 'A senha deve ter no minimo 6 caracteres'
                            }
                        }}
                     />
            
                <ContentText>
            
                    <Text>Esqueceu sua senha?</Text>
                    <Text>Cadastre-se</Text>
            
                </ContentText>
            
                <Button type="submit">Entrar</Button>
            
                </Form>
            </LoginContainer>
        </Content>
    )
};

export default Login;