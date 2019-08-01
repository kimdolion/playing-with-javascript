//Cake or Death?
//Computer randomly decides whether your response will result in cake or in death.
const cakeDeath = [
  'cake',
  'death'
]
const yourChoice = 1
console.log('You must choose: cake or death?')

const randomCakeDeath = cakeDeath[Math.floor(Math.random() * cakeDeath.length)]

console.log('Computer picked: ' + randomCakeDeath + '. Hope you enjoy ' + randomCakeDeath + '! Them\'s the rules.')
