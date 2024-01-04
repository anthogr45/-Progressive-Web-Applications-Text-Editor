const butInstall = document.getElementById('buttonInstall');

// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {

  console.log('beforeinstallprompt event triggered');
  window.deferredPrompt = event;
  butInstall.style.visibility = 'visible';
  // textHeader.textContent = 'Click the button to install!';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
let deferredPrompt = window.deferredPrompt
  deferredPrompt.prompt();
  window.deferredPrompt = null;
  butInstall.setAttribute('disabled', true);
  butInstall.textContent = 'Installed!';
});

// TODO: Add a handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  window.deferredPrompt = null;
  textHeader.textContent = 'Successfully installed!';
  console.log('👍', 'appinstalled', event);
});