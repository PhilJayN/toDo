
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
        console.log ('clicked!');
        var inputValue = $inputFieldEl.val();
        //creates li, then puts user input value inside.
        var $listItem = $("<li>").text(inputValue);
        //creates an x button to use as delete btn
        var $delBtn = $("<span>").text("x");
        //append to DOM, or else dangling
        $listItem.append($delBtn);
        $todoEl.append($listItem);
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
