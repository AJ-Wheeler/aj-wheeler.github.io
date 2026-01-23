const ASCII_ART = {
  rocket: `
         ^
        /^\\
        |-|      -- Navigation
       /| |\\      ▰▰▰▰▰▰▰▰▱▱ 80%
      /_|_|_\\
        /_\\     -- Emergency Systems
       /___\\      ▰▰▰▰▰▰▰▰▰▰ 100%
      |=   =|
      |  R  |   -- Reactor
      |  S  |     ▰▰▰▰▰▰▰▰▰▰ 100%
      |  E  |
      |  W  |   -- Fuel
      |  T  |     ▰▰▰▰▰▱▱▱▱▱ 50%
      |  R  |
     /|\\___/|\\  -- Boosters
    /_|_____|_\\   ▰▰▰▰▰▰▰▰▰▰ 100%
      /_____\\  
      '  '  ' `,
  gemini: `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⠀
⠀⠀⢸⣿⣷⣶⣦⣤⣤⣤⣀⣀⣀⣀⣀⣀⣀⣀⣀⣤⣤⣤⣴⣶⣾⣿⣿⡇⠀⠀
⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀
⠀⠀⠘⠻⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠟⠛⠁⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⡏⠉⠉⠉⠉⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣧⣀⣀⣀⣀⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢠⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣤⡄⠀⠀
⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀
⠀⠀⢸⣿⠿⠿⠛⠛⠛⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠙⠛⠛⠿⠿⣿⣿⡇⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀`,
  leo: `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣾⣿⣿⣿⣿⣿⣿⣷⣦⣄⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⠋⠁⠈⠙⢿⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⡇⠀⠀⠀⠀⢨⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣠⣤⣶⣾⣿⣿⣿⣿⣷⠀⠀⠀⠀⣼⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠀⠀⢠⣿⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢠⣿⣿⣿⣿⣿⠿⠿⣿⣿⣿⣿⣿⠀⢀⣾⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠸⣿⣿⣿⣿⣧⠀⢀⣼⣿⣿⣿⣿⢀⣼⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣼⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠈⠻⣿⣿⣿⣿⣿⣿⣿⡿⠋⣸⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠉⠛⠛⠛⠋⠁⠀⠀⣿⣿⣿⣿⣿⠀⣀⣀⣀⣀⣀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⢿⣿⣿⣿⣿⣿⣿⠟⠁⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀`,
  rose: `                                                  
                                                  
             ░▓█████████░                         
            ░▒▒▒░░░▒███▓▒░                        
       ░▓█░▓████████▓▒███▓▓▓▒░                    
     ░██▓▒████▒░░░░▓███▒███░████                  
    ███▓▒███▒██▓▒▒▓█▓░█░▒███▓▒███▒                
    ███▒▓██▓▓██░░░ ▓▓░░▓▒▓███▒███░                
    ░██▒▓██▓░▒▒▒░░▒▓████▓███▓▒██░                 
     ▓██░▒█▒███████████░███░▓██░                  
    ▒▒▒▓█▓░▓█████████▓▓██▒████▓                   
    ████▓░ ░▒▒▒▒▓▓▓▒▒░▒▒██████▒                   
    ▒██▓█████████████▒░██████▒                    
         ▒▒░░░░▓██████▒████▓                      
      ▒▓▒░ ▒▓████████▓░▓▒░                        
         ░▒▓▓▓░▒▒▒▓██▓██▒                         `,
  callie: `                ░▒▓█████▓▒   ▒█████████████████▓▓▒           
            ░█████████████████████████████████▓░▒▒░ ░        
           ▒████████████████████████████████████▒ ░░  ░      
          ▒█████████████████████████████████████▓░   ░       
       ▒█████████████████████████████████████████▓░     ░    
      ▓███████████████████████████████▓▓▓▓███████▓▓░░        
    ░▓█▓▓████████████████████████████▓▒░   ▒▒▓▓▓██▓▒░░       
   ░██▓▓▓█▓███████████████████████████▒    ░░▒▒▓▓▓█▓▓░░░     
  ░▓█▓▓▓▓███████████▓▒░░███████████████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░ ░░   
 ▒█▓▓▓▓▓▒▓█████████▓░ ░░█████████████████████▓▓▓▓▓▒▒▒▒▒░ ░░  
░█▓▓▒▓▒▒▒▓▓▓██████▓▒▒▒▒▓██████████████████████▓▓▓▓▒░▒░░░░    
▒▓▒▒▒▒▒░▒▓▓▓█████▓▓████████████▓▒░░░░░▓▓▓▓▓▓▓██▓▓▓▓▒░▒▒▒▒  ░ 
▓▓░░░▒░░▒▓▓▓██████████████████▒▒▒░░    ▒▓█▓▓▓▓▓▓▓▓▓▓▓▒▒▓▓▒░░ 
▓▒░ ░░░░▒▓▒▓█████████████████▓░        ░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▓▓▓▒ 
░░░ ░░ ░▓▒▒▓▓█████████████████▓▒░      ▒▓▓▓▒▒▓▓▓▓▓▒▒▓▓▓▓▓▓▒▓░
   ░░░░░▒░▒▓███████████████████▓░    ░░▒▒▓▓▒▒▒▒▓▓▓▒▒▒▓▓▓▓▓▓▓░
░    ░░░░▒▓████████████████████▓▒░    ░░░░░░░░▒▒▒▓▓▒▒▒▓▓▓▓▓▓░
     ░▒░▒▓████████████████████▓▒░░        ░  ░▒▒▒▒▓▓▒▒▒▓▓▓▓▒ 
      ░  ▓████████████████▓▓▓▒░░              ░▒▒▒▓▓▒▒▒▓▓▓▒  
         ▓███████████████▓▒▒░░░░░░ ░░░░      ░░░▒▒▒▒░░▒▒▓▒   
          █████████████▓▓▓▒░░  ░░░░░░░░░░░     ░▒▒▒▒░░░      
          ░████████████▓▓▓▒░░ ░░▒▒▒▒▒▒▒▒▒▒░    ▒░▒░░░▒       
           ▒████████████▓▓▓▒░░▒▒▓▓▓▓▓▓▓▓██░ ░ ░░░░░░░        
             ███████████▓▓▓▓▒▒▒▓▒░▓▓▓███▓░        ░░         
              ░███████████▓▒▒▓▓▓▓▒░░░░▒░   ░░     ░          
                ▒██████▓▓▓▓▓▒▒▒▓▓▓▓▒░    ░░░░                
                   ░        ░▒▓▓▒▓▓▓▓▒▒▒░░░░                 
                              ▒▓▓▒▒▒▒▒░░░░░░░                
                                   ░░░░░░░                   `,
  lewis:`                                 ░▒░░░                         
           ░▒▒▒▒▒▒▒░░▒▒▓▓▓▓▒▒▒░░░░░░░░░░▒                      
       ░░▒▒▓▓▓▓▓▓▓▓▒▒░░▒▒▒▒▓▒▒▓▓▓▒▒▒░░░░░▒░░                   
    ░░░▒▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒░░░░▒▒░                 
  ░░░▒▒▒░░░▒▒▒▓▒▒▒▒▒▒▒▒▓▓█▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒░░░░░▒░               
░░░░▒▒░░░░░░▒▒▓▓▒░░░░▓▓██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒░░░▒▒▒▒             
░░░▓▒▒▒░░░▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒░▒▒▒░           
░▒▓▒▒▒░░▒▒▒▒▒▒▒▒▒▒▓▓█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒░▒░░▒▒           
░▒░░░▒▒▒▒▒▓▓▓▓▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▓▓▒▓▓▓▓▒▒▒▒▒░░▒▒          
░░░░░▒▒▒▓▓▓▓▓▓▓▓▓▓██████▓▓▓▓▓▓▒░░░░░░░░▒▓▓▒▓▓▒▒▒▒▒▒▒▒          
 ░▒▒▒▓▓▓▓▓▓▓▓█████████████████▓░░░▒░░░░░▒▒▓▓▓▒▒▒▒▒▒▒▒          
  ▒▓▓▓▓▓▓█████████████████████▓▒░░░░░░░░░░▒▓▓▒▒▒▒▒▒▓▓▒         
   ▒▓▓▓████████████████████████▓▒▒░░░░░░░░░░▒▒▒▒▒▒▓▓▓▓▒        
   ▒▓▓██████████████████████████▓▓▒▒▒░░░░░░░▒░▒▒▒▒▒▓▓▓▒░       
    ▓███████████████████████████▓▓▓▒▒▒▒▒▒▒░░▒▒▒▒▒▒▒▒▒░░░       
    ▒██████████████████████████▓█▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░          
     ▓███████████████████████████████▓▓▓▒▒▒▒▒▒▒▒▒▒▒░           
      ▓██████████████████████████████▓▓▒▒▒▒▒▒▒▒▒▒▒▒░░          
       ██████████████████████████████▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒░░         
        ▓████████████████████████████▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░       
         ▒████████████████▓▓▓█▓███▓▓▓▓▒▓▓▓▓▓▓▓▓▒▓▓▒▒░░░░░░░    
           ▒██████████████▓▓▓▓▓▓██████▓▓▓▓▓▓▓▓▓▒▒▒▒░░░░░░░░░░  
             ▒█████████████████████████▓▓▓▓▓▓▓▓▓▒▒▒░░░░░░░░    
               ░█████████▓▒▒▓▓▓█████████▓▓▓▓▓▓▓▒▒▒░░░░     ░░  
                  ▓██████▓░░░░░░▒▒▒▓▓▓▓▓▓█▓░▓█▓▒▒▒░░░░░   ░░   
                    ▒██████▒░░░░░░░░░░░░▒░░░░▒▓▒░░░░░░     ░   
                       ▒▓████▓▒▒▒▒▓▓▓▒░░░░░░░░░░░░░░░░░░░░     
                          ▒██████████▓▓▒▒░░░░░░░░░ ░░░░░░░     
                             ░▒▓████▓▓▓▓▓▒▒▒▒░░░░░░ ░░░░░      
                                   ░░▓▓███▓▒▒▒▒░░░░░░░░        
                                        ░▒▒▒▒▒▒▒░░░░░          `
};
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("input");
  const output = document.getElementById("output");

  // --- Terminal state ---
  let awaitingPassword = false;
  let awaitingJournalSelection = false;
  let isTyping = false;
  const CORRECT_PASSWORD = "rosebud";

  // --- Journal entries ---
  const journalEntries = {
    "Monday": "Monday: Today I woke up early and enjoyed some donuts. The sunrise was beautiful...",
    "Tuesday": "Tuesday: Had a strange encounter with a cat that followed me around the block...",
    "Wednesday": "Wednesday: Got hacked again...I guess 'rosewater' was too easy a password...I'll make my new one 'rosebud'",
    "Thursday": "Thursday: Went for a walk and thought about the Rosewater Lane project...",
    "Friday": "Friday: Made a new discovery...this Dr. Pepper guy knows what he's doing!",
    "Saturday": "Saturday: ...the humans are starting to notice, I must be more inconspicuous..."
  };

  // --- Input handling ---
  input.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;

    const value = input.value.trim();
    if (!value) return;

    if (awaitingPassword) {
      handlePassword(value);
    } else if (awaitingJournalSelection) {
      handleJournalSelection(value);
    } else {
      processCommand(value);
    }

    input.value = "";
  });

  // --- Typing helpers (PROMISE-BASED) ---
  function typeText(text, speed = 30) {
    return new Promise(resolve => {
      isTyping = true;
      let i = 0;

      function step() {
        if (i < text.length) {
          output.innerHTML += text[i++];
          output.scrollTop = output.scrollHeight;
          setTimeout(step, speed);
        } else {
          isTyping = false;
          resolve();
        }
      }
      step();
    });
  }

  function typeTextToElement(el, text, speed = 30) {
    return new Promise(resolve => {
      let i = 0;
      function step() {
        if (i < text.length) {
          el.innerHTML += text[i++];
          output.scrollTop = output.scrollHeight;
          setTimeout(step, speed);
        } else {
          resolve();
        }
      }
      step();
    });
  }

  // --- Hack sequence (FIXED) ---
  async function runHackSequence() {
    const lines = [
      "Initializing exploit framework...",
      "Loading payload modules...",
      "Establishing secure connection...",
      "Bypassing firewall...",
      "Escalating privileges..."
    ];

    const wait = ms => new Promise(r => setTimeout(r, ms));

    await typeText("> hack\n", 10);

    for (const line of lines) {
      const lineEl = document.createElement("div");
      output.appendChild(lineEl);
      await typeTextToElement(lineEl, line + "\n", 20);
      await wait(500);
    }

    await wait(600);
    showHackFailure();
  }

  function showHackFailure() {
    const failEl = document.createElement("div");
    failEl.className = "hack-fail";
    failEl.textContent = "ACCESS DENIED";
    output.appendChild(failEl);

    setTimeout(() => {
      output.innerHTML += "\nRequest failed. Admin has been notified.\n";
      output.scrollTop = output.scrollHeight;
    }, 600);
  }

  // --- Command processor ---
  async function processCommand(command) {
    if (isTyping) return;

    const lower = command.toLowerCase();

    if (lower === "clear") {
      output.innerHTML = "";
      return;
    }

    if (lower === "hack") {
      await runHackSequence();
      return;
    }

    output.innerHTML += `> ${command}\n`;

    const response = getCommandResponse(command);
    if (response === null) return;

    await typeText(response + "\n");
  }

  // --- Command responses ---
  function getCommandResponse(command) {
    switch (command.toLowerCase()) {
      case "login":
        awaitingPassword = true;
        return "Enter password:";
      case "hello":
        return "Howdy, partner!";
      case "date":
        return new Date().toString();
      case "journal":
        awaitingJournalSelection = true;
        output.innerHTML = "";
        return Object.keys(journalEntries)
          .map((k, i) => `${i + 1}. ${k}`)
          .join("\n") + "\n\nType entry name, number, or 'exit'";
      default:
        return `'${command}' is not recognized. Type 'help'.`;
    }
  }

  // --- Password handler ---
  function handlePassword(value) {
    awaitingPassword = false;
    output.innerHTML += value === CORRECT_PASSWORD
      ? "Access granted.\n"
      : "Access denied.\n";
  }

  // --- Journal handler ---
  function handleJournalSelection(value) {
    if (value.toLowerCase() === "exit") {
      awaitingJournalSelection = false;
      output.innerHTML = "";
      return;
    }

    let entry = journalEntries[value];
    if (!entry && !isNaN(value)) {
      const keys = Object.keys(journalEntries);
      entry = journalEntries[keys[value - 1]];
    }

    output.innerHTML += entry
      ? `\n${entry}\n`
      : "\nEntry not found.\n";
  }
});
