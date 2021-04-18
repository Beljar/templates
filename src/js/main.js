import '../styles/style.scss';

document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const el = document.createElement('div');
  el.appendChild(document.createTextNode('hello webpack'));
  body.appendChild(el);
});
