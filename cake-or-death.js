//Cake or Death?
//Computer randomly decides whether your response will result in cake or in death.
const cakeDeath = [
  'cake',
  'death'
]
let yourChoice = prompt( 'You must choose: 1 for cake or 2 for death?' )
console.log( yourChoice )
while (yourChoice != 1 && yourChoice != 2) {
  console.log('You must choose cake (1) or death (2)!')
  console.log(yourChoice)
  if (yourChoice === 1) {
    console.log('You chose cake!')
  } else if (yourChoice === 2) {
    console.log('You chose death!')
  }
}
while (yourChoice === 1 || yourChoice === 2){
  const randomCakeDeath = cakeDeath[Math.floor(Math.random() * cakeDeath.length)]
  console.log('Computer decided you get: ' + randomCakeDeath + '. Hope you enjoy ' + randomCakeDeath + '! Them\'s the rules.')
}
