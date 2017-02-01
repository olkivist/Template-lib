function exec(func, arg){
	func(arg);
}

exec(
	(message) => {console.log(message);}, 'Hi, there'
);


window.setTimeout(
	(message) => {console.log(message);}, 3000, 'Hi, there'
);


