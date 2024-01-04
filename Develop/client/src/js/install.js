
// const butInstall = document.getElementById('buttonInstall');
// const textHeader = document.getElementById('textHeader');

// // Logic for installing the PWA
// // TODO: Add an event handler to the `beforeinstallprompt` event
// window.addEventListener('beforeinstallprompt', (event) => {

//   butInstall.style.visibility = 'visible';
//   textHeader.textContent = 'Click the button to install!';
// });

// // TODO: Implement a click event handler on the `butInstall` element
// butInstall.addEventListener('click', (event) => {
 
//   event.prompt();
//   butInstall.setAttribute('disabled', true);
//   butInstall.textContent = 'Installed!';
// });

// // TODO: Add a handler for the `appinstalled` event
// window.addEventListener('appinstalled', (event) => {
//   textHeader.textContent = 'Successfully installed!';
//   console.log('👍', 'appinstalled', event);
// });

const butInstall = document.getElementById('buttonInstall');
// const textHeader = document.getElementById('textHeader');
let deferredPrompt;

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {

  console.log('beforeinstallprompt event triggered');
  deferredPrompt = event;
  butInstall.style.visibility = 'visible';
  // textHeader.textContent = 'Click the button to install!';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', (event) => {

  deferredPrompt.prompt();
  butInstall.setAttribute('disabled', true);
  butInstall.textContent = 'Installed!';
});

// TODO: Add a handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  textHeader.textContent = 'Successfully installed!';
  console.log('👍', 'appinstalled', event);
});