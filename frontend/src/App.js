import React, { Component } from "react";
import "./App.css";
import HomeScreen from "./components/screens/homeScreen/index";
import data from "./howtos.json";
import { DigitDialog, DigitProviders } from "@cthit/react-digit-components";

class App extends Component {
    render(
        preloadedState = {
            loading: true,
        }
    ) {
        return (
            <DigitProviders
                preloadedState={preloadedState}
                defaultLangauge="sv"
            >
                <DigitDialog/>
                <HomeScreen services={data} />

            </DigitProviders>
        );
    }
}

export default App;
