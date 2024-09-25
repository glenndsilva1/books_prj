class BooksList extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.render();
    }
  
    async render() {
      // Fetch the books data from your backend
      const response = await fetch('/books');
      const books = await response.json();
  
      // Create a list of books and inject it into the shadow DOM
      const ul = document.createElement('ul');
      books.forEach(book => {
        const li = document.createElement('li');
        li.textContent = `${book.title} = ${book.author}`;
        ul.appendChild(li);
      });
  
      // Clear and append the list to the shadow DOM
      this.shadowRoot.innerHTML = '';
      this.shadowRoot.appendChild(ul);
    }
  }
  
  // Define the custom element
  customElements.define('books-list', BooksList);

