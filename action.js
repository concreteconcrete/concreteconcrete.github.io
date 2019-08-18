function on_load() {
  const dialog = document.getElementById('dialog-full-container');
  dialog.style.opacity = 1.0;
}

function close_dialog() {
  const dialog = document.getElementById('dialog-full-container');
  dialog.style.opacity = 0.0;
  dialog.style.pointerEvents = 'none';
}
