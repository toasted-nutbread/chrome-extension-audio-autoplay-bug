function main() {
  const frame = document.createElement('iframe');
  frame.style.position = 'fixed';
  frame.style.left = '10px';
  frame.style.top = '10px';
  frame.style.width = '400px';
  frame.style.height = '200px';
  frame.style.border = '1px solid #000';
  frame.style.backgroundColor = '#fff';
  frame.style.zIndex = '10000000';
  frame.src = chrome.runtime.getURL('/example.html');
  document.body.appendChild(frame);
}

main();
