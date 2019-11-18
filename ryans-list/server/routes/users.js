const router = require("express").Router()
const db = require('../db')

router.get("/", (req, res, next) => {
  const sql = `
  SELECT id, name, parent_id, slug
  FROM ryans_list.categories

  `

  db.query(sql, (err, results, fields) => {
    console.log(results)
    res.json(results)
  })
})

module.exports = router
