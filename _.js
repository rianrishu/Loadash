const _ = {
    clamp(number, lower, upper){
      if(number < lower){
        return lower;
      }
      else if(number > upper){
        return upper;
      }
      else{
        return number;
      }
  
    },
    inRange(number, start, end){
      let temp;
      if(end === undefined){
        end = start;
        start = 0;
      }
      if(start > end){
        temp = start;
        start = end;
        end = temp;
      }
      if(number < start){
        return false;
      } 
      if(number >= end){
        return false;
      }
      if(start < number < end){
        return true;
      }
    },
    words(str){
     const k = str.split(' ');
     return k;
    },
    pad(str,len){
      let out = str;
      let pad = len - str.length;
      if(pad%2 === 0){
        while(pad > 0){
          out = ' '+out+' ';
          pad -= 2;
        }
      }
      if(pad%2 != 0){
        while(pad > 0){
          if(pad%2 === 0){
            out = ' '+out+' ';
            pad -= 2;
          }
          else{
            out = out + ' ';
            pad -= 1;
          }
        } 
      }
      return out;
    },
    has(obj, key){
      if(obj[key] === undefined){
        return false;
      }
      else{
        return true;
      }
    },
    invert(object){
      let invertedObject = {};
      let originalValue;
      for(let key in object){
         originalValue = object[key];
        invertedObject = {originalValue : key}
      }
      return invertedObject;
    },
    findKey(obj, func){
      let value;
      for(let key in obj){
        value = func(obj[key]);
        if(value){
        return key; 
      }
      }
      return undefined;
      
    },
    drop(arr, num){
      let out;
      if(num === undefined){
        arr.shift();
      }
      else{
        while(num > 0){
          arr.shift();
          num -= 1;
        }
      }
      return arr;
    },
    dropWhile(arr, func){
      const out = (ele,ind) => {
        return !func(ele, ind, arr);
      }
      let dropNumber = arr.findIndex(out);
      let dropArray = this.drop(arr, dropNumber);
      return dropArray;
    },
    chunk(arr, n){
      let out = [];
      if(n === undefined){
        n = 1;
      }
      for(let i=0;i< arr.length;i+= n){
        let temp = arr.slice(i, i+n);
        out.push(temp);
      }
      return out;
    }
  }
  module.exports = _;