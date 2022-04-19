import axios from "axios";

const url = 'https://disease.sh/v3/covid-19/countries'

export const fetchData = async () => {
    try {
        const response = await axios.get(url);
        return response.data.map(country => {
            return {
                name: country.country,
                cases: country.cases,
                todayCases: country.todayCases,
                deaths: country.deaths,
                flag: country.countryInfo.flag,
                todayDeaths: country.todayDeaths,
                active: country.active,
                critical: country.critical,
            }
        })

    } catch (error) {
        console.log(error);
    }
};






