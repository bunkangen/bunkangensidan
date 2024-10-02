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
      document.getElementById('labels').textContent = jsonData.labels3.join(", ");
      
      // Display Series
      document.getElementById('series').textContent = jsonData.series3.join(", ");
      
      // Display Data (timestamps and temperatures)
      const dataList = document.getElementById('data');
      jsonData.data3.forEach(entry => {
        const listItem = document.createElement('li');
        const date = new Date(entry.x).toLocaleString(); // Convert timestamp to readable date
        listItem.textContent = `Date: ${date}, Temperature: ${entry.y}°C`;
        dataList.appendChild(listItem);
      });
    })
    .catch(error => {
      console.error('Error fetching the file:', error);
      document.getElementById('output').innerHTML = '<p>Failed to load data.</p>';
    });
});
