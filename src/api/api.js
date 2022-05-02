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


const newsURl = 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-coronavirus-news/0'

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
                title: newS?.title,
                date: newS?.pubDate,
                id: newS?.news_id,
                link: newS?.link,
                content: newS?.content,
                image: newS?.urlToImage,
                site: urlToString(newS?.link)
            }
        }))
    } catch (error) {
        console.log(error);
    }
};


/*************************Get Specific Country Data****************/


const urlDetails = `https://disease.sh/v3/covid-19/countries`


export const fetchDetails = async (country) => {
    try {
        const response = await axios.get(`${urlDetails}/${country}`);
        return Array.of(response.data).map(country => {
            return {
                name: country.country,
                cases: country.cases,
                todayCases: country.todayCases,
                deaths: country.deaths,
                flag: country.countryInfo?.flag,
                todayDeaths: country.todayDeaths,
                active: country.active,
                critical: country.critical,
            }
        })
    } catch (error) {
        console.log(error);
    }
};
