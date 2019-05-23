import React from "react";
import "font-awesome/css/font-awesome.min.css";

import {
  Container,
  ServiceHeader,
  ServiceTitle,
  ServiceIcon,
  Description,
  ButtonGroup,
  ServiceButton,
  GithubButton,
  ButtonIcon
} from "./styles";
import {DigitDesign, DigitText, DigitButton, DigitFormField, DigitTextField, DigitLayout} from "@cthit/react-digit-components";

export const Service = ({
  title,
  url,
  description,
  github_url,
  fontawesome_icon
}) => (
    <DigitDesign.Card absWidth="400px" absHeight="300px">
      <DigitDesign.CardBody>
        <DigitLayout.Row>
          <ServiceIcon className={"fa " + fontawesome_icon} />
          <DigitText.Title text={title} />
        </DigitLayout.Row>
        <Description>{description}</Description>

      </DigitDesign.CardBody>
    </DigitDesign.Card>
);
