import { useState } from "react";

export function useForm() {

    const [value, setValue] = useState("");

    const fileChange = (event) => {
        setValue(event.target.files[0]);
    };

    const onChange = event => {
        setValue(event.target.value);
    };

    const reset = () => {
        setValue("");
    };

    return {
        value, onChange, reset, fileChange
    };
}
