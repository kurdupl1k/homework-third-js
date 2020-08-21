let field = document.getElementById("resultField");
let cur_op = null;


function GetResult(str, op) {
  if (op != null) {
    let splitted = str.split(op);

    for (let i = 0; i < splitted.length; i++) {
      splitted[i] = Number.parseInt(splitted[i]);
    }

    switch (op) {
      case "+": return splitted[0] + splitted[1];
      case "-": return splitted[0] - splitted[1];
      case "*": return spiltted[0] - splitted[1];
      case "/": return splitted[1] == 0 ? undefined : splitted[0] / splitted[1];
      default: return undefined;
    }
  }  
  else {
    return str;
  }
}

for (let i of document.getElementById("keyboardGrid").childNodes) {
  i.onclick = function () {
    if (this.textContent == "C") field.textContent = "0";
    else {
      let eq_ind = Array.from(field.textContent).findIndex(eq => eq == "=");

      if (eq_ind != -1) {
        field.textContent = field.textContent.substr(eq_ind + 1, 
                                                                  field.textContent.length - eq_ind);
      }

      let symbols = ["+", "-", "*", "/"];

      if (symbols.findIndex(sym => sym == this.textContent) != -1) {
        if (symbols.findIndex(sym => 
            sym == field.textContent.substr(field.textContent.length - 1, 1)) != -1) {
          
            field.textContent = field.textContent.replace(
              field.textContent.substr(field.textContent.length - 1, 1), this.textContent);
            cur_op = this.textContent;      
        }
        else {
          field.textContent += this.textContent;
          cur_op = this.textContent;
        }
      }      
      else if (Number.isInteger(Number.parseInt(this.textContent))) {
        if (field.textContext != "0") field.textContent += this.textContent;
        else field.textContent = this.textContent;    
      }
      else {
        if (field.textContent.substr(
            field.textContent.length - 1) != "=")  field.textContent += "=";  
      
        field.textContent += GetResult(
                       field.textContent.substr(0, field.textContent.length - 1),
                       cur_op);
        cur_op = null;
      }
    }
  }
}