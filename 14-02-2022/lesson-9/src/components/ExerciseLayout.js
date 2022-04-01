import { Stack } from "react-bootstrap";
import ReactMarkdown from "react-markdown";

export const ExerciseLayout = ({ title, description, children }) => {
    return (
        <Stack gap={3}>
            <h2>{title}</h2>
            <ReactMarkdown>{description}</ReactMarkdown>

            {children}
        </Stack>
    );
};
