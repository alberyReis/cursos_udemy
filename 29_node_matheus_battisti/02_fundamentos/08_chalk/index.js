import chalk from 'chalk'

const nota = 5

if(nota >= 7) {
  console.log(chalk.bgBlue.green('Parabens! Você está aprovado!'))
} else {
  console.log(chalk.bgYellow.red('Você precisa fazer a prova de recuperação!'))
}