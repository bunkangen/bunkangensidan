document.addEventListener('DOMContentLoaded', function () {
  // Fetch the flow.json file
  fetch('flow.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to load flow.json');
      }
      return response.json(); // Parse JSON response
    })
    .then(jsonData => {
      // Display Labels
      //document.getElementById('labels').textContent = jsonData.labels3.join(", ");
      
      // Display Series
      //document.getElementById('series').textContent = jsonData.series3.join(", ");
      
      // Display Data (timestamps and temperatures)
      const dataList1 = document.getElementById('data1');
      jsonData.data1.forEach(entry => {
        const listItem = document.createElement('li');
        const date = new Date(entry.x).toLocaleString(); // Convert timestamp to readable date
        listItem.textContent = `Date: ${date}, Temperature 1 Köket: ${entry.y}°C`;
        dataList1.appendChild(listItem);
      });

      const dataList2 = document.getElementById('data2');
      jsonData.data2.forEach(entry => {
        const listItem = document.createElement('li');
        const date = new Date(entry.x).toLocaleString(); // Convert timestamp to readable date
        listItem.textContent = `Date: ${date}, Temperature 2 Köket: ${entry.y}°C`;
        dataList2.appendChild(listItem);
      });

      const dataList3 = document.getElementById('data3');
      jsonData.data3.forEach(entry => {
        const listItem = document.createElement('li');
        const date = new Date(entry.x).toLocaleString(); // Convert timestamp to readable date
        listItem.textContent = `Date: ${date}, Temperature 3 Köket: ${entry.y}°C`;
        dataList3.appendChild(listItem);
      });

      const dataList4 = document.getElementById('data4');
      jsonData.data4.forEach(entry => {
        const listItem = document.createElement('li');
        const date = new Date(entry.x).toLocaleString(); // Convert timestamp to readable date
        listItem.textContent = `Date: ${date}, Temperature 4 Köket: ${entry.y}°C`;
        dataList4.appendChild(listItem);
      });
    })
    .catch(error => {
      console.error('Error fetching the file:', error);
      document.getElementById('output').innerHTML = '<p>Failed to load data.</p>';
    });
});
