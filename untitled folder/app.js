// // some game
//
//
// const player1 = {};
// // // swetha {
// // eyes: brown,
// // hair: darkbrown,
// // age : 21,
// // height 5'7"
// //
// // }
// const player2 = {};
//
// const allplayers = [player1, player2]
//
// const initPlayers = (list, number = 0) => {
//   return list[number]
// }

// let player

$(() => {
  //variables
    let player = 1; // change later
    const playerA = {
      color: '#F60303',
      points: 0
    };
    const playerB = {
      color: '#042AFF',
      points: 0
    };
    const players = [playerA, playerB]
    let hArray = [];
    let vArray = [];
  
  
  //functions
  const switchPlayer = () => {
    player === 1 ? player++ : player === 2? player -- : player = 1
    return `player is ${player}`
  }
  
  
    const initialize= (num) => {
      players[num]; // not a nice way to switch player
      render();
    };
  
    const lineHover = (event) => {
      const element = event.currentTarget;
      if($(element).data('clicked')){
        return;
      } else if (player === 1) {
        $(element).css('background-color', playerA.color);
      } else if (player === 2) {
        $(element).css('background-color', playerB.color);
      }
    };
  
    const lineUnhover = (event) => {
      const check = 'check';
      console.log(`check${this}`)
      if($(event.currentTarget).data('clicked')){
        return;
      } else {
        $(event.currentTarget).css('background-color', 'transparent');
      }
    };
  
    const getAdjCells = (lineId) => {
      let lineNum = parseInt(lineId.splice(1));
      let cells = [];
      let hasTwoCells;
      if(lineId[0] === 'h') {
        hArray[lineNum] = player;
        let row = Math.min((Math.floor(lineNum/4)), 4);
        console.log(row);
        hasTwoCells = (row !== 4 && row !== 0);
        let col = Math.min((Math.floor(lineNum-4*row)), 4-1);
        row -= row === 4 ? 1 : 0;
        console.log(row);
        cells.push({row: row, col: col});
        if (hasTwoCells) cells.push({row: row-1, col: col});
      } else {
        vArray[lineNum] = player;
        let col = Math.min((Math.floor(lineNum/4)), 4);
        hasTwoCells = (col !== 4 && col !== 0);
        let row = Math.min((Math.floor(lineNum-4*col)), 4-1);
        col -= col === 4 ? 1 : 0;
        cells.push({row: row, col: col-1});
      }
      return cells;
    }
    const tempWinFunction = (player) => {
      if (player.points === 20){
        $('body').html(`<h1>YOU Have WON Player A</h1>`);
      }
    }
    // const render = () => {
    //
    //   const lineColor= (lnArray, i, line) => {
    //     if(lnArray[i] === 1) {
    //       $(line).css('background-color', playerA.color).data('clicked', true);
    //     } else if (lnArray[i] === 2) {
    //       $(line).css('background-color', playerB.color).data('clicked', true);
    //     } else if (lnArray[i] === false){
    //       $(line).css('background-color', 'transparent');
    //     }
    //   }
    //
    //   hArray.forEach(function(ln, idx) {
    //     let $ln = $(`#h${idx}`);
    //     lineColor(hArray, idx, $ln);
    //   });
    //   vArray.forEach(function(ln, idx) {
    //     let $ln = $('#v' + idx);
    //     lineColor(vArray, idx, $ln);
    //   });
    // };
  
    const handleClick = (event) => {
      console.log('clicked')
      const element = event.currentTarget;
      if($(element).data('clicked')){
        return;
      } else if (player === 1) {
        $(element).css('background-color', playerA.color);
      } else if (player === 2) {
        $(element).css('background-color', playerB.color);
      }
      $(element).off('mouseleave');
      $(element).off('mouseenter');
      if (player === 1) {
        playerA.points ++;
        document.getElementById('s1').innerText = `${playerA.points}`
            tempWinFunction(playerA);
      }
      if (player === 2){
        playerB.points ++;
              document.getElementById('s2').innerText = `${playerB.points}`
                tempWinFunction(playerB);
      }
      switchPlayer();
  
      // render ();
  
    }

    // const checkForBox = (cell) => {
    //   const lineNum = parseInt(lineId.splice(1));
    //   if($(`#h${lineNum + 4}`).data('clicked') && (`#v${lineNum + 4}`).data('clicked'))

    //   let row = cell.row;
    //   let col = cell.col;
    //   let t = row * 4 + col;
    //   let b = t +
    //   let l
    //   let r
    //   return [hArray[t], vArray[r], hArray[b], vArray[l]];
    // }
  
    // checkforbox = (id) => {
    //   const num = parseInt(id.split('')[1], 10);
    //   if ($(`#h${num + 4}`))
    //   ($(`#v${num + 4}`))
    
    
    //   $
  
  
    $line = $('.line');
    $line.on('click', handleClick);
    $line.on('mouseenter', lineHover);
    $line.on('mouseleave', lineUnhover);
  
  
  
  });
  