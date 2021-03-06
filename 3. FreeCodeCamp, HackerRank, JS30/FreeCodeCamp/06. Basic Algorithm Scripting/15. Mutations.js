// Basic Algorithm Scripting: Mutations

/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
*/

function mutation(arr) {
	var arr1 = arr[0].toLowerCase();
	var arr2 = arr[1].toLowerCase();
	for (var i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) < 0) return false;
	}
	return true;
}

// if (arr[0].toUpperCase() == arr[1].toUpperCase()) {
// 	return true;
// } else {
// 	return false;
// }

//mutation(["hello", "hey"]);
console.log(mutation(["hello", "hey"]));
console.log(mutation(["hia", "h"]));
// let a = "hello";
// let b = "Hello";

// if (a.toUpperCase() == b.toUpperCase()) {
// 	console.log("yup");
// } else {
// 	console.log("nop");
// }
