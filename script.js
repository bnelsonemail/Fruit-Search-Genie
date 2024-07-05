const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];



function search(str) {
	let results = [];

	if (str.length > 0) {
		results = fruit.filter(item => {
			const regex = new RegExp(`${str}`, 'i');
			return regex.test(item);
		});
	}

	return results;
}




function searchHandler(e) {
	const inputVal = e.target.value;
	const results = search(inputVal);
	const rankedResults = rankSuggestions(results);
	showSuggestions(rankedResults, inputVal);
}




function rankSuggestions(results) {
	return results;
}




function showSuggestions(results, inputVal) {
	suggestions.innerHTML = '';

	results.forEach(item => {
		const regex = new RegExp(`(${inputVal})`, 'gi');
		const suggestion = document.createElement('li');
		suggestion.innerHTML = item.replace(regex, '<span class="highlight">$1</span>');
		suggestions.appendChild(suggestion);
	});

	suggestions.style.display = 'block'; // Show the suggestions in a drop down menu
}



input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);



function useSuggestion(e) {
	const clickedSuggestion = e.target.textContent;
	input.value = clickedSuggestion;
	suggestions.style.display = 'none'; // Hide the suggestions after selecting one
}