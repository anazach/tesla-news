import All from '../components/All'
import DisplayArticle from '../components/DisplayArticle'
import { useState, useEffect } from 'react'

function Home() {
    const [currentArticle, setCurrentArticle] = useState('')
    const [article, setArticle] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                let resp = await fetch('https://newsapi.org/v2/everything?q=Tesla&from=2022-08-16&sortBy=latest&language=en&apiKey=cce276f608064f28b1fd28566d45cdca', {
                    params: { query }
                })
                let json = await resp.json()
                setArticle(json.articles)
                return resp;
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, [currentArticle, query]);

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <div className="page">
                <header className="header">
                    <p className="logo">Tesla News</p>
                    <form className="search-form">
                        <input placeholder="Search subject"
                            className="input"
                            value={query}
                            onChange={e => setQuery(e.target.value)} />
                        <button type="submit" className="search-button" onClick={handleSubmit}>Search</button>
                    </form>
                </header>
                <section className='library'>
                    {currentArticle ? (
                        <DisplayArticle article={currentArticle} close={setCurrentArticle} />
                    ) : (
                        <section className="display-articles">
                            {query ? (
                                <section className='article'>

                                    {article.filter((article) =>
                                        article.title.toLowerCase().includes(query))
                                        .map((article) => {
                                            return (
                                                <All article={article} chooseArticle={setCurrentArticle} key={article.urlToImage} />
                                            )
                                        })}
                                </section>
                            ) : (
                                <section className='article'>
                                    {article.map((article) => {
                                        return (
                                            <All article={article} chooseArticle={setCurrentArticle} key={article.urlToImage} />
                                        )
                                    })}
                                </section>
                            )}
                        </section>
                    )}
                </section>
            </div>
        </>
    );
}

export default Home;