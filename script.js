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
      '  '  ' 
Use command REFUEL to replenish fuel source`,
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
          ''''''
  Mmm yum...Oh you wanted rocket fuel? 
Sorry, we don't have any of that laying around...`,
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
  cuddles: `⠀⠀⠀⠀⢀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⣠⠾⠛⠶⣄⢀⣠⣤⠴⢦⡀⠀⠀⠀⠀
⠀⠀⠀⢠⡿⠉⠉⠉⠛⠶⠶⠖⠒⠒⣾⠋⠀⢀⣀⣙⣯⡁⠀⠀⠀⣿⠀⠀⠀⠀
⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⢸⡏⠀⠀⢯⣼⠋⠉⠙⢶⠞⠛⠻⣆⠀⠀⠀
⠀⠀⠀⢸⣧⠆⠀⠀⠀⠀⠀⠀⠀⠀⠻⣦⣤⡤⢿⡀⠀⢀⣼⣷⠀⠀⣽⠀⠀⠀
⠀⠀⠀⣼⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠙⢏⡉⠁⣠⡾⣇⠀⠀⠀
⠀⠀⢰⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠋⠉⠀⢻⡀⠀⠀
⣀⣠⣼⣧⣤⠀⠀⠀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡀⠀⠀⠐⠖⢻⡟⠓⠒
⠀⠀⠈⣷⣀⡀⠀⠘⠿⠇⠀⠀⠀⢀⣀⣀⠀⠀⠀⠀⠿⠟⠀⠀⠀⠲⣾⠦⢤⠀
⠀⠀⠋⠙⣧⣀⡀⠀⠀⠀⠀⠀⠀⠘⠦⠼⠃⠀⠀⠀⠀⠀⠀⠀⢤⣼⣏⠀⠀⠀
⠀⠀⢀⠴⠚⠻⢧⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⠞⠉⠉⠓⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠈⠉⠛⠛⠶⠶⠶⣶⣤⣴⡶⠶⠶⠟⠛⠉⠀⠀⠀⠀⠀⠀⠀`,
  cosmic:`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡤⠴⠒⠒⠒⠒⠒⠒⠒⠉⠉⠉⠁⠀⠀⠀⠻⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⠴⠚⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⡝⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡤⠞⠉⠀⢀⡠⠖⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⠈⡟⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠞⠉⠀⠀⣠⠔⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡿⠀⠃⠀⠹⣄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠚⠁⠀⠀⣠⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠟⠀⠀⠀⠀⠀⠘⣆⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢠⠞⠁⠀⠀⢀⡼⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⠞⠁⢀⡴⠀⠀⠀⠀⠀⠘⣆⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣰⠋⠀⠀⠀⢠⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠃⠀⣠⠖⠋⠀⠀⠀⠀⠀⠀⠀⢸⡄⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⡴⠃⠀⠀⠀⢀⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠃⢠⡞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣷⠀⠀⠀⠀⠀
⠀⠀⠀⠀⡼⠁⠀⠀⠀⠀⡾⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⡤⠤⠤⠔⠒⠒⠒⠺⣧⠘⢧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⠀⠀⠀⠀⠀
⠀⠀⢠⡾⣇⠀⠀⠀⠀⢰⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⠖⠊⠉⠀⠀⠀⠀⠀⠀⠀⠀⠰⡞⢳⡈⢣⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀
⠀⣴⠋⠀⠘⢧⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⣠⠞⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⠀⠀⠀⠀⢹⠈⢇⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀
⣼⡃⣠⢄⡀⠘⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⣠⠞⠁⠀⢀⣀⣤⣶⣶⣶⣶⣶⣶⣶⣶⣌⣙⣿⡄⠀⢈⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⢠⠇⠀⠀⠀⠀⠀
⣿⢷⣿⣿⣮⠃⠀⠀⠀⢸⠀⠀⠀⠀⠀⡴⠁⠀⣠⣶⣿⡿⠟⠛⠉⠀⠀⠀⠈⣿⣿⡿⠷⠚⠁⠀⠀⠀⠆⠀⠀⠀⠀⠀⠀⠀⢀⣿⠀⠀⠀⠀⠀⠀
⠘⣿⣿⣿⢻⣷⡀⠀⠀⠘⡇⠀⠀⠀⠀⢠⣦⣾⣿⣫⣥⣶⣶⣦⣤⣄⣀⣠⣾⣿⣿⡇⠀⠀⠀⠀⢀⣤⠤⠀⠀⠀⠀⠀⠀⠀⠈⡟⠀⠀⠀⠀⠀⠀
⠀⠻⣿⣿⡄⢻⣷⡀⠀⠀⣷⠀⠀⠀⢀⣿⣿⣿⣿⣿⡋⠉⠀⠀⠈⠉⣻⣿⣿⣿⣟⡼⠀⠀⠀⣮⡏⠁⠀⠀⠀⠀⠀⠀⠀⠀⢸⠇⠀⠀⠀⠀⠀⠀
⠀⣰⣿⣿⣿⣶⢿⣇⡆⠀⠉⠀⠀⠀⣸⣿⣿⣿⣿⣿⣟⠻⢶⣤⣤⣴⣿⣿⣿⢟⠟⠀⠀⠀⢀⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡟⠀⠀⠀⠀⠀⠀⠀
⠀⣿⢇⠻⣿⣿⡼⣿⡷⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣦⣤⣾⣿⣿⡿⣟⠵⠁⣠⠞⠀⠀⢸⠁⠀⠀⠀⠀⠀⠀⠀⠀⢀⡼⠀⠀⠀⠀⠀⠀⠀⠀
⢸⠛⢦⣕⡨⠛⢛⣿⠇⠀⠀⠀⠀⠀⣾⣟⣻⡿⠿⠿⠿⠿⢿⣻⣫⠥⠚⢁⡾⠚⠁⠀⠀⣠⠏⠀⠀⠀⠀⠀⠀⠀⠀⢀⡜⠁⠀⠀⠀⠀⠀⠀⠀⠀
⢸⡄⠀⠈⠉⠒⠒⠈⠀⠀⠀⠀⠀⠀⠈⠁⢈⠉⠁⠀⠀⠀⢈⣉⣤⠤⠒⠉⠀⠀⠀⠀⡰⠋⢰⠀⠀⠀⠀⠀⠀⢀⡴⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⢷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡤⠊⠀⠀⢸⠀⠀⠀⢀⡠⠖⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠙⢦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⠴⠒⠉⠀⢠⠀⠀⢸⠒⠒⣫⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠈⠙⣶⡄⠰⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠔⠚⠋⠁⠀⠀⠀⠀⠀⡇⠀⠀⠘⡇⠘⢰⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠘⣟⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡏⠀⠀⠀⠀⠀⠀⠀⢀⡼⠁⠀⠀⢰⠃⠀⡉⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢹⡁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡇⠀⠀⠀⠀⠀⠀⠀⠋⠀⠀⢀⣴⢿⠀⢀⡄⢸⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠳⣄⠰⢦⣠⠶⠶⣤⡀⠀⠀⠀⠀⢿⡆⠀⠀⠀⠀⠀⢀⣠⠴⠞⠉⠀⣼⠀⠈⣇⠀⢷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢳⡓⣶⡒⠊⠁⠉⠀⠀⠀⢈⡾⠇⠀⠀⠀⡠⠞⠉⠀⠀⠀⠀⢸⠏⡇⠀⠟⠀⠈⢧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢳⠈⠇⠀⠀⠀⠀⠀⠀⠀⠀⢠⠀⣴⣟⣀⡀⠀⠀⠀⠀⠀⠸⢼⢻⡀⠰⡄⠀⠀⠙⢦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠟⠁⠀⠈⠉⠳⣶⣖⡒⠒⠀⠀⢸⣷⡀⠹⡄⠀⠀⠀⠉⠓⢦⣄⣀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣦⡀⠀⠀⠀⠀⠀⠀⡴⠋⠀⠀⠀⠀⠀⠀⠈⠱⣍⠀⠀⠀⠀⠁⠳⠀⠹⡄⠀⠀⠀⠀⠘⠀⠉⠓⠢⣄⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠓⠶⠶⠶⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣆⠀⠀⠀⠀⠀⠀⣄⠱⣄⠀⠀⠀⠀⠀⠀⠀⡎⠀⠈⠰⣀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡿⡆⠀⠀⠀⠀⠀⠘⣆⠘⢦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡟⠓⠁⠀⠀⠀⠀⠀⠀⠘⡦⠀⠈⠛⠢⠤⠤⠀⠀⠀⠀⠀⠀`,
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
  const TYPING_SPEEDS = {
  asciiFast: 5,
  htmlSlow: 25,
  normal: 15
};

// Convert HTML bios → terminal-safe text
const htmlToTerminalText = (html) => {
  return html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/b>/gi, "")
    .replace(/<b>/gi, "")
    .replace(/<[^>]+>/g, "");
};


  // --- Journal entries ---
  const journalEntries = {
    "Monday": "Monday: Today I woke up early and enjoyed some donuts. The sunrise was beautiful...",
    "Tuesday": "Tuesday: Had a strange encounter with a cat that followed me around the block...",
    "Wednesday": "Wednesday: Got hacked again...I guess 'rosewater' was too easy a password...I'll make my new one 'rosebud'",
    "Thursday": "Thursday: Went for a walk and thought about the Rosewater Lane project...",
    "Friday": "Friday: Made a new discovery...this Dr. Pepper guy knows what he's doing!",
    "Saturday": "Saturday: ...the humans are starting to notice, I must be more inconspicuous...",
    "Sunday": "Sunday: Discovered a new source of natural gas concentrated in a place called Taco Bell..."
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
    ["menu", "list of commands"],
    ["status", "vessel status and system health"],
    ["nav", "navigation data and course plotting"],
    ["crew", "crew manifest and life-sign monitoring"],
    ["comms", "communications array and signal traffic"],
    ["journal", "***private*** no peeking!"],
    ["alerts", "active warnings and system notices"],
    ["ping", "server ping"],
    ["login", "authorized user access only"],
    ["clear", "clear all prompts"],
    ["reboot", "restart onboard systems"]
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

    // --- Crew Vitals ---
  const crewvitalsCommands = [
    ["cosmic", "Captain Cosmic"],
    ["cuddles", "Co-Captain Cuddles"],
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
} else if (awaitingCommsLogSelection) {
  handleCommsLogSelection(value);
} else {
  processCommand(value);
}

      input.value = "";
    }
  });

  // --- Typing functions ---
  const typeText = (text, speed = 20) => {
  return new Promise((resolve) => {
    if (isTyping) return resolve();

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


// Animate HTML content but preserve tags
const typeHTML = async (container, html, speed = 20) => {
  if (isTyping) return;
  isTyping = true;

  const chunks = html.split(/(<[^>]+>)/g).filter(Boolean);
  let currentParent = container;

  for (const chunk of chunks) {

    // Closing tag
    if (chunk.startsWith("</")) {
      container.insertAdjacentHTML("beforeend", chunk);
      currentParent = container;
    }

    // Opening tag
    else if (chunk.startsWith("<")) {
      container.insertAdjacentHTML("beforeend", chunk);

      const tagName = chunk.match(/^<([a-zA-Z0-9]+)/)?.[1];
      if (tagName && tagName !== "br") {
        currentParent = container.lastElementChild || container;
      }
    }

    // Text content → animate character-by-character
    else {
      const textNode = document.createTextNode("");
      currentParent.appendChild(textNode);

      for (let i = 0; i < chunk.length; i++) {
        textNode.textContent += chunk.charAt(i);
        await new Promise(r => setTimeout(r, speed));
      }
    }

    output.scrollTop = output.scrollHeight;
  }

  isTyping = false;
};



  // --- Command processor ---
  const processCommand = async (command) => {
    const lower = command.toLowerCase();
    const instantCommands = ["clear", "ping", "pip", "exit"];
    if (isTyping) return;

    if (lower === "clear") {
      output.innerHTML = "";
      return;
    }

    const response = getCommandResponse(command);
    if (response === null) return;

    appendOutput(`> ${command}\n`);

if (typeof response === "object") {

  // -------- ASCII ONLY (navmap, etc.) --------
if (response.ascii && !response.type) {
  const speed = response.asciiSpeed ?? TYPING_SPEEDS.normal;
  await typeText(response.ascii + "\n", speed);
  return;
}

  // -------- ASCII + HTML (fast ASCII → slow HTML) --------
  if (response.type === "ascii+html") {

    const asciiSpeed = response.asciiSpeed ?? TYPING_SPEEDS.asciiFast;
    const htmlSpeed  = response.htmlSpeed  ?? TYPING_SPEEDS.htmlSlow;

    if (response.ascii) {
      await typeText(response.ascii + "\n", asciiSpeed);
    }

// Animate HTML as terminal text for consistent feel
const terminalText = htmlToTerminalText(response.html);

await typeText(terminalText + "\n", htmlSpeed);
return;
  }

  // -------- HTML ONLY --------
  if (response.type === "html") {

    if (response.header) {
      await typeText(response.header + "\n", TYPING_SPEEDS.normal);
    }

    const container = document.createElement("div");
    output.appendChild(container);

    if (response.instant) {
      container.innerHTML = response.content + "\n";
    } else {
      const normalizedHTML = response.content
        .replace(/\n\s+/g, "")
        .trim();

      await typeHTML(container, normalizedHTML + "\n", TYPING_SPEEDS.htmlSlow);
    }

    return;
  }
}


 else {
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
case "menu":
  return {
    type: "html",
    header: "*** MAIN MENU ***",
    content: buildCommandGrid(menuCommands),
    instant: true
  };

case "secretmenu":
  return {
    type: "html",
    header: "*** SECRET MENU ***",
    content: buildCommandGrid(secretCommands),
    instant: true
  };

case "crewvitals":
  return {
    type: "html",
    header: "*** CREW VITALS ***   select individual to view",
    content: buildCommandGrid(crewvitalsCommands),
    instant: true
  };

      case "hack":
        runHackSequence();
        return null;
        case "test":
        runTest();
        return null;
      case "1a":
        run1A();
        return null;
      case "2a":
        run2A();
        return null;
      case "3a":
        run3A();
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
    case "commslog":
        awaitingCommsLogSelection = true;
        output.innerHTML = "";
        let commsMenu = "COMMUNICATIONS LOG (select log or type 'exit'):\n";
        Object.keys(commsLogs).forEach((key, index) => {
          commsMenu += `${index + 1}. ${key}\n`;
  });
        commsMenu += "\nType log name or number:";
        return commsMenu;
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
          header: "",
          content: `<br><b>*** NAVIGATION CONTROL ***</b><br><br>Current Sector: ECHO-7<br>Current Destination: Rosewater Mission Control<br><br><b>navmap</b> View star map and set navigation destination<br><br>`
  };
case "navmap":
  return {
    ascii: ASCII_ART.navmap,
    asciiSpeed: TYPING_SPEEDS.asciiFast
  };
      case "comms":
        return {
          type: "html",
          header: "",
          content: `<br><b>*** COMMUNICATIONS ARRAY ***</b><br><br>Status: Optimal<br>Last Signal: 04/05/2025<br>Origin: 32.7574624,-97.1500809<br><br><b>uplink</b> Retrieve new communication data<br><b>commslog</b> Show received communications<br><br>`
  };
      case "uplink":
        return {
          type: "html",
          header: "",
          content: `<br><b>*** 2 NEW INCOMING MESSAGES ***</b><br><br>Origin: 32.8887704,-96.958692<br>Date: 02/28/2026<br>Message: P I Z Z A<br><br>Origin: 33.148969,-96.8191008<br>Date: 04/04/2026<br>Message: T A C O S<br><br>`
  };
      case "crew":
        return {
          type: "html",
          header: "",
          content: `<br><b>*** CREW ROSTER ***</b><br><br>Captain: Cosmic<br>Co-Captain: Cuddles<br>Supervisor: Callie<br>Security: BoJack<br>Janitorial: Lewis<br><br><b>crewvitals</b> Display crew member vitals & biometric data<br><br>`
  };
      case "cosmic":
        return {
          type: "ascii+html",
          ascii: ASCII_ART.cosmic,
          html: `<br><b>*** CREW MEMBER: CAPTAIN COSMIC ***</b><br><br>Oxygen Levels: Good<br>C02 Levels: Fair<br>H20 Levels: Poor<br>Blood Pressure: !Warning Over Limit!<br>Heart Rate: 69<br><br>Assignment: Navigate the cosmos with superb parallel parking skills`
  };
      case "cuddles":
        return {
          type: "ascii+html",
          ascii: ASCII_ART.cuddles,
          html: `<br><b>*** CREW MEMBER: CO-CAPTAIN CUDDLES ***</b><br><br>Oxygen Levels: Fair<br>C02 Levels: Good<br>H20 Levels: Excellent<br>Blood Pressure: Good<br>Heart Rate: 67<br><br>Assignment: Distribute superior emotional support and soft skills`
  };
      case "bojack":
        return {
          type: "html",
          header: "",
          content: `<br><b>*** CREW MEMBER: BOJACK ***</b><br><br>Oxygen Levels: Fair<br>C02 Levels: !HIGH!<br>H20 Levels: !HIGH!<br>Blood Pressure: Fair<br>Heart Rate: 67`
  };
case "lewis":
  return {
    type: "ascii+html",
    ascii: ASCII_ART.lewis,
    asciiSpeed: TYPING_SPEEDS.asciiFast,
    htmlSpeed: TYPING_SPEEDS.htmlSlow,
    html: `
      <br><b>*** CREW MEMBER: LEWIS ***</b><br><br>Oxygen Levels: Poor<br>C02 Levels: Poor<br>H20 Levels: Poor<br>Blood Pressure: !HIGH!<br>Heart Rate: 77<br><br>Assignment: Eliminating all foreign organic waste`
  };

      case "callie":
        return {
          type: "ascii+html",
          ascii: ASCII_ART.callie,
          html: `
          <br><b>*** CREW MEMBER: CALLIE ***</b><br><br>Oxygen Levels: Good<br>C02 Levels: Good<br>H20 Levels: Excellent<br>Blood Pressure: Fair<br>Heart Rate: 68<br><br>Assignment: Supervising all lower-level employees`
  };
      case "calliefornia":
        return ASCII_ART.callie;
      case "refuel":
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
        return `'${command}' is not recognized as a command. Type 'menu' for a list of available commands.`;
    }
  };

  // --- Password handler ---
  const handlePassword = async (inputValue) => {
  awaitingPassword = false;
  if (inputValue === CORRECT_PASSWORD) {
    await typeText("Access granted.\nWelcome back, admin. Access to secretmenu now authorized\n");
  } else {
    await typeText("Access denied.\nInvalid credentials. You'll never find my password! Surely I'd never store it somewhere obvious like my journal...\n");
  }
  };

  // --- Journal handler ---
 const handleJournalSelection = async (inputValue) => {
  if (inputValue.toLowerCase() === "exit") {
    awaitingJournalSelection = false;
    await typeText("Exited journal mode.\n");
    return;
  }
  let entryText = journalEntries[inputValue];
  if (!entryText && !isNaN(inputValue)) {
    const key = Object.keys(journalEntries)[inputValue - 1];
    entryText = journalEntries[key];
  }
  await typeText(entryText ? `\n${entryText}\n` : "Entry not found.\n");
};


  // --- Comms Log handler ---
const handleCommsLogSelection = async (inputValue) => {
  if (inputValue.toLowerCase() === "exit") {
    awaitingCommsLogSelection = false;
    await typeText("Exited communications log.\n");
    return;
  }
  let logText = commsLogs[inputValue];
  if (!logText && !isNaN(inputValue)) {
    const key = Object.keys(commsLogs)[inputValue - 1];
    logText = commsLogs[key];
  }
  await typeText(logText ? `\n${logText}\n` : "Log not found.\n");
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

      // --- 1A Nav sequence ---
    const run1A = async () => {
    const wait = (ms) => new Promise(r => setTimeout(r, ms));

    await typeText("> 1A\n");

    const lines = [
      "Establishing coordinates...",
      "Running threat detection protocols...",
      "Initializing fuel systems...",
    ];

    for (const line of lines) {
      await typeText(line + "\n", 20);
      await wait(500);
    }

    await wait(700);
    await typeText("NOW ROUTING TO ALTERION SECTOR\n", 30);
    await wait(400);
    await typeText("Estimated time to location, 3 lightyears\n", 15);
  };
    // --- 2A Nav sequence ---
    const run2A = async () => {
    const wait = (ms) => new Promise(r => setTimeout(r, ms));

    await typeText("> 2A\n");

    const lines = [
      "Establishing coordinates...",
      "Running threat detection protocols...",
      "Initializing fuel systems...",
    ];

    for (const line of lines) {
      await typeText(line + "\n", 20);
      await wait(500);
    }

    await wait(700);
    await typeText("ERROR: NAVIGATION PROCESS CANCELLED\n", 30);
    await wait(400);
    await typeText("Insufficient fuel levels for selected destination. Check fuel levels in STATUS.\n", 15);
  };
 // --- 3A Nav sequence ---
    const run3A = async () => {
    const wait = (ms) => new Promise(r => setTimeout(r, ms));

    await typeText("> 3A\n");

    const lines = [
      "Establishing coordinates...",
      "Running threat detection protocols...",
      "Initializing fuel systems...",
    ];

    for (const line of lines) {
      await typeText(line + "\n", 20);
      await wait(500);
    }

    await wait(700);
    await typeText("ERROR: NAVIGATION PROCESS CANCELLED\n", 30);
    await wait(400);
    await typeText("Unable to establish connection due to high level threat detection.\n", 15);
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
