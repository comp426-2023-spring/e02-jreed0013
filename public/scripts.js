// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

// Navigation functions
function homeNav() {
    document.getElementById("homenav").className = "active";
    document.getElementById("home").className = "active";
    document.getElementById("rpsnav").className = "";
    document.getElementById("rps").className = "inactive";
    document.getElementById("rpslsnav").className = "";
    document.getElementById("rpsls").className = "inactive";
  }


  function rpsnav() {
    document.getElementById("homenav").className = "";
    document.getElementById("home").className = "inactive";
    document.getElementById("rpsnav").className = "active";
    document.getElementById("rps").className = "active";
    document.getElementById("rpslsnav").className = "";
    document.getElementById("rpsls").className = "inactive";
  }

  function rpslsnav() {
    document.getElementById("homenav").className = "";
    document.getElementById("home").className = "inactive";
    document.getElementById("rpsnav").className = "";
    document.getElementById("rps").className = "inactive";
    document.getElementById("rpslsnav").className = "active";
    document.getElementById("rpsls").className = "active";
  }