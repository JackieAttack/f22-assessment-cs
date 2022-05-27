//1. Sum Zero
function addToZero(arr) {
    for(i = 0; i < arr.length; i++) {
        for(j = 0; j < arr.length; j++) {
            if(arr[i] + arr[j] === 0 && i !== j) {
                return true
            }
        }
    }
    return false
}
//This function has O(n^2) run time
//space complexity O(1)

//2. Unique Characters
function hasUniqueChars(word) {
    for(i = 0; i < word.length; i++) {
        for(j = 0; j < word.length; j++) {
            if(word[i] === word[j] && i !== j) {
                return false
            }
        }
    }
    return true
}

//O(n^2) run time because it has 2 nested for loops
//space complexity O(1)

//3. Pangram Sentence
const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

function isPangram(sentence) {
    let alphCount = 0
    for(i = 0; i < alphabet.length; i++) {
        for(j = 0; j < sentence.length; j++) {
            if(sentence[j].toLowerCase() === alphabet[i]) {
                alphCount += 1
                break
            }
        }
    }

    if(alphCount === alphabet.length) {
        return true
    } else {
        return false
    }
}
//I think this is O(n) run time, because even though there's 2 nested for loops the alphabet for loop will alway run 26 times.
//space complexity O(1)

//4. Longest Word
function findLongestWord(arr) {
    let longestLength = arr[0].length
    for(i = 0; i < arr.length; i++) {
        longestLength = Math.max(arr[i].length, longestLength)
    }
    return longestLength
}
// O(n) run time
//space compexity O(1)