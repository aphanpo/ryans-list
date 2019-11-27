import React from 'react'
import { usePost } from '../hooks'

export default props => {
    const post = usePost(props.match.params.id)

    return (
        <section>
            <h1>Title: {post.name}</h1>
            <p>{post.post}</p>
        </section>
    )
}