import '../stylesheets/style'

import docReady from 'es6-docready'

import fontawesome from '@fortawesome/fontawesome'
import faChevronDown from '@fortawesome/fontawesome-free-solid/faChevronDown'
import faBitbucket from '@fortawesome/fontawesome-free-brands/faBitbucket'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faGitlab from '@fortawesome/fontawesome-free-brands/faGitlab'
import faStapsher from '../faStapsher'

fontawesome.library.add([
  faChevronDown,
  faBitbucket,
  faGithub,
  faGitlab,
  faStapsher
])

const booleanMap = {
  true: true,
  false: false
}

docReady(() => {
  const body = document.body

  let navbarBurgers = body.querySelectorAll('.navbar-burger')

  navbarBurgers.forEach(burger => {
    burger.addEventListener('click', () => {
      let menu = body.querySelector(`#${burger.getAttribute('aria-controls')}`)

      burger.classList.toggle('is-active')
      menu.classList.toggle('is-active')

      burger.setAttribute(
        'aria-expanded',
        !booleanMap[burger.getAttribute('aria-expanded')]
      )
    })
  })

  let configOptionCards = body.querySelectorAll('.config-option-cards .card')

  configOptionCards.forEach(card => {
    card.querySelector('.card-header-icon').addEventListener('click', () => {
      card.classList.toggle('is-active')
    })
  })
})
