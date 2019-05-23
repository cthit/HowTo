import React, { Component } from "react";
import { Service } from "../../elements/service/index";
import { DetailedView } from "../../elements/detailedView/index";
import { Container, ServiceContainer, Content } from "./styles";
import { Header } from "../../views/header/index";
import { Footer } from "../../views/footer/index";
import data from "../../../wikis.json";
import { DigitLayout, DigitHeader, DigitProviders } from "@cthit/react-digit-components";
import Tutorial from "../../elements/tutorial/tutorial"

class HomeScreen extends Component {
  render() {
    const tutorials = data.wikis.map( tutorial =>  <Service {...tutorial}/> );


    return (

        <DigitProviders
            preloadedState={{
              loading: true
            }}
            defaultLangauge="sv"
        >
          <DigitHeader
              text="Example"
              title="Swag"
              renderMain={() => (
                  <DigitLayout.Grid>
                  {tutorials}
                  <DetailedView title={"Title"} description={"desc"} fontawesome_icon={"icon"}/>
                  </DigitLayout.Grid>
              )}
          />
        </DigitProviders>
    );
  }
}

export default HomeScreen;
