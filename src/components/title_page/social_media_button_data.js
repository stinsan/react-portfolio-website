class SocialMediaButton {
  constructor(href, icon) {
    this.href = href
    this.icon = icon
  }
}

// CHANGE THIS TO ADD MORE SOCIAL MEDIA LINKS TO THE TITLE PAGE.
export const buttons = [
  new SocialMediaButton('https://github.com/stinsan', 'fab fa-github'),
  new SocialMediaButton('https://www.linkedin.com/in/justin-santos-a36ab4191/', 'fab fa-linkedin')
]

export default buttons;
