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
  home: `  
        ::.
    _________H ,%%&%,
   /\\     _   \\%&&%%&%
  /  \\___/^\___\\%&%%&&
  |  | []   [] |%\Y&%
  |  |   .-.   | ||  
~~@._|@@_|||_@@|~||~~~~~~~~~~~~~
      """) )"""
`,
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
    drp: `
          .____.
         ;______:
         !      !
         ! Dr.  ! 
         !Pepper!
         !______!   
         :      : 
         :      :  
          ''''''`,
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
  navmap: `
  generating star map...
  
  .  +    +  +           '   '     +  .       '          .  +   
                .              '        o       o  + .        
 .  '      +  +   .    +     .             '               . .
       + '      *          .     .    o        +  .  .   +    
             *    * . +        o    .      ' '             '  
  o    .  .    .           +                      .    |   3A 
    .        +    '    '      . .      +  + +         -o-     
        .       .   '                           '      |   '  
.    '       '            . ' .   .          .    . '         
       *  o           .             +           .             
.  '         .      +      + .           . +               +  
               . .              *    '        . .     .  '   *
   '       .        .   * o o                      '          
.      .        '                 '   . '    +           .  * 
     .      +                   '   .            .            
.  *                    .    .                '      '        
          . .   *   *            |   2A    ' o .       .  .   
              '   .   * . '  + --o-- +                       *
*        +                       |            * +   *     .   
  '    .    _|_  1A  *                     +  *       '      .
     '   +   |     .  '     +       .                ' *      
*  *   *                 '       .    '         '          +  
     .    .       '                '          .               
       .     .  .     +       .      +     o    ' .  .  o   * 
       
Select sector to navigate to:
1A: Alterion Sector
2A: Boregian Sector
3A: Zygoxon Sector`,
  
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
  let awaitingJournalSelection = false;
  let awaitingCommsLogSelection = false;
  let isTyping = false;
  const CORRECT_PASSWORD = "rosebud";

  // --- Journal entries ---
  const journalEntries = {
    Monday: "Monday: Today I woke up early and enjoyed some donuts. The sunrise was beautiful...",
    Tuesday: "Tuesday: Had a strange encounter with a cat that followed me around the block...",
    Wednesday: "Wednesday: Got hacked again...I guess 'rosewater' was too easy a password...I'll make my new one 'rosebud'",
    Thursday: "Thursday: Went for a walk and thought about the Rosewater Lane project...",
    Friday: "Friday: Made a new discovery...this Dr. Pepper guy knows what he's doing!",
    Saturday: "Saturday: ...the humans are starting to notice, I must be more inconspicuous...",
    Sunday: "Sunday: Discovered a new source of natural gas concentrated in a place called Taco Bell..."
  };

  // --- Communications Logs ---
  const commsLogs = {
    "LOG-001": "[OUTBOUND]\nTo: Vessel ATLAS-9\nStatus: SENT\nMessage: Approaching rendezvous point.\nSignal strength stable.",
    "LOG-002": "[INBOUND]\nFrom: Vessel ATLAS-9\nStatus: RECEIVED\nMessage: Acknowledged. Holding position.",
    "LOG-003": "[INBOUND]\nFrom: Unknown Source\nStatus: DEGRADED\nMessage: .......DO NOT TRUST....",
    "LOG-004": "[OUTBOUND]\nTo: Mission Control\nStatus: FAILED\nMessage: Navigation anomaly detected. Requesting guidance."
  };

  // --- Menu commands ---
  const menuCommands = [
    ["menu", "list of commands"], ["status", "vessel status and system health"],
    ["nav", "navigation data and course plotting"], ["crew", "crew manifest and life-sign monitoring"],
    ["comms", "communications array and signal traffic"], ["journal", "***private*** no peeking!"],
    ["alerts", "active warnings and system notices"], ["ping", "server ping"],
    ["login", "authorized user access only"], ["clear", "clear all prompts"], ["reboot", "restart onboard systems"]
  ];

  // --- Secret commands ---
  const secretCommands = [
    ["bloom", "a beautiful flower for you"], ["boyack", "plumpy dumpy boiii"],
    ["calliefornia", "aww...sweet fluffy girl"], ["gemini", "now this appears to be a good sign..."],
    ["hack", "break into the mainframe"], ["leo", "meow big kitty"], ["ewlewis", "gross boy"]
  ];

  // --- Crew Vitals ---
  const crewvitalsCommands = [
    ["cosmiccostian", "Captain Cosmic Costian"], ["cuddlescostian", "Co-Captain Cuddles Costian"],
    ["callie", "Supervisor Callie"], ["bojack", "Security BoJack"], ["lewis", "Janitorial Lewis"]
  ];

  // --- Helper for appending text and auto-scrolling ---
  const appendOutput = text => {
    output.innerHTML += text;
    output.scrollTop = output.scrollHeight;
  };

  const appendOutputHTML = html => {
    output.innerHTML += html;
    output.scrollTop = output.scrollHeight;
  };

  // --- Input listener ---
  input.addEventListener("keydown", e => {
    if (e.key !== "Enter") return;
    const value = input.value.trim();
    if (!value) return;

    if (awaitingPassword) handlePassword(value);
    else if (awaitingJournalSelection) handleJournalSelection(value);
    else if (awaitingCommsLogSelection) handleCommsLogSelection(value);
    else processCommand(value);

    input.value = "";
  });

  // --- Wait helper ---
  const wait = ms => new Promise(r => setTimeout(r, ms));

  // --- Typing functions ---
  const typeText = (text, speed = 10) => {
    return new Promise(resolve => {
      isTyping = true;
      let i = 0;
      const interval = setInterval(() => {
        appendOutput(text.charAt(i));
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          isTyping = false;
          resolve();
        }
      }, speed);
    });
  };

  const typeTextToElement = (el, text, speed = 10) => {
    return new Promise(resolve => {
      let i = 0;
      const interval = setInterval(() => {
        el.innerHTML += text.charAt(i);
        output.scrollTop = output.scrollHeight;
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          resolve();
        }
      }, speed);
    });
  };

  // --- Command processor ---
  const processCommand = async command => {
    if (isTyping) return;
    const lower = command.toLowerCase();

    if (lower === "clear") {
      output.innerHTML = "";
      return;
    }

    const response = getCommandResponse(lower);
    if (response === null) return;

    await typeText(`> ${command}\n`);

    if (typeof response === "object" && response.type === "html") {
      if (response.header) await typeTextToElement(output, response.header + "\n\n", 15);
      if (response.content) await typeTextToElement(output, response.content + "\n", 10);
    } else {
      await typeText(response + "\n");
    }
  };

  // --- Command grid builder ---
  const buildCommandGrid = commands => {
    let html = `<div class="command-grid">`;
    for (let i = 0; i < commands.length; i += 2) {
      html += `<div class="cmd">${commands[i][0]}</div><div class="desc">${commands[i][1]}</div>`;
      if (commands[i + 1]) html += `<div class="cmd">${commands[i + 1][0]}</div><div class="desc">${commands[i + 1][1]}</div>`;
      else html += `<div></div><div></div>`;
    }
    html += `</div>`;
    return html;
  };

  // --- Command responses ---
  const getCommandResponse = command => {
    switch (command) {
      case "menu": return { type: "html", header: "*** MAIN MENU ***", content: buildCommandGrid(menuCommands) };
      case "secretmenu": return { type: "html", header: "*** SECRET MENU ***", content: buildCommandGrid(secretCommands) };
      case "crewvitals": return { type: "html", header: "*** CREW VITALS ***   select individual to view", content: buildCommandGrid(crewvitalsCommands) };
      case "hack": runHackSequence(); return null;
      case "test": runTest(); return null;
      case "1a": run1A(); return null;
      case "2a": run2A(); return null;
      case "3a": run3A(); return null;
      case "login": awaitingPassword = true; return "Enter password:";
      case "hello": return "Howdy, partner!";
      case "status": return ASCII_ART.rocket;
      case "journal":
        awaitingJournalSelection = true;
        output.innerHTML = "";
        let menu = "Journal Menu (type entry name or number, 'exit' to leave):\n";
        Object.keys(journalEntries).forEach((key, index) => menu += `${index + 1}. ${key}\n`);
        menu += "\nType the entry name or number:";
        return menu;
      case "commslog":
        awaitingCommsLogSelection = true;
        output.innerHTML = "";
        let commsMenu = "COMMUNICATIONS LOG (select log or type 'exit'):\n";
        Object.keys(commsLogs).forEach((key, index) => commsMenu += `${index + 1}. ${key}\n`);
        commsMenu += "\nType log name or number:";
        return commsMenu;
      case "bloom": return ASCII_ART.rose;
      case "gemini": return ASCII_ART.gemini;
      case "leo": return ASCII_ART.leo;
      case "ewlewis": return ASCII_ART.lewis;
      case "date": return new Date().toString();
      case "nav": return { type: "html", header: "", content: `<br><b>*** NAVIGATION CONTROL ***</b><br><br>Current Sector: ECHO-7<br>Current Destination: Rosewater Mission Control<br><br><b>navmap</b> View star map and set navigation destination<br><br>` };
      case "navmap": return ASCII_ART.navmap;
      case "comms": return { type: "html", header: "", content: `<br><b>*** COMMUNICATIONS ARRAY ***</b><br><br>Status: Optimal<br>Last Signal: 04/05/2025<br>Origin: 32.7574624,-97.1500809<br><br><b>commscan</b> Retrieve new communication data<br><b>commslog</b> Show received communications<br><br>` };
      case "commscan": return { type: "html", header: "", content: `<br><b>*** 2 NEW INCOMING MESSAGES ***</b><br><br>Origin: 32.8887704,-96.958692<br>Date: 02/28/2026<br>Message: P I Z Z A<br><br>Origin: 33.148969,-96.8191008<br>Date: 04/04/2026<br>Message: T A C O S<br><br>` };
      case "crew": return { type: "html", header: "", content: `<br><b>*** CREW ROSTER ***</b><br><br>Captain: Cosmic Costian<br>Co-Captain: Cuddles Costian<br>Supervisor: Callie<br>Security: BoJack<br>Janitorial: Lewis<br><br><b>crewvitals</b> Display crew member vitals & biometric data<br><br>` };
      case "cosmiccostian": return { type: "html", header: "", content: `<br><b>*** CREW MEMBER: COSMIC COSTIAN ***</b><br><br>Oxygen Levels: Good<br>C02 Levels: Fair<br>H20 Levels: Poor<br>Blood Pressure: !Warning Over Limit!<br>Heart Rate: 65` };
      case "cuddlescostian": return { type: "html", header: "", content: `<br><b>*** CREW MEMBER: CUDDLES COSTIAN ***</b><br><br>Oxygen Levels: Fair<br>C02 Levels: Good<br>H20 Levels: Excellent<br>Blood Pressure: Good<br>Heart Rate: 67` };
      case "bojack": return { type: "html", header: "", content: `<br><b>*** CREW MEMBER: BOJACK ***</b><br><br>Oxygen Levels: Fair<br>C02 Levels: !HIGH!<br>H20 Levels: !HIGH!<br>Blood Pressure: Fair<br>Heart Rate: 67` };
      case "lewis": return { type: "html", header: "", content: `<br><b>*** CREW MEMBER: LEWIS ***</b><br><br>Oxygen Levels: Poor<br>C02 Levels: Poor<br>H20 Levels: Poor<br>Blood Pressure: !HIGH!<br>Heart Rate: 77` };
      case "callie": return { type: "html", header: "", content: `<br><b>*** CREW MEMBER: CALLIE ***</b><br><br>Oxygen Levels: Good<br>C02 Levels: Good<br>H20 Levels: Excellent<br>Blood Pressure: Fair<br>Heart Rate: 68` };
      case "calliefornia": return ASCII_ART.callie;
      case "drpepper": return ASCII_ART.drp;
      case "home": return ASCII_ART.home;
      case "ping": launchPong(); return null;
      case "pip": displayPip(); return null;
      default: return `'${command}' is not recognized as a command. Type 'menu' for a list of available commands.`;
    }
  };

  // --- Password handler ---
  const handlePassword = inputValue => {
    awaitingPassword = false;
    if (inputValue === CORRECT_PASSWORD) appendOutput("<b>Access granted.</b>\nWelcome back, admin. Access to <b>secretmenu</b> now authorized.\n");
    else appendOutput("<b>Access denied.</b>\nInvalid credentials. You'll never find my password! <p>Surely I'd never store it somewhere obvious like my journal...\n");
  };

  // --- Journal handler ---
  const handleJournalSelection = inputValue => {
    if (inputValue.toLowerCase() === "exit") { awaitingJournalSelection = false; appendOutput("Exited journal mode.\n"); return; }
    let entryText = journalEntries[inputValue] ?? journalEntries[Object.keys(journalEntries)[parseInt(inputValue)-1]];
    appendOutput(entryText ? `\n${entryText}\n` : "Entry not found.\n");
  };

  // --- Comms Log handler ---
  const handleCommsLogSelection = inputValue => {
    if (inputValue.toLowerCase() === "exit") { awaitingCommsLogSelection = false; output.innerHTML = ""; appendOutput("Exited communications log.\n"); return; }
    let logText = commsLogs[inputValue] ?? commsLogs[Object.keys(commsLogs)[parseInt(inputValue)-1]];
    appendOutput(logText ? `\n${logText}\n` : "Log not found.\n");
  };

  // --- Pip ---
  const displayPip = () => {
    const img = document.createElement("img");
    img.src = "https://gifdb.com/images/high/black-background-pip-boy-v3z1j9i2auvwgcz8.webp";
    img.style.width = "75px";
    output.appendChild(img);
    output.scrollTop = output.scrollHeight;
  };

  // --- Hack / Test / Nav sequences ---
  const runSequence = async (cmd, lines, finalLines = []) => {
    await typeText(`> ${cmd}\n`);
    for (const line of lines) { await typeText(line + "\n", 20); await wait(500); }
    for (const line of finalLines) { await typeText(line + "\n", 15); await wait(400); }
  };

  const runHackSequence = async () => runSequence("hack",
    ["Initializing exploit framework...", "Loading payload modules...", "Establishing secure connection...", "Bypassing firewall...", "Escalating privileges..."],
    ["PROCESS COMPLETE", "Your personal data has successfully been uploaded to the dark-web, thanks!"]
  );

  const runTest = async () => runSequence("test",
    ["Calibrating sensors...", "Activating power modules...", "Establishing location...", "Checking Dr. Pepper levels..."],
    ["PROCESS CANCELLED", "Dr. Pepper levels insufficient for function. Add more Dr. Pepper to complete testing."]
  );

  const run1A = async () => runSequence("1A",
    ["Establishing coordinates...", "Running threat detection protocols...", "Initializing fuel systems..."],
    ["NOW ROUTING TO ALTERION SECTOR", "Estimated time to location, 3 lightyears"]
  );

  const run2A = async () => runSequence("2A",
    ["Establishing coordinates...", "Running threat detection protocols...", "Initializing fuel systems..."],
    ["NOW ROUTING TO BOREGIAN SECTOR", "Estimated time to location, 5 lightyears"]
  );

  const run3A = async () => runSequence("3A",
    ["Establishing coordinates...", "Running threat detection protocols...", "Initializing fuel systems..."],
    ["ERROR: NAVIGATION PROCESS CANCELLED", "Unable to establish connection due to high level threat detection."]
  );

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
    const paddleHeight = 80, paddleWidth = 10;
    let leftY = canvas.height/2 - paddleHeight/2, rightY = leftY;
    let ballX = canvas.width/2, ballY = canvas.height/2, ballVX = 4, ballVY = 3;
    const keys = {};
    document.addEventListener("keydown", e => keys[e.key] = true);
    document.addEventListener("keyup", e => keys[e.key] = false);

    pongInterval = setInterval(() => {
      if (keys["ArrowLeft"]) leftY -= 5;
      if (keys["ArrowRight"]) leftY += 5;
      if (keys["ArrowUp"]) rightY -= 5;
      if (keys["ArrowDown"]) rightY += 5;

      ballX += ballVX; ballY += ballVY;
      if (ballY <=0 || ballY >= canvas.height) ballVY*=-1;
      if (ballX <= paddleWidth && ballY > leftY && ballY < leftY + paddleHeight) ballVX*=-1;
      if (ballX >= canvas.width - paddleWidth && ballY > rightY && ballY < rightY + paddleHeight) ballVX*=-1;
      if (ballX<0 || ballX>canvas.width){ ballX=canvas.width/2; ballY=canvas.height/2; }

      ctx.clearRect(0,0,canvas.width,canvas.height);
      ctx.fillStyle="#00ff00";
      ctx.fillRect(0,leftY,paddleWidth,paddleHeight);
      ctx.fillRect(canvas.width-paddleWidth,rightY,paddleWidth,paddleHeight);
      ctx.fillRect(ballX,ballY,8,8);
    }, 1000/60);
  };

  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && pongInterval) {
      clearInterval(pongInterval);
      pongInterval = null;
      document.getElementById("game-container").style.display="none";
      input.disabled = false;
      input.focus();
      appendOutput("Exited pong.\n");
    }
  });

});
