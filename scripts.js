let containerGrids = document.querySelector( "#container-grids" );
let buttonAddGridAmount = document.querySelector( "#button-grid-number" );
let buttonResetDrawing = document.querySelector( "#button-reset-drawing");



containerGrids.addEventListener( "hover", ( event ) => {

  let hoveredGrid = event.target;
  event.preventDefault;

  hoverReaction( hoveredGrid.id );

});


buttonAddGridAmount.addEventListener( "click", () => {

  let gridAmountValid = false;
  let squaresPerSide = prompt( "How many sqaures per side?" );

  while ( !gridAmountValid ) {
    if ( Number.isInteger( parseInt( squaresPerSide ) ) ) {
      gridAmountValid = true;
    } else {
      squaresPerSide = prompt( "Invalid input, try again. How many sqaures per side?" );
    }
  }

  gridAmountValid = false;
  gridSetter( parseInt( squaresPerSide ) );
  console.log("grid sent");

});


function hoverReaction( gridID ) {

  console.log(gridID);
  let currentHoveredButton = document.querySelector(`#${gridID}`);
  currentHoveredButton.classList.add("active-grid");

}



function gridSetter( numberOfSquaresPerSide ) {

  containerGrids.replaceChildren();

  let j = 1;
  let squareID;
  let divs = [];
  let div;

  console.log( "sides sent: ", numberOfSquaresPerSide);

  while ( j < ( numberOfSquaresPerSide + 1 ) ) {
    console.log("row: ", j);
    console.log( "sides sent: ", numberOfSquaresPerSide);

    for ( let i = 1; i < ( numberOfSquaresPerSide + 1 ); i++ ) {

      divs[i - 1] = div;
      console.log("box id: ", div);
      div = document.createElement( "div" );
      squareID = j * i;
      div.setAttribute( "id", `grid-${squareID.toString()}` );
      div.style.width = `${100 / numberOfSquaresPerSide}%`;
      div.classList.add("grid-square");
      containerGrids.appendChild( div );
      console.log("column: ", i);
      console.log( "sides sent: ", numberOfSquaresPerSide);
    }

    j++

  }
}

gridSetter( 2 );