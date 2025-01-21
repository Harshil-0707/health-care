import { useState } from "react"
import useLocalStorage from "./useLocalStorage";

export default function useFormHandler(baseCase) {
    const [formData, setFormData] = useState(baseCase);
    const { volunteer, professional } = useLocalStorage();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const key = formData.role === "volunteer" ? "Volunteer" : "Professional";

        const updatedData = formData.role === "volunteer" ? [...volunteer, formData] : [...professional, formData];

        localStorage.setItem(key, JSON.stringify(updatedData));

        setFormData(baseCase);
    };

    return [formData, setFormData, handleSubmit];
}