const leoName = 'Leo Musvaire';
const leoNumber = '2';
const leoStreet = 'Church St.';
const leoPostal = '3105';
const leoBalance = '-10';

const sarahName = 'Sarah    ';
const sarahSurname = 'Kleinhans';
const sarahBalance = '-4582.21000111';
const sarahNumber = '13';
const sarahStreet = 'William Close';
const sarahPostal = '0310';

// Only change below this line

const leo = {
	name: leoName, // Add leoSurname to concatenate both leoName and leoSurname
	balance: leoBalance,
	accessId: '47afb389-8014-4d0b-aff3-e40203d2107f', // Changed access id to accessId
	age: 24,
	address: {
		number: leoNumber,
		street: leoStreet,
		postalCode: leoPostal // Changed postal-code to postalCode
	}
};

const sarah = {
	name: sarahName.trim() +' ' + sarahSurname.trim(), //added the sarahName.trim and sarahSurname.trim syntax Corrected sarahName & Surname
	age: 62,
	accessId: '6b279ae5-5657-4240-80e9-23f6b635f7a8', // Changed access id to accessId
	balance: sarahBalance,
	address: {
		number: sarahNumber,
		street: sarahStreet,
		postalCode: sarahPostal // Changed postal-code to postalCode
	}
};

console.log(leo, leo.address.postalCode); // Corrected the syntax to access nested properties
console.log(sarah, sarah.address.postalCode); // Corrected the syntax to access nested properties
