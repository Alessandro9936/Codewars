// prettier-ignore
function rot13(message){
    const alphabet1 = ["a","b","c","d","e","f","g","h","i","j","k","l","m","A","B","C","D","E","F","G","H","I","J","K","L","M"];
    const alphabet2 = ["n","o","p","q","r","s","t","u","v","w","x","y","z","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    return message.split('').reduce((str, cur, i) => {
     if(alphabet1.includes(cur)) {
       let index = alphabet1.indexOf(cur)
       str += alphabet2[index]
     } else if(alphabet2.includes(cur)) {
       let index = alphabet2.indexOf(cur)
       str += alphabet1[index]
     } else {
       str += cur
     }
      return str
    }, '')
  }
