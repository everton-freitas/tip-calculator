import { Menu, StyledLink, Title } from "./styles"
import { HeaderContainer } from "./styles"
import { BsFillHouseFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";

const Header = () => {
    return (
        <HeaderContainer>
            <Title>TO-DO-LIST</Title>
            <Menu>
                
                <ul>
                    <li>
                        <StyledLink to='/inicio'>
                        <BsFillHouseFill size={24} color="currentColor" style={{marginRight: '10px'}} />
                            Inicio
                        </StyledLink>
                    </li>
                    <li>
                        <StyledLink to='/perfil'>
                            <BsFillPersonFill size={24} color="currentColor" style={{marginRight: '10px'}} />
                            Perfil
                        </StyledLink>
                    </li>
                    <li>
                        <StyledLink to='/'>
                            <BsXLg size={24} color="currentColor" style={{ stroke: "currentColor", strokeWidth: '1px', fill: "none", marginRight: '10px' }} />
                            Sair
                        </StyledLink>
                        
                    </li>
                </ul>
            </Menu>
        </HeaderContainer>
    )
}

export { Header }