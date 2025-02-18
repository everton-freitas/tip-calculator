import { useForm } from "react-hook-form"
import { Input } from "../../components/Input"
import { Form, LoginContainer, Title, ContentText, Content } from "../Login/styles"
import { Button } from "../../components/Button"
import { StyledLink, Text } from "./styles"

const Registro = () => {

    const { control, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log('dados cadastrados: ', data)
    }

    return (
        <Content>
            <LoginContainer>
                <Title>Registro</Title>
                <Form onSubmit={handleSubmit(onSubmit)}>

                    <Input
                        placeholder="digite seu nome"
                        name='name'
                        control={control}
                        rules={{
                            required: 'O nome é obrigatório'
                        }}
                    />

                    <Input
                        placeholder="Digite seu email"
                        name='email'
                        control={control}
                        rules={{
                            required: 'O email e obrigatorio',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: 'Formato de email invalido'
                            }
                        }}
                    />

                    <Input
                        type="password"
                        placeholder='Digite sua senha'
                        name='password'
                        control={control}
                        rules={{
                            required: 'A senha e obrigatoria',
                            minLength: {
                                value: 6,
                                message: 'A senha deve conter no minimo 6 caracteres'
                            }
                        }}
                    />

                    <Input
                        type="password"
                        placeholder='Confirme sua senha'
                        name='confirm-password'
                        control={control}
                        rules={{
                            required: 'A confirmacao de senha e obrigatoria',
                            minLength: {
                                value: 6,
                                message: 'A senha deve conter no minimo 6 caracteres'
                            }
                        }}
                    />


                    <ContentText>
                        <Text>Já tem uma conta? <StyledLink to='/'>Faça login</StyledLink></Text>
                    </ContentText>

                    <Button title='Registrar' type='submit'></Button>
                </Form>
            </LoginContainer>
        </Content>

    )
}

export default Registro