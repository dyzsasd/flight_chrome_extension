chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'extractedLinks') {
      sendDataToAPI(request.data);
    }
  });
  
  async function sendDataToAPI(data) {
    const apiUrl = 'https://your-api-endpoint.com';
  
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({data})
      });
  
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
  
      console.log('Data sent successfully');
    } catch (error) {
      console.error(`Failed to send data to API: ${error.message}`);
    }
  }
  