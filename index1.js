// var transformers = [
//   {
//     name: 'soundwave',
//     team: 'decepticons',
//     stats: {
//       strength: 8,
//       intellegence: 9,
//       speed: 2,
//       endurance: 6,
//       rank: 7,
//       courage: 5,
//       firepower: 6,
//       skill: 10,
//     }
//   },
//   {
//     name: 'bluestreak',
//     team: 'autobots',
//     stats: {
//       strength: 6,
//       intellegence: 6,
//       speed: 7,
//       endurance: 9,
//       rank: 5,
//       courage: 2,
//       firepower: 9,
//       skill: 7,
//     }
//   },
//   {
//     name: 'hubcap',
//     team: 'autobots',
//     stats: {
//       strength: 4,
//       intellegence: 4,
//       speed: 4,
//       endurance: 4,
//       rank: 4,
//       courage: 4,
//       firepower: 4,
//       skill: 4,
//     }
//   },
//   {
//     name: 'Optimus Prime',
//     team: 'autobots',
//     stats: {
//       strength: 4,
//       intellegence: 4,
//       speed: 4,
//       endurance: 4,
//       rank: 4,
//       courage: 4,
//       firepower: 4,
//       skill: 4,
//     }
//   },
//   {
//     name: 'Predaking',
//     team: 'decepticons',
//     stats: {
//       strength: 4,
//       intellegence: 4,
//       speed: 4,
//       endurance: 4,
//       rank: 4,
//       courage: 4,
//       firepower: 4,
//       skill: 4,
//     }
//   },
// ];


// getOverallStat = () => {
//   transformers.map((robot, i, array) => {
//     var robotStat = robot.stats;
//     var overall = robotStat.strength + robotStat.intellegence + robotStat.speed + robotStat.endurance + robotStat.firepower
//     console.log(robot.name, 'overall stat is', overall)
//   })
// }
// getOverallStat()

let autobots = [];
let decepticons = [];

search = (ele) => { //get the teams.
  let transformer = {
    name: {},
    team: {},
    stats: {
    }
  };

  if(event.keyCode === 13) {
    getInputValues('botName', Object.keys(transformer)[0])
    getInputValues('botTeam', Object.keys(transformer)[1])
    getInputValues('botStats', Object.keys(transformer)[2])
    console.log(transformer)
  }
}

addInputRow = () => {
  let extraInput = document.createElement('div')
  let inputsHTML = '\
  <input name="input" type="text" placeholder="Name" required />\
  <input name="input" type="text" placeholder="Team" required />\
  <input name="input" type="text" placeholder="Stats" required />\
  <input type="button" value="+ Add Transformer" onclick="addInputRow()">\
  <input type="button" value="- Remove Transformer" onclick="removeInputRow(this)">'
  extraInput.id = 'inputRow'
  extraInput.innerHTML = inputs;
  document.getElementById('teamForm').appendChild(extraInput)
}

removeInputRow = (input) => {
  document.getElementById('teamForm').removeChild(input.parentNode)
}

getInputValues = (name, transformer) => {
  console.log(transformer)
  let inputName = document.getElementById(name).name
  let inputValue = document.getElementById(name).value
  console.log(inputName)
  console.log(inputValue)
  if(inputName === transformer) {
    transformer.push({inputName: inputValue})
  }
}

searchValidator = (input) => {
  transformers.map((transformer, i) => {
    if(transformer.team === input) {
      divideIntoTeams(transformer)
    }
  })
  orderIntoRanks(autobots)
}

divideIntoTeams = (transformer) => {
  if(transformer.team === 'autobots') {
    autobots.push(transformer)
  } else if(transformer.team === 'decepticons') {
    decepticons.push(transformer)
  }
}

orderIntoRanks = (team) => { //order the bots according to rank.
  team.map((transformer, i) => {
    var transformerStats = transformer.stats.rank
    console.log(transformerStats)
    let sortedRank = transformerStats.sort((a, b) => {
      return a[1] - b[1]
    })
  })
  console.log(sortedRank)
}

faceOffBattle = () => { //takes bot from top of the list to face off against each other.

}







