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
    ["ping", "server ping"],
    ["pip", "show pip boy"],
    ["clear", "clear all prompts"]
  ];

  const secretCommands = [
    ["bloom", "a beautiful flower for your beautiful self"],
    ["boyack", "plumpy dumpy boiii"],
    ["calliefornia", "aww...sweet fluffy girl"],
    ["gemini", "now this appears to be a good sign..."],
    ["hack", "break into the mainframe"],
    ["leo", "yawn...meow big kitty"],
    ["lewis", "gross boy"]
  ];

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
        return "Enter user password";
        
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

      case "hack":
        return "You didn't think that was actually going to work...did you?";

      case "calliefornia":
        return "cutie girl";

      case "ping":
        launchPong();
        return "<b>Controls:</b> Left Paddle: ← & →, Right Paddle: ↑ & ↓, Esc to exit";

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
  
  const displayImage = () => {
    const img = document.createElement("img");
    img.src = "https://gifdb.com/images/high/black-background-pip-boy-v3z1j9i2auvwgcz8.webp";
    img.alt = "Pip Boy";
    img.style.width = "75px";
    img.style.height = "100px";
    output.appendChild(img);
  };

  
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
    // Controls
    if (keys["ArrowLeft"]) leftY -= 5;
    if (keys["ArrowRight"]) leftY += 5;
    if (keys["ArrowUp"]) rightY -= 5;
    if (keys["ArrowDown"]) rightY += 5;

    // Ball movement
    ballX += ballVX;
    ballY += ballVY;

    // Wall collision
    if (ballY <= 0 || ballY >= canvas.height) ballVY *= -1;

    // Paddle collision
    if (
      ballX <= paddleWidth &&
      ballY > leftY &&
      ballY < leftY + paddleHeight
    ) ballVX *= -1;

    if (
      ballX >= canvas.width - paddleWidth &&
      ballY > rightY &&
      ballY < rightY + paddleHeight
    ) ballVX *= -1;

    // Reset
    if (ballX < 0 || ballX > canvas.width) {
      ballX = canvas.width / 2;
      ballY = canvas.height / 2;
    }

    // Draw
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
