import './App.css';
import { Cards, Chart, News, Navbar,  Footer } from './components';
import { fetchData, fetchNews, fetchDetails } from './api/api';
import { useEffect, useState } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  const [data, setData] = useState([]);
  const [news, setNews] = useState([]);
  const [details, setDetails] = useState([]);

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }
  
  
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

  }, [theme]);

  useEffect(() => {
    const fetchAPI = async () => {
      const initialData = await fetchData();
      setData(initialData);
    };

    fetchAPI();
  }, []);

  useEffect(() => {
    const fetchNewsAPI = async () => {
      const initialNews = await fetchNews();
      setNews(initialNews);
    }
    fetchNewsAPI();
  }, [])

  useEffect(() => {
    const fetchDetailsAPI = async () => {
      const initialDetails = await fetchDetails();
      setDetails(initialDetails);
    }
    fetchDetailsAPI();
  }, [])



  return (
    <BrowserRouter>
      <div className="App" data-theme={theme}>
        <Navbar switchTheme={switchTheme} theme={theme} />
          <Routes>
            <Route path="/" element={<Cards data={data} />} />
            <Route path="/chart" element={<Chart />} />
            <Route path="/news" element={<News news={news} />} />
          </Routes>
        <Footer />
        <div></div>
      </div>
    </BrowserRouter>
  );
}

export default App;
