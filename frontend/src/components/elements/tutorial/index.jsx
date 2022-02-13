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
    DigitButton
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
        <DigitDesign.Card size={{ width: "400px" }}>
            <DigitDesign.CardBody
                style={{ cursor: "pointer" }}
                onClick={() => {
                    openDialog({
                        renderButtons: (_, cancel) => (
                            <DigitButton text="Close" onClick={cancel} />
                        ),
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
                <DigitLayout.Column flex="1" justifyContent="space-between">
                    <DigitLayout.Row>
                        <TutorialIcon className={"fa " + fontawesome_icon} />
                        <DigitText.Title text={title} />
                    </DigitLayout.Row>
                    <DigitMarkdown markdownSource={description} />
                    <DigitButton text="Open" />
                </DigitLayout.Column>
            </DigitDesign.CardBody>
        </DigitDesign.Card>
    );
};

export default Service;
