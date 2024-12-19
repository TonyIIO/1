function without(arr, ...values) {
   return arr.filter(element => !values.includes(element)); 
  } 
  export default without;
  