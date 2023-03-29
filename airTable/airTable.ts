const Airtable = require('airtable');

export const connectAT = () => {
    Airtable.configure({
        endpointUrl: 'https://api.airtable.com',
        apiKey: process.env.API_KEY
    });
    return Airtable.base('app4nKak1PRudoiMb');
}