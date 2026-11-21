"use strict";

const TAG_COLORS = {
  web: "green",
  javascript: "mediumorchid",
  fullstack: "blue",
  education: "purple",
  html: "orange",
  css: "gold",
  news: "red",
  'C++': "hotpink",
};

export class Post {
  #likes;
  constructor({id, title, author, text, likes = 0, image, tags = []} ={}) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.text = text;
    this.date = new Date().toLocaleDateString("uk-UA");
    this.likes = likes;
    this.image = image;
    this.tags = new Set(); 
    this.addHashtag(...tags)
  }

  set likes(count) {
    if (!Number.isInteger(count) || count < 0) {
      throw new RangeError("The number of likes must be a non-negative integer!");
    }
    this.#likes = count;
  }
  get likes() {return this.#likes}

  like() {this.likes += 1}
  dislike() {if (this.likes > 0) this.likes -= 1}

  updateText(newText) {
    if (typeof newText !== "string" || newText.trim() === '') {throw new Error("The text must not be empty")};
    this.text = newText;
  }

  addHashtag(...tags) {tags.forEach(tag => this.tags.size < 6 && Object.hasOwn(TAG_COLORS, tag) && this.tags.add(tag))}

  render() {
    const { id, title, author, text, date, likes, image, tags } = this;
    let stringOfSpanTags = '';
    tags.forEach(tag => stringOfSpanTags+=`<span style="background-color: ${TAG_COLORS[tag]};">#${tag}</span>`)

    document.querySelector("main").insertAdjacentHTML("beforeend", 
        `<article id="post-${id}">
        <header><div>${author}</div><time>${date}</time></header>
        <h2>${title}</h2>
        <img src="${image || './assets/images/noPhoto.jpg'}" alt="${title}">
        <p>${text}</p>
        <div>${stringOfSpanTags}</div>
        <footer>❤️ ${likes}</footer>
      </article>`
    );
  }
}

