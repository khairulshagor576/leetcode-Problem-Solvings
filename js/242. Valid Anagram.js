//242. Valid Anagram
const a = "anagram", b = "nagaram";

let isAnagram = function(s, t) 
{
    s = s.split("").sort();
    t = t.split("").sort();
    //console.log(s+"=="+t);

    if(s.length!==t.length)
    {
        return false;
    }

    for (let i = 0; i < s.length; i++) 
    {
      if(s[i]!==t[i])
      {
        return false;
      }
      
    }

    return true;
};

console.log(isAnagram(a,b));