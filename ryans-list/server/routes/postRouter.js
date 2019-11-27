const router = require("express").Router()
const db = require('../db')

router.get("/:slug", (req, res, next) => {
  const slug = req.params.slug
  const sql = `
    SELECT p.* 
    FROM posts p
    LEFT JOIN categories c ON p.category_id = c.id
    WHERE c.slug=?
    `
  
    db.query(sql, [slug], (err, results, fields) => {
    res.json(results)
  })
})

router.post("/single/:postId", (req, res, next) => {
  const slug = req.body.slug
  const name = req.body.name
  const post = req.body.post

  const getsql = `
  SELECT id
  FROM categories
  WHERE slug = ?
  `

  const sql = `
    INSERT INTO posts (name, post, catId)
    VALUES (?, ?, ?)
    `

  db.query(getsql, [slug], (err, results, fields) => {
    const catId = results[0].id

    db.query(sql, [name, post, catId], (err, results, fields) => {
        if (err) {
            throw new Error("WHOOPS")
        } else {
            res.json(results)
        }
    })
  })
})


module.exports = router