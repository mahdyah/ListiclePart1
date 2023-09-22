const renderBook = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())
  
    const response = await fetch('/books')
    const data = await response.json()
  
    const giftContent = document.getElementById('gift-content')
  
    let book
  
    book = data.find(book => book.id === requestedID)
  
   

    if (book) {
   document.getElementById('image').src = book.imageLink
      document.getElementById('title').textContent = book.title
      document.getElementById('language').textContent = 'Submitted by: ' + book.language
      document.getElementById('author').textContent = 'Price: ' + book.author
      document.getElementById('pages').textContent = 'Great For: ' + book.audience
      document.getElementById('year').textContent ='Published: '+ book.year
      document.getElementById('country').textContent ='Country: '+ book.country
      document.title = `Books - ${book.name}`
    }
    else {
      const message = document.createElement('h2')
      message.textContent = 'No Books Available 😞'
      giftContent.appendChild(message)   
    }
  }
  
  renderBook()