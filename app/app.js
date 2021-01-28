const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');


const app = express();
dotenv.config();

const key = process.env.G_API_KEY;
const blog = process.env.COFFEE_METAL_BLOG_ID;
const blogUrl = `https://www.googleapis.com/blogger/v3/blogs/${blog}/posts?key=${key}`;

// app.use(bodyParser.json()); // <-- not currently using this

let posts = [];

/* GET posts */
app.get('/posts', (req, res, next) => {
  https.get(blogUrl, (resp) => {
    let data = '';
  
    resp.on('data', (chunk) => {
      data += chunk;
    });
  
    resp.on('end', () => {
      posts = parseBlogger((JSON.parse(data).items));
      console.log(posts);
      // res.send(JSON.parse(data));
      res.send(posts);
    });
  });
});

/* strip out data I don't care about */
function parseBlogger(items) {
  let itemArr = [];
  for (let item of items) {
    itemObj = {
      "title": item.title,
      "author": item.author.displayName,
      "content": item.content
    }
    itemArr.push(itemObj);
  }

  return itemArr;
}

module.exports = app;