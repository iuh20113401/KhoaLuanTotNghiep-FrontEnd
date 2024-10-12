const { exec } = require("child_process");

// Running an OS command (e.g., listing files in the current directory)
exec("ls", (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing command: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Error: ${stderr}`);
    return;
  }
  alert(stdout);
});
