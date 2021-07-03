const fs = require('fs')
const path = require('path')
const { getCurrentDate } = require('../../utils')

const isFileExists = filePath => {
  try {
    if (fs.existsSync(filePath)) {
      return true
    }
  } catch (err) {
    return false
  }
}

const getFileContent = filePath => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return {}
    }
    return JSON.parse(data)
  })
}

const writeFileContent = (filePath, content) => {
  fs.writeFile(filePath, JSON.stringify(content), function (err) {
    if (err) throw err
  })
}

export default function handler(req, res) {
  const { month, year } = getCurrentDate()
  const fileName = `${year}${month}_urine.json`
  const fileLocation = path.resolve(`./data/${fileName}`)

  if (req.method === 'GET') {
    if (req.query.date === 'today') {
      if (isFileExists(fileLocation)) {
        fs.readFile(fileLocation, 'utf8', (err, data) => {
          if (err) {
            return {}
          }
          const totalList = JSON.parse(data)
          res.status(200).json(totalList)
        })
      } else {
        // returning empty results
        res.status(200).json({ list: [] })
      }
    }
  } else if (req.method === 'POST') {
    if (req.query.date === 'today') {
      if (isFileExists(fileLocation)) {
        fs.readFile(fileLocation, 'utf8', (err, data) => {
          if (err) {
            return {}
          }
          const availableData = JSON.parse(data)
          availableData.list.push(req.body)
          writeFileContent(fileLocation, availableData)
        })
      } else {
        writeFileContent(fileLocation, { list: [req.body] })
      }
      res.status(201).json({
        message: 'Created Successfully!',
        data: req.body,
      })
    }
  }
}
