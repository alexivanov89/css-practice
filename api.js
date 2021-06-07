const getResource = async (url) => {
    try {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    } catch (error) {
        console.error('Could not fetch.', error.message);
    }
};
export default getResource;
