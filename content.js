function extractLinks() {
    // Select all anchor tags with an href attribute on the page
    const links = Array.from(document.querySelectorAll('a[href]'));

    // Map the anchor tags to an array of href values
    return links.map(link => link.href);
}

// Send the extracted links to the background script
chrome.runtime.sendMessage({ action: 'extractedLinks', data: extractLinks() });

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'extractLinks') {
      const extractedLinks = extractLinks();
      chrome.runtime.sendMessage({ action: 'extractedLinks', data: extractedLinks });
    }
  });