const container = document.querySelector("#container");
const header = document.createElement('div');
const headerLeft = document.createElement('div');
const headerLogo = document.createElement('div');
const headerMenuLeft = document.createElement('div');
const headerSearch = document.createElement('div');
const headerMenuRight = document.createElement('div');
const headerImage = document.createElement('div');
const content = document.createElement('div');
const footer = document.createElement('div');

header.classList.add('header');
headerLeft.classList.add('headerLeft');
headerLogo.classList.add('headerLogo');
headerMenuLeft.classList.add('headerMenuLeft');
headerSearch.classList.add('headerSearch');
headerMenuRight.classList.add('headerMenuRight');
headerImage.classList.add('headerImage');
content.classList.add('content');
footer.classList.add('footer');

headerLeft.innerText = "headerLeft";
headerLogo.innerText = "headerLogo";
headerMenuLeft.innerText = "headerMenuLeft";
headerSearch.innerText = "headerSearch";
headerMenuRight.innerText = "headerMenuRight";
headerImage.innerText = "image";
content.innerText = "content";
footer.innerText = "footer";

container.appendChild(header);
container.appendChild(headerImage);
container.appendChild(content);
container.appendChild(footer);

header.appendChild(headerLeft);
header.appendChild(headerSearch);
header.appendChild(headerMenuRight);
headerLeft.appendChild(headerLogo);
headerLeft.appendChild(headerMenuLeft);