$(document).ready(){
    if (gender===female)
    $(pairingA).show();
  } else if (gender===male)
    $(pairingB).show();
  } else if (gender===other)
    $(pairingC).show();
  } else {
    alert('Please enter your age.');
  }
});

$(document).ready(function(){
  $(#bio).submit(function(event) { 
    event.preventDefault();
    if (personality===outgoing)
      $(pairingA).show();
    } else if (personality===reserved)
      $(pairingB).show();
    } else if (personality===funny)
      $(pairingC).show();
    } else if (personality===woodsy)
      $(pairingD).show();
    } else {
      alert('please enter your age');
    } 
  });  
});

