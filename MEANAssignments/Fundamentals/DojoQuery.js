setTimeout(bindHandlersToFirstButton, 3000);

(function (globals) {
    var someHelperThingy = 24
    function $Dojo(selector){
      console.log("NEEDED THIS HELPER", someHelperThingy);
    if (!selector){
      return null
    }

    var selected
    // var single

    if (selector.match(/#.+/i)){
      selected = document.getElementById(selector.slice(1))
      // single = true
    } else if (selector.match(/\..+/i)){
      selected = document.getElementsByClassName(selector.slice(1))
      // single = false
    } else {
      selected = document.getElementsByTagName(selector)
      // single = false
    }



    selected.click = function(callback){
      console.log(this)
      this.onclick = function(){ callback() }
    }

    selected.hover = function(oncallback, offcallback = null){
      this.onmouseover = function(){ oncallback() }
      if (offcallback){
        this.onmouseout = function(){ offcallback() }
      }
    }

    return selected


  }
  globals.$Dojo = $Dojo;
  console.log("SET GLOBAL:", window.$Dojo);
})(window);

function bindHandlersToFirstButton(){
  console.log(someHelperThingy);
  $Dojo('#first-button').click(function(){console.log("Clicked!")})
  $Dojo('#first-button').hover(function(){console.log("Hover on!")}, function(){console.log("Hover off!")})

}
