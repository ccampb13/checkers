(function(){

  'use strict';

  $(document).ready(init);


  var $appleTeam = null;
  var $windowsTeam = null;
  var selectedPiece = null;
  var originX = null;
  var originY = null;
  var selectedPlace = null;
  var destinationX = null;
  var destinationY= null;
  var turn = 1;
  var possible = null;

  function init(){
    $('#start').click(start);

    $('tr:nth-child(even) td:nth-child(odd)').addClass('valid');
    $('tr:nth-child(odd) td:nth-child(even)').addClass('valid');

    $appleTeam = $('td.valid[data-y="0"], td.valid[data-y="1"], td.valid[data-y="2"]');
    $windowsTeam = $('td.valid[data-y="5"], td.valid[data-y="6"], td.valid[data-y="7"]');

    $('#board').on('click','.valid.current', selectPiece);
    $('#board').on('click', 'td:not(.checker).valid', selectPlace);




}

  function selectPlace(){
    if(possible !== true){
      console.log('You did not select a checker');
      return;
    } else {
    selectedPlace = $(this);
    destinationX = $(selectedPlace).data('x');
    destinationY = $(selectedPlace).data('y');
    console.log('you moved a checker');
    console.log('The coordinates of the new space are ' + destinationX + ',' + destinationY);
  }

    if(turn > 0) {
      if((originX + 1 === destinationX || originX -1 === destinationX) && originY + 1 === destinationY){
        selectedPiece.removeClass('player1 checker selectedPiece current');
        $(this).addClass('player1 checker current');
      } else{
        return;
        }
      } else if (turn < 0){
        if((originX + 1 === destinationX || originX  -1 === destinationX) && originY - 1 === destinationY){
          selectedPiece.removeClass('player2 checker selectedPiece current');
          $(this).addClass('player2 checker current');
        }
    possible = false;
    }
    switchPlayer();
    turn *= -1;
    console.log(turn);
  }

  function switchPlayer(){
    $('.player1').toggleClass('current');
    $('.player2').toggleClass('current');


  }

  function selectPiece(){
    selectedPiece = $(this);
    selectedPiece.toggleClass('selectedPiece');
    originX = $(selectedPiece).data('x');
    originY = $(selectedPiece).data('y');
    console.log(originX, originY);
    console.log('you clicked a checker');
    console.log('The coordinates of this piece are ' + originX + ',' + originY);
    possible = true;

}

  function start(){


    $appleTeam.addClass('player1 current checker');
    $windowsTeam.addClass('player2 checker');


    // $('tr:nth-child(even) td:nth-child(odd)').addClass('player1 current checker');
    // $('tr:nth-child(odd) td:nth-child(even)').addClass('player2 checker');



  }


})();
