export function loadHomePage() {
    const contentDiv = document.getElementById('content');
  
    // Create elements
    const heading = document.createElement('h2');
    heading.textContent = 'Discover Our Delicious Cuisine';
  
    const paragraph1 = document.createElement('p');
    paragraph1.textContent = `At My Restaurant, we pride ourselves on serving exquisite dishes made from the freshest ingredients sourced locally. Whether you're craving a hearty meal or a light snack, our menu has something for everyone.`;
  
    const paragraph2 = document.createElement('p');
    paragraph2.textContent = `Come and experience a warm and inviting atmosphere where every meal is a delightful experience.`;
  
    // Append elements to contentDiv
    contentDiv.appendChild(heading);
    contentDiv.appendChild(paragraph1);
    contentDiv.appendChild(paragraph2);
  }
  