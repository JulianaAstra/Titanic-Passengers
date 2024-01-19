import { renderOriginalTable } from "./render-original-table.js";
import { searchTable } from "./search-table.js";
import { resetTable } from "./reset-table.js";
import { fetchData } from "./service.js";

let originalTableHTML = '';
const form = document.querySelector('.searchForm');
const loadMoreBtn = document.querySelector('.load_more_btn');
let start = 0;
let limit = 10;

function loadData() {
   const end = start + limit;
   fetchData()
   .then(data => {
    if (start >= data.length) {
      loadMoreBtn.style.display = 'none';
       }
    originalTableHTML = renderOriginalTable(data.slice(start, end))
    start = end;
   })
    .catch(error => console.error('Error:', error));
}

loadMoreBtn.addEventListener('click', loadData);

window.addEventListener('load', () => {
 loadData();
})

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  searchTable();
})

form.addEventListener('reset', (evt) => {
  evt.preventDefault();
  resetTable(originalTableHTML);
})

