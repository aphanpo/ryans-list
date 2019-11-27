import React, { useState } from 'react'
import { useCreatePost } from '../hooks'

export default props => {
    const create = useCreatePost()

    const [name, setName] = useState("")
    const [post, setPost] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        create(props.match.params.slug, name, post).then(() => {
            props.history.push("/" + props.match.params.slug)
        })
    }
    return (
        <section>
            <h1>Submit Post to /{props.match.params.slug}</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Post Name</label> <br />
                <input type="text" name="name" id="name" value={name} onChange={e => setName(e.target.value)} /> 
                <br />
                <br />
                <label htmlFor="post">Post Content</label>
                <br />
                <textarea name="post" id="post" value={post} onChange={e => setPost(e.target.value)} /> 
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
            <div>
                <form onSubmit={handleSubmit}></form>
            </div>
        </section>
    )
}