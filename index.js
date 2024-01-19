import { searchTable } from "./search-table.js";
import { resetTable } from "./reset-table.js";
import { fetchData } from "./service.js";
import { renderOriginalTable } from "./render-original-table.js";
import { RenderRange } from "./constants.js";

const data = await fetchData();
const form = document.querySelector('.searchForm');

let start = RenderRange.START;
let limit = RenderRange.LIMIT;
let newArray;

if (!data) {

  console.log('no data');
}

export const renderTable = (datum) => {

  const end = start + limit;
  renderOriginalTable(datum.slice(start, end));
  start = end;
  }

const handleBaseScroll = () => {

  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    renderTable(data);
  }
}

function handleSearchScroll() {

  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    renderTable(newArray);
  }
}

form.addEventListener('submit', (evt) => {

  evt.preventDefault();
  window.removeEventListener('scroll', handleBaseScroll);
  start = 0;
  window.addEventListener('scroll', handleSearchScroll);
  newArray = searchTable(data);
})

form.addEventListener('reset', (evt) => {
  
  evt.preventDefault();
  start = 0;
  window.removeEventListener('scroll', handleSearchScroll);
  window.addEventListener('scroll', handleBaseScroll);
  resetTable(data);
})

window.addEventListener('scroll', handleBaseScroll);

renderTable(data);

