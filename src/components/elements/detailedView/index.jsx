import React, { Component } from "react";
import data from "../../../wikis.json";
import "./styling.css";
import { DigitText, DigitImage, DigitLayout, DigitDialog } from "@cthit/react-digit-components";
import Tutorial from "../../elements/tutorial/tutorial"
import { BigDiv, Dialog, LightBox, HeaderDiv } from "./styles"

export const DetailedView = ({
  title,
  description,
  fontawesome_icon
}) => (
    <LightBox>
      <Dialog>
        <DigitLayout.Row>
          <DigitImage class="image1" backgroundColor="#09cdda" src={fontawesome_icon}/>
          <DigitText.Title text={title} />
        </DigitLayout.Row>
        <DigitText.Text text={description}/>
      </Dialog>
    </LightBox>
);
