export const resetTable = (originalTableHTML) => {
    document.getElementById('userDataTable').innerHTML = originalTableHTML;
    document.getElementById('searchInput').value = '';
  };