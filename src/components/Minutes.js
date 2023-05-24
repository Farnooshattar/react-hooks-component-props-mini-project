export default function Minutes(mins) {
    let cups = ""
    let minLapse=Math.round(mins/5)
    if(mins<10)
    for (let i = 0; i < minLapse; i++) {
       cups += "☕️"
    }
    else {
      minLapse=Math.round(mins/10)
      for (let i = 0; i < minLapse; i++) {
         cups += "☕️"
      }
    }
    
    return cups
 }