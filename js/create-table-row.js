export const createTableRow = (data) => {
  return `
    <tr class="tr_top">
      <td>${data.name}</td>
      <td>${data.gender}</td>
      <td>${data.survived}</td>
      <td colspan="2">${data.age}</td>
    </tr>
    <tr class="tr_bottom">
      <td colspan="3">${data.ticket}</td>
      <td colspan="4">${data.cabin}</td>
    </tr>
      `;
};
