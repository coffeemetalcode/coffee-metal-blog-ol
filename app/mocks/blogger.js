const blogger = {
  kind: 'blogger#postList',
  items: [
    {
      kind: 'blogger#post',
      id: '353304558662542252',
      blog: {
        id: '6305836430231974726',
      },
      published: '2021-02-06T07:16:00-05:00',
      updated: '2021-02-06T20:39:55-05:00',
      url: 'http://www.coffeemetalblog.com/2021/01/prismjs.html',
      selfLink: 'https://www.googleapis.com/blogger/v3/blogs/6305836430231974726/posts/353304558662542252',
      title: 'Prism.js',
      content: '<p>&nbsp;<b>Prism.js</b></p><p><b><br /></b></p>\n<pre class="language-css"><code>\n/* sample.css */\n.card-body {\n  font-size: 12px;\n  color: #1a1a1a;\n}\n</code>\n</pre>\n\n<pre class="language-html"><code>\n&lt;!-- sample.html --&gt;\n&lt;div class=&quot;card&quot;&gt;\n  &lt;div class=&quot;card-body&quot;&gt;A Card&lt;/div&gt;\n&lt;/div&gt;\n&lt;button\n  class=&quot;btn btn-primary&quot;\n  (click)=&quot;onButtonClick($event)&quot;&gt;Bootstrap&lt;/button&gt;\n</code>\n</pre>\n\n<pre class="language-javascript"><code>\n/* sample.ts */\nonButtonClick(event: Event): void {\n  alert(\'button clicked!\');\n  console.log(\'event object: \', event);\n}\n</code>\n</pre>',
      author: {
        id: '05169999490074932390',
        displayName: 'coffee | metal | code',
        url: 'https://www.blogger.com/profile/05169999490074932390',
        image: {
          url: '//www.blogger.com/img/blogger_logo_round_35.png',
        },
      },
      replies: {
        totalItems: '5',
        selfLink: 'https://www.googleapis.com/blogger/v3/blogs/6305836430231974726/posts/353304558662542252/comments',
      },
      labels: [
        'coding',
        'javascript',
        'prism',
        'web',
      ],
      etag: '"dGltZXN0YW1wOiAxNjExNjI1MTk1MDEzCm9mZnNldDogLTE4MDAwMDAwCg"',
    },
    {
      kind: 'blogger#post',
      id: '1004918475809663563',
      blog: {
        id: '6305836430231974726',
      },
      published: '2021-01-25T06:51:00-05:00',
      updated: '2021-01-25T20:40:28-05:00',
      url: 'http://www.coffeemetalblog.com/2021/01/github-gists.html',
      selfLink: 'https://www.googleapis.com/blogger/v3/blogs/6305836430231974726/posts/1004918475809663563',
      title: 'Github Gists',
      content: '<p>&nbsp;<b>A Github Gist</b></p><p><b><br /></b></p>\n<script src="https://gist.github.com/dbstocker/8ce49496805d57f8e6ec5e7add6d3c63.js"></script>',
      author: {
        id: '05169999490074932390',
        displayName: 'coffee | metal | code',
        url: 'https://www.blogger.com/profile/05169999490074932390',
        image: {
          url: '//www.blogger.com/img/blogger_logo_round_35.png',
        },
      },
      replies: {
        totalItems: '0',
        selfLink: 'https://www.googleapis.com/blogger/v3/blogs/6305836430231974726/posts/1004918475809663563/comments',
      },
      labels: [
        'coding',
        'gist',
        'javascript',
        'web',
      ],
      etag: '"dGltZXN0YW1wOiAxNjExNjI1MjI4NDkxCm9mZnNldDogLTE4MDAwMDAwCg"',
    },
    {
      kind: 'blogger#post',
      id: '4895400967505954312',
      blog: {
        id: '6305836430231974726',
      },
      published: '2021-01-25T06:36:00-05:00',
      updated: '2021-01-27T21:12:27-05:00',
      url: 'http://www.coffeemetalblog.com/2021/01/coffee-metal-blog.html',
      selfLink: 'https://www.googleapis.com/blogger/v3/blogs/6305836430231974726/posts/4895400967505954312',
      title: 'coffee | metal | blog',
      content: '<p>This blog is about my mid-life transformation into a code-slinging, non-alcoholic, fretboard-shredding former semi-pro guitarist. I\'ve blogged sporadically <a href="http://notesettersinc.blogspot.com/" rel="nofollow" target="_blank">in my former life</a>, but I\'d like to make it a regular feature of my current life.</p><p>The Blogger interface was fine for the late aughts, but I\'d really like to leverage modern designs for anyone who reads my musings. Since I now live a tech-soaked existence - and my blog will deal with technology and my role as a developer to a great extent - it makes sense to move out of Google\'s safe, comfortable fenced in area and treat this as a medium to practice and showcase some of my skills.<br /><br />So I\'m going to attempt putting up my own, more stylish page where users can view my transformation by leveraging the <a href="http://notesettersinc.blogspot.com/" rel="nofollow" target="_blank">Blogger API</a> as a service layer. I\'ll decide myself how to implement the Blog view for anyone who wants to read.</p><p>Being a blog about coding, guitar, metal, music, politics, and anything else I may be interested in, my own implementation of the API will have to have certain requirements:</p><p></p><ol style="text-align: left;"><li>I will need to be able to render nice code snippets. I\'m horse-racing <a href="https://prismjs.com" rel="nofollow" target="_blank">Prism.js</a> and <a href="https://gist.github.com/" rel="nofollow" target="_blank">Github Gists</a> for this capability</li><li>I will need to be able to show inline video for music and live coding / tutorial posts</li><li>Social sharing on web and mobile should be turn-key</li></ol><div>I haven\'t decided yet whether comments are a requirement or a nice-to-have, but I\'ll probably push off that decision until (much) later since I suspect implementing it with the Blogger API will be non-trivial.</div><div><br /></div><div>Anyway, this post and the ones that follow are going to be needed for testing the API and implementing different capabilities.</div><p></p>',
      author: {
        id: '05169999490074932390',
        displayName: 'coffee | metal | code',
        url: 'https://www.blogger.com/profile/05169999490074932390',
        image: {
          url: '//www.blogger.com/img/blogger_logo_round_35.png',
        },
      },
      replies: {
        totalItems: '0',
        selfLink: 'https://www.googleapis.com/blogger/v3/blogs/6305836430231974726/posts/4895400967505954312/comments',
      },
      etag: '"dGltZXN0YW1wOiAxNjExNzk5OTQ3MzgxCm9mZnNldDogLTE4MDAwMDAwCg"',
    },
    {
      kind: 'blogger#post',
      id: '3533045586625422aa',
      blog: {
        id: '6305836430231974726',
      },
      published: '2020-12-24T07:16:00-05:00',
      updated: '2020-12-24T20:39:55-05:00',
      url: 'http://www.coffeemetalblog.com/2021/01/prismjs.html',
      selfLink: 'https://www.googleapis.com/blogger/v3/blogs/6305836430231974726/posts/353304558662542252',
      title: 'Prism.js from 12/2020',
      content: '<p>&nbsp;<b>Prism.js</b></p><p><b><br /></b></p>\n<pre class="language-css"><code>\n/* sample.css */\n.card-body {\n  font-size: 12px;\n  color: #1a1a1a;\n}\n</code>\n</pre>\n\n<pre class="language-html"><code>\n&lt;!-- sample.html --&gt;\n&lt;div class=&quot;card&quot;&gt;\n  &lt;div class=&quot;card-body&quot;&gt;A Card&lt;/div&gt;\n&lt;/div&gt;\n&lt;button\n  class=&quot;btn btn-primary&quot;\n  (click)=&quot;onButtonClick($event)&quot;&gt;Bootstrap&lt;/button&gt;\n</code>\n</pre>\n\n<pre class="language-javascript"><code>\n/* sample.ts */\nonButtonClick(event: Event): void {\n  alert(\'button clicked!\');\n  console.log(\'event object: \', event);\n}\n</code>\n</pre>',
      author: {
        id: '05169999490074932390',
        displayName: 'coffee | metal | code',
        url: 'https://www.blogger.com/profile/05169999490074932390',
        image: {
          url: '//www.blogger.com/img/blogger_logo_round_35.png',
        },
      },
      replies: {
        totalItems: '5',
        selfLink: 'https://www.googleapis.com/blogger/v3/blogs/6305836430231974726/posts/353304558662542252/comments',
      },
      labels: [
        'coding',
        'javascript',
        'prism',
        'web',
      ],
      etag: '"dGltZXN0YW1wOiAxNjExNjI1MTk1MDEzCm9mZnNldDogLTE4MDAwMDAwCg"',
    },
    {
      kind: 'blogger#post',
      id: '3533045586625422bb',
      blog: {
        id: '6305836430231974726',
      },
      published: '2020-12-14T07:16:00-05:00',
      updated: '2020-12-14T20:39:55-05:00',
      url: 'http://www.coffeemetalblog.com/2021/01/prismjs.html',
      selfLink: 'https://www.googleapis.com/blogger/v3/blogs/6305836430231974726/posts/353304558662542252',
      title: 'Hello from Mid Dec 2020',
      content: '<p>&nbsp;<b>Prism.js</b></p><p><b><br /></b></p>\n<pre class="language-css"><code>\n/* sample.css */\n.card-body {\n  font-size: 12px;\n  color: #1a1a1a;\n}\n</code>\n</pre>\n\n<pre class="language-html"><code>\n&lt;!-- sample.html --&gt;\n&lt;div class=&quot;card&quot;&gt;\n  &lt;div class=&quot;card-body&quot;&gt;A Card&lt;/div&gt;\n&lt;/div&gt;\n&lt;button\n  class=&quot;btn btn-primary&quot;\n  (click)=&quot;onButtonClick($event)&quot;&gt;Bootstrap&lt;/button&gt;\n</code>\n</pre>\n\n<pre class="language-javascript"><code>\n/* sample.ts */\nonButtonClick(event: Event): void {\n  alert(\'button clicked!\');\n  console.log(\'event object: \', event);\n}\n</code>\n</pre>',
      author: {
        id: '05169999490074932390',
        displayName: 'coffee | metal | code',
        url: 'https://www.blogger.com/profile/05169999490074932390',
        image: {
          url: '//www.blogger.com/img/blogger_logo_round_35.png',
        },
      },
      replies: {
        totalItems: '5',
        selfLink: 'https://www.googleapis.com/blogger/v3/blogs/6305836430231974726/posts/353304558662542252/comments',
      },
      labels: [
        'coding',
        'javascript',
        'prism',
        'web',
      ],
      etag: '"dGltZXN0YW1wOiAxNjExNjI1MTk1MDEzCm9mZnNldDogLTE4MDAwMDAwCg"',
    },
    {
      kind: 'blogger#post',
      id: '3533045586625422cc',
      blog: {
        id: '6305836430231974726',
      },
      published: '2020-11-18T07:16:00-05:00',
      updated: '2020-11-18T20:39:55-05:00',
      url: 'http://www.coffeemetalblog.com/2021/01/prismjs.html',
      selfLink: 'https://www.googleapis.com/blogger/v3/blogs/6305836430231974726/posts/353304558662542252',
      title: 'Today is My Wife\'s Birthday',
      content: '<p>&nbsp;<b>Prism.js</b></p><p><b><br /></b></p>\n<pre class="language-css"><code>\n/* sample.css */\n.card-body {\n  font-size: 12px;\n  color: #1a1a1a;\n}\n</code>\n</pre>\n\n<pre class="language-html"><code>\n&lt;!-- sample.html --&gt;\n&lt;div class=&quot;card&quot;&gt;\n  &lt;div class=&quot;card-body&quot;&gt;A Card&lt;/div&gt;\n&lt;/div&gt;\n&lt;button\n  class=&quot;btn btn-primary&quot;\n  (click)=&quot;onButtonClick($event)&quot;&gt;Bootstrap&lt;/button&gt;\n</code>\n</pre>\n\n<pre class="language-javascript"><code>\n/* sample.ts */\nonButtonClick(event: Event): void {\n  alert(\'button clicked!\');\n  console.log(\'event object: \', event);\n}\n</code>\n</pre>',
      author: {
        id: '05169999490074932390',
        displayName: 'coffee | metal | code',
        url: 'https://www.blogger.com/profile/05169999490074932390',
        image: {
          url: '//www.blogger.com/img/blogger_logo_round_35.png',
        },
      },
      replies: {
        totalItems: '5',
        selfLink: 'https://www.googleapis.com/blogger/v3/blogs/6305836430231974726/posts/353304558662542252/comments',
      },
      labels: [
        'coding',
        'javascript',
        'prism',
        'web',
      ],
      etag: '"dGltZXN0YW1wOiAxNjExNjI1MTk1MDEzCm9mZnNldDogLTE4MDAwMDAwCg"',
    },
    {
      kind: 'blogger#post',
      id: '3533045586625422dd',
      blog: {
        id: '6305836430231974726',
      },
      published: '2019-03-15T07:16:00-05:00',
      updated: '2019-03-15T20:39:55-05:00',
      url: 'http://www.coffeemetalblog.com/2021/01/prismjs.html',
      selfLink: 'https://www.googleapis.com/blogger/v3/blogs/6305836430231974726/posts/353304558662542252',
      title: 'Beware, the Ides of March',
      content: '<p>&nbsp;<b>Prism.js</b></p><p><b><br /></b></p>\n<pre class="language-css"><code>\n/* sample.css */\n.card-body {\n  font-size: 12px;\n  color: #1a1a1a;\n}\n</code>\n</pre>\n\n<pre class="language-html"><code>\n&lt;!-- sample.html --&gt;\n&lt;div class=&quot;card&quot;&gt;\n  &lt;div class=&quot;card-body&quot;&gt;A Card&lt;/div&gt;\n&lt;/div&gt;\n&lt;button\n  class=&quot;btn btn-primary&quot;\n  (click)=&quot;onButtonClick($event)&quot;&gt;Bootstrap&lt;/button&gt;\n</code>\n</pre>\n\n<pre class="language-javascript"><code>\n/* sample.ts */\nonButtonClick(event: Event): void {\n  alert(\'button clicked!\');\n  console.log(\'event object: \', event);\n}\n</code>\n</pre>',
      author: {
        id: '05169999490074932390',
        displayName: 'coffee | metal | code',
        url: 'https://www.blogger.com/profile/05169999490074932390',
        image: {
          url: '//www.blogger.com/img/blogger_logo_round_35.png',
        },
      },
      replies: {
        totalItems: '5',
        selfLink: 'https://www.googleapis.com/blogger/v3/blogs/6305836430231974726/posts/353304558662542252/comments',
      },
      labels: [
        'coding',
        'javascript',
        'prism',
        'web',
      ],
      etag: '"dGltZXN0YW1wOiAxNjExNjI1MTk1MDEzCm9mZnNldDogLTE4MDAwMDAwCg"',
    },
  ],
  etag: '"MjAyMS0wMS0zMFQwMTo1OToxNS42MjNa"',
};

module.exports = blogger;
