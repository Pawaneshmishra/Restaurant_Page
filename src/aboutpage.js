export function loadContactPage() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
  
    const heading = document.createElement('h2');
    heading.textContent = 'Contact Us';
  
    const address = document.createElement('p');
    address.textContent = '123 Restaurant Street, City, Country';
  
    const email = document.createElement('p');
    email.textContent = 'Email: info@myrestaurant.com';
  
    const phone = document.createElement('p');
    phone.textContent = 'Phone: +123 456 7890';
  
    contentDiv.appendChild(heading);
    contentDiv.appendChild(address);
    contentDiv.appendChild(email);
    contentDiv.appendChild(phone);
  }  