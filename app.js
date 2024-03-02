
function displayTime(){
    let time = new Date();
    // let date = time.getDate();
    // let month = time.toLocaleString('default', { month: 'long' });
    // document.querySelector("#clock").innerHTML = `Today Date is ${time}`;
    // document.querySelector("#clock").innerHTML = `Today Date is ${date} ${month}`;

    let hours = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    document.querySelector("#clock").innerHTML = `${hours}  :  ${min}  :  ${sec}`;
}
setInterval(displayTime,1000);
