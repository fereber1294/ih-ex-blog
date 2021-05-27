import React from 'react'
import {Link} from 'react-router-dom'

export default function Articles(props) {
  return (
    <div>
      This is my articles page
      {
        props.articlesData.map(e => {
          return (
            <>
              <Link to={`/${e.slug}`}>
                <p>{e.title}</p>
              </Link>
              <p>{e.date}</p>
              <img src={e.imageUrl} alt="photo-1"/>
            </>
          )
        })
      }
    </div>
  )
}
