import React from 'react'
import '../style/All.css'

function All({ article, chooseArticle }) {

    return (
             <section
            onClick={() => {
                chooseArticle(article)
            }}
        >
            <div className="article">
                <article className="card">
                    <h1>{article.title}</h1>
                    <img src={article.urlToImage} alt="about-tesla" className="img" />
                    <p>{article.description}</p>
                </article>
            </div>
        </section>
    )
}

export default All