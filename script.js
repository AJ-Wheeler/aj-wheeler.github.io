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
  .  +    +  +           '   '     +  .       '          .  +   
                .              '        o       o  + .        
 .  '      +  +   .    +     .             '               . .
       + '      *          .     .    o        +  .  .   +    
             *    * . +        o    .      ' '             '  
  o    .  .    .           +                      .    |  (3A)
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
          . .   *   *            |  (2A)   ' o .       .  .   
              '   .   * . '  + --o-- +                       *
*        +                       |            * +   *     .   
  '    .    _|_ (1A) *                     +  *       '      .
     '   +   |     .  '     +       .                ' *      
*  *   *                 '       .    '         '          +  
     .    .       '                '          .               
       .     .  .     +       .      +     o    ' .  .  o   * 
       
Select coordinates to navigate to`,
  
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

  // --- Help commands ---
  const helpCommands = [
    ["login", "authorized user access only"],
    ["help", "list of commands"],
    ["systems", "check status of onboard systems"],
    ["journal", "***private*** no peeking!"],
    ["ping", "server ping"],
    ["clear", "clear all prompts"]
  ];
  
  // --- Secret commands ---
  const secretCommands = [
    ["bloom", "a beautiful flower for you"],
    ["boyack", "plumpy dumpy boiii"],
    ["calliefornia", "aww...sweet fluffy girl"],
    ["gemini", "now this appears to be a good sign..."],
    ["hack", "break into the mainframe"],
    ["leo", "meow big kitty"],
    ["ewlewis", "gross boy"]
  ];

    // --- Systems commands ---
  const systemsCommands = [
    ["status", "vessel status and system health"],
    ["comms", "communications array and signal traffic"],
    ["nav", "navigation data and course plotting"],
    ["crew", "crew manifest and life-sign monitoring"],
    ["alerts", "active warnings and system notices"],
    ["reboot", "restart onboard systems"]
  ];

    // --- Crew Vitals ---
  const crewvitalsCommands = [
    ["cosmiccostian", "Captain Cosmic Costian"],
    ["cuddlescostian", "Co-Captain Cuddles Costian"],
    ["callie", "Supervisor Callie"],
    ["bojack", "Security BoJack"],
    ["lewis", "Janitorial Lewis"],
  ];

  // --- Helper for appending text and auto-scrolling ---
  const appendOutput = (text) => {
    output.innerHTML += text;
    output.scrollTop = output.scrollHeight; // scroll to bottom
  };

  const appendOutputHTML = (html) => {
    output.innerHTML += html;
    output.scrollTop = output.scrollHeight;
  };

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

  // --- Typing functions ---
  const typeText = (text, speed = 10) => {
    return new Promise((resolve) => {
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

  // Updated typeTextToElement to always scroll the main terminal
  const typeTextToElement = (el, text, speed = 10) => {
    return new Promise((resolve) => {
      let i = 0;
      const interval = setInterval(() => {
        el.innerHTML += text.charAt(i);
        output.scrollTop = output.scrollHeight; // scroll main terminal
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          resolve();
        }
      }, speed);
    });
  };

  // --- Command processor ---
  const processCommand = async (command) => {
    const lower = command.toLowerCase();
    const instantCommands = ["clear", "ping", "pip", "hack", "exit"];

    if (isTyping && !instantCommands.includes(lower)) return;

    if (lower === "clear") {
      output.innerHTML = "";
      return;
    }

    const response = getCommandResponse(command);
    if (response === null) return;

    appendOutput(`> ${command}\n`);

    if (typeof response === "object" && response.type === "html") {
      await typeText(response.header + "\n");
      appendOutputHTML(response.content + "\n");
    } else {
      await typeText(response + "\n");
    }
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
        return { type: "html", header: "*** MAIN MENU ***", content: buildCommandGrid(helpCommands) };
      case "secretmenu":
        return { type: "html", header: "*** SECRET MENU ***", content: buildCommandGrid(secretCommands) };
      case "systems":
        return { type: "html", header: "*** SYSTEMS MENU ***", content: buildCommandGrid(systemsCommands) };
      case "crewvitals":
        return { type: "html", header: "*** CREW VITALS ***   select individual to view", content: buildCommandGrid(crewvitalsCommands) };
      case "hack":
        runHackSequence();
        return null;
        case "test":
        runTest();
        return null;
      case "login":
        awaitingPassword = true;
        return "Enter password:";
      case "hello":
        return "Howdy, partner!";
      case "status":
        return ASCII_ART.rocket;
      case "journal":
        awaitingJournalSelection = true;
        output.innerHTML = "";
        let menu = "Journal Menu (type entry name or number, 'exit' to leave):\n";
        Object.keys(journalEntries).forEach((key, index) => {
          menu += `${index + 1}. ${key}\n`;
        });
        menu += "\nType the entry name or number:";
        return menu;
      case "bloom":
        return ASCII_ART.rose;
      case "gemini":
        return ASCII_ART.gemini;
      case "leo":
        return ASCII_ART.leo;
      case "ewlewis":
        return ASCII_ART.lewis;
      case "date":
        return new Date().toString();
      case "nav":
        return {
          type: "html",
          header: "*** NAVIGATION CONTROL ***",
          content: `Current Sector: ECHO-7<br>Destination: Rosewater Mission Control<br><br><b>navplot</b> Select a location to navigate to<br><b>navmap</b> View star map`
  };
      case "navmap":
        return ASCII_ART.navmap;
      case "comms":
        return {
          type: "html",
          header: "*** COMMUNICATIONS ARRAY ***",
          content: `Status: Optimal<br>Last Signal: 04/05/2025<br>Origin: 32.7574624,-97.1500809<br><br><b>commscan</b> Retrieve new communication data<br><b>commlogs</b> Show received communications`
  };
      case "commscan":
        return {
          type: "html",
          header: "*** INCOMING MESSAGES ***",
          content: `Origin: 32.8887704,-96.958692<br>Date: 02/28/2026<br>Message: P I Z Z A<br><br>Origin: 33.148969,-96.8191008<br>Date: 04/04/2026<br>Message: T A C O S<br><br><b>comms</b> Return to comms menu`
  };
      case "crew":
        return {
          type: "html",
          header: "*** CREW ROSTER ***",
          content: `Captain: Cosmic Costian<br>Co-Captain: Cuddles Costian<br>Supervisor: Callie<br>Security: BoJack<br>Janitorial: Lewis<br><br><b>crewvitals</b> Display crew member vitals & biometric data<br><b>crewlocate</b> Retrieve current location data for crew members`
  };
      case "cosmiccostian":
        return {
          type: "html",
          header: "CREW MEMBER: COSMIC COSTIAN",
          content: `Oxygen Levels: Good<br>C02 Levels: Fair<br>H20 Levels: Poor<br>Blood Pressure: !Warning Over Limit!<br>Heart Rate: 65`
  };
      case "cuddlescostian":
        return {
          type: "html",
          header: "CREW MEMBER: CUDDLES COSTIAN",
          content: `Oxygen Levels: Fair<br>C02 Levels: Good<br>H20 Levels: Excellent<br>Blood Pressure: Good<br>Heart Rate: 67`
  };
      case "bojack":
        return {
          type: "html",
          header: "CREW MEMBER: BOJACK",
          content: `Oxygen Levels: Fair<br>C02 Levels: !HIGH!<br>H20 Levels: !HIGH!<br>Blood Pressure: Fair<br>Heart Rate: 67`
  };
        case "lewis":
        return {
          type: "html",
          header: "CREW MEMBER: LEWIS",
          content: `Oxygen Levels: Poor<br>C02 Levels: Poor<br>H20 Levels: Poor<br>Blood Pressure: !HIGH!<br>Heart Rate: 77`
  };
      case "callie":
        return {
          type: "html",
          header: "CREW MEMBER: CALLIE",
          content: `Oxygen Levels: Good<br>C02 Levels: Good<br>H20 Levels: Excellent<br>Blood Pressure: Fair<br>Heart Rate: 68`
  };
      case "calliefornia":
        return ASCII_ART.callie;
      case "drpepper":
        return ASCII_ART.drp;
      case "home":
        return ASCII_ART.home;
      case "ping":
        launchPong();
        return null;
      case "pip":
        displayPip();
        return null;
      default:
        return `'${command}' is not recognized as a command. Type 'help' for a list of available commands.`;
    }
  };

  // --- Password handler ---
  const handlePassword = (inputValue) => {
    awaitingPassword = false;
    if (inputValue === CORRECT_PASSWORD) {
      appendOutput("<b>Access granted.</b>\nWelcome back, admin. Access to <b>secretmenu</b> now authorized.\n");
    } else {
      appendOutput("<b>Access denied.</b>\nInvalid credentials. You'll never find my password! <p>Surely I'd never store it somewhere obvious like my journal...\n");
    }
  };

  // --- Journal handler ---
  const handleJournalSelection = (inputValue) => {
    if (inputValue.toLowerCase() === "exit") {
      awaitingJournalSelection = false;
      appendOutput("Exited journal mode.\n");
      return;
    }

    let entryText = journalEntries[inputValue];
    if (!entryText && !isNaN(inputValue)) {
      const key = Object.keys(journalEntries)[inputValue - 1];
      entryText = journalEntries[key];
    }

    appendOutput(entryText ? `\n${entryText}\n` : "Entry not found.\n");
  };

  // --- Pip ---
  const displayPip = () => {
    const img = document.createElement("img");
    img.src = "https://gifdb.com/images/high/black-background-pip-boy-v3z1j9i2auvwgcz8.webp";
    img.style.width = "75px";
    output.appendChild(img);
    output.scrollTop = output.scrollHeight;
  };

  // --- Hack sequence ---
  const runHackSequence = async () => {
    const wait = (ms) => new Promise(r => setTimeout(r, ms));

    await typeText("> hack\n");

    const lines = [
      "Initializing exploit framework...",
      "Loading payload modules...",
      "Establishing secure connection...",
      "Bypassing firewall...",
      "Escalating privileges..."
    ];

    for (const line of lines) {
      await typeText(line + "\n", 20);
      await wait(500);
    }

    await wait(700);
    await typeText("PROCESS COMPLETE\n", 30);
    await wait(400);
    await typeText("Your personal data has successfully been uploaded to the dark-web, thanks!\n", 15);
  };

    // --- Test sequence ---
  const runTest = async () => {
    const wait = (ms) => new Promise(r => setTimeout(r, ms));

    await typeText("> test\n");

    const lines = [
      "Calibrating sensors...",
      "Activating power modules...",
      "Establishing location...",
      "Checking Dr. Pepper levels..."
    ];

    for (const line of lines) {
      await typeText(line + "\n", 20);
      await wait(500);
    }

    await wait(700);
    await typeText("PROCESS CANCELLED\n", 30);
    await wait(400);
    await typeText("Dr. Pepper levels insufficient for function. Add more Dr. Pepper to complete testing.\n", 15);
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

      appendOutput("Exited pong.\n");
    }
  });

});
