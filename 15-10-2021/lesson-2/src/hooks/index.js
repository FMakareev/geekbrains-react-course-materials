import { useState, useEffect, useRef } from "react";

export const useToggle = () => {
    const [toggle, setToggle] = useState(false);

    const changeToggle = () => {
        setToggle(!toggle);
    };

    return [toggle, changeToggle];
};
