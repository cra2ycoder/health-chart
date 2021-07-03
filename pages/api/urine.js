const fs = require('fs')
const path = require('path')
const { getCurrentDate } = require('../../utils')

const isFileExists = filePath => {
  try {
    if (fs.existsSync(filePath)) {
      return true
    }
  } catch (err) {
    console.log()
    return false
  }
}

const getFileContent = async filePath => {
  let content = {}
  await fs.readFile(filePath, 'utf8', (err, data) => {
    // console.log({ err, data })
    if (err) {
      return {}
    }
    content = JSON.parse(data)
    return JSON.parse(data)
  })
  return content
}

const writeFileContent = (filePath, content) => {
  fs.writeFile(filePath, JSON.stringify(content), function (err) {
    if (err) throw err
  })
}

export default function handler(req, res) {
  //   console.log({ req })
  //   console.log(req.method, req.url, req.query, req.body)

  const { month, year } = getCurrentDate()
  const fileName = `${year}${month}_urine.json`
  const fileLocation = path.resolve(`./data/${fileName}`)

  if (req.method === 'GET') {
    if (req.query.date === 'today') {
      if (isFileExists(fileLocation)) {
        /**
         * @todo
         * read, parse and send
         */
      } else {
        // returning empty results
        res.status(200).json({ list: [] })
      }
    }
  } else if (req.method === 'POST') {
    if (req.query.date === 'today') {
      if (isFileExists(fileLocation)) {
        const availableData = getFileContent(fileLocation)
        console.log({ availableData })
        // availableData.data.list.push(req.body)
        // writeFileContent(fileLocation, availableData)
      } else {
        writeFileContent(fileLocation, { list: [req.body] })
      }

      res.status(200).json({
        message: 'Created Successfully!',
        data: req.body,
      })
    }
  }
}
