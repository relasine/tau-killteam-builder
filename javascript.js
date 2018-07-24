  //QUERY SELECTORS//
var totalPoints = document.querySelector(".point-total-span");
var fwLeaderAdd = document.querySelector(".add-fw-leader");
var fwGruntAdd = document.querySelector(".add-fw-grunt");
var breacherLeaderAdd = document.querySelector(".add-br-leader");
var breacherGruntAdd = document.querySelector(".add-br-grunt");
var pfLeaderAdd = document.querySelector(".add-pf-leader");
var pfGruntAdd = document.querySelector(".add-pf-grunt");
var pfGunnerAdd = document.querySelector(".add-pf-gunner");
var stealthLeaderAdd = document.querySelector(".add-ss-leader");
var stealthGruntAdd = document.querySelector(".add-ss-grunt");
var droneAdd = document.querySelector(".add-drone");
var unitSection = document.querySelector("aside");


  //EVENT LISTENERS//

fwLeaderAdd.addEventListener("click", createFWLeader);
fwGruntAdd.addEventListener("click", createFWGrunt);
breacherLeaderAdd.addEventListener("click", createBreacherLeader);
breacherGruntAdd.addEventListener("click", createBreacherGrunt);
pfLeaderAdd.addEventListener("click", createPFLeader);
pfGruntAdd.addEventListener("click", createPFGrunt);
pfGunnerAdd.addEventListener("click", createPFGunner);
stealthLeaderAdd.addEventListener("click", createStealthLeader);
stealthGruntAdd.addEventListener("click", createStealthGrunt);
droneAdd.addEventListener("click", createDrone);
unitSection.addEventListener("click", masterFunction);

  //FUNCTIONS//


function addImage(newArticle, image) {
  var newImage = document.createElement("img");
  newImage.setAttribute("src", image);
  newImage.setAttribute("class", "card-icon");
  newArticle.appendChild(newImage);
}

function addHeader(newArticle, text) {
  var newHeader = document.createElement("h4");
  newHeader.innerText = text;
  newHeader.setAttribute("class", "card-name");
  newArticle.appendChild(newHeader);
}

function addNewRightDiv(newArticle, cost) {
  var newRightDiv = document.createElement("div");
  newRightDiv.setAttribute("class", "card-upper-right-wrapper");
  addPointLabel(newRightDiv, cost);
  addDeleteBtn(newRightDiv);
  newArticle.appendChild(newRightDiv);
}

function addPointLabel(newRightDiv, cost) {
  var newPointLabel = document.createElement("p");
  newPointLabel.innerText = cost;
  newPointLabel.setAttribute("class", "card-cost card-cost-span");
  newRightDiv.appendChild(newPointLabel);
}

function addDeleteBtn(newRightDiv) {
  var newDelete = document.createElement("i");
  newDelete.setAttribute("class", "far fa-times-circle delete-btn");
  newRightDiv.appendChild(newDelete);
}

function addNewWeaponLabel(newArticle) {
  var newWeaponLabel = document.createElement("p");
  newWeaponLabel.setAttribute("class", "card-weapon-label");
  newWeaponLabel.innerText = "Weapon:"
  newArticle.appendChild(newWeaponLabel);
}

function addNewWeaponSelectFW(newArticle) {
  var newWeaponSelect = document.createElement("select");
  newWeaponSelect.setAttribute("class", "card-select");
  addPRifle(newWeaponSelect);
  addPCarbine(newWeaponSelect);
  newArticle.appendChild(newWeaponSelect);
}

function addNewWeaponSelectPFGunner(newArticle) {
  var newWeaponSelect = document.createElement("select");
  newWeaponSelect.setAttribute("class", "card-select");
  newWeaponSelect.setAttribute("onchange", "gunnerChange()")
  addPCarbineWML(newWeaponSelect);
  addIonRifle(newWeaponSelect);
  addRailRifle(newWeaponSelect);
  newArticle.appendChild(newWeaponSelect);
}

function addNewWeaponSelectSS(newArticle) {
  var newWeaponSelect = document.createElement("select");
  newWeaponSelect.setAttribute("class", "card-select");
  newWeaponSelect.setAttribute("onchange", "stealthWeapon()")
  addBurstCannon(newWeaponSelect);
  addFusionBlaster(newWeaponSelect);
  newArticle.appendChild(newWeaponSelect);
}

function addPCarbineWML(newWeaponSelect) {
  var newPCarbine = document.createElement("option");
  newPCarbine.innerText = "Pulse Carbine w/ ML - 0pt";
  newPCarbine.setAttribute("class", "p-carbine");
  newWeaponSelect.appendChild(newPCarbine);
}

function addIonRifle(newWeaponSelect) {
  var newIonRifle = document.createElement("option");
  newIonRifle.innerText = "Ion Rifle - 3pt";
  newIonRifle.setAttribute("class", "i-rifle");
  newWeaponSelect.appendChild(newIonRifle);
}

function addRailRifle(newWeaponSelect) {
  var newRailRifle = document.createElement("option");
  newRailRifle.innerText = "Rail Rifle - 5pt";
  newRailRifle.setAttribute("class", "r-rifle");
  newWeaponSelect.appendChild(newRailRifle);
}

function addBurstCannon(newWeaponSelect) {
  var newBurstCannon = document.createElement("option");
  newBurstCannon.innerText = "Burst Cannon - 0pt";
  newBurstCannon.setAttribute("class", "b-cannon");
  newWeaponSelect.appendChild(newBurstCannon);
}

function addFusionBlaster(newWeaponSelect) {
  var newFusionBlaster = document.createElement("option");
  newFusionBlaster.innerText = "Fusion Blaster - 4pt";
  newFusionBlaster.setAttribute("class", "f-blaster");
  newWeaponSelect.appendChild(newFusionBlaster);
}
// <select class="card-select weapon-select" onchange="stealthWeapon()">
//               <option class="b-cannon">Burst Cannon - 0pt</option>
//               <option class="f-blaster">Fusion Blaster - 4pt</option>
//             </select>

function addNewWeaponSelectBR(newArticle) {
  var newPBlaster = document.createElement("p");
  newPBlaster.innerText = "Pulse Blaster - 0pt";
  newPBlaster.setAttribute("class", "fixed-weapon");
  newArticle.appendChild(newPBlaster);
}

function addNewWeaponSelectPF(newArticle) {
  var newPCarbine = document.createElement("p");
  newPCarbine.innerText = "Pulse Carbine w/ ML - 0pt";
  newPCarbine.setAttribute("class", "fixed-weapon");
  newArticle.appendChild(newPCarbine);
}

function addPRifle(newWeaponSelect) {
  var newPRifle = document.createElement("option");
  newPRifle.innerText = "Pulse Rifle - 0pt";
  newPRifle.setAttribute("class", "p-rifle");
  newWeaponSelect.appendChild(newPRifle);
}

function addPCarbine(newWeaponSelect) {
  var newPCarbine = document.createElement("option");
  newPCarbine.innerText = "Pulse Carbine - 0pt";
  newPCarbine.setAttribute("class", "p-carbine");
  newWeaponSelect.appendChild(newPCarbine);
}

function addSpecLabel(newArticle) {
  var newSpecLabel = document.createElement("p");
  newSpecLabel.setAttribute("class", "card-spec");
  newSpecLabel.innerText = "Spec:";
  newArticle.appendChild(newSpecLabel);
}

function addSpecFWLeader(newArticle) {
  var newSpecSelect = document.createElement("select");
  newSpecSelect.setAttribute("class", "card-select spec-select");
  addNoSpec(newSpecSelect);
  addLeadSpec(newSpecSelect);
  addCommSpec(newSpecSelect);
  addMedicSpec(newSpecSelect);
  addScoutSpec(newSpecSelect);
  addSniperSpec(newSpecSelect);
  addVetSpec(newSpecSelect);
  newArticle.appendChild(newSpecSelect);
}

function addSpecFWGrunt(newArticle) {
  var newSpecSelect = document.createElement("select");
  newSpecSelect.setAttribute("class", "card-select spec-select");
  addNoSpec(newSpecSelect);
  addCommSpec(newSpecSelect);
  addMedicSpec(newSpecSelect);
  addScoutSpec(newSpecSelect);
  addSniperSpec(newSpecSelect);
  addVetSpec(newSpecSelect);
  newArticle.appendChild(newSpecSelect);
}

function addSpecBRLeader(newArticle) {
  var newSpecSelect = document.createElement("select");
  newSpecSelect.setAttribute("class", "card-select spec-select");
  addNoSpec(newSpecSelect);
  addLeadSpec(newSpecSelect);
  addCommSpec(newSpecSelect);
  addMedicSpec(newSpecSelect);
  addScoutSpec(newSpecSelect);
  addDemoSpec(newSpecSelect);
  addVetSpec(newSpecSelect);
  newArticle.appendChild(newSpecSelect);
}

function addSpecBRGrunt(newArticle) {
  var newSpecSelect = document.createElement("select");
  newSpecSelect.setAttribute("class", "card-select spec-select");
  addNoSpec(newSpecSelect);
  addCommSpec(newSpecSelect);
  addMedicSpec(newSpecSelect);
  addScoutSpec(newSpecSelect);
  addDemoSpec(newSpecSelect);
  addVetSpec(newSpecSelect);
  newArticle.appendChild(newSpecSelect);
}

function addSpecPFLeader(newArticle) {
  var newSpecSelect = document.createElement("select");
  newSpecSelect.setAttribute("class", "card-select spec-select");
  addNoSpec(newSpecSelect);
  addLeadSpec(newSpecSelect);
  addCommSpec(newSpecSelect);
  addVetSpec(newSpecSelect);
  newArticle.appendChild(newSpecSelect);
}

function addSpecPFGrunt(newArticle) {
  var newSpecSelect = document.createElement("select");
  newSpecSelect.setAttribute("class", "card-select spec-select");
  addNoSpec(newSpecSelect);
  addCommSpec(newSpecSelect);
  addDemoSpec(newSpecSelect);
  newArticle.appendChild(newSpecSelect);
}

function addSpecPFGunner(newArticle) {
  var newSpecSelect = document.createElement("select");
  newSpecSelect.setAttribute("class", "card-select spec-select");
  addNoSpec(newSpecSelect);
  addCommSpec(newSpecSelect);
  addDemoSpec(newSpecSelect);
  addSniperSpec(newSpecSelect);
  newArticle.appendChild(newSpecSelect);
}

function addSpecSSLeader(newArticle) {
  var newSpecSelect = document.createElement("select");
  newSpecSelect.setAttribute("class", "card-select spec-select");
  addNoSpec(newSpecSelect);
  addLeadSpec(newSpecSelect);
  addCommSpec(newSpecSelect);
  addHeavySpec(newSpecSelect);
  addScoutSpec(newSpecSelect);
  addVetSpec(newSpecSelect);
  newArticle.appendChild(newSpecSelect);
}

function addSpecSSGrunt(newArticle) {
  var newSpecSelect = document.createElement("select");
  newSpecSelect.setAttribute("class", "card-select spec-select");
  addNoSpec(newSpecSelect);
  addCommSpec(newSpecSelect);
  addHeavySpec(newSpecSelect);
  addScoutSpec(newSpecSelect);
  addVetSpec(newSpecSelect);
  newArticle.appendChild(newSpecSelect);
}

function addNoSpec(newSpecSelect) {
   var specNone = document.createElement("option");
  specNone.innerText = "No specialism";
  specNone.setAttribute("class", "no-spec");
  newSpecSelect.appendChild(specNone);
}

function addHeavySpec(newSpecSelect) {
  var heavySpec = document.createElement("option");
  heavySpec.innerText = "Heavy";
  heavySpec.setAttribute("class", "heavy-spec");
  newSpecSelect.appendChild(heavySpec);
}

function addLeadSpec(newSpecSelect) {
  var leadSpec = document.createElement("option");
  leadSpec.innerText = "Leader";
  leadSpec.setAttribute("class", "leader-spec");
  newSpecSelect.appendChild(leadSpec);
}

function addCommSpec(newSpecSelect) {
  var commSpec = document.createElement("option");
  commSpec.innerText = "Communications";
  commSpec.setAttribute("class", "comm-spec");
  newSpecSelect.appendChild(commSpec);  
}

function addDemoSpec(newSpecSelect) {
  var demoSpec = document.createElement("option");
  demoSpec.innerText = "Demolitions";
  demoSpec.setAttribute("class", "demo-spec");
  newSpecSelect.appendChild(demoSpec);
}

function addMedicSpec(newSpecSelect) {
  var medicSpec = document.createElement("option");
  medicSpec.innerText = "Medic";
  medicSpec.setAttribute("class", "medic-spec");
  newSpecSelect.appendChild(medicSpec);
}

function addScoutSpec(newSpecSelect) {
  var scoutSpec = document.createElement("option");
  scoutSpec.innerText = "Scout";
  scoutSpec.setAttribute("class", "scout-spec");
  newSpecSelect.appendChild(scoutSpec);
}

function addSniperSpec(newSpecSelect) {
  var sniperSpec = document.createElement("option");
  sniperSpec.innerText = "Sniper";
  sniperSpec.setAttribute("class", "sniper-spec");
  newSpecSelect.appendChild(sniperSpec);
}

function addVetSpec(newSpecSelect) {
  var vetSpec = document.createElement("option");
  vetSpec.innerText = "Veteran";
  vetSpec.setAttribute("class", "leader-spec");
  newSpecSelect.appendChild(vetSpec);
}

function addOptionsLabel(newArticle) {
  var optionsLabel = document.createElement("p");
  optionsLabel.setAttribute("class", "card-options-label");
  optionsLabel.innerText = "Options:";
  newArticle.appendChild(optionsLabel); 
}

function addPistolWrapper(newArticle) {
  var pistolWrapper = document.createElement("div");  
  pistolWrapper.setAttribute("class", "option-wrapper p-pistol-wrapper");
  addPPistolLabel(pistolWrapper);
  addPPistol(pistolWrapper);
  newArticle.appendChild(pistolWrapper);
}

function addPPistolLabel(pistolWrapper) {
  var pPistolLabel = document.createElement("p");
  pPistolLabel.innerText = "Pulse pistol - 1pt";
  pPistolLabel.setAttribute("class", "checkbox-label");
  pistolWrapper.appendChild(pPistolLabel);
}

function addPPistol(pistolWrapper) {
  var pPistol = document.createElement("input");
  pPistol.setAttribute("type", "checkbox");
  pPistol.setAttribute("class", "p-pistol checkbox");
  pPistol.setAttribute("onchange", "pulsePistol()");
  pistolWrapper.appendChild(pPistol);
}

  // PF/BR LEADER MARKERLIGHT //

function addMarkerWrapper(newArticle) {
  var markerWrapper = document.createElement("div");
  markerWrapper.setAttribute("class", "markerlight-wrapper option-wrapper");
  addMarkerLabel(markerWrapper);
  addMarkerCheck(markerWrapper);
  newArticle.appendChild(markerWrapper);
}

function addMarkerLabel(markerWrapper) {
  var markerLabel = document.createElement("p");
  markerLabel.setAttribute("class", "checkbox-label");
  markerLabel.innerText = "Markerlight - 0pt";
  markerWrapper.appendChild(markerLabel);
}

function addMarkerCheck(markerWrapper) {
  var markerCheck = document.createElement("input");
  markerCheck.setAttribute("type", "checkbox");
  markerCheck.setAttribute("class", "markerlight checkbox");
  markerWrapper.appendChild(markerCheck);
}

  // SS LEADER MARKERLIGHT/TARGETLOCK //

function addMLTLWrapper(newArticle) {
  var markerWrapper = document.createElement("div");
  markerWrapper.setAttribute("class", "ml-tl-wrapper option-wrapper");
  addSSMarkerLabel(markerWrapper);
  addSSMarkerCheck(markerWrapper);
  newArticle.appendChild(markerWrapper);
}

function addSSMarkerLabel(markerWrapper) {
  var markerLabel = document.createElement("p");
  markerLabel.setAttribute("class", "checkbox-label");
  markerLabel.innerText = "ML w/ Target Lock - 1pt";
  markerWrapper.appendChild(markerLabel);
}

function addSSMarkerCheck(markerWrapper) {
  var markerCheck = document.createElement("input");
  markerCheck.setAttribute("type", "checkbox");
  markerCheck.setAttribute("class", "ml-tl checkbox");
  markerCheck.setAttribute("onchange", "stealthOption()");
  markerWrapper.appendChild(markerCheck);
}

// <div class="tl-ml-wrapper option-wrapper">
//             <p class="checkbox-label">ML w/ Target Lock - 1pt</p>
//             <input type="checkbox" name="ml-tl" class="ml-tl checkbox">
//           </div>

function addTurretOption(newArticle) {
  var addTurretSelect = document.createElement("select");
  addTurretSelect.setAttribute("class", "support-turret card-select");
  addTurretSelect.setAttribute("onchange", "addTurret()");
  addNoTurret(addTurretSelect);
  addSMSTurret(addTurretSelect);
  addMPTurret(addTurretSelect);
  newArticle.appendChild(addTurretSelect);
}

function addNoTurret(addTurretSelect) {
  var noTurret = document.createElement("option");
  noTurret.innerText = "No Support Turret";
  noTurret.setAttribute("class", "no-turret");
  addTurretSelect.appendChild(noTurret);
}

function addSMSTurret(addTurretSelect) {
  var sMSTurret = document.createElement("option");
  sMSTurret.innerText = "Support Turret w/ SMS - 5pt";
  sMSTurret.setAttribute("class", "sms-turret");
  addTurretSelect.appendChild(sMSTurret);
}

function addMPTurret(addTurretSelect) {
  var mPTurret = document.createElement("option"); 
  mPTurret.innerText = "Support Turret w/ MP - 7pt";
  mPTurret.setAttribute("class", "mp-turret");
  addTurretSelect.appendChild(mPTurret);
}

function addDroneSelect(newArticle) {
  var newDroneSelect = document.createElement("select");
  newDroneSelect.setAttribute("class", "card-select drone-select");
  newDroneSelect.setAttribute("onchange", "changeDronePic()");
  addGunDrone(newDroneSelect);
  addShieldDrone(newDroneSelect);
  addMarkerDrone(newDroneSelect);
  addReconDrone(newDroneSelect);
  addGravDrone(newDroneSelect);
  addPulseDrone(newDroneSelect);
  addGuardianDrone(newDroneSelect);
  newArticle.appendChild(newDroneSelect);
}

function addGunDrone(newDroneSelect) {
  var newGunDrone = document.createElement("option");
  newGunDrone.setAttribute("class", "gun-drone");
  newGunDrone.innerText = "Gun Drone"
  newDroneSelect.appendChild(newGunDrone);
}

function addShieldDrone(newDroneSelect) {
  var newShieldDrone = document.createElement("option");
  newShieldDrone.setAttribute("class", "shield-drone");
  newShieldDrone.innerText = "Shield Drone"
  newDroneSelect.appendChild(newShieldDrone);
}

function addMarkerDrone(newDroneSelect) {
  var newMarkerDrone = document.createElement("option");
  newMarkerDrone.setAttribute("class", "marker-drone");
  newMarkerDrone.innerText = "Marker Drone"
  newDroneSelect.appendChild(newMarkerDrone);
}

function addReconDrone(newDroneSelect) {
  var newReconDrone = document.createElement("option");
  newReconDrone.setAttribute("class", "recon-drone");
  newReconDrone.innerText = "Recon Drone"
  newDroneSelect.appendChild(newReconDrone);
}

function addGravDrone(newDroneSelect) {
  var newGravDrone = document.createElement("option");
  newGravDrone.setAttribute("class", "grav-drone");
  newGravDrone.innerText = "Grav-Inhibitor Drone"
  newDroneSelect.appendChild(newGravDrone);
}

function addPulseDrone(newDroneSelect) {
  var newPulseDrone = document.createElement("option");
  newPulseDrone.setAttribute("class", "pulse-drone");
  newPulseDrone.innerText = "Pulse-Accelerator Drone"
  newDroneSelect.appendChild(newPulseDrone);
}

function addGuardianDrone(newDroneSelect) {
  var newGuardianDrone = document.createElement("option");
  newGuardianDrone.setAttribute("class", "guardian-drone");
  newGuardianDrone.innerText = "Guardian Drone"
  newDroneSelect.appendChild(newGuardianDrone);
}

function updatePoints(cost) {
  var currentTotal = parseInt(totalPoints.innerText);
  var newTotal = currentTotal + cost;;
  totalPoints.innerHTML = newTotal;
}

function createFWLeader(event) {
  event.preventDefault();
  var cost = 8;
  var newArticle = document.createElement("article");
  newArticle.setAttribute("class", "card");
  addImage(newArticle, "images/fw-leader.jpg");
  addHeader(newArticle, "Fire Warrior Shas'ui");
  addNewRightDiv(newArticle, cost);
  addNewWeaponLabel(newArticle);
  addNewWeaponSelectFW(newArticle);  
  addSpecLabel(newArticle);
  addSpecFWLeader(newArticle);
  addOptionsLabel(newArticle);
  addPistolWrapper(newArticle);
  addMarkerWrapper(newArticle);
  unitSection.appendChild(newArticle);
  updatePoints(cost);
}

function createFWGrunt(event) {
  event.preventDefault();
  var cost = 8;
  var newArticle = document.createElement("article");
  newArticle.setAttribute("class", "card");
  addImage(newArticle, "images/fw-grunt.jpg");
  addHeader(newArticle, "Fire Warrior Shas'la");
  addNewRightDiv(newArticle, cost);
  addNewWeaponLabel(newArticle);
  addNewWeaponSelectFW(newArticle);  
  addSpecLabel(newArticle);
  addSpecFWGrunt(newArticle);
  addOptionsLabel(newArticle);
  addTurretOption(newArticle);
  addPistolWrapper(newArticle);
  unitSection.appendChild(newArticle);
  updatePoints(cost);
}

function createBreacherLeader(event) {
  event.preventDefault();
  var cost = 8;
  var newArticle = document.createElement("article");
  newArticle.setAttribute("class", "card");
  addImage(newArticle, "images/breacher-leader.jpg");
  addHeader(newArticle, "Breacher Shas'ui");
  addNewRightDiv(newArticle, cost);
  addNewWeaponLabel(newArticle);
  addNewWeaponSelectBR(newArticle);  
  addSpecLabel(newArticle);
  addSpecBRLeader(newArticle);
  addOptionsLabel(newArticle);
  addPistolWrapper(newArticle);
  addMarkerWrapper(newArticle);
  unitSection.appendChild(newArticle);
  updatePoints(cost);
}


function createBreacherGrunt(event) {
  event.preventDefault();
  var cost = 8;
  var newArticle = document.createElement("article");
  newArticle.setAttribute("class", "card");
  addImage(newArticle, "images/breacher-grunt.jpg");
  addHeader(newArticle, "Breacher Shas'la");
  addNewRightDiv(newArticle, cost);
  addNewWeaponLabel(newArticle);
  addNewWeaponSelectBR(newArticle);  
  addSpecLabel(newArticle);
  addSpecBRGrunt(newArticle);
  addOptionsLabel(newArticle);
  addPistolWrapper(newArticle);
  unitSection.appendChild(newArticle);
  updatePoints(cost);
}

function createPFLeader(event) {
  event.preventDefault();
  var cost = 7;
  var newArticle = document.createElement("article");
  newArticle.setAttribute("class", "card");
  addImage(newArticle, "images/pf-leader.jpg");
  addHeader(newArticle, "Pathfinder Shas'ui");
  addNewRightDiv(newArticle, cost);
  addNewWeaponLabel(newArticle);
  addNewWeaponSelectPF(newArticle);  
  addSpecLabel(newArticle);
  addSpecPFLeader(newArticle);
  addOptionsLabel(newArticle);
  addPistolWrapper(newArticle);
  unitSection.appendChild(newArticle);
  updatePoints(cost);
}

function createPFGrunt(event) {
  event.preventDefault();
  var cost = 6;
  var newArticle = document.createElement("article");
  newArticle.setAttribute("class", "card");
  addImage(newArticle, "images/pf-grunt.jpg");
  addHeader(newArticle, "Pathfinder Shas'la");
  addNewRightDiv(newArticle, cost);
  addNewWeaponLabel(newArticle);
  addNewWeaponSelectPF(newArticle);  
  addSpecLabel(newArticle);
  addSpecPFGrunt(newArticle);
  addOptionsLabel(newArticle);
  addPistolWrapper(newArticle);
  unitSection.appendChild(newArticle);
  updatePoints(cost);
}

function createPFGunner(event) {
  event.preventDefault();
  var cost = 7;
  var newArticle = document.createElement("article");
  newArticle.setAttribute("class", "card");
  addImage(newArticle, "images/pf-leader.jpg");
  addHeader(newArticle, "Pathfinder Shas'ui");
  addNewRightDiv(newArticle, cost);
  addNewWeaponLabel(newArticle);
  addNewWeaponSelectPFGunner(newArticle);  
  addSpecLabel(newArticle);
  addSpecPFLeader(newArticle);
  addOptionsLabel(newArticle);
  addPistolWrapper(newArticle);
  unitSection.appendChild(newArticle);
  updatePoints(cost);
}

function createStealthLeader(event) {
  event.preventDefault();
  var cost = 20;
  var newArticle = document.createElement("article");
  newArticle.setAttribute("class", "card");
  addImage(newArticle, "images/stealth-suit-leader.jpg");
  addHeader(newArticle, "XV25 Stealth Suit Shas'vre");
  addNewRightDiv(newArticle, cost);
  addNewWeaponLabel(newArticle);
  addNewWeaponSelectSS(newArticle);  
  addSpecLabel(newArticle);
  addSpecSSLeader(newArticle);
  addOptionsLabel(newArticle);
  addMLTLWrapper(newArticle);
  unitSection.appendChild(newArticle);
  updatePoints(cost);
}

function createStealthGrunt(event) {
  event.preventDefault();
  var cost = 20;
  var newArticle = document.createElement("article");
  newArticle.setAttribute("class", "card");
  addImage(newArticle, "images/stealth-suit-grunt.jpg");
  addHeader(newArticle, "XV25 Stealth Suit Shas'ui");
  addNewRightDiv(newArticle, cost);
  addNewWeaponLabel(newArticle);
  addNewWeaponSelectSS(newArticle);  
  addSpecLabel(newArticle);
  addSpecSSGrunt(newArticle);
  addOptionsLabel(newArticle);
  unitSection.appendChild(newArticle);
  updatePoints(cost);
}

function createDrone(event) {
  event.preventDefault();
  var cost = 7;
  var newArticle = document.createElement("div");
  newArticle.setAttribute("class", "drone-div");
  addImage(newArticle, "images/gun-drone.jpg");
  addDroneSelect(newArticle);
  addNewRightDiv(newArticle, cost)
  unitSection.appendChild(newArticle);
  updatePoints(cost);
}

function deleteBtn() {
  if(event.target.classList.contains("delete-btn")) {
    var reducePoints = event.target.previousSibling.innerText;
    var currentTotal = parseInt(totalPoints.innerText);
    var newTotal = currentTotal - reducePoints;
    totalPoints.innerHTML = newTotal;
    event.target.parentNode.parentNode.remove();
  }
}

function masterFunction() {
  deleteBtn();
}

function pulsePistol() {
  if(event.target.checked) {
    var currentTotal = parseInt(totalPoints.innerText);
    var newTotal = currentTotal + 1;
    totalPoints.innerHTML = newTotal;
    event.target.parentNode.parentNode.childNodes[2].childNodes[0].innerText ++;
  } else {
    var currentTotal = parseInt(totalPoints.innerText);
    var newTotal = currentTotal - 1;
    totalPoints.innerHTML = newTotal;
    event.target.parentNode.parentNode.childNodes[2].childNodes[0].innerText --;
  }
}

function stealthOption() {
    if(event.target.checked) {
    var currentTotal = parseInt(totalPoints.innerText);
    var newTotal = currentTotal + 1;
    totalPoints.innerHTML = newTotal;
    event.target.parentNode.parentNode.childNodes[2].childNodes[0].innerText ++;
  } else {
    var currentTotal = parseInt(totalPoints.innerText);
    var newTotal = currentTotal - 1;
    totalPoints.innerHTML = newTotal;
    event.target.parentNode.parentNode.childNodes[2].childNodes[0].innerText --;
  }
}


function addTurret() {
  var currentUnitPoints = parseInt(event.target.parentNode.childNodes[2].childNodes[0].innerHTML);
  var currentTotal = parseInt(totalPoints.innerText);
  if (event.target.value === "Support Turret w/ MP - 7pt") {
    if (currentUnitPoints > 9) {
      totalPoints.innerText = currentTotal + 2;
      event.target.parentNode.childNodes[2].childNodes[0].innerHTML = currentUnitPoints + 2;
    } else {
      totalPoints.innerText = currentTotal + 7;
      event.target.parentNode.childNodes[2].childNodes[0].innerHTML = currentUnitPoints + 7;
    }
  } else if (event.target.value === "Support Turret w/ SMS - 5pt") {
    if (currentUnitPoints > 14) {
      totalPoints.innerHTML = currentTotal -2;
      event.target.parentNode.childNodes[2].childNodes[0].innerHTML = currentUnitPoints - 2;
    } else {
      totalPoints.innerText = currentTotal +5;
      event.target.parentNode.childNodes[2].childNodes[0].innerHTML = currentUnitPoints + 5;
    }
  } else {
    if (currentUnitPoints > 14) {
      totalPoints.innerHTML = currentTotal -7;
      event.target.parentNode.childNodes[2].childNodes[0].innerHTML = currentUnitPoints -7;
    } else {
      totalPoints.innerHTML = currentTotal -5;
      event.target.parentNode.childNodes[2].childNodes[0].innerHTML = currentUnitPoints -5;
    }
  }
}

function gunnerChange() {
  var currentUnitPoints = parseInt(event.target.parentNode.childNodes[2].childNodes[0].innerHTML);
  var currentTotal = parseInt(totalPoints.innerText);
  if (event.target.value === "Ion Rifle - 3pt") {
    event.target.parentNode.childNodes[0].src="images/pf-gunner-ion.jpg"
    if (currentUnitPoints === 12) {
      totalPoints.innerText = currentTotal -2;
      event.target.parentNode.childNodes[2].childNodes[0].innerHTML = currentUnitPoints -2;
    } else {
      totalPoints.innerText = currentTotal +3;
      event.target.parentNode.childNodes[2].childNodes[0].innerHTML = currentUnitPoints +3;
    }
  } else if (event.target.value === "Rail Rifle - 5pt") {
    event.target.parentNode.childNodes[0].src="images/pf-gunner-rail.jpg"
    if (currentUnitPoints === 7) {
      totalPoints.innerText = currentTotal +5;
      event.target.parentNode.childNodes[2].childNodes[0].innerHTML = currentUnitPoints +5;
    } else {
      totalPoints.innerText = currentTotal +2;
      event.target.parentNode.childNodes[2].childNodes[0].innerHTML = currentUnitPoints +2;
    }
  } else {
    event.target.parentNode.childNodes[0].src="images/pf-grunt.jpg"
    if (currentUnitPoints === 12) {
      totalPoints.innerText = currentTotal -5;
      event.target.parentNode.childNodes[2].childNodes[0].innerHTML = currentUnitPoints -5;      
    } else {
      totalPoints.innerText = currentTotal -3;
      event.target.parentNode.childNodes[2].childNodes[0].innerHTML = currentUnitPoints -3;
    }
  }
}

function stealthWeapon() {
  var currentUnitPoints = parseInt(event.target.parentNode.childNodes[2].childNodes[0].innerHTML);
  var currentTotal = parseInt(totalPoints.innerText);
  if (event.target.value === "Fusion Blaster - 4pt") {
    totalPoints.innerText = currentTotal +4;
    event.target.parentNode.childNodes[2].childNodes[0].innerHTML = currentUnitPoints +4;
  } else {
    totalPoints.innerText = currentTotal -4;
    event.target.parentNode.childNodes[2].childNodes[0].innerHTML = currentUnitPoints -4;
  }
}

function changeDronePic() {
  if (event.target.value === "Gun Drone") {
    event.target.parentNode.childNodes[0].src="images/gun-drone.jpg";
  } else if (event.target.value === "Shield Drone") {
    event.target.parentNode.childNodes[0].src="images/shield-drone.jpg";
  } else if (event.target.value === "Marker Drone") {
    event.target.parentNode.childNodes[0].src="images/marker-drone.jpg";
  } else if (event.target.value === "Recon Drone") {
    event.target.parentNode.childNodes[0].src="images/recon-drone.jpg";
  } else if (event.target.value === "Grav-Inhibitor Drone") {
    event.target.parentNode.childNodes[0].src="images/grav-drone.jpg";
  } else if (event.target.value === "Pulse-Accelerator Drone") {
    event.target.parentNode.childNodes[0].src="images/pulse-drone.jpg";
  } else if (event.target.value === "Guardian Drone") {
    event.target.parentNode.childNodes[0].src="images/guardian-drone.jpg";
  }
}
