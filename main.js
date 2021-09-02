const loadData = () => {
    const userSearch = document.getElementById('search-box');
    const userSearchText = userSearch.value;
    const url = `https://openlibrary.org/search.json?q=${userSearchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => loadName(data.docs))
    userSearch.value = '';
}

const loadName = docs => {
    const searchSection = document.getElementById('search-section');
    const displayBook = document.getElementById('display-book');
    // console.log(docs)

    if (docs.length === 0) {
        const notFound = document.createElement('p');
        notFound.innerText = 'Did not find a single result';
        // console.log(notFound);
        searchSection.appendChild(notFound);
    }
    if (docs.length !== 0) {
        const totalResult = document.createElement('p');
        totalResult.innerText = ` ${docs.length} results found!! `;
        searchSection.appendChild(totalResult);
    }

    docs.forEach(singleBook => {
        // console.log(singleBook.first_publish_year)
        // console.log(singleBook.author_name)
        // console.log(singleBook.cover_i)
        // console.log(singleBook.text[2])
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `

            <div class="border border-secondary p-2">
            <h5 class="card-title">Book Name: ${singleBook.text[2]}</h5>
            <p class="card-text">Author: ${singleBook.author_name}</p>
            <p class="card-text">First Pusblished: ${singleBook.first_publish_year}</p>
            </div>

    `;
        displayBook.appendChild(div);
    });
}

;