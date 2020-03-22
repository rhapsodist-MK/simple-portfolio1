const form = document.querySelector('#contact_form')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const form_el = new FormData(e.target)
  const email = form_el.get('email')
  const name = form_el.get('name')
  const phone = form_el.get('phone')
  const message = form_el.get('message')
  const link = `mailto:rhapsodist.mk@gmail.com?subject=${name} / ${email} / ${phone}&body=${message}`
  window.location.href = link
})