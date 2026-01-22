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

  const buildCommandGrid = (commands) => {
    let html = `<div class="command-grid">`;

    for (let i = 0; i < commands.length; i += 2) {
      // First command
      html += `
        <div class="cmd">${commands[i][0]}</div>
        <div class="desc">${commands[i][1]}</div>
      `;

      // Second command (or padding)
      if (commands[i + 1]) {
        html += `
          <div class="cmd">${commands[i + 1][0]}</div>
          <div class="desc">${commands[i + 1][1]}</div>
        `;
      } else {
        html += `<div></div><div></div>`;
      }
    }

    html += `</div>`;
    return html;
  };
  
  const helpCommands = [
    ["login", "authorized user access only"],
    ["help", "clearly you know how to use this"],
    ["hello", "returns a friendly message"],
    ["date", "today's date"],
    ["journal", "***private*** no peeking!"],
    ["pip", "show pip boy"],
    ["clear", "clear all prompts"]
  ];

  const secretCommands = [
    ["bloom", "a beautiful flower for your beautiful self"],
    ["boyack", "yawn...meow big kitty"],
    ["calliefornia", "aww...sweet fluffy girl"],
    ["gemini", "now this appears to be a good sign..."],
    ["leo", "yawn...meow big kitty"],
    ["lewis", "gross boy"]
  ];

  /* =========================
     COMMAND HANDLER
     ========================= */
  const getCommandResponse = (command) => {
    switch (command.toLowerCase()) {
      case "help":
        return `
          Available commands:
          ${buildCommandGrid(helpCommands)}
        `;

      case "secretmenu":
        return `
          Secret commands:
          ${buildCommandGrid(secretCommands)}
        `;
        
      case "login":
        return "Enter user password...";
        
      case "hello":
        return "Howdy, partner!";

      case "journal":
        return `
          Error: Unauthorized access attempt, admin has been notified.
          <p>JK curiosity should be rewarded...type <b>secretmenu</b> for more commands.</p>
        `;

      case "bloom":
        return `                     ..ooo.<br>
                 .888888888.<br>
                 88'P'T'T888 8o<br>
             o8o 8.8'8 88o.'8o 8o<br>
            88 . o88o8 8 88.'8 88P'o<br>
           88 o8 88 oo.8 888 8 888 88<br>
           88 88 88o888' 88'  o888 88<br>
           88.'8o.'T88P.88'. 88888 88<br>
           888.'888.'88P'.o8 8888 888<br>
           '888o'8888oo8888 o888 o8P'<br>
            '8888.''888P'P.888'.88P<br>
             '88888ooo  888P'.o888<br>
               ''8P''.oooooo8888P`;

      case "gemini":
        return "....................................<br>....+++:.....................:+++...<br>.....-++++=:.............:=++++-....<br>........-++++++++++++++++++=-.......";

      case "leo":
        return "....................................<br>.............+@@@@@@@=..............<br>..........*@@@@@@@@@@@@@+...........";

      case "date":
        return new Date().toString();

      case "pip":
        displayImage();
        return "";

      case "clear":
        output.innerHTML = "";
        return "";

      default:
        return `'${command}' is not recognized as a command. Type 'help' for a list of available commands.`;
    }
  };

  /* =========================
     IMAGE DISPLAY
     ========================= */
  const displayImage = () => {
    const img = document.createElement("img");
    img.src = "https://gifdb.com/images/high/black-background-pip-boy-v3z1j9i2auvwgcz8.webp";
    img.alt = "Pip Boy";
    img.style.width = "75px";
    img.style.height = "100px";
    output.appendChild(img);
  };
});
