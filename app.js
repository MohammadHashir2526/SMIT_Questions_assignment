// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223
function reverse (x){
  x = x + ""
 return x.split("").reverse().join("");
}
  alert(reverse(32243));

//2. Write a JavaScript function that checks whether
// a passed string is palindrome or not?
function checkPalindrome(str) {
  var arr = str.split("");
  var value = '';
  for (var index = arr.length - 1; index >= 0; index--) {
      var element = arr[index];
      value += element;
  }
  if (str === value) {
      return true;
  } else {
      return false;
  }
};
alert(checkPalindrome("mom"));

//3. Write a JavaScript function that generates all combinations of a string.
function combu(s){
  var buff = [];
  var res = [];
  for (i=0;i<s.length;i++){
      buff = [s[i]];
      var index=0;
      while(res[index]){
          buff.push(""+res[index]+s[i]);
          index++;
      }
      res = res.concat(buff);
  }
  return res;
  }
  
  alert(combu("dog"));
  
//4. Write a JavaScript function that returns a passed string
// with letters in alphabetical order.
//zExample string : 'webmaster'
//Expected Output : 'abeemrstw'
function alphaOrder(n){
    n = n + "" ;
     return n.split("").sort().join("");
 }
 alert(alphaOrder("webmaster"));

// 5. Write a JavaScript function that accepts a string as a parameter
// and converts the first letter of each word of the string in upper case.
//Example string : 'the quick brown fox'
//Expected Output : 'The Quick Brown Fox '
function uppercase(str)
{
  var array1 = str.split(" ");
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(" ");
}
console.log(uppercase("the quick brown fox"));

//6. Write a JavaScript function that accepts a string as a parameter
// and find the longest word within the string.
function longestWord(a) {
  var str = a.split(" ");
  var longest = 0;
  var word = null;
  for (var i = 0; i < str.length - 1; i++) {
      if (longest < str[i].length) {
          longest = str[i].length;
          word = str[i];
      }
  }
  return word;
}
alert(longestWord("Web Development Tutorial"));

//7. Write a JavaScript function that accepts a string as a parameter
// and counts the number of vowels within the string.
function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
alert(vowel_count("The quick brown fox"));

//8. Write a JavaScript function that accepts a number as a parameter
// and check the number is prime or not.
function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

alert(test_prime(37));

//10. Write a JavaScript function which will take an array of numbers stored
// and find the second lowest and second greatest numbers, respectively.
function Second_Greatest_Lowest(arr_num)
{
  arr_num.sort(function(x,y)
           {
           return x-y;
           });
  var uniqa = [arr_num[0]];
  var result = [];
  
  for(var j=1; j < arr_num.length; j++)
  {
    if(arr_num[j-1] !== arr_num[j])
    {
      uniqa.push(arr_num[j]);
    }
  }
    result.push(uniqa[1],uniqa[uniqa.length-2]);
  return result.join(",");
  }

alert(Second_Greatest_Lowest([1,2,3,4,5]));