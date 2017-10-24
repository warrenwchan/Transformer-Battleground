let idCount = 0;
let battleCount = 0;
let transformers = [];
let transformer = {};
let stat = [];
let autobots = [];
let decepticons = [];
let win = [];
let primeFaceOff = false
let botListHTML = `<div class="botCard">
                    <div id="botIdentity" class="botForm">
                      <input id="botName" name="name" type="text" placeholder="Name" value="Soundwave" required />
                      <input id="botTeam" name="team" type="text" placeholder="Team" value="Decepticons" required />
                    </div>
                    <div id="botStats" class="botForm">
                      <input id="strengthStat" name="strength" type="text" placeholder="Strength" value="8"  required />
                      <input id="intellegentStat" name="intellegence" type="text" placeholder="Intellegence"  value="9" required />
                      <input id="speedStat" name="speed" type="text" placeholder="Speed" value="2" required />
                      <input id="enduranceStat" name="endurance" type="text" placeholder="Endurance" value="6"  required />
                      <input id="rankStat" name="rank" type="text" placeholder="Rank" value="7"  required />
                      <input id="courageStat" name="courage" type="text" placeholder="Courage" value="5"  required />
                      <input id="firepowerStat" name="firepower" type="text" placeholder="Firepower" value="6"  required />
                      <input id="skillStat" name="skill" type="text" placeholder="Skill" value="10"  required />
                    </div>
                    <input type="button" onclick="removeBotCard(this)" value="- Remove Transformer">
                  </div>
                    <div class="botCard">
                      <div id="botIdentity" class="botForm">
                        <input id="botName" name="name" type="text" placeholder="Name" value="Bluestreak" required />
                        <input id="botTeam" name="team" type="text" placeholder="Team" value="Autobots" required />
                      </div>
                      <div id="botStats" class="botForm">
                        <input id="strengthStat" name="strength" type="text" placeholder="Strength" value="6"  required />
                        <input id="intellegentStat" name="intellegence" type="text" placeholder="Intellegence"  value="6" required />
                        <input id="speedStat" name="speed" type="text" placeholder="Speed" value="7" required />
                        <input id="enduranceStat" name="endurance" type="text" placeholder="Endurance" value="9"  required />
                        <input id="rankStat" name="rank" type="text" placeholder="Rank" value="5"  required />
                        <input id="courageStat" name="courage" type="text" placeholder="Courage" value="2"  required />
                        <input id="firepowerStat" name="firepower" type="text" placeholder="Firepower" value="9"  required />
                        <input id="skillStat" name="skill" type="text" placeholder="Skill" value="7"  required />
                      </div>
                      <input type="button" onclick="removeBotCard(this)" value="- Remove Transformer">
                    </div>
                    <div class="botCard">
                      <div id="botIdentity" class="botForm">
                        <input id="botName" name="name" type="text" placeholder="Name" value="Hubcap" required />
                        <input id="botTeam" name="team" type="text" placeholder="Team" value="Autobots" required />
                      </div>
                      <div id="botStats" class="botForm">
                        <input id="strengthStat" name="strength" type="text" placeholder="Strength" value="4"  required />
                        <input id="intellegentStat" name="intellegence" type="text" placeholder="Intellegence"  value="4" required />
                        <input id="speedStat" name="speed" type="text" placeholder="Speed" value="4" required />
                        <input id="enduranceStat" name="endurance" type="text" placeholder="Endurance" value="4"  required />
                        <input id="rankStat" name="rank" type="text" placeholder="Rank" value="4"  required />
                        <input id="courageStat" name="courage" type="text" placeholder="Courage" value="4"  required />
                        <input id="firepowerStat" name="firepower" type="text" placeholder="Firepower" value="4"  required />
                        <input id="skillStat" name="skill" type="text" placeholder="Skill" value="4"  required />
                      </div>
                      <input type="button" onclick="removeBotCard(this)" value="- Remove Transformer">
                    </div>
                    <div class="botCard">
                      <div id="botIdentity" class="botForm">
                        <input id="botName" name="name" type="text" placeholder="Name" value="Optimus Prime" required />
                        <input id="botTeam" name="team" type="text" placeholder="Team" value="Autobots" required />
                      </div>
                      <div id="botStats" class="botForm">
                        <input id="strengthStat" name="strength" type="text" placeholder="Strength" value="10"  required />
                        <input id="intellegentStat" name="intellegence" type="text" placeholder="Intellegence"  value="10" required />
                        <input id="speedStat" name="speed" type="text" placeholder="Speed" value="10" required />
                        <input id="enduranceStat" name="endurance" type="text" placeholder="Endurance" value="10"  required />
                        <input id="rankStat" name="rank" type="text" placeholder="Rank" value="10"  required />
                        <input id="courageStat" name="courage" type="text" placeholder="Courage" value="10"  required />
                        <input id="firepowerStat" name="firepower" type="text" placeholder="Firepower" value="10"  required />
                        <input id="skillStat" name="skill" type="text" placeholder="Skill" value="10"  required />
                      </div>
                      <input type="button" onclick="removeBotCard(this)" value="- Remove Transformer">
                    </div>
                    <div class="botCard">
                      <div id="botIdentity" class="botForm">
                        <input id="botName" name="name" type="text" placeholder="Name" value="Predaking" required />
                        <input id="botTeam" name="team" type="text" placeholder="Team" value="Decepticons" required />
                      </div>
                      <div id="botStats" class="botForm">
                        <input id="strengthStat" name="strength" type="text" placeholder="Strength" value="10"  required />
                        <input id="intellegentStat" name="intellegence" type="text" placeholder="Intellegence"  value="10" required />
                        <input id="speedStat" name="speed" type="text" placeholder="Speed" value="10" required />
                        <input id="enduranceStat" name="endurance" type="text" placeholder="Endurance" value="10"  required />
                        <input id="rankStat" name="rank" type="text" placeholder="Rank" value="10"  required />
                        <input id="courageStat" name="courage" type="text" placeholder="Courage" value="10"  required />
                        <input id="firepowerStat" name="firepower" type="text" placeholder="Firepower" value="10"  required />
                        <input id="skillStat" name="skill" type="text" placeholder="Skill" value="10"  required />
                      </div>
                      <input type="button" onclick="removeBotCard(this)" value="- Remove Transformer">
                    </div>
                  </div>`


// Tracks the count of input rows appended to the DOM and gives each input row an unique ID.
const addIdCount = () => {
 let newIdCount = idCount++
  return newIdCount
}

// Adds more botCard to the DOM.
const appendBotCard = () => {
  let botCard = document.createElement('div');
  let inputsHTML = `
  <div id="botIdentity" class="botForm">
    <input id="botName" name="name" type="text" placeholder="Name" required />
    <input id="botTeam" name="team" type="text" placeholder="Team" required />
  </div>
  <div id="botStats" class="botForm">
    <input id="strengthStat" name="strength" type="text" placeholder="Strength" required />
    <input id="intellegentStat" name="intellegence" type="text" placeholder="Intellegence" required />
    <input id="speedStat" name="speed" type="text" placeholder="Speed" required />
    <input id="enduranceStat" name="endurance" type="text" placeholder="Endurance" required />
    <input id="rankStat" name="rank" type="text" placeholder="Rank" required />
    <input id="courageStat" name="courage" type="text" placeholder="Courage" required />
    <input id="firepowerStat" name="firepower" type="text" placeholder="Firepower" required />
    <input id="skillStat" name="skill" type="text" placeholder="Skill" required />
  </div>
  <input type="button" onclick="removeBotCard(this)" value="- Remove Transformer">`;
  botCard.className = "botCard";
  botCard.id = addIdCount();
  botCard.innerHTML = inputsHTML;
  document.getElementById('botCards').appendChild(botCard);
}

// Appends a default list of bots with prestats entered.
const appendPresetBots = () => {
  document.getElementById('botCards').insertAdjacentHTML('beforeend', botListHTML);
}

// Removes the input row from the parent element.
const removeBotCard = (input) => {
  document.getElementById('botCards').removeChild(input.parentNode)
}

// removes the current HTML and replaced with empty html.
const resetOutput = () => {
  let botCard = document.getElementById('results');
  let formChild = botCard;
  while(formChild.hasChildNodes()) {
    formChild.removeChild(formChild.lastChild)
  };
  let outputResult = document.createElement('div');
  let resultsHTML = `
    <div class="teams">
      <div id="autobots" class="botInfoContainer autobots">
        <h3>Autobots</h3>
      </div>
      <div id="decepticons" class="botInfoContainer decepticons">
        <h3>Decepticons</h3>
      </div>
    </div>
    <div id="output" class="output">
      <div id="battleCount" class="outputItem">
        <h2>Numbers of Battles...</h2>
      </div>
      <div id="winningTeam" class="outputItem">
      <h2>Winning Team...</h2>
      </div>
      <div id="losingSurvivor" class="outputItem">
        <h2>Losing Team Survivors...</h2>
      </div>
    </div>`
  outputResult.innerHTML = resultsHTML;
  document.getElementById('results').appendChild(outputResult);
}

// On enter press fires off the sequence of functions grabbing information and calculating the information.
const search = () => {
  resetOutput()
  transformers = [];
  autobots = [];
  decepticons = [];
  primeFaceOff = false;
  battleCount = 0;
  getFormValues();
  divideIntoTeams(transformers);
  orderIntoRanks(autobots);
  orderIntoRanks(decepticons);
  faceOffBattle(autobots, decepticons);
  displayOutput();
}

// Gets the value of the input with id passed into function.
const getFormValues = () => {
  let botCards = Array.from(document.getElementsByClassName('botCard')).map((botCard, i) => {
    transformer = {};
    stat = [];
    let botIdentity = botCard.children[0];
    let botStats = botCard.children[1];
    getBotInfo(botIdentity, transformer);
    getBotInfo(botStats, stat);
    transformer[ "stats" ] = stat;
    transformers.push(transformer);
  })
};

// Gets the input value and stores into corresponding array thats passed into the function.
const getBotInfo = (formSection, arr) => {
  const inputs = formSection.children;
  for(i = 0; i < inputs.length; i ++) {
    let input = inputs[i];
    if(arr === stat) {
      arr[ input.name ] = parseInt(input.value);
    } else {
      arr[ input.name ] = input.value;
    }
  }
};

// Takes each transformer, evaluates if team is correct, push into appropriate array.
const divideIntoTeams = (transformers) => {
  transformers.map((transformer, i) => {
    if(transformer.team.toLowerCase() === 'autobots') {
      autobots.push(transformer);
    } else if(transformer.team.toLowerCase() === 'decepticons') {
      decepticons.push(transformer);
    } else {
      prompt('Somethings wrong. Check teams.');
    }
  })
};

// order the bots according to rank decending.
const orderIntoRanks = (team) => {
  team.sort((a, b) => {
    return b.stats.rank - a.stats.rank
  })
};

// Checks if there are more autobots or decepticons in teams.
const faceOffBattle = (autobots, decepticons) => {
  if(autobots.length >= decepticons.length) { // Uses Autobots array length to compare.
    for (i = 0; i < autobots.length; i++) {
      if(primeFaceOff === true) {  // if primefave off is true, for loop is stopped and no more battles get logged.
        break
      } else {
        checkSkippedBattles(autobots[i], decepticons[i]);
      }
    }
  } else {
    for (i = 0; i < decepticons.length; i++) {
      if(primeFaceOff === true) {
        break
      } else {
        checkSkippedBattles(autobots[i], decepticons[i]);
      }
    }
  }
};

// Check to see if there is any battles skipped
const checkSkippedBattles = (autobot, decepticon) => {
  if(autobot === undefined) {
    if(win[0].toLowerCase() === 'autobots') {
      appendOutputHTML('losingSurvivor', decepticon.name)
    }
    displayResults('decepticons', decepticon, 'skipped', `${decepticon.name} is left.`) // Decepticons battle is skipped
  } else if (decepticon === undefined) {
    if(win[0].toLowerCase() === 'decepticons') {
      appendOutputHTML('autobots', autobot.name)
    }
    displayResults('autobots', autobot, 'skipped', `${autobot.name} is left.`); // autobots battle is skipped
  } else {
    battleCount++;
    findPrime(autobot, decepticon);
  }
};

// Check to see if there are any Prime battles or any bots up against a prime.
const findPrime = (autobot, decepticon) => {
  if(autobot.name.toLowerCase() === "optimus prime") {
    if(decepticon.name.toLowerCase() === "predaking") {
      displayResults('autobots', autobot, 'lost', 'All bots are down...');
      displayResults('decepticons', decepticon, 'lost', 'All bots are down...');
      appendOutputHTML('winningTeam', 'No one...');
      appendOutputHTML('losingSurvivor', 'No one...');
      return primeFaceOff = true;
    } else {
      displayResults('autobots', autobot, 'win', `${autobot.name} tears ${decepticon.name} apart.`);
      displayResults('decepticons', decepticon, 'lost', `Defeated by ${autobot.name}.`);
      return win.push(autobot.team);
    }
  } else if (decepticon.name.toLowerCase() === "predaking") {
    displayResults('decepticons', decepticon, 'win', `${decepticon.name} obliterated ${autobot.name}.`);
    displayResults('autobots', autobot, 'lost', `Defeated by ${decepticon.name}.`);
    return win.push(decepticon.team);
  } else {
    checkAutoWin(autobot, decepticon);
  }
}

// check to see if there are ant auto wins from courage and strength differences.
const checkAutoWin = (autobot, decepticon) => {
  let autobotCourage = autobot.stats.courage;
  let autobotStrength = autobot.stats.strength;
  let decepticonCourage = decepticon.stats.courage;
  let decepticonStrength = decepticon.stats.strength;

  if(Math.abs(autobotCourage - decepticonCourage) >= 4) {
    if(Math.abs(autobotStrength - decepticonStrength) >= 3) {
      if(autobotCourage > decepticonCourage) {
        displayResults('autobots', autobot, 'win', `${autobot.name} scared ${decepticon.name} off...`);
        displayResults('decepticons', decepticon, 'lost', `${decepticon.name} fled the battle...`);
        return win.push(autobot.team);
      } else {
        displayResults('autobots', autobot, 'lost', `${autobot.name} fled the battle...`);
        displayResults('decepticons', decepticon, 'win', `${decepticon.name} scared ${autobot.name} off...`);
        return win.push(decepticon.team);
      }
    }
  } else {
    skillCheck(autobot, decepticon);
  }
};

// Checkt to see the difference in skill to determin winner of battle.
const skillCheck = (autobot, decepticon) => {
  let autobotSkill = autobot.stats.skill;
  let decepticonSkill = decepticon.stats.skill;

  if(Math.abs(autobotSkill - decepticonSkill) >= 3) {
    if(autobotSkill > decepticonSkill) {
      displayResults('autobots', autobot, 'win', `${autobot.name} won with upper hand in skills.`);
      displayResults('decepticons', decepticon, 'lost', `${decepticon.name} needs more training...`);
      return win.push(autobot.team);
    } else {
      displayResults('autobots', autobot, 'lost', `${autobot.name} needs more training...`);
      displayResults('decepticons', decepticon, 'win', `${decepticon.name} won with upper hand in skills.`);
      return win.push(decepticon.team);
    }
  } else {
    checkOverallSkill(autobot, decepticon);
  }
};

// Finds over all skill point of transformer.
const checkOverallSkill = (autobot, decepticon) => {
  let autobotStats = autobot.stats;
  let decepticonStats = decepticon.stats;
  let autobotOverall = autobotStats.strength + autobotStats.intellegence + autobotStats.speed + autobotStats.endurance + autobotStats.firepower;
  let decepticonOverall = decepticonStats.strength + decepticonStats.intellegence + decepticonStats.speed + decepticonStats.endurance + decepticonStats.firepower;

  if(autobotOverall > decepticonOverall) {
    displayResults('autobots', autobot, 'win', `${autobot.name} took advantage of overall stats.`);
    displayResults('decepticons', decepticon, 'lost', `${decepticon.name} could not keep up with ${autobot.name}.`);
    return win.push(autobot.team);
  } else if ( autobotOverall === decepticonOverall ) {
    displayResults('autobots', autobot, 'lost', `${autobot.name} and ${decepticon.name} both went down...`);
    displayResults('decepticons', decepticon, 'lost', `${decepticon.name} and ${autobot.name} both went down...`);
  } else {
    displayResults('autobots', autobot, 'lost', `${autobot.name} could not keep up with ${decepticon.name}.`);
    displayResults('decepticons', decepticon, 'win', `${decepticon.name} took advantage of overall stats.`);
    return win.push(decepticon.team);
  }
};

// Checks which team wins and displays team that won
const displayOutput = () => {
  let newWin = [];
  for(i = 0, j = win.length; i < j; i++) {
    newWin[win[i]] = (newWin[win[i]] || 0) + 1;
  }
  if(newWin.Autobots){
    if(newWin.decepticon) {
      if(newWin.Autobots > newWin.Decepticons) {
        appendOutputHTML('winningTeam', 'Autobots');
      } else {
        appendOutputHTML('winningTeam', 'Decepticons');
      }
    }
    appendOutputHTML('winningTeam', 'Autobots');
  } else if (newWin.Decepticons) {
    appendOutputHTML('winningTeam', 'Decepticons');
  }
  appendOutputHTML('battleCount', battleCount);
};

// Append Output Functions
const displayResults = (id, transformer, result, log) => {
  let battleResult = document.createElement('div');
  let resultHTML = `<h3 class="${result}">${transformer.name}</h3><p>${log}</p>`;
  battleResult.innerHTML = resultHTML;
  battleResult.className = "battleResult";
  document.getElementById(id).appendChild(battleResult);
};

// Takes the Id of the element and pass in value in to a p tag.
const appendOutputHTML = (id, output) => {
  document.getElementById(id).insertAdjacentHTML('beforeend', `<p>${output}</p>`)
};
