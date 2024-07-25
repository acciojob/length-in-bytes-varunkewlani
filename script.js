const byteSize = (str) => {
	
	let size= new Blob([str]).size
	return size
  // write your code hzere
};

// Do not change the code below
const str = prompt("Enter some string.") 
alert(byteSize(str))
