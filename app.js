var app = angular.module("HangamaApp",[]);
app.controller("GameController", ['$scope',function($scope){
	var words=["rat","cat","bat","man","Hangman","Praveen","rohit","nilesh","nitin","rohan","dhoni","virat"];
	$scope.inCorrectLetterChoose=[];
	$scope.CorrectLetterChoose=[];
	$scope.guesses = 6;
	$scope.display = '';
	$scope.input = {
		letter : ''
	}
	var select = function(){
		var index = Math.round(Math.random()*words.length);
		return words[index];
	}
	var newGame = function(){
		$scope.inCorrectLetterChoose=[];
		$scope.CorrectLetterChoose=[];
		$scope.guesses = 6;
		$scope.display = '';
      	selectWord = select();
      	console.log(selectWord);
		var tempDisplayed = '';
		for (var i = 0; i<selectWord.length; i++) {
			tempDisplayed +='*';
		}
		console.log(tempDisplayed);
		$scope.display = tempDisplayed;
	}
$scope.letterChoosen = function(){

for(var i=0; i<$scope.CorrectLetterChoose.length; i++)
{
		if($scope.CorrectLetterChoose[i].toLowerCase() == $scope.input.letter.toLowerCase())
		{
			$scope.input.letter = "";
			return;
		}
}

for(var i=0; i<$scope.inCorrectLetterChoose.length; i++)
{
		if($scope.inCorrectLetterChoose[i].toLowerCase() == $scope.input.letter.toLowerCase())
		{
			$scope.input.letter = "";
			return;
		}
}

var correct = false;
for(var i = 0; i<selectWord.length; i++)
{
	if(selectWord[i].toLowerCase() == $scope.input.letter.toLowerCase())
	{
		$scope.display = $scope.display.slice(0,i)+$scope.input.letter.toLowerCase()+$scope.display.slice(i+1);
	    correct = true;
	}
}

if(correct)
{
	$scope.CorrectLetterChoose.push($scope.input.letter.toLowerCase());
}
else
{
	$scope.inCorrectLetterChoose.push($scope.input.letter.toLowerCase());
	$scope.guesses--;
}
$scope.input.letter = "";

if($scope.guesses == 0)
{
	alert("You Lost ohh !");
		newGame();
}
if($scope.display.indexOf("*")==-1)
{
	alert("You Won The Game Yeah !");
		newGame();
}


}
newGame();
}]);












