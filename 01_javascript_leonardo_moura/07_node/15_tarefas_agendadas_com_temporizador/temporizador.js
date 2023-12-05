const schedule = require('node-schedule')

const tarefa01 = schedule.scheduleJob('*/5 * * * * *', function () {
    console.log('Executando tarefa 1!', new Date().getSeconds())
})

setTimeout(function() {
    tarefa01.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 23
regra.second = 50

const tarefa02 = schedule.scheduleJob(regra, function() {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})
