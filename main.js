

/*
 *  Setup
 **/

function getLetters() {
    let typedText = document.getElementById("textInput").value;
    typedText = typedText.toLowerCase();
    // This changes all the letter to lower case.

    typedText = typedText.replace(/[^a-z'\s]+/g, "");
    // This gets rid of all the characters except letters, spaces, and apostrophes.
    // We will learn more about how to use the replace function in an upcoming lesson.

    return typedText;
}

function countLetters(text) {
    const letterCounts = {};
    for(let i = 0; i < text.length; i++) {
        currentLetter = text[i];
        if(letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1;
        } else {
            letterCounts[currentLetter]++;
        }
    }
    return letterCounts;
}

function printLetters(letterArray) {
    for(letter in letterArray) {
        let span = document.createElement("span");
        let textContent = document.createTextNode('"' + letter + "\": " + letterArray[letter] + ", ");
        span.appendChild(textContent);
        document.getElementById("lettersDiv").appendChild(span);
    }
}

function getWords() {
    let typedText = document.getElementById("textInput").value;
    typedText = typedText.toLowerCase();
    // This changes all the letter to lower case.

    typedText = typedText.replace(/[^a-z'\s]+/g, "");
    // This gets rid of all the characters except letters, spaces, and apostrophes.
    // We will learn more about how to use the replace function in an upcoming lesson.

    return typedText.split(/\s/);
}

function countWords(words) {
    const wordCounts = {};
    for(let word of words) {
        if(wordCounts[word] === undefined) {
            wordCounts[word] = 1;
        } else {
            wordCounts[word]++;
        }
    }
    return wordCounts;
}

function printWords(wordArray) {
    wordArray = wordArray.values().sort();
    for(word in wordArray) {
        let span = document.createElement("span");
        let textContent = document.createTextNode('"' + word + "\": " + wordArray[word] + ", ");
        span.appendChild(textContent);
        document.getElementById("wordsDiv").appendChild(span);
    }
}

    /*
    *  MAIN
    * */

(() => {
    document.getElementById("countButton").onclick = function() {
        printLetters(countLetters(getLetters()));
        printWords(countWords(getWords()));
    }
})();
