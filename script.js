<<<<<<< HEAD
console.log("Script loaded");
const accessKey = "0D7WZR9J2SR18YLVlsUEJZUgR6u-DH-ZN_OjuD27KLI";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-input");
const searchResult = document.getElementById("search-result");
const showmoreButton = document.getElementById("show-more-button");

let searchKeyword = "";
let page = 1;

async function searchImages() {
    searchKeyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${searchKeyword}&client_id=${accessKey}&per_page=12`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (page === 1) {
            searchResult.innerHTML = "";
        }

        const results = data.results;

        results.forEach(result => {
            const imageLink = document.createElement("a");
            imageLink.href = result.links.html;
            imageLink.target = "_blank";

            const image = document.createElement("img");
            image.src = result.urls.small;
            image.alt = result.alt_description;

            imageLink.appendChild(image);
            searchResult.appendChild(imageLink);
        });

        // Show the button only if there are results
        showmoreButton.style.display = results.length > 0 ? "block" : "none";
    } catch (error) {
        console.error("Error fetching images:", error);
        showmoreButton.style.display = "none";  // Hide button on error
    }
}

// Initial setup
showmoreButton.style.display = "none";  // Ensure button is hidden on page load

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});

showmoreButton.addEventListener("click", () => {
    page++;
    searchImages();
});

showmoreButton.addEventListener("click", () => {
    page++;
    searchImages();
});

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});
=======
const accessKey = "0D7WZR9J2SR18YLVlsUEJZUgR6u-DH-ZN_OjuD27KLI";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-input");
const searchResult = document.getElementById("search-result");
const showmoreButton = document.getElementById("show-more-button");

let searchKeyword = "";
let page = 1;


async function searchImages () {
    searchKeyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?${page}=1&query=${searchKeyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if (page === 1){
        searchResult.innerHTML = "";
        showmoreButton.style.display = "none";
    }
    const results = data.results;

    results.map(result => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    showmoreButton.style.display = "block";
    showmoreButton.addEventListener("click", () => {
        page++;
        searchImages();
    })
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
})
>>>>>>> bba50351c4c4e698eaf1fde13a7ab735ddb032aa
