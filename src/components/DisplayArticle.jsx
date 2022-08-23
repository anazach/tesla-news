import React from 'react'
import '../style/Article.css'

function DisplayArticle({ article, close }) {
  return (
    <section className='info'>
        <header>
          <button
            className='back'
            onClick={() => {
              close('')
            }}
          >
            &#8592;
          </button>
        </header>
        <section className='display'>
              <section className='about'>
                <h1>{article.title}</h1>
                <p>{article.description}</p>
                <p>{article.content}</p>
                <p>{article.author}</p>
                <p>{article.publishedAt}</p>
              </section>
        </section>
    </section>
  )
}

export default DisplayArticle;