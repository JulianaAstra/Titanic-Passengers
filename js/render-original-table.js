import { createTableRow } from "./create-table-row.js";

export const renderOriginalTable = (originalUserData) => {

    const tbody = document.querySelector('#userDataTable tbody');
    
    originalUserData.forEach(userData => {
      const row = createTableRow(userData);
      tbody.innerHTML += row;
    });

    return document.getElementById('userDataTable').innerHTML;
  };
