const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');
const listItems = document.getElementsByTagName('li');

const createListButton = document.getElementById('createList');



// muuttaa targettia jos hiiren vie sen päälle
listDiv.addEventListener('mouseover', (event) => {
	if (event.target.tagName == 'LI') {
	event.target.textContent = event.target.textContent.toUpperCase();
	}
});

listDiv.addEventListener('mouseout', (event) => {
	if (event.target.tagName == 'LI') {
	event.target.textContent = event.target.textContent.toLowerCase();
	}
});

// piilottaa ja näyttää listan
toggleList.addEventListener('click', () => {
	if(listDiv.style.display == 'none') {
		toggleList.textContent = 'Hide list';
		listDiv.style.display = 'block';
		}	else {
			toggleList.textContent = 'Show list';
			listDiv.style.display = 'none';
		}
});

// Lista asioista, jotka ovat muokattavissa
descriptionButton.addEventListener('click', () => {
	descriptionP.innerHTML = descriptionInput.value + ':';
	descriptionInput.value = '';
});

// Lisää asia listaan
addItemButton.addEventListener('click', () => {
	var ul = document.getElementsByTagName('ul')[0];
	var li = document.createElement('li');
	li.textContent = addItemInput.value;
	ul.appendChild(li);
	addItemInput.value = '';
});

// Poista listasta
removeItemButton.addEventListener('click', () => {
	var ul = document.getElementsByTagName('ul')[0];
	var li = document.querySelector('li:last-child');
	ul.removeChild(li);
});
