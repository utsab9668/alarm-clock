 let alarmTime = null;

    function updateClock() {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-GB'); // 24-hour format
      document.getElementById('clock').innerText = timeString;

      if (alarmTime === timeString) {
        alert("⏰ Alarm ringing!");
        clearAlarm();
      }
    }

    function setAlarm() {
      const input = document.getElementById("alarmTime").value;
      if (!input) {
        alert("Please select a time!");
        return;
      }
      alarmTime = input + ":00"; // Convert "HH:MM" to "HH:MM:00"
      alert("Alarm set for " + alarmTime);
    }

    function clearAlarm() {
      alarmTime = null;
      alert("Alarm cleared.");
    }

    // Update clock every second
    setInterval(updateClock, 1000);