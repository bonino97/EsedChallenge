const { fetchData } = require('../utils/fetchData');
const { mapResultWithValidFamily } = require('../utils/mapResultWithValidFamily');

const getData = async (req, res) => {
    const urls = [
        'https://aggregation-challenge.esedsl.com/v1',
        'https://aggregation-challenge.esedsl.com/v2',
        'https://aggregation-challenge.esedsl.com/v3'
    ];
    const dataPromises = urls.map(url => fetchData(url));
    const dataResults = await Promise.all(dataPromises);
    const result = mapResultWithValidFamily(dataResults.flat());
    return res.status(200).json(result);
};

module.exports = {
    getData
};
