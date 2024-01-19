import { renderTable } from "./index.js";

export const resetTable = (data) => {

    document.querySelector('tbody').innerHTML = '';
    document.getElementById('searchInput').value = '';
    renderTable(data);
};
