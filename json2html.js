// json2html.js

export default function json2html(data) {
    // Extract the unique column headers
    const columns = Array.from(new Set(data.flatMap(Object.keys)));
  
    // Start building the HTML table as a string
    let html = `<table data-user="mdarbaz3636@gmail.com">`;
  
    // Create the table header
    html += `<thead><tr>`;
    columns.forEach(column => {
      html += `<th>${column}</th>`;
    });
    html += `</tr></thead>`;
  
    // Create the table body
    html += `<tbody>`;
    data.forEach(row => {
      html += `<tr>`;
      columns.forEach(column => {
        html += `<td>${row[column] !== undefined ? row[column] : ''}</td>`;
      });
      html += `</tr>`;
    });
    html += `</tbody></table>`;
  
    return html;
  }
  