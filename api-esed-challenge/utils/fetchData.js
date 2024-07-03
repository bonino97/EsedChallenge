const axios = require('axios');
const MAX_RETRIES = 3;
const fetchData = async (url, retryCount = 0) => {
    try {
        const { data } = await axios.get(url);
        return data;
    } catch (error) {
        console.log(`Error fetching data from ${url}`);
        if (retryCount >= MAX_RETRIES) {
            console.log(`Failed to fetch data from ${url} after ${retryCount} attempts`);
            return [];
        }
        console.log(`Retrying fetch for ${url}. Attempt number ${retryCount + 1}`);
        return fetchData(url, retryCount + 1);
    }
};

module.exports = { fetchData };