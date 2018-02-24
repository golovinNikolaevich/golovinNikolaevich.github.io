// var myFamily = new Object()
// myFamily.iAm = 'Andrey';
// myFamily.wife = 'Nastia';
// myFamily.daughter = 'Nasty';
// myFamily.mother = 'Natasha';
// myFamily.son = 'Markus';

// var myFamily = {
// 	iAm: 'Andrey',
// 	wife: 'Nastia',
// 	daughter: 'Nasty',
// 	mother: 'Natasha',
// 	son: 'Markus',
// 	myChildren: function(){
// 		return this.daughter + ' ' + this.son;
// 	}
// }
// myFamily.father = 'Nikola';
// myFamily.name = function(){
// 	return this.iAm + ' ' + this.wife;
// }

// // delete myFamily.iAm;

// var x;
// var txt = '';
// for (x in myFamily){
// 	txt += myFamily[x] + '<br>';
// }
// document.getElementById('demo').innerHTML = txt;

// var myWife,
// 		myDaughter;

// function Person(first, last, age, eye){
// 	this.firstName = first;
// 	this.lastName = last;
// 	this.age = age;
// 	this.eyeColor = eye;
// }
// Person.prototype.love = 'LoveMy';

// myWife = new Person('Nasty', 'Golovina', 18, 'Green');
// myWife.husbend = 'Andrey';
// document.getElementById('demo').innerHTML = myWife.love + '<br>';
// myDaughter = new Person('Nastia', 'Golovina', 3, 'blue');
// document.getElementById('demo').innerHTML += myDaughter.love;