import React from "react"
import { useCats } from '../hooks'
import { Link } from 'react-router-dom'

export default props => {
    const {categories} = useCats()

    return (
        <>
            {categories.map(cat => (
                <div className="main">
                    <Link to={"/" + cat.slug}>
                        <h2>{cat.name}</h2>
                    </Link>
                    <div className="links">
                        {cat.children.map(sub => (
                            <Link to={"/" + sub.slug}>{sub.name}</Link>
                        ))}
                    </div>
                </div>
            ))}
        </>
    )
}