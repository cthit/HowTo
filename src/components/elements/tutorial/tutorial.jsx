import {
    ButtonGroup, ButtonIcon,
    Container,
    Description,
    ServiceButton,
    ServiceHeader,
    ServiceIcon,
    ServiceTitle
} from "../service/styles";
import React from "react";
import { DigitText } from "@cthit/react-digit-components";

const Tutorial = ({
                            title,
                            description,
                            icon
                        }) => (
    <Container>
        <ServiceHeader>
            <ServiceIcon className={"fa " + icon} />
            <DigitText.Title text={title}/>
        </ServiceHeader>

        <Description>{description}</Description>
    </Container>
);

export default Tutorial;