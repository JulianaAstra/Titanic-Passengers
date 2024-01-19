export const createTableRow = (data) => {
  return `
    <tr>
      <td>${data.name}</td>
      <td>${data.gender}</td>
      <td>${data.survived}</td>
      <td>${data.age}</td>
    </tr>
    <tr>
      <td colspan="4">${data.ticket}</td>
    </tr>
    <tr>
      <td colspan="4">${data.cabin}</td>
    </tr>
      `;
};
