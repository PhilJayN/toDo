
var list = (function () {
  // var list = [];

console.log('asdfjk');
    //DOM
      var $inputFieldEl = $("#input-field");
      var $buttonEl = $("#add-button");
      var $todoEl = $("#to-do");

      //bind events
      $buttonEl.on("click", addItem);

      function addItem () {
        console.log ('clik!');
        var inputValue = $inputFieldEl.val();
        // console.log('inputval', inputValue);
        // list.push(inputValue);
        $todoEl.text(inputValue);
      }

      return {
        addItem: addItem,
      };


}) ();




// function arrResult () {
//   console.log('array', list);
// }

// var buttonEl = document.getElementById("add-button");
// var inputEl = document.getElementById("input-field");
// var todoEl = document.getElementById('to-do');


















//
// var list = (function () {
//   var list = [];
//
//   //DOM
//   var buttonEl = document.getElementById("add-button");
//   var inputEl = document.getElementById("input-field");
//   var todoEl = document.getElementById('to-do');
//
//   //bind events
//
//   // buttonEl.onclick = function () {
//   //   document.write('asdfjkljkl;!');
//   // };
//   //
//
//   buttonEl.onclick = addItem () ;
//
//   function addItem () {
//     // inputEl.textContent(item);
//     var inputValue = inputEl.value();
//     list.push(inputValue);
//   }
//
//   function arrResult () {
//     console.log('array', list);
//   }
//
//   return {
//     addItem: addItem,
//     arrResult: arrResult
//   };
//
// }) ();
