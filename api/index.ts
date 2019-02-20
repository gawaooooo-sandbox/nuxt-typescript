import express from 'express'
import getAppsJson from './getApps.json'

const app = express()
app.use(express.json())

app.get('/getApps', (_req, res) => {
  res.json(getAppsJson)
})

app.post('/selectApp', (req, res) => {
  const { appName } = req.body
  res.json({ appName })
})

module.exports = {
  path: '/api/',
  handler: app
}
