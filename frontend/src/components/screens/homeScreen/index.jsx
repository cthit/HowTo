import React, { Component } from "react";
import Service from "../../elements/tutorial/index";
import data from "../../../howtos.json";
import { DigitLayout, DigitHeader } from "@cthit/react-digit-components";

const gridStyle = {
    marginLeft: "2vw",
    marginRight: "2vw",
    marginTop: "20px",
    width: "95vw",
};

class HomeScreen extends Component {
    render() {
        const tutorials = data.howtos.map(tutorial => (
            <Service {...tutorial} />
        ));
        return (
            <DigitHeader
                title="HowTo"
                renderMain={() => (
                    <div style={gridStyle}>
                        <DigitLayout.UniformGrid
                            margin="5px"
                            minItemWidth="400px"
                            justifyItems="center"
                        >
                            {tutorials}
                        </DigitLayout.UniformGrid>
                    </div>
                )}
            />
        );
    }
}

export default HomeScreen;
