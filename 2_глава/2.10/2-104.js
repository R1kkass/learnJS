
let login = prompt('Введите число', 0)

let message

message = login=='Сотрудник' ? 'Привет' : login == 'Директор' ? 'Здравствуйте' : login == '' ? 'Нет логина' : ''

alert(message)