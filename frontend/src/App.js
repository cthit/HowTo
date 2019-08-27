import React, { Component } from "react";
import "./App.css";
import HomeScreen from "./components/screens/homeScreen/index";
import data from "./wikis.json";
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
                <HomeScreen services={data} />
                <DigitDialog></DigitDialog>
            </DigitProviders>
        );
    }
}

export default App;
