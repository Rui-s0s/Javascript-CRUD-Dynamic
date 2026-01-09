import express from 'express'
import postsRoutes from'./routes/postsRoutes'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

// Use the routes
app.use('/', postsRoutes)

app.listen(3000, () => console.log('Server running on http://localhost:3000'))