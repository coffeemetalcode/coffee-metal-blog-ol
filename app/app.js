const express = require('express');
const https = require('https');
// const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { google } = require('googleapis');

const app = express();
dotenv.config();

const blog = process.env.COFFEE_METAL_BLOG_ID;
const baseURL = `https://www.googleapis.com/blogger/v3/blogs/${blog}`;
const key = `?key=${process.env.G_API_KEY}`;

const blogger = google.blogger({
  version: 'v3',
  auth: process.env.G_API_KEY,
});

const params = {
  blogId: blog,
};

app.get('/', (req, res, next) => {
  blogger.blogs.get(params, (err, data) => {
    if (err) {
      console.error(err);
      throw err;
    }
    res.send(data);
    // console.log(res);
  });
});

/* app.get('/posts', (req, res, next) => {
  params.id = '6305836430231974726';
  blogger.posts.get(params, (err, posts) => {
    if (err) {
      console.error(err);
      throw err;
    }
    res.send(posts);
  });
}); */


// app.use(bodyParser.json()); // <-- not currently using this

// let posts;

/* GET all posts <-- get all the posts from blooger */
app.get('/posts', (req, res, next) => {
  const url = `${baseURL}/posts${key}`;
  https.get(url, (resp) => {
    let posts = '';

    resp.on('data', (chunk) => {
      posts += chunk;
    });

    resp.on('end', () => {
      // eslint-disable-next-line no-use-before-define
      // posts = parseBlogger((JSON.parse(data).items));
      res.send(JSON.parse(posts));
    });
  });
});

/* GET one post <-- get one post by post id */
app.get('/posts/:id', (req, res, next) => {
  const url = `${baseURL}/posts/${req.params.id}/${key}`;
  https.get(url, (resp) => {
    let post = '';

    resp.on('data', (chunk) => {
      post += chunk;
    });

    resp.on('end', () => {
      res.send(JSON.parse(post));
    });
  });
});

/* write a function that aggregates the below information from the /posts response
links = [
    {
      year: '2021',
      months: [
        {
          month: 'February',
          posts: [
            {
              title: 'A Very Long Blog Post Title',
              id: 353304558662542252
            },
            {
              title: '2021-02-01',
              id: 353304558662542252
            }
          ]
        },
        {
          month: 'January',
          posts: [
            {
              title: '2021-01-10',
              id: 353304558662542252
            },
            {
              title: '2021-01-05'
              id: 353304558662542252
            }
          ]
        }
      ]
    },
    { ... }
  ]
*/

/* strip out data I don't care about */
/* function parseBlogger(items) {
  const itemArr = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const item of items) {
    const itemObj = {
      title: item.title,
      author: item.author.displayName,
      content: item.content,
    };
    itemArr.push(itemObj);
  }

  return itemArr;
} */

module.exports = app;
