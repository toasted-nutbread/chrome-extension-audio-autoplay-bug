function main() {
  setTimeout(tryAutoPlay, 3000);
}

async function tryAutoPlay() {
  const url = chrome.runtime.getURL('/audio.wav');
  const audio = new Audio(url);
  audio.currentTime = 0;
  audio.volume = 1;
  const playPromise = audio.play();
  const resultNode = document.querySelector('#result');
  let error = null;
  try {
    await playPromise;
  } catch (e) {
    error = e;
  }
  resultNode.style.color = (error !== null ? 'red' : 'green');
  resultNode.textContent = (error !== null ? `${error}` : 'No error');
}

main();
