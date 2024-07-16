export function loadMenuPage() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
  
    const heading = document.createElement('h2');
    heading.textContent = 'Our Menu';
  
    const menuList = document.createElement('ul');
    const items = ['Appetizers', 'Main Courses', 'Desserts'];
  
    items.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = item;
      menuList.appendChild(listItem);
    });
  
    contentDiv.appendChild(heading);
    contentDiv.appendChild(menuList);
  }
  