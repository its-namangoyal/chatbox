const moment= require('moment');  //javaxript library for date and time

function formatMessage(username, text){
return{
    username, 
    text,
    time:moment().format("h:mm a")
   }
}

module.exports = formatMessage