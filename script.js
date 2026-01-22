document.addEventListener("DOMContentLoaded", () => {
const input = document.getElementById("input");
const output = document.getElementById("output");

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const command = input.value.trim();
    if (command) {
      processCommand(command);
    }
    input.value = "";
  }
});

const processCommand = (command) => {
  const response = getCommandResponse(command);
  output.innerHTML += `> ${command}\n${response}\n`;
  output.scrollTop = output.scrollHeight;
};

const getCommandResponse = (command) => {
  // Handle different commands here
  switch (command.toLowerCase()) {
    case "help":
      return "Available commands:<p>help      clearly you know how to use this<p>hello     returns a friendly message<p>date      today's date<p>journal   ***private*** no peeking!<p>clear     clear all prompts";
    case "secretmenu":
      return "Secret commands:<p>bloom      a beautiful flower for your beautiful self<p>gemini     now this appears to be a good sign...<p>leo        yawn...meow big kitty<p>lewis      gross boy";
    case "hello":
      return "Howdy, partner!";
    case "journal":
      return "Error: Unauthorized access attempt, admin has been notified.<p><p>JK curiosity should be rewarded...type <b>secretmenu</b> for more commands.";
    case "bloom":
      return "                     ..ooo.<br>                 .888888888.<br>                 88'P'T'T888 8o<br>             o8o 8.8'8 88o.'8o 8o<br>            88 . o88o8 8 88.'8 88P'o<br>           88 o8 88 oo.8 888 8 888 88<br>           88 88 88o888' 88'  o888 88<br>           88.'8o.'T88P.88'. 88888 88<br>           888.'888.'88P'.o8 8888 888<br>           '888o'8888oo8888 o888 o8P'<br>            '8888.''888P'P.888'.88P<br>             '88888ooo  888P'.o888<br>               ''8P''.oooooo8888P<br>      .oo888ooo.    888888888P8<br>    o88888'888'88o.  '8888''.88   .oo888oo..<br>     8888' '88 88888.       88'.o88888888'888.<br>     '8888o.''o 88'88o.    o8'.888'888'88 '88P<br>      T888C.oo. '8.'8'8   o8'o888 o88' ''.=888'<br>       88888888o '8 8 8  .8 .8'88 8''.o888o8P<br>        '8888C.o8o  8 8  8' 8 o' ...o'''8888<br>          '88888888 '' 8 .8  8   88888888888'<br>            '8888888o  .8o='' o8o..o(8oo88'<br>                '888' 88'    888888888''<br>                    o8P      '888'''<br>              ...oo88<br>     '8oo...oo888''<br>            ''888'' ";

    case "gemini":
 return "....................................<br>....................................<br>....................................<br>....+++:.....................:+++...<br>.....-++++=:.............:=++++-....<br>........-++++++++++++++++++=-.......<br>...........:++=::---::-++...........<br>...........:++:.......:++...........<br>...........:++:.......:++...........<br>...........:++:.......:++...........<br>...........:++:.......:++...........<br>...........:++:.......:++...........<br>...........:++:.......:++...........<br>...........:++:.......:++...........<br>...........:++:.......:++...........<br>...........:++:.......:++...........<br>...........:+++======-=++:..........<br>.......:=+++++++++++++++++++=:......<br>.....++++=:...............:=++++....<br>....++-.......................-+=...<br>....................................<br>....................................";
    case "leo":
      return "....................................<br>.............+@@@@@@@=..............<br>..........*@@@@@@@@@@@@@+...........<br>........=@@@%-.......+@@@@..........<br>.......+@@@-...........=@@@.........<br>.......@@@..............*@@@........<br>......:@@%...............@@@........<br>.......@@%...............@@@........<br>.......@@@=.............-@@@........<br>.......-@@@:............*@@@........<br>........*@@@............@@@-........<br>.....%@@@@@@@..........-@@@.........<br>...@@@@@@@@@@@.........@@@:.........<br>..%@@%....-@@@=.......@@@#..........<br>..@@@......@@@*......=@@@...........<br>..%@@@:...%@@@.......#@@#...........<br>...#@@@@@@@@@........@@@............<br>......+%%#:.........:@@%............<br>....................*@@+............<br>....................#@@+.....:**+...<br>.....................@@@*...=@@@:...<br>......................@@@@@@@@@:....<br>........................+#%#+.......";
    case "date":
      return new Date().toString();
     case "pip":
       displayImage();
       return ' ';
    case "clear":
      output.innerHTML = "";
      return "";
    default:
      return `'${command}' is not recognized as a command. Type 'help' for a list of available commands.`;
  }
  };

   const displayImage = () => {
       const img = document.createElement('img');
       img.src = 'https://gifdb.com/images/high/black-background-pip-boy-v3z1j9i2auvwgcz8.webp'; // Replace with your desired image URL
       img.alt = 'Example Image';
       img.style.width = '75px';
       img.style.height = '100px';
       output.appendChild(img);
   };
});
