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