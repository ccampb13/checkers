(function(){

  'use strict';

  $(document).ready(init);


  var $appleTeam = null;
  var $windowsTeam = null;

  var selectedPlace = null;
  var selectedPiece = null;

  var originX = null;
  var originY = null;


  var destinationX = null;
  var destinationY= null;

  var adjacentBL = null;
  var adjacentBR = null;
  var adjacentTL = null;
  var adjacentTR = null;

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
      } else if ((originX + 2 === destinationX && originY + 2 === destinationY) && adjacentBR.hasClass('player2 checker')) {
        selectedPiece.removeClass('player1 selectedPiece checker current');
        selectedPlace.addClass('player1 checker current');
        adjacentBR.removeClass('player2 checker');
      } else if ((originX - 2 === destinationX && originY + 2 === destinationY) && adjacentBL.hasClass('player2 checker')) {
        selectedPiece.removeClass('player1 selectedPiece checker current');
        selectedPlace.addClass('player1 checker current');
        adjacentBR.removeClass('player2 checker');
      } else {
        return;
      }

  } else if (turn < 0){
      if((originX + 1 === destinationX || originX  -1 === destinationX) && originY - 1 === destinationY){
        selectedPiece.removeClass('player2 checker selectedPiece current');
        $(this).addClass('player2 checker current');
      } else if ((originX + 2 === destinationX && originY - 2 === destinationY) && adjacentTR.hasClass('player1 checker')) {
        selectedPiece.removeClass('player2 selectedPiece checker current');
        selectedPlace.addClass('player2 checker current');
        adjacentTR.removeClass('player1 checker');
      } else if ((originX - 2 === destinationX && originY - 2 === destinationY) && adjacentTL.hasClass('player1 checker')) {
        selectedPiece.removeClass('player2 selectedPiece checker current');
        selectedPlace.addClass('player2 checker current');
        adjacentTL.removeClass('player1 checker');
      } else {
        return;
        }
    }
    possible = false;

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
    adjacentBL = $('td[data-x =' + (originX -1) +'][data-y = ' + (originY + 1) + ']');
    adjacentBR = $('td[data-x =' + (originX +1) +'][data-y = ' + (originY + 1) + ']');
    adjacentTL = $('td[data-x =' + (originX -1) +'][data-y = ' + (originY - 1) + ']');
    adjacentTR = $('td[data-x =' + (originX +1) +'][data-y = ' + (originY - 1) + ']');

    console.log(originX, originY);
    console.log('you clicked a checker');
    console.log('The coordinates of this piece are ' + originX + ',' + originY);
    possible = true;

}

  function start(){


    $appleTeam.addClass('player1 current checker');
    $windowsTeam.addClass('player2 checker');
  }


})();
