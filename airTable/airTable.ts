const Airtable = require('airtable');

export const connectAT = () => {
    Airtable.configure({
        endpointUrl: 'https://api.airtable.com',
        apiKey: 'keyBa8cBHbsYQDnBE'
    });
    return Airtable.base('app4nKak1PRudoiMb');
}