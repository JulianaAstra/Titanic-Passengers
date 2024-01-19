import { renderTable } from "./index.js";

export const searchTable = (data) => {
  
  const searchText = document.getElementById('searchInput').value;

  const newArray = data.filter((elem) => {
    for (const key in elem) {
      if (Object.prototype.hasOwnProperty.call(elem, key)) {
        const value = String(elem[key]);
        if (value.includes(searchText)) {
          return true; 
        }
      }
    }
    return false; 
  })

  document.querySelector('tbody').innerHTML = '';
  renderTable(newArray);
  return newArray;
};
