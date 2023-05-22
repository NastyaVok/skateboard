export const getApiResource = async (url: string) => {
    try { 
        const res = await fetch(url); 

        if(!res.ok){
            console.error('Could not fetch.', res.status);
            return false;
        };

        return await res.json();
    } catch (err: any) {
        console.log('Could not fetch.', err.message);
        return false;
    }
};
