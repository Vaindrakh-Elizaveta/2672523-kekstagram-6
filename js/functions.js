function checkLength(string, length){
  return string.length <= length;
}

function isPalindrome(str)
{
  const normalizedStr = str.replaceAll(' ', '').toLowerCase();

  let newStr = '';
  for (let i = normalizedStr.length - 1; i >= 0; i--)
  {
    newStr += normalizedStr[i];
  }
  return newStr === normalizedStr;
}

function parseTime(timeString) {
  const parts = timeString.split(':'); // ['8', '05'] например
  const hours = Number(parts[0]);      // 8
  const minutes = Number(parts[1]);    // 5
  return hours * 60 + minutes;         // 8 * 60 + 5 = 485
}


function meetingTimeOk(start, end, timeOfMeeting, durationOfMeeting)
{
  const startWorkMinutes = parseTime(start);
  const endWorkMinutes = parseTime(end);
  const startMeetingMinutes = parseTime(timeOfMeeting);
  const endMeetingMinutes = startMeetingMinutes + durationOfMeeting;

  // Встреча должна начаться не раньше работы
  // и закончиться не позже конца рабочего дня
  return startMeetingMinutes >= startWorkMinutes &&
         endMeetingMinutes <= endWorkMinutes;
}

