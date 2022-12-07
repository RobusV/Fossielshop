const container = document.querySelector("#container");
const header = document.createElement('div');
const headerImage = document.createElement('div');
const content = document.createElement('div');
const footer = document.createElement('div');

header.classList.add('header');
headerImage.classList.add('header-image');
content.classList.add('content');
footer.classList.add('footer');

container.appendChild(header);
container.appendChild(headerImage);
container.appendChild(content);
container.appendChild(footer);
