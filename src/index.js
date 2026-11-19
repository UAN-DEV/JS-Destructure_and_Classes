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
