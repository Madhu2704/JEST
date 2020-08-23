const jsdiff = require('diff');
const table=console.table
const log=console.log;
 

function get_pagination_urls(matchUrl_1 = "", matchUrl_2 = "") {
    let paginationUrls=[];
    if (validUrl(matchUrl_1) && validUrl(matchUrl_2) && matchUrl_1!==matchUrl_2) {
        let diff1=findDiff(matchUrl_1,matchUrl_2);
        let diff2=findDiff(matchUrl_2,matchUrl_1);
        table({diff1,diff2})
        if(!isNaN(diff1) && !isNaN(diff2)){
            let differenceOfTwoStrings=diff(matchUrl_1,matchUrl_2);
            table(differenceOfTwoStrings)
            if(differenceOfTwoStrings.length){
                let getTheMagicNo=magicNumberGetter(parseInt(diff1),parseInt(diff2));
                log(`THE MAGIC NUMBER:${getTheMagicNo}`)
                let startingPart=differenceOfTwoStrings[0].value;
                let lastPart=differenceOfTwoStrings[differenceOfTwoStrings.length-1].value;
                if([diff1,diff2].indexOf(lastPart)>=0)lastPart=''
                for (let index = 0; index < 3; index++) {
                    let newUrl=`${startingPart}${getTheMagicNo+index}${lastPart}`.trim()
                    paginationUrls.push(newUrl)
                }
            }
            return paginationUrls
        }

    }
    return paginationUrls
}


/**
 * 
 * @param {number} diff1 
 * @param {number} diff2 
 * @returns {number} magicNumber
 */

function magicNumberGetter(diff1,diff2) {
    try {
        let specialNumbers=[1,2,4];
        let sub=diff1>diff2?diff1-diff2 :diff2-diff1;
        if(specialNumbers.indexOf(sub)>=0 || checkSeqNumber(diff1,diff2)){
            return 1
        }
        else{
            return sub
        }

    } catch (error) {
        return 1
    }
    
}

const checkSeqNumber=(x,y)=>x+1==y||y+1==x;


/**
 * 
 * @param {string} data =>checks whether given is having the valid data or not
 * @returns {boolean} true or false
 */

const validString = data =>
    data && data.length >= 1 ?
    true :
    false


/**
 * 
 * @param {string} str => checks it is valid string or not
 * @returns {boolean} true or false
 */

 
const validUrl = str => {
    if (validString(str)) return /^(ftp|http|https):\/\/[^ "]+$/.test(str)
    return false
};







/**
 * 
 * @param {string} str1 - matchurl1
 * @param {string} str2 - matchurl2
 * @returns {string} difference of two strings
 */
let diff =  (str1, str2) =>jsdiff.diffChars(str1, str2);

function findDiff(str1, str2){ 
    let diff= "";
    str2.split('').forEach(function(val, i){
      if (val != str1.charAt(i))
        diff += val ;         
    });
    return diff;
  }




module.exports = {
    get_pagination_urls
}