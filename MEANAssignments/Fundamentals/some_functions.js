function runningLogger(){
  console.log('I am running');
}

function multiplyByTen(input){
  return input*10;
}

multiplyByTen(5);

function stringReturnOne(){
  return "First hardcoded string";
}

function stringReturnTwo(){
  return "Second hardcoded string";
}

function caller(input){
  if (typeOf(input) == Function){
    input();
  }
}

function myDoubleConsoleLog(param1, param2){
  if (typeOf(param1) == Function){
    console.log(param1());
  }
  if(typeOf(param2) == Funtion){
    console.log(param2());
  }
}

function caller2(input){
  console.log('starting')
  setTimeout(function(){
    if(typeOf(input) == Function){
      input();

    }
    console.log('ending?')
    return "interesting"
  }, 2000)
}

caller2(myDoubleConsoleLog)
