const $ = id => document.getElementById(id);
const MAX = 200;

// Modal
const dlg = $('dlg');
document.querySelectorAll('[data-open]').forEach(b => b.addEventListener('click', () => dlg.showModal()));
$('close').addEventListener('click', () => dlg.close());
dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });

// Validation
const rules = {
  name:     v => v.trim() ? '' : 'Enter your name.',
  email:    v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? '' : 'Enter a valid email, like you@example.com.',
  password: v => v.length >= 6 ? '' : 'Password needs at least 6 characters (' + v.length + ' so far).'
};
const fields = ['name', 'email', 'password'].map($);
const submit = $('submit');
function check(input) {
  const msg = rules[input.id](input.value);
  $('e-' + input.id).textContent = msg;
  input.classList.toggle('is-bad', !!msg);
  input.classList.toggle('is-ok', !msg);
  input.setAttribute('aria-invalid', msg ? 'true' : 'false');
  return !msg;
}
const allValid = () => fields.every(f => !rules[f.id](f.value));
const refresh = () => { submit.disabled = !allValid(); };
fields.forEach(f => {
  f.addEventListener('input', () => { check(f); refresh(); });
  f.addEventListener('blur', () => check(f));
});

// Character counter
const msg = $('msg');
function updateCount() {
  if (msg.value.length > MAX) msg.value = msg.value.slice(0, MAX);
  const n = msg.value.length;
  $('count').textContent = n + '/' + MAX + ' characters';
  $('remain').textContent = (MAX - n) + ' remaining';
  $('count').style.color = n >= MAX ? 'var(--bad)' : n >= 180 ? 'var(--warn)' : '';
  $('warn').textContent = n >= MAX ? 'Limit reached. You can\u2019t type more than ' + MAX + ' characters.' : '';
}
msg.addEventListener('input', updateCount);

$('toggle').addEventListener('click', e => {
  const p = $('password'), hide = p.type === 'password';
  p.type = hide ? 'text' : 'password'; e.target.textContent = hide ? 'Hide' : 'Show';
});
$('reg').addEventListener('submit', e => {
  e.preventDefault();
  fields.forEach(check);
  if (!allValid()) return;
  $('reg').classList.add('hidden'); $('done').classList.remove('hidden');
  $('doneTitle').textContent = 'You\u2019re on the list, ' + $('name').value.trim().split(' ')[0] + '!';
  $('doneText').textContent = 'Your pass will be sent to ' + $('email').value.trim() + '.';
});
$('again').addEventListener('click', () => {
  $('reg').reset();
  fields.forEach(f => { f.classList.remove('is-bad', 'is-ok'); f.removeAttribute('aria-invalid'); $('e-' + f.id).textContent = ''; });
  updateCount(); refresh(); $('done').classList.add('hidden'); $('reg').classList.remove('hidden');
});

$('menuBtn').addEventListener('click', () => {
  const open = $('mobileMenu').classList.toggle('hidden') === false;
  $('menuBtn').setAttribute('aria-expanded', open);
});
updateCount(); refresh();