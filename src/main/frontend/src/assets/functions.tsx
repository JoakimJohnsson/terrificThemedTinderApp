// Service functions
export const fetchRandomProfile = async () => {
        const response = await fetch("http://localhost:8080/profiles/random");
        if (!response.ok) {
            throw new Error("Failed to get random profile");
        }
        return response.json();
}

export const fetchProfileById = async (id: string | undefined) => {
        const response = await fetch("http://localhost:8080/profiles/" + id);
        if (!response.ok) {
            throw new Error("Failed to get profile with id " + id);
        }
        return response.json();
}