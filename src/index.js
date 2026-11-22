"use strict";
import { Post } from "./postClass.js";
import { RangeValidator } from "./range-validator.js";

// 1. Test class of Post
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

// 2. Test class of RangeValidator
const myRange = new RangeValidator(1, 5.5); // Відпрацьовує
try {const range1 = new RangeValidator(10, 5.5)} catch (error) {console.log(error)}
console.log('myRange :>> ', myRange);

myRange.from = 5; 
console.log('myRange :>> ', myRange);

try {myRange.from = 200} catch (error) {console.log(error)}

myRange.to = 80; 
console.log('myRange :>> ', myRange);

try {myRange.to = -55} catch (error) {console.log(error)}

console.log('myRange.from :>> ', myRange.from);

console.log('myRange.to :>> ', myRange.to);

console.log(myRange.range); 

console.log(myRange.isValid(10)); 
console.log(myRange.isValid(100)); 
console.log(myRange.isValid('15')); 