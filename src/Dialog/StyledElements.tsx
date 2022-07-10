import styled, { css } from "styled-components";
import { ButtonProps, CardProps } from "./types";

export const Overlay = styled.div`
  position: fixed;
  justify-content: center;
  align-items: center;
  display: flex;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 100vh;
  min-height: 100vh;
  background: rgba(12, 12, 13, 0.6);
`;
export const Card = styled.div<CardProps>`
  background: white;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: rgba(12, 12, 13, 0.1);
  position: relative;
  width: ${({ width }) => (width ? width : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  max-height: 100%;
  max-width: 100%;
`;
export const Header = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  flex-shrink: 0;
  margin-bottom: 2rem;
  text-align: center;
  justify-content: center;
`;
export const BodyScrollerContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  max-height: 100%;
  max-width: 100%;
  display: flex;
  overflow: auto;
  flex: 1;
`;
export const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: auto;
  position: relative;
`;
export const Footer = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  flex-wrap: wrap;
  button {
    margin-left: 10px;
  }
  @media screen and (max-width: 460px) {
    justify-content: center;
    align-content: center;
    button {
      margin-top: 10px;
    }
  }
`;
export const Button = styled.button<ButtonProps>`
  border: none;
  outline: none;
  width: auto;
  min-width: 64px;
  padding: 0px 8px;
  height: 32px;

  border-radius: 4px;
  color: #0c0c0d;
  background: rgba(12, 12, 13, 0.1);
  cursor: pointer;
  &:hover {
    background: rgba(12, 12, 13, 0.2);
  }
  transition: background 100ms ease-in-out;

  ${({ primary }) =>
    primary &&
    css`
      background: #0060df;
      color: #ffffff;
      &:hover {
        background: #003eaa;
      }
    `};
  margin: ${({ margin }) => (margin ? margin : "")};
`;
