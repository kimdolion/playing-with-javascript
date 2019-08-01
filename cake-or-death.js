//Cake or Death?
//Computer randomly decides whether your response will result in cake or in death.
const cakeDeath = [
  'cake',
  'death'
]
console.log( 'You must choose: 1 for cake or 2 for death. Make your choice.' )
const yourChoice = 1
console.log( yourChoice )
if (yourChoice === 1 || yourChoice === 2) {
  if (yourChoice === 1) {
    console.log('You chose cake!')
  } else if (yourChoice === 2) {
    console.log('You chose death!')
  } else {
    console.log('You didn\'t choose either! Pick cake or death!')
  }
}
for (let i = 1; i <= 3; i++) {
  const randomCakeDeath = cakeDeath[Math.floor(Math.random() * cakeDeath.length)]
  console.log('Computer ' + i + ' decided you get: ' + randomCakeDeath + '. Hope you enjoy ' + randomCakeDeath + '! Them\'s the rules.')
}
