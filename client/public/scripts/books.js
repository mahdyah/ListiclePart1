const renderBooks = async () => {
    const response = await fetch('/books')
    const data = await response.json()
    console.log(data)
    const mainContent = document.getElementById('main-content')
  
    if (data) {
        
      data.map(book => {
        const card = document.createElement('div')
        card.classList.add('card')
  
        const topContainer = document.createElement('div')
        topContainer.classList.add('top-container')
  
        const bottomContainer = document.createElement('div')
        bottomContainer.classList.add('bottom-container')
  
        topContainer.style.backgroundImage = `url_for('static' ,${book.imageLink})`
  
        const name = document.createElement('h3')
        name.textContent ='Title: ' + book.title
        bottomContainer.appendChild(name)
  
        const pricePoint = document.createElement('p')
        pricePoint.textContent = 'Language: ' + book.language
        bottomContainer.appendChild(pricePoint)
  
        const audience = document.createElement('p')
        audience.textContent = 'Author: ' + book.author
        bottomContainer.appendChild(audience)
  
        const link = document.createElement('a')
        link.textContent = 'Read More >'
        link.setAttribute('role', 'button')
        link.href = `/books/${book.id}`
        bottomContainer.appendChild(link)
  
        card.appendChild(topContainer)
        card.appendChild(bottomContainer)
  
        mainContent.appendChild(card)
      })
    }
    else {
      const message = document.createElement('h2')
      message.textContent = 'No Books could be Found 😞'
      mainContent.appendChild(message)
    }
  }
  
  const requestedUrl = window.location.href.split('/').pop()
  
  if (requestedUrl) {
    window.location.href = '../404.html'
  }
  else {
    renderBooks()
  }


  