import React, { Component } from "react";
import { Service } from "../../elements/tutorial/index";
import data from "../../../wikis.json";
import { DigitLayout, DigitHeader } from "@cthit/react-digit-components";

const gridStyle = {
    marginLeft: "2.5vw",
    marginRight: "2.5vw",
    marginTop: "20px",
    width: "95vw",
};

class HomeScreen extends Component {
    render() {
        const tutorials = data.wikis.map(tutorial => <Service {...tutorial} />);
        return (
            <DigitHeader
                title="HowTo"
                renderMain={() => (
                    <div style={gridStyle}>
                        <DigitLayout.UniformGrid
                            margin="5vw"
                            minItemWidth="20vw"
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
