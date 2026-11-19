"use strict";

const TAG_COLORS = {
  web: "green",
  javascript: "yellow",
  fullstack: "blue",
  education: "purple",
  html: "orange",
  css: "cyan",
  news: "red",
};

class Post {
  #likes;
  constructor({
    id,
    title,
    author,
    text,
    date = new Date().toLocaleDateString("uk-UA"),
    likes = 0,
    image = "",
    hashtags = [],
  } = {}) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.text = text;
    this.date = date;
    this.likes = likes;
    this.image = image;
    this.hashtags = []; 
    hashtags.forEach((tag) => this.addHashtag(tag));
  }

  set likes(count) {
    if (!Number.isInteger(count) || count < 0) {
      throw new RangeError(
        "The number of likes must be a non-negative integer!",
      );
    }
    this.#likes = count;
  }

  get likes() {
    return this.#likes;
  }

  like() {
    this.likes += 1;
  }

  dislike() {
    if (this.likes > 0) {
      this.likes -= 1;
    }
  }

  updateText(newText) {
    if (typeof newText !== "string" || newText.trim() === "") {
      throw new Error("The text must not be empty");
    }
    this.text = newText;
  }

  addHashtag(tag) {
    if (this.hashtags.length >= 6 || !Object.keys(TAG_COLORS).includes(tag)) return;
      this.hashtags.push(tag);
  }

  render() {
    const { id, title, author, text, date, likes, image, hashtags } = this;

    const imageMarkup = image ? `<img src="${image}" alt="${title}">` : "";
    const hashtagsMarkup = hashtags
      .map(
        (tag) =>
          `<span style="background-color: ${TAG_COLORS[tag]}; padding: 2px 6px; margin-right: 4px;">#${tag}</span>`,
      )
      .join("");

    document.writeln(`
      <article id="post-${id}">
        <header><div>${author}</div><time>${date}</time></header>
        <h2>${title}</h2>
        ${imageMarkup}
        <p>${text}</p>
        <div>${hashtagsMarkup}</div>
        <footer>❤️ ${likes}</footer>
      </article>
    `);
  }
}

const post1 = new Post({
  id: 1,
  title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  author: "Test 1",
  text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed natus dolor aperiam necessitatibus iusto sunt, veritatis quae ut id suscipit nobis rem vero minus debitis?",
  likes: 15,
  image:
    "https://plus.unsplash.com/premium_photo-1747483640076-cc0ca2bba1e8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  hashtags: ["javascript", "education", "web"],
});

const post2 = new Post({
  id: 2,
  title: "Consectetur adipisicing elit.",
  author: "Test 2",
  text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed natus dolor aperiam necessitatibus iusto sunt, veritatis quae ut id suscipit nobis rem vero minus debitis?",
  likes: 42,
  image:
    "https://plus.unsplash.com/premium_photo-1793901828214-dd80a05dc004?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  hashtags: ["css", "html", "fullstack"],
});

const post3 = new Post({
  id: 3,
  title: "Veritatis quae ut id suscipit nobis",
  author: "Test 3",
  text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed natus dolor aperiam necessitatibus iusto sunt, veritatis quae ut id suscipit nobis rem vero minus debitis?",
  likes: 0,
  image:
    "https://plus.unsplash.com/premium_photo-1793901825241-a5bfb9fc100a?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  hashtags: ["news", "javascript"],
});

post3.updateText(
  "New Lorem! Lorem ipsam amet labore sapiente culpa soluta, commodi porro placeat nostrum error! Labore, dolorem non. Error consequuntur amet mollitia",
);
post3.like();
post3.like();
post3.dislike();
post3.addHashtag("web");
post3.addHashtag("unknown_tag");

[post1, post2, post3].forEach((post) => post.render());
