import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

const News = ({ category, apiKey }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const fetchNews = async (pageNumber = 1) => {
    setLoading(true);
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}&page=${pageNumber}&pageSize=20`;
    
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles(parsedData.articles || []);
      setTotalResults(parsedData.totalResults || 0);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching news:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    document.title = `${capitalize(category)} - NewsRipple`;
    fetchNews();
    // eslint-disable-next-line
  }, [category]);

  const handlePrevClick = async () => {
    setPage(page - 1);
    fetchNews(page - 1);
  };

  const handleNextClick = async () => {
    setPage(page + 1);
    fetchNews(page + 1);
  };

  return (
    <div className="container my-3" style={{ marginTop: '120px' }}>
      <h1 className="text-center" style={{ margin: '35px 0px', paddingTop: '20px' }}>
        NewsRipple - Top {capitalize(category)} Headlines
      </h1>
      {loading && <Spinner />}
      <div className="row">
        {!loading &&
          articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ''}
                  description={element.description ? element.description.slice(0, 88) : ''}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })
        }
      </div>
      <div className="container d-flex justify-content-between">
        <button
          disabled={page <= 1}
          type="button"
          className="btn btn-dark"
          onClick={handlePrevClick}
        >
          &larr; Previous
        </button>
        <button
          disabled={page + 1 > Math.ceil(totalResults / 20)}
          type="button"
          className="btn btn-dark"
          onClick={handleNextClick}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

News.defaultProps = {
  category: 'general',
};

News.propTypes = {
  category: PropTypes.string,
  apiKey: PropTypes.string.isRequired,
};

export default News;