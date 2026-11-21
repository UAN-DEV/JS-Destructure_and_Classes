"use strict";
import { Post } from "./postClass.js";

const post1 = new Post({
  id: 1,
  title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  author: "Test 1",
  text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed natus dolor aperiam necessitatibus iusto sunt, veritatis quae ut id suscipit nobis rem vero minus debitis?",
  likes: 15,
  image:
    "https://plus.unsplash.com/premium_photo-1747483640076-cc0ca2bba1e8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  tags: ["javascript", "education", "web", "css", "html", "fullstack", "news", "javascript", "C++", "education", "web"],
});

const post2 = new Post({
  id: 2,
  title: "Consectetur adipisicing elit.",
  author: "Test 2",
  text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed natus dolor aperiam necessitatibus iusto sunt, veritatis quae ut id suscipit nobis rem vero minus debitis?",
  likes: 42,
  image:
    "https://plus.unsplash.com/premium_photo-1793901828214-dd80a05dc004?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  tags: ["css", "html", "fullstack"],
});

const post3 = new Post({
  id: 3,
  title: "Veritatis quae ut id suscipit nobis",
  author: "Test 3",
  text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed natus dolor aperiam necessitatibus iusto sunt, veritatis quae ut id suscipit nobis rem vero minus debitis?",
  likes: 0,
  image:
    "https://plus.unsplash.com/premium_photo-1793901825241-a5bfb9fc100a?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  tags: ["news", "javascript", "C++", "education", "web"],
});
const post4 = new Post({
  id: 3,
  title: "Veritatis quae ut id suscipit nobis",
  author: "Test 3",
  text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed natus dolor aperiam necessitatibus iusto sunt, veritatis quae ut id suscipit nobis rem vero minus debitis?",
  likes: 0,
  // image:
  //   "https://plus.unsplash.com/premium_photo-1793901828214-dd80a05dc004?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  // tags: ["news", "javascript", "C++", "education", "web"],
});
const post5 = new Post()


post3.updateText(
  "New Lorem! Lorem ipsam amet labore sapiente culpa soluta, commodi porro placeat nostrum error! Labore, dolorem non. Error consequuntur amet mollitia",
);

try {post2.updateText('  ')} catch (error) {console.log(error)}

post3.like();
post2.dislike();
post1.addHashtag("web");
post3.addHashtag("unknown_tag", "css");
post3.addHashtag("css");
post3.addHashtag("html");
post4.addHashtag("html");

[post1, post2, post3, post4, post5].forEach((post) => post.render());