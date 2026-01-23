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

  // --- Terminal state flags ---
  let awaitingPassword = false;
  const CORRECT_PASSWORD = "rosebud";

  let awaitingJournalSelection = false;

  // --- Journal entries ---
  const journalEntries = {
    "Monday": "Monday: Today I woke up early and enjoyed some donuts. The sunrise was beautiful...",
    "Tuesday": "Tuesday: Had a strange encounter with a cat that followed me around the block...",
    "Wednesday": "Wednesday: Got hacked again...I guess 'rosewater' was too easy a password...I'll make my new one 'rosebud'",
    "Thursday": "Thursday: Went for a walk and thought about the Rosewater Lane project...",
    "Friday": "Friday: Made a new discovery...this Dr. Pepper guy knows what he's doing!",
    "Saturday": "Saturday: ...the humans are starting to notice, I must be more inconspicuous..."
  };

  // --- Commands for help menus ---
  const helpCommands = [
    ["login", "authorized user access only"],
    ["help", "list of commands"],
    ["hello", "returns a friendly message"],
    ["systems", "check status of rocket systems"],
    ["date", "today's date"],
    ["journal", "***private*** no peeking!"],
    ["ping", "server ping"],
    ["pip", "show pip boy"],
    ["clear", "clear all prompts"]
  ];

  const secretCommands = [
    ["bloom", "a beautiful flower for you"],
    ["boyack", "plumpy dumpy boiii"],
    ["calliefornia", "aww...sweet fluffy girl"],
    ["gemini", "now this appears to be a good sign..."],
    ["hack", "break into the mainframe"],
    ["leo", "meow big kitty"],
    ["lewis", "gross boy"]
  ];

  // --- Input listener ---
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
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
    }
  });
let isTyping = false;

function typeText(text, speed = 20, callback) {
  isTyping = true;
  let i = 0;

  function step() {
    if (i < text.length) {
      output.innerHTML += text[i];
      i++;
      output.scrollTop = output.scrollHeight;
      setTimeout(step, speed);
    } else {
      isTyping = false;
      if (callback) callback();
    }
  }

  step();
}

  // --- Command processor ---
const processCommand = (command) => {
  if (isTyping) return;

  const response = getCommandResponse(command);

  // Custom actions
  if (typeof response === "object" && response.action) {
    response.action();
    return;
  }

  // HTML-aware response
  if (typeof response === "object" && response.type === "html") {
    typeText(`> ${command}\n`, 10, () => {
      typeText(response.header, 15, () => {
        output.innerHTML += response.content;
        output.innerHTML += "\n";
        output.scrollTop = output.scrollHeight;
      });
    });
    return;
  }

  // Plain text fallback
  typeText(`> ${command}\n`, 10, () => {
    if (response) {
      typeText(response + "\n", 15);
    }
  });
};


  // --- Command grid builder ---
  const buildCommandGrid = (commands) => {
    let html = `<div class="command-grid">`;
    for (let i = 0; i < commands.length; i += 2) {
      html += `<div class="cmd">${commands[i][0]}</div><div class="desc">${commands[i][1]}</div>`;
      if (commands[i + 1]) {
        html += `<div class="cmd">${commands[i + 1][0]}</div><div class="desc">${commands[i + 1][1]}</div>`;
      } else {
        html += `<div></div><div></div>`;
      }
    }
    html += `</div>`;
    return html;
  };

  // --- Command responses ---
  const getCommandResponse = (command) => {
    switch (command.toLowerCase()) {
     case "help":
        return {
          type: "html",
          header: "Available commands:\n",
          content: buildCommandGrid(helpCommands)
  };
      case "secretmenu":
        return {
          type: "html",
          header: "Secret commands:\n",
          content: buildCommandGrid(secretCommands)
  };

      case "login":
        awaitingPassword = true;
        return "Enter password:";
      case "hello":
        return "Howdy, partner!";
     case "systems":
  return ASCII_ART.rocket;
      case "journal":
        awaitingJournalSelection = true;
        output.innerHTML = ""; // Clear screen before showing journal menu
        let menu = "Journal Menu (type entry name or number, 'exit' to leave):\n";
        Object.keys(journalEntries).forEach((key, index) => {
          menu += `${index + 1}. ${key}\n`;
  });
  menu += "\nType the entry name or number:";
  return menu;
        menu += "\nType the entry name or number:";
        return menu;
      case "bloom":
        return `<pre>${ASCII_ART.rose}</pre>`;
      case "gemini":
        return `<pre>${ASCII_ART.gemini}</pre>`;
       case "leo":
        return `<pre>${ASCII_ART.leo}</pre>`;
      case "lewis":
        return `<pre>${ASCII_ART.lewis}</pre>`;
      case "date":
        return new Date().toString();
      case "hack":
        return "You didn't think that was actually going to work...did you?";
      case "calliefornia":
        return `<pre>${ASCII_ART.callie}</pre>`;
      case "ping":
        launchPong();
        return "";
      case "pip":
        displayPip();
        return "";
      case "clear":
        output.innerHTML = "";
        return "";
      default:
        return `'${command}' is not recognized as a command. Type 'help' for a list of available commands.`;
    }
  };

  // --- Password handler ---
  const handlePassword = (inputValue) => {
    awaitingPassword = false;
    if (inputValue === CORRECT_PASSWORD) {
      output.innerHTML += "<b>Access granted.</b><br>\nWelcome back, admin. Access to <b>secretmenu</b> now authorized.\n";
    } else {
      output.innerHTML += "<b>Access denied.</b>\nInvalid credentials.\n";
    }
    output.scrollTop = output.scrollHeight;
  };

  // --- Journal selection handler ---
const handleJournalSelection = (inputValue) => {

  // Allow exiting journal mode
  if (inputValue.toLowerCase() === "exit" || inputValue.toLowerCase() === "back") {
    awaitingJournalSelection = false;

    // Clear the terminal after exiting
    output.innerHTML = "";

    // Optionally, you can add a welcome line back
    output.innerHTML += "Exited journal mode.\n";
    output.scrollTop = output.scrollHeight;
    return;
  }

  let entryText = "";

  // Number selection
  if (!isNaN(inputValue)) {
    const index = parseInt(inputValue) - 1;
    const keys = Object.keys(journalEntries);
    if (keys[index]) entryText = journalEntries[keys[index]];
  } else {
    // Name selection
    if (journalEntries[inputValue]) entryText = journalEntries[inputValue];
  }

  if (entryText) {
    output.innerHTML += `\n${entryText}\n`;
  } else {
    output.innerHTML += "Entry not found. Try again or type 'exit' to leave.\n";
  }

  output.scrollTop = output.scrollHeight;
};

  const displayPip = () => {
    const img = document.createElement("img");
    img.src = "https://gifdb.com/images/high/black-background-pip-boy-v3z1j9i2auvwgcz8.webp";
    img.alt = "Pip Boy";
    img.style.width = "75px";
    img.style.height = "100px";
    output.appendChild(img);
  };

  // --- Pong ---
  const launchPong = () => {
    const gameContainer = document.getElementById("game-container");
    const canvas = document.getElementById("pong");
    const ctx = canvas.getContext("2d");

    gameContainer.style.display = "block";
    input.disabled = true;

    startPong(ctx, canvas);
  };

  let pongInterval;

  const startPong = (ctx, canvas) => {
    const paddleHeight = 80;
    const paddleWidth = 10;
    let leftY = canvas.height / 2 - paddleHeight / 2;
    let rightY = leftY;
    let ballX = canvas.width / 2;
    let ballY = canvas.height / 2;
    let ballVX = 4;
    let ballVY = 3;
    const keys = {};

    document.addEventListener("keydown", e => keys[e.key] = true);
    document.addEventListener("keyup", e => keys[e.key] = false);

    pongInterval = setInterval(() => {
      if (keys["ArrowLeft"]) leftY -= 5;
      if (keys["ArrowRight"]) leftY += 5;
      if (keys["ArrowUp"]) rightY -= 5;
      if (keys["ArrowDown"]) rightY += 5;

      ballX += ballVX;
      ballY += ballVY;

      if (ballY <= 0 || ballY >= canvas.height) ballVY *= -1;
      if (ballX <= paddleWidth && ballY > leftY && ballY < leftY + paddleHeight) ballVX *= -1;
      if (ballX >= canvas.width - paddleWidth && ballY > rightY && ballY < rightY + paddleHeight) ballVX *= -1;

      if (ballX < 0 || ballX > canvas.width) {
        ballX = canvas.width / 2;
        ballY = canvas.height / 2;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#00ff00";
      ctx.fillRect(0, leftY, paddleWidth, paddleHeight);
      ctx.fillRect(canvas.width - paddleWidth, rightY, paddleWidth, paddleHeight);
      ctx.fillRect(ballX, ballY, 8, 8);
    }, 1000 / 60);
  };

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && pongInterval) {
      clearInterval(pongInterval);
      pongInterval = null;

      document.getElementById("game-container").style.display = "none";
      input.disabled = false;
      input.focus();

      output.innerHTML += "Exited pong.\n";
    }
  });

});
