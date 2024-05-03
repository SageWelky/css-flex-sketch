let containerGrids = document.querySelector( "#container-grids" );
let buttonAddGridAmount = document.querySelector( "#button-grid-number" );
let buttonResetDrawing = document.querySelector( "#button-reset-drawing");
let currentHoveredButton = [];


containerGrids.addEventListener( "mouseover", ( event ) => {

  let hoveredGrid = event.target;
  event.preventDefault;
  hoveredGrid.classList.add("active-grid");

});


buttonResetDrawing.addEventListener( "click", () => {

  let activeGrids = containerGrids.querySelectorAll(".active-grid");
  activeGrids.forEach( (activeGrid) => {
    activeGrid.classList.remove("active-grid");
  });

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

});


function gridSetter( numberOfSquaresPerSide ) {

  containerGrids.replaceChildren();

  let j = 1;
  let squareID;
  let divs = [];
  let div;

  while ( j < ( numberOfSquaresPerSide + 1 ) ) {

    for ( let i = 1; i < ( numberOfSquaresPerSide + 1 ); i++ ) {

      divs[i - 1] = div;
      div = document.createElement( "div" );
      squareID = j * i;
      div.setAttribute( "id", `grid-${squareID.toString()}` );
      div.style.width = `${100 / numberOfSquaresPerSide}%`;
      div.classList.add("grid-square");
      containerGrids.appendChild( div );
    }

    j++

  }
}

gridSetter( 2 );