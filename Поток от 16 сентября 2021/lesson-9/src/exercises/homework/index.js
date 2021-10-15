import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Stack, Button } from "react-bootstrap";
import { Error, Loader, Figure } from "../../components";
import { animalsSelectors, getRandomAnimals } from "../../store/animals";

export const Homework = () => {
    const data = useSelector(animalsSelectors.getAnimalsData);
    const isError = useSelector(animalsSelectors.getAnimalsError);
    const isLoading = useSelector(animalsSelectors.getAnimalsLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRandomAnimals);
    }, []);

    return (
        <Stack gap={3}>
            <h1>Homework</h1>

            {isError && (
                <Error
                    reload={() => {
                        dispatch(getRandomAnimals);
                    }}
                />
            )}
            {isLoading && <Loader />}

            {!isLoading && data && <Figure {...data} />}
        </Stack>
    );
};
