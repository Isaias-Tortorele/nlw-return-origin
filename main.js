window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  // verificar se a seção passou da linha
  // quais dados vou precisar?
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

<<<<<<< HEAD
  // verificar se a base está abaixo da linha alvo
=======
  // o topo da seção chegou ou ultrapassou a linha alvo?
  const sectionTopReachOrPassedTargetline = targeLine >= sectionTop
  // console.log(
  //   'o Topo da seção chegou ou passou da linha alvo?',
  //   sectionTopReachOrPassedTargetline
  // )
>>>>>>> 6c19dc63d76e72cbeab6cd439ecb0b283a400b4c

  const sectionEndsAt = sectionTop + sectionHeight
<<<<<<< HEAD
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine
=======

  // o final da seção passou da linha alvo
  const sectionEndPassedTargetline = sectionEndsAt <= targeLine
  // console.log('O fundo da seção passou da linha?', sectionEndPassedTargetline)
>>>>>>> 6c19dc63d76e72cbeab6cd439ecb0b283a400b4c

  // limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigationId.classList.add('scroll')
  } else {
    navigationId.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .card
  #about, 
  #about header, 
  #about .content`)
