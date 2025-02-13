import { Controller } from "react-hook-form";
import { InputContainer, Container } from "./styles";

const Input = ({name, control, rules, placeholder, type = 'text'}) => {
    return (
        <Controller 
            name={name}
            control={control}
            rules={rules}
            render={({ field, fieldState: { error } }) => (
                <Container>
                    <InputContainer {...field} type={type} placeholder={placeholder} />
                    {error && <p style={{ color: "red"}}>{error.message}</p>}
                </Container>
            )}
        /> 
    );
};

export { Input };