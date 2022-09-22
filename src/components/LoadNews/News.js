import React, { useEffect, useState } from 'react';
import "./News.css"
import Display from '../Display/Display';

const News = () => {
    const [news,setNews] = useState([]);
    useEffect(() => {
        fetch("https://newsapi.org/v2/everything?q=keyword&apiKey=8a81e8256bba423a843898a61adb9432")
        .then(res => res.json())
        .then(data => setNews(data.articles))
    },[])
    return (
        <div className='container'>
            {
                news.map(n => <Display name = {n.source.name} title = {n.title} content = {n.content}></Display>)
            }
        </div>
    );
};

export default News;