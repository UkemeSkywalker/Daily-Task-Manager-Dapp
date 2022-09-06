const abi = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"itemTitle_","type":"string"},{"indexed":true,"internalType":"string","name":"message","type":"string"},{"indexed":true,"internalType":"uint256","name":"time","type":"uint256"}],"name":"todoCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"itemTitle_","type":"string"},{"indexed":true,"internalType":"string","name":"message","type":"string"},{"indexed":true,"internalType":"uint256","name":"time","type":"uint256"}],"name":"todoMarkedAsDone","type":"event"},{"inputs":[{"internalType":"string","name":"_itemTitle","type":"string"},{"internalType":"string","name":"_creator","type":"string"}],"name":"createTodo","outputs":[{"components":[{"internalType":"string","name":"itemTitle","type":"string"},{"internalType":"string","name":"creator","type":"string"},{"internalType":"bool","name":"checked","type":"bool"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"}],"internalType":"struct taskManager.todoItem[]","name":"","type":"tuple[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"deleteTodo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_itemTitle","type":"string"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"editTodo","outputs":[{"components":[{"internalType":"string","name":"itemTitle","type":"string"},{"internalType":"string","name":"creator","type":"string"},{"internalType":"bool","name":"checked","type":"bool"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"}],"internalType":"struct taskManager.todoItem[]","name":"","type":"tuple[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"markAsDone","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"showAllTodo","outputs":[{"components":[{"internalType":"string","name":"itemTitle","type":"string"},{"internalType":"string","name":"creator","type":"string"},{"internalType":"bool","name":"checked","type":"bool"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"}],"internalType":"struct taskManager.todoItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"}]
export default abi