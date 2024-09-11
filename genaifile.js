function updateElementContent(elementId, newContent) {
    const element = document.getElementById(elementId);
    if (element) {
      element.innerHTML = newContent;
    } else {
      console.error(`Element with ID '${elementId}' not found.`);
    }
  }
  
  // Example usage:
  updateElementContent('myParagraph', 'This is the new content!');