import { searchTable } from "./search-table.js";
import { resetTable } from "./reset-table.js";
import { fetchData } from "./service.js";
import { renderOriginalTable } from "./render-original-table.js";
import { RenderRange } from "./constants.js";
import { errorScreen } from "./error-screen.js";

const tableBodyElement = document.querySelector('tbody');
const form = document.querySelector('.searchForm');
let passengersList = [];

await fetchData()
  .then((data) => {
    passengersList = data;
  })
  .catch((error) => {
    console.log(error)
    tableBodyElement.innerHTML = errorScreen();
  });

let start = RenderRange.START;
let limit = RenderRange.LIMIT;
let filteredPassengersList;

export const renderTable = (passengers) => {

  const end = start + limit;
  renderOriginalTable(passengers.slice(start, end));
  start = end;
}

const handleBaseScroll = () => {

  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    renderTable(passengersList);
  }
}

function handleSearchScroll() {

  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    renderTable(filteredPassengersList);
  }
}

form.addEventListener('submit', (evt) => {

  evt.preventDefault();
  window.removeEventListener('scroll', handleBaseScroll);
  start = 0;
  window.addEventListener('scroll', handleSearchScroll);
  filteredPassengersList = searchTable(passengersList);
})

form.addEventListener('reset', (evt) => {

  evt.preventDefault();
  window.scrollTo(0, 0);
  start = 0;
  window.removeEventListener('scroll', handleSearchScroll);
  window.addEventListener('scroll', handleBaseScroll);
  resetTable(passengersList);
})

window.addEventListener('scroll', handleBaseScroll);

renderTable(passengersList);

