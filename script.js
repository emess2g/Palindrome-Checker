/* 
A palindrome is a word or phrase that can be read the 
same way forwards and backwards, ignoring punctuation,
 case, and spacing.

Note: You'll need to remove all non-alphanumeric characters 
(punctuation, spaces and symbols)
 and turn everything into the same case 
 (lower or upper case) in order to check for palindromes.
*/



const checkInput = document.getElementById('check-btn');


checkInput.addEventListener('click', () => {
    const inputText = document.getElementById('text-input').value
    const result = document.getElementById('result');
 
    function cleanInputString(inputText, toLowerCase = true){
          // Remove non-alphanumeric characters using a regular expression
        let cleanedString = inputText.replace(/[^a-zA-Z0-9]/g, '');

       // Convert the string to lower or upper case based on the 'toLowerCase' parameter
        cleanedString = toLowerCase ? cleanedString.toLowerCase() : cleanedString.toUpperCase();

        return cleanedString.match(l);
    }
       if (inputText === "") {
        alert('Please input a value');
       } else if(cleanInputString(inputText)){    
         result.textContent =  ` ${inputText}  is a not palindrome  `;
       }
        else { 
        result.textContent =  ` ${inputText}  is a palindrome  `;
       }
});
