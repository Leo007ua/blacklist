import { iconsSize } from "components/Icon/iconSize";
import { StyledFooter, FooterText, FooterLink } from "./AppFooterStyled";
import { BsGithub } from "react-icons/bs";

export function AppFooter() {
    return (
        <StyledFooter>
            <FooterText>
                &copy; {new Date().getFullYear()} Developed by
            </FooterText>
            <FooterLink
                href="https://github.com/Leo007ua/goit-react-hw-08-phonebook"
                target="_blank"
                rel="noopener noreferrer"
                title="Github"
                aria-label="Link to Github profile"
            >
                Leo <BsGithub size={iconsSize.small} />
            </FooterLink>
        </StyledFooter>
    );
}