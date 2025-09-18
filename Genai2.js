function updateContent(selector, newContent) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
      element.innerHTML = newContent;
    });
  }
  //comments
