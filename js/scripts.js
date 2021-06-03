$(document).ready(function(){
  $(#bio).submit(function(event) { 
    event.preventDefault();
    const gender=$("select#gender").val());
    const personality=$("select#personality").val()
    if (gender===female) {
      $(#pairingA).show();
    } else if (gender===male)
      $(#pairingB).show();
    } else if (gender===other)
      $(#pairingC).show();
    }
    let celeb1 ='celeb1# )';

    // if (personality===outgoing) {
    //   $(pairingA).show();
    // } else if (personality===reserved)
    //   $(pairingB).show();
    // } else if (personality===funny)
    //   $(pairingC).show();
    // } else if (personality===woodsy)
    //   $(pairingD).show();
    // } 
  });  
});

