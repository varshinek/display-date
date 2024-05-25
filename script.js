var parent_div = document.createElement("div");
parent_div.className = "main";

var input_date = document.createElement("input");
input_date.setAttribute("type","date");
input_date.setAttribute("id","dob");

var button = document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("class","btn btn-primary");
button.innerHTML = "display Date";
button.addEventListener("click",display_date)
parent_div.append(input_date,button);
document.body.append(parent_div);


function display_date()
{
    var input = document.getElementById("dob").value
    var inputdate = new Date(input);
    var currentdate = new Date();
    console.log(`Input date: ${inputdate}, Current Date: ${currentdate}`);
    var millesec = parseInt(currentdate.getTime()) - parseInt(inputdate.getTime());
    console.log(millesec);
    var secdiff = Math.floor(millesec/1000);
    console.log(secdiff);
    var mindiff = Math.floor(secdiff/60);
    console.log(mindiff);
    var hourdiff = Math.floor(mindiff/60);
    console.log(hourdiff);
    var daydiff = Math.floor(hourdiff/24);
    console.log(daydiff);
    var yeardiff = currentdate.getFullYear() - inputdate.getFullYear();
    console.log(yeardiff);
    var mondiff = (yeardiff*12)+(currentdate.getMonth()-inputdate.getMonth());
    console.log(mondiff);

    var idate = document.createElement("div");
    idate.innerHTML = `${"Given input date is "+inputdate}`;
    document.body.append(idate);
    var year = document.createElement("div");
    year.innerHTML = `${"Year "+yeardiff}`;
    document.body.append(year);
    var month = document.createElement("div");
    month.innerHTML = `${"month "+mondiff}`;
    document.body.append(month);
    var day = document.createElement("div");
    day.innerHTML = `${"day "+daydiff}`;
    document.body.append(day);
    var hour = document.createElement("div");
    hour.innerHTML = `${"hour "+hourdiff}`;
    document.body.append(hour);
    var minute = document.createElement("div");
    minute.innerHTML = `${"minute "+mindiff}`;
    document.body.append(minute);
    var second = document.createElement("div");
    second.innerHTML = `${"second "+secdiff}`;
    document.body.append(second);
    var milli = document.createElement("div");
    milli.innerHTML = `${"milli second "+millesec}`;
    document.body.append(milli);
}