
var list = (function () {
    //DOM
      var $inputFieldEl = $("#input-field");
      var $buttonEl = $("#add-button");
      var $todoEl = $("#to-do");
      var $listItemEl;
      var $delBtnEl;

      //bind events
      $buttonEl.on("click", addItem);

      function addItem () {
        console.log ('clicked!');
        var inputValue = $inputFieldEl.val();
        //creates li, then puts user input value inside.
        $listItemEl = $("<li>");
        $listItemEl.text(inputValue);
        //creates an x button to use as delete btn
        $delBtnEl = $("<span>");
        $delBtnEl.addClass("x-btn").text("x");
        //append to DOM
        $listItemEl.append($delBtnEl);
        $todoEl.append($listItemEl);

        // return {
        //   $listItemEl: $listItemEl,
        //   $delBtnEl: $delBtnEl
        // };
      }

      function delItem () {
        console.log('clikced del');
      }

      $listItemEl.on("click", delItem);

      // var $spanEl = $(".x-btn");
      // $spanEl.on("click", function () {
      //   console.log('23j4kljkl;sd');
      // });


      return {
        addItem: addItem,
      };
}) ();


console.log('additem', list.addItem);














// var $spanEl = $(".x-btn");
// $spanEl.on("click", function() {
//   console.log('del!');
// });


      //
      // function addItem () {
      //   console.log ('clicked!');
      //   var inputValue = $inputFieldEl.val();
      //   //creates li, then puts user input value inside.
      //   var $listItem = $("<li>").text(inputValue);
      //   //creates an x button to use as delete btn
      //   var $delBtn = $("<span>").addClass("x-btn").text("x");
      //   //append to DOM
      //   $listItem.append($delBtn);
      //   $todoEl.append($listItem);
      //
      //   return {
      //     $listItem: $listItem,
      //     $delBtn: $delBtn
      //   };
      //
      //
      // }

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
