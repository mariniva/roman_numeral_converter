const convertBtn = document.getElementById('convert-btn');

const numerals = {
  'M': 1000,
  'CM': 900,
  'D': 500,
  'CD':400,
  'C':100,
  'XC':90,
  'L':50,
  'XL':40,
  'X':10,
  'IX':9,
  'V':5,
  'IV':4,
  'I': 1
}

const process = () =>{
  const numberOfInput = document.getElementById('number').value;
  const output = document.getElementById('output');
  let numberForConvert = parseInt(numberOfInput);

  const errorValid = (text) =>{
    output.setAttribute("class","error");
    output.innerHTML = `<span>${text}</span>`;
  }

  const convert = (rom,arab) =>{
    const ceil = Math.floor(numberForConvert/arab);
    result += rom.repeat(ceil);
    numberForConvert-=ceil*arab;
  }

  if (numberForConvert<=0){
      return errorValid('Please enter a number greater than or equal to 1');
  } else if (numberForConvert>=4000){
      return errorValid('Please enter a number less than or equal to 3999');
  } else if (numberOfInput!=numberForConvert){
      return errorValid('Please enter a valid number');
    }

  let result = '';
  for (let i in numerals){
      if (numberForConvert>=numerals[i]){
        convert(i,numerals[i]);
    }
  }

  output.setAttribute("class","correct");
  return output.innerHTML = `<span>${result}</span>`;

}

convertBtn.addEventListener("click",process);