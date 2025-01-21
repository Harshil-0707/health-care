export default function useLocalStorage() {
    const volunteer = JSON.parse(localStorage.getItem("Volunteer")) || [];
    const professional = JSON.parse(localStorage.getItem("Professional")) || [];

    return { volunteer, professional };
}