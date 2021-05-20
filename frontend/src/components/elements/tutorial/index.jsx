import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { TutorialIcon } from "./styles";
import { everything } from "../../../descriptions/everything";
import {
    DigitDesign,
    DigitText,
    DigitLayout,
    DigitMarkdown,
    useDigitCustomDialog,
} from "@cthit/react-digit-components";

const Service = ({
    title,
    description,
    detailedDescriptionName,
    fontawesome_icon,
}) => {
    const [openDialog] = useDigitCustomDialog({
        title: "",
    });
    return (
        <DigitDesign.Card size={{ width: "400px", height: "200px" }}>
            <DigitDesign.CardBody
                style={{ cursor: "pointer" }}
                onClick={() => {
                    openDialog({
                        renderButtons: () => null,
                        renderMain: () => (
                            <>
                                <DigitLayout.Row>
                                    <TutorialIcon
                                        className={"fa " + fontawesome_icon}
                                    />
                                    <DigitText.Heading5 text={title} />
                                </DigitLayout.Row>
                                <DigitMarkdown
                                    markdownSource={
                                        everything[detailedDescriptionName]
                                    }
                                />
                            </>
                        ),
                    });
                }}
            >
                <DigitLayout.Row>
                    <TutorialIcon className={"fa " + fontawesome_icon} />
                    <DigitText.Title text={title} />
                </DigitLayout.Row>
                <DigitMarkdown markdownSource={description} />
            </DigitDesign.CardBody>
        </DigitDesign.Card>
    );
};

export default Service;
