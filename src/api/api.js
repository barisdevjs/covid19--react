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


/* For fetching news */


const newsURl = 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-coronavirus-news/1'

const options = {
    method: 'GET',
    url: newsURl,
    headers: {
        'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
    }
};

const urlToString = (url) => {
    return url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0];
}

export const fetchNews = async () => {
    try {
        const response = await axios(options);
        return response.data.news.map((newS => {
            return {
                title: newS.title,
                date: newS.pubDate,
                id: newS.news_id,
                link: newS.link,
                content: newS.content,
                image: newS.urlToImage,
                site: urlToString(newS.link)
            }
        }))
    } catch (error) {
        console.log(error);
    }
};


/*************************Get Specific Country Data****************/


const country = 'Usa'
const urlDetails = `https://disease.sh/v3/covid-19/countries/${country}`


// example response
/*
{"updated":1650799071224,"country":"Turkey",
"countryInfo":{"_id":792,"iso2":"TR","iso3":"TUR","lat":39,"long":35,"flag":"https://disease.sh/assets/img/flags/tr.png"},
"cases":15016270,"todayCases":0,"deaths":98676,"todayDeaths":0,"recovered":14854475,"todayRecovered":0,"active":63119,
"critical":975,"casesPerOneMillion":174654,"deathsPerOneMillion":1148,"tests":158110923,"testsPerOneMillion":1838986,
"population":85977208,"continent":"Asia","oneCasePerPeople":6,"oneDeathPerPeople":871,"oneTestPerPeople":1,
"activePerOneMillion":734.14,"recoveredPerOneMillion":172772.24,"criticalPerOneMillion":11.34}
*/

export const fetchDetails = async () => {
    try {
        const response = await axios.get(urlDetails);
        // return array of key value pairs in string format
        return Object.entries(response.data).map(([key, value]) => {
            return `${key}: ${value}`
        })
    } catch (error) {
        console.log(error);
    }
};

console.log(fetchDetails());




