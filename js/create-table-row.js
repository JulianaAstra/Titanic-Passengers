export const createTableRow = (data) => {
  return `
    <tr>
      <td>${data.name}</td>
      <td>${data.gender}</td>
      <td>${data.survived}</td>
      <td colspan="2">${data.age}</td>
    </tr>
    <tr>
      <td colspan="3">${data.ticket}</td>
      <td colspan="4">${data.cabin}</td>
    </tr>
      `;
};
