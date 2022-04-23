import axios from "axios";


const url = 'https://disease.sh/v3/covid-19/countries'
// const url ='https://corona.lmao.ninja/v3/covid-19/countries'

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

const urlDetails = 'https://disease.sh/v3/covid-19/countries/Turkey'


// JSON example
// {"updated":1650568370518,"country":"Turkey","countryInfo":{"_id":792,"iso2":"TR","iso3":"TUR","lat":39,"long":35,"flag":"https://disease.sh/assets/img/flags/tr.png"},"cases":15007364,"todayCases":0,"deaths":98628,"todayDeaths":0,"recovered":14798294,"todayRecovered":0,"active":110442,"critical":975,"casesPerOneMillion":174566,"deathsPerOneMillion":1147,"tests":157670085,"testsPerOneMillion":1834018,"population":85969774,"continent":"Asia","oneCasePerPeople":6,"oneDeathPerPeople":872,"oneTestPerPeople":1,"activePerOneMillion":1284.66,"recoveredPerOneMillion":172133.69,"criticalPerOneMillion":11.34}


export const fetchDetails =  () => {
    try {
        const response =  axios.get(urlDetails);
        return Array.from(response.data).map(country => {
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
        }
        )
    } catch (error) {
        console.log(error);
    }
};
