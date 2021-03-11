var countAll=0,countVowel=0,countConsonant=0,countCharacter=0,countA=0,countE=0, countI=0, countO=0, countU=0;          
//This will store vowel-count in a string
// here input event is used which triggers whenever any changes to the input tag like textarea is made
document.getElementById("text").addEventListener("input",(event)=>{   
// each time any changes are made in textarea countAll which counts the no of all the characters entered increases by one
countAll++;

var textStorage;  
textStorage= document.getElementById("text").value;
let l=textStorage.length;
console.log(l);
let ch = textStorage.charAt(l-1);
console.log(textStorage);  
//to check content of textStorage
if(ch == 'a' ||ch=='A' || ch=='e' || ch=='E'||ch=='i'||ch=='I'||ch=='o'||ch=='O'||ch=='u'||ch=='U')
{
  countVowel++;
  console.log(countVowel);
  if(ch == 'a'||ch=='A')
  {
    countA++;
  }
  if(ch=='e'||ch=='E')
  countE++;
  if(ch=='i'||ch=='I')
  countI++;
  if(ch=='o'||ch=='O')
  countO++;
  if(ch=='u'||ch=='U')
  countU++;
}
else if(ch==' '||ch=='!' ||ch=='"'||ch=='#'||ch=='$'||ch=='%'||ch=='$'||ch=='\''||ch=='('||ch==')'||ch=='*'||ch=='+'||ch==','||ch=='-'||ch=='/'||ch==':'||ch==';'||ch=='<'||ch=='='||ch=='>'||ch=='?'||ch=='@'||ch=='['||ch==']'||ch=='\\'||ch=='^'||ch=='_'||ch=='`'||ch=='|'||ch=='}'||ch=='{'||ch=='~')
{
  countCharacter++;
  console.log(countCharacter);
}
else 
{
  countConsonant++;
  console.log(countConsonant);
}

document.getElementById("allCharacters").innerHTML=`Total characters entered are: ${countAll}`
document.getElementById("outputVowel").innerHTML=`Vowel count is: ${countVowel}`;
document.getElementById("outputConsonant").innerHTML=`Consonant count is: ${countConsonant}`;
document.getElementById("outputCharacter").innerHTML=`Special Characters count is: ${countCharacter}`
document.getElementById("individualVowel").innerHTML=`Count of A\'s or a\'s is: ${countA}
<br>
Count of E\'s or e\'s is: ${countE}
<br>
Count of I\'s or i\'s is: ${countI}
<br>
Count of O\'s or o\'s is: ${countO}
<br>
Count of U\'s or u\'s is: ${countU}`;
document.getElementById("content").style.visibility="visible";
});

// Creating a function RefreshThis to refresh all the data entred and remove the outputVowel as well
function RefreshThis()
{
  document.getElementById("text").value="";
  countVowel=0,countConsonant=0,countCharacter=0,countA=0,countAll=0,countE=0,coui=0,countO=0,countU=0;
  document.getElementById("allCharacters").innerHTML=`Total characters entered are: ${countAll}`
  document.getElementById("outputVowel").innerHTML= `Vowel count is: ${countVowel}`;
  document.getElementById("outputConsonant").innerHTML= `Consonant count is: ${countConsonant}`;
  document.getElementById("outputCharacter").innerHTML=`Special Characters count is: ${countCharacter}`
  document.getElementById("individualVowel").innerHTML=`Count of A\'s or a\'s is: ${countA}`
}