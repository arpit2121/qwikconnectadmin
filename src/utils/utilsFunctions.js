import moment from "moment/moment";

export const convertTimeStringToSeconds = (timeString) => {
    const regex = /(\d+)([smhr])/; // Regular expression to capture digits followed by "s", "m", or "hr"
    const match = timeString.match(regex);
  
    if (!match) {
      return 0; // Return 0 if the input format is not recognized
    }
  
    const value = parseInt(match[1], 10);
    const unit = match[2];
  
    if (isNaN(value)) {
      return 0; // Return 0 if the value is not a valid number
    }
  
    // Convert to seconds based on the unit
    switch (unit) {
      case 's':
        return value;
      case 'm':
        return value * 60;
      case 'h':
        return value * 3600;
      default:
        return 0; // Return 0 if the unit is not recognized
    }
  };
  
  // Example usage
  console.log(convertTimeStringToSeconds("10s")); // Output: 10 seconds
  console.log(convertTimeStringToSeconds("2m")); // Output: 120 seconds (2 minutes)
  console.log(convertTimeStringToSeconds("1hr")); // Output: 3600 seconds (1 hour)
  




  export const base64ImageToBlob=(str)=> {
    // extract content type and base64 payload from original string
    const pos = str.indexOf(";base64,");
    const type = str.substring(5, pos);
    const b64 = str.substr(pos + 8);
  
    // decode base64
    const imageContent = atob(b64);
  
    // create an ArrayBuffer and a view (as unsigned 8-bit)
    const buffer = new ArrayBuffer(imageContent.length);
    const view = new Uint8Array(buffer);
  
    // fill the view, using the decoded base64
    for (let n = 0; n < imageContent.length; n++) {
      view[n] = imageContent.charCodeAt(n);
    }
  
    // convert ArrayBuffer to Blob
    const blob = new Blob([buffer], { type: type});
  
    return blob;
  }
  


  export const base64ToArrayBuffer = (base64) => {
    var binaryString = window.atob(base64);
    var binaryLen = binaryString.length;
    var bytes = new Uint8Array(binaryLen);
    for (var i = 0; i < binaryLen; i++) {
      var ascii = binaryString.charCodeAt(i);
      bytes[i] = ascii;
    }
    return bytes;
  };



  //get days

  export function formatTimeDifference(timestamp) {
    const currentTime = moment();
    const inputTime = moment(timestamp);
    const duration = moment.duration(currentTime.diff(inputTime));

    const years = Math.floor(duration.asYears());
    const months = Math.floor(duration.asMonths());
    const days = Math.floor(duration.asDays());
    const hours = Math.floor(duration.asHours());
    const minutes = Math.floor(duration.asMinutes());
    const seconds = Math.floor(duration.asSeconds());

    if (years > 0) {
        return `${years}yr`;
    } else if (months > 0) {
        return `${months}m`;
    } else if (days > 0) {
        return `${days}d`;
    } else if (hours > 0) {
        return `${hours}h`;
    } else if (minutes > 0) {
        return `${minutes}m`;
    } else {
        return `${seconds}s`;
    }
}


  //get total application =  pending + rejected + shortlisted

  //get total closed application =  shortliste + rejected


  //


