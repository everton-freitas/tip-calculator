import { useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Content, ContentText, LoginContainer, Title, Form, TextA } from "./styles";
import { StyledLink } from "../Registro/styles";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";


const Login = () => {

    const { control, handleSubmit } = useForm();
    const navigate = useNavigate()
    
    const onSubmit = async (data) => {
        try {
            const response = await fetch(`http://localhost:3000/users?email=${data.email}&password=${data.password}`)
            const users = await response.json();
            if (users.length > 0) {
                // console.log('login bem sucedido: ', users[0])
                alert('Login realizado com sucesso!')
                navigate('/inicio')
            } else {
                alert('Email ou senha incorretos!')
            }

        } catch (err) {
            console.error('Erro ao conectar com a API:', err)
        }
    };

    


    return (
        <>
        <Content>
            <LoginContainer>
                <Title>Login</Title>
                <Form onSubmit={handleSubmit(onSubmit)}>

                    <Input
                        placeholder="Digite seu Email"
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
                        placeholder="Digite sua senha"
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

                        <TextA>Esqueceu sua senha?</TextA>
                        <TextA><StyledLink to='/registro'>Cadastre-se</StyledLink></TextA>

                    </ContentText>

                    <Button type="submit" title="Entrar"></Button>

                </Form>
            </LoginContainer>
        </Content>
        </>

    )
};

export default Login;