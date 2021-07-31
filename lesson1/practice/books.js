function makeBook(title, author, read=false) {
  return {
    title: title,
    author: author,
    read: read,
    getDescription() {
      console.log(`${this.title} was written by ${this.author}. I have${this.read ? "": "n't"} read it.`);
    },
    readBook() {
      this.read = true;
    }
  }
}

let book = []
book[1] = makeBook('Mythos', 'Stephen Fry');
book[2] = makeBook('Me Talk Pretty One Day', 'David Sedaris');
book[3] = makeBook('AUnts aren\'t Gentlemen', 'PG Wodehouse');
book.shift();
book[1].readBook();

book.forEach(item => item.getDescription())
