export const searchTable = () => {

    const searchText = document.getElementById('searchInput').value.toLowerCase();
    const rows = document.querySelectorAll('#userDataTable tbody tr');

    rows.forEach(row => {
      const rowData = row.textContent.toLowerCase();
      if (rowData.includes(searchText)) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  };