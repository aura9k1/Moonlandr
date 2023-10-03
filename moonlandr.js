const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs-extra')
app.use(express.static('public'))
app.set('view engine', 'ejs');

const conf_file_path = path.join(__dirname, "conf.json");

fs.ensureFileSync(conf_file_path);
let data = fs.readJsonSync(conf_file_path);

app.get('/', (req, res) => {
  res.render(path.join(__dirname, "public", "index.ejs"), {
    data: JSON.stringify(data)
  });
})

app.listen("80", "0.0.0.0", () => {
  console.log(`Moonlandr Online`)
})