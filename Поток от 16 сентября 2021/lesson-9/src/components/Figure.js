import { Figure as FigureWrapper } from "react-bootstrap";

export const Figure = (props) => (
    <FigureWrapper>
        <FigureWrapper.Image width="50%" src={props.url} />
        <FigureWrapper.Caption>{props.facts}</FigureWrapper.Caption>
    </FigureWrapper>
);
