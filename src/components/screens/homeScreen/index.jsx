import React, { Component } from "react";
import Service from "../../elements/service/index";
import { DetailedView } from "../../elements/detailedView/index";
import { Container, ServiceContainer, Content } from "./styles";
import { Header } from "../../views/header/index";
import { Footer } from "../../views/footer/index";
import data from "../../../wikis.json";
import { DigitLayout, DigitHeader } from "@cthit/react-digit-components";
import Tutorial from "../../elements/tutorial/tutorial"

class HomeScreen extends Component {
  render() {
    const tutorials = data.wikis.map( tutorial =>  <Service {...tutorial}/> );

    return (
      <DigitHeader
        text="Example"
        title="Swag"
        renderMain={() => (
          <DigitLayout.Grid>
            {tutorials}
          </DigitLayout.Grid>
        )}
      />
    );
  }
}

export default HomeScreen;
