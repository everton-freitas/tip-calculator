import { Controller } from "react-hook-form";
import { InputContainer, Container, ErrorMessage } from "./styles";

const Input = ({name, control, rules, placeholder, type = 'text'}) => {
    return (
        <Controller 
            name={name}
            control={control}
            rules={rules}
            render={({ field, fieldState: { error } }) => (
                <Container>
                    <InputContainer {...field} type={type} placeholder={placeholder} />
                    {error && <ErrorMessage>{error.message}</ErrorMessage>}
                </Container>
            )}
        /> 
    );
};

export { Input };