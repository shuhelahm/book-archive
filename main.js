// load all data function
const loadData = () => {
    const userSearch = document.getElementById('search-box');
    const userSearchText = userSearch.value;
    const url = `https://openlibrary.org/search.json?q=${userSearchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => loadDetails(data.docs))
    userSearch.value = '';
}

const loadDetails = allBooks => {
    const searchSection = document.getElementById('search-section');
    const displayBook = document.getElementById('display-book');

    // error message if no book found
    if (allBooks.length === 0) {
        const notFound = document.createElement('p');
        notFound.innerText = 'Did not find a single result';
        searchSection.appendChild(notFound);
    }

    // error message if user does not input book name
    if (allBooks.length !== 0) {
        const totalResult = document.createElement('p');
        totalResult.innerText = ` ${allBooks.length} results found!! `;
        searchSection.appendChild(totalResult);
    }

    // clear previous results of input search
    displayBook.innerHTML = ``;

    // single book feature
    allBooks.forEach(singleBook => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="border border-secondary p-2">
            <h5 class="card-title">Book Name: ${singleBook.title}</h5>
            <p class="card-text">Author: ${singleBook.author_name}</p>
            <p class="card-text">First Pusblished: ${singleBook.first_publish_year}</p>
            </div>

    `;
        displayBook.appendChild(div);
    });
};