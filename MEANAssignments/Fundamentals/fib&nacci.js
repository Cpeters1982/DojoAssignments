function fib() {
  // Some variables here

  var prevprev = 0
  var prev = 1

  function nacci() {
    console.log(prev)
    var next = prevprev + prev
    prevprev = prev
    prev = next
  }
  return nacci
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"
