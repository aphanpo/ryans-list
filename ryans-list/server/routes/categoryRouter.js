const router = require("express").Router()
const db = require('../db')

router.get("/", (req, res, next) => {
  const sql = `
    SELECT id, name, slug, parent_id
    FROM categories
  `

  db.query(sql, (err, results, fields) => {
    let filtered = results.filter(cat => cat.parent_id === null)
    filtered = filtered.map(cat => {
        const children = results.filter(child => child.parent_id === cat.id)
        return { ...cat, children }
    })
    res.json(filtered)
  })
})

module.exports = router
