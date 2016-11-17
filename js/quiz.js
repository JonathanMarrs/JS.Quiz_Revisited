var quiz = [
  [ 'What is the last name of the author who wrote "To Kill a Mockingbird?"', 'lee' ],
  [ 'What is the last name of the author who wrote "The Hobbit?"', 'tolkien' ],
  [ 'What is the last name of the author who wrote "Great Expectations?"', 'dickens' ]
];
var correctAnswers = [ ];
var wrongAnswers = [ ];
var score = 0;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function buildList(arr) {
  var listHTML = '<ol>';
    for (var i = 0; i < arr.length; i +=1 ) {
      listHTML += '<li>' + arr[i] + '</li>';
    }
    listHTML += '</ol>';
  return listHTML;
}

for (i = 0; i < quiz.length; i += 1 ) {
  var answer = prompt(quiz[i][0]);
  console.log(answer + ' = ' + quiz[i][1])
  if ( answer.toLowerCase() === quiz[i][1] ) {
    score += 1;
    console.log(score);
    correctAnswers.push( quiz[i][0] );
  } else {
    console.log( 'Wrong' )
    wrongAnswers.push( quiz[i][0] );
  }
};

console.log(correctAnswers.join (', '));
console.log(wrongAnswers.join (', '));
console.log(buildList(correctAnswers));
console.log(buildList(wrongAnswers));

html = '<h2>You got ' + score + ' question(s) correct.</h2>'
html += '<h2>You got these questions correct:</h2>';
html += buildList(correctAnswers);
html += '<h2>You got these questions wrong:</h2>';
html += buildList(wrongAnswers);
print(html)
