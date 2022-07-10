import { forwardRef, RefObject, useCallback } from "react";
import { DialogProps } from "./types";
import {
  Overlay,
  Card,
  Header,
  Body,
  Footer,
  Button,
  BodyScrollerContainer
} from "./StyledElements";
import ReactDOM from "react-dom";
import { useCloseOnClickAway, useCloseOnPressEscape } from "./hooks";
import React from "react";

const getRootPopup = () => {
  //check if some popup exists
  let PopupRoot = document.getElementById("popup-root");
  //if not create one and append it to the body
  if (PopupRoot === null) {
    PopupRoot = document.createElement("div");
    PopupRoot.setAttribute("id", "popup-root");
    document.body.appendChild(PopupRoot);
  }
  //if exist return it, this func will help us to close all others pupop before open a new one
  return PopupRoot;
};

export const Dialog = forwardRef<any, DialogProps>(
  (
    {
      isOpen,
      setIsOpen,
      handleSubmit,
      handleClose,
      closeOnPressEscape,
      closeOnClickAway,
      children,
      ...props
    },
    ref
  ) => {
    const contentRef = React.useRef<HTMLDivElement>(null);

    const onClickClose = useCallback(() => {
      handleClose?.();
      setIsOpen(false);
    }, [setIsOpen, handleClose]);

    const onClickSubmit = useCallback(() => {
      handleSubmit?.();
    }, [handleSubmit]);

    useCloseOnPressEscape(onClickClose, closeOnPressEscape);
    useCloseOnClickAway(contentRef, onClickClose, closeOnClickAway);

    const DialogContent = useCallback(
      () => (
        <Overlay>
          <Card
            width={props["width"]}
            height={props["height"]}
            ref={contentRef as RefObject<HTMLDivElement>}
          >
            <Header>header</Header>
            <Body>
              <BodyScrollerContainer>{children}</BodyScrollerContainer>
            </Body>
            <Footer>
              <Button primary onClick={onClickSubmit}>
                Submit
              </Button>
              <Button onClick={onClickClose}>Cancel</Button>
            </Footer>
          </Card>
        </Overlay>
      ),
      [children, onClickClose, onClickSubmit]
    );

    return isOpen
      ? ReactDOM.createPortal(DialogContent(), getRootPopup())
      : null;
  }
);

Dialog.defaultProps = {
  closeOnClickAway: true,
  closeOnPressEscape: true,
  width: "50%",
  height: "50%"
};
