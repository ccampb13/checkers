(function(){

  'use strict';

  $(document).ready(init);


  var $appleTeam = null;
  var $windowsTeam = null;
  var selectedPiece = null;
  // var selectedSpace

  function init(){
    $('tr:nth-child(even) td:nth-child(odd)').addClass('valid');
    $('tr:nth-child(odd) td:nth-child(even)').addClass('valid');
    $('#board').on('click', '.valid.current', selectPiece);
    // $('#board').on('click', '.valid.current', selectPlace);
    $('#start').click(start);

}

  function selectPiece(){
    selectedPiece = $(this);
    selectedPiece.toggleClass('selectedPiece');
    $('valid').on('click, selectSpace');
}

  function start(){

    $appleTeam = $('td.valid[data-y="0"], td.valid[data-y="1"], td.valid[data-y="2"]');
    $windowsTeam = $('td.valid[data-y="5"], td.valid[data-y="6"], td.valid[data-y="7"]');
    $appleTeam.addClass('player1 current checker');
    $windowsTeam.addClass('player2 checker');


    // $('tr:nth-child(even) td:nth-child(odd)').addClass('player1 current checker');
    // $('tr:nth-child(odd) td:nth-child(even)').addClass('player2 checker');



  }


})();
