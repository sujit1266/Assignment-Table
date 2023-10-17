// import AllValues from "./data/values.js";

let AllValues = {
     row1: {
          Start_date1: "",
          End_date1: "",
          Month_year1: "",
          dateExclutedInputes1: [],
          date_output1: "",
          Lead_Count1: "",
          Expected_DDR1: "",
     },

     row2: {
          Start_date2: "",
          End_date2: "",
          Month_year2: "",
          dateExclutedInputes2: [],
          date_output2: "",
          Lead_Count2: "",
          Expected_DDR2: "",
     },

     row3: {
          Start_date3: "",
          End_date3: "",
          Month_year3: "",
          dateExclutedInputes3: [],
          date_output3: "",
          Lead_Count3: "",
          Expected_DDR3: "",
     },

     row4: {
          Start_date4: "",
          End_date4: "",
          Month_year4: "",
          dateExclutedInputes4: [],
          date_output4: "",
          Lead_Count4: "",
          Expected_DDR4: "",
     },

     row6: {
          Start_date6: "",
          End_date6: "",
          Month_year6: "",
          dateExclutedInputes6: [],
          date_output6: "",
          Lead_Count6: "",
          Expected_DDR6: "",
     },

     row5: {
          Start_date5: "",
          End_date5: "",
          Month_year5: "",
          dateExclutedInputes5: [],
          date_output5: "",
          Lead_Count5: "",
          Expected_DDR5: "",
     }
}

function startValues1() {
     const StartDate_value = document.querySelector('.Start_date1').value;
     document.querySelector('.Month-year1').innerHTML = `<p>${StartDate_value.slice(5, 7)}, ${StartDate_value.slice(0, 4)}</p>`;
     AllValues.row1.Start_date1 = StartDate_value;
}



function EndValue1() {
     const EndDate_value1 = document.querySelector('.End_date1').value;
     AllValues.row1.End_date1 = EndDate_value1;
}



function startValues2() {
     const StartDate_value = document.querySelector('.Start_date2').value;
     document.querySelector('.Month-year2').innerHTML = `<p>${StartDate_value.slice(5, 7)}, ${StartDate_value.slice(0, 4)}</p>`;
     AllValues.row2.Start_date2 = StartDate_value;
}

function EndValue2() {
     const EndDate_value2 = document.querySelector('.End_date1').value;
     AllValues.row2.End_date2 = EndDate_value2;
}


function startValues3() {
     const StartDate_value = document.querySelector('.Start_date3').value;
     document.querySelector('.Month-year3').innerHTML = `<p>${StartDate_value.slice(5, 7)}, ${StartDate_value.slice(0, 4)}</p>`;
     AllValues.row3.Start_date3 = StartDate_value;
}
function EndValue3() {
     const EndDate_value3 = document.querySelector('.End_date1').value;
     AllValues.row3.End_date3 = EndDate_value3;
}


function startValues4() {
     const StartDate_value = document.querySelector('.Start_date4').value;
     document.querySelector('.Month-year4').innerHTML = `<p>${StartDate_value.slice(5, 7)}, ${StartDate_value.slice(0, 4)}</p>`;
     AllValues.row4.Start_date4 = StartDate_value;
}

function EndValue4() {
     const EndDate_value4 = document.querySelector('.End_date1').value;
     AllValues.row4.End_date4 = EndDate_value4;
}


function startValues5() {
     const StartDate_value = document.querySelector('.Start_date5').value;
     document.querySelector('.Month-year5').innerHTML = `<p>${StartDate_value.slice(5, 7)}, ${StartDate_value.slice(0, 4)}</p>`;
     AllValues.row5.Start_date5 = StartDate_value;
}

function EndValue5() {
     const EndDate_value5 = document.querySelector('.End_date1').value;
     AllValues.row5.End_date5 = EndDate_value5;
}


function startValues6() {
     const StartDate_value = document.querySelector('.Start_date6').value;
     document.querySelector('.Month-year6').innerHTML = `<p>${StartDate_value.slice(5, 7)}, ${StartDate_value.slice(0, 4)}</p>`;
     AllValues.row6.Start_date6 = StartDate_value;
}

function EndValue6() {
     const EndDate_value6 = document.querySelector('.End_date1').value;
     AllValues.row6.End_date6 = EndDate_value6;
}
// keyinput=document.querySelector('');

let dateExclutedValues1 = [];
let dateExclutedValues2 = [];
let dateExclutedValues3 = [];
let dateExclutedValues4 = [];
let dateExclutedValues5 = [];
let dateExclutedValues6 = [];


function ShowValue1() {
     let ListofDates1 = '<div class="input-div"><input type="date" class="Date_Excluded1" onchange="ShowValue1();" name="Date-Excluded"></div>';
     dateValue1 = document.querySelector('.Date_Excluded1').value;
     dateExclutedValues1.push(dateValue1);
     AllValues.row1.dateExclutedInputes1.push(dateValue1);
     for (let i = 0; i < dateExclutedValues1.length; i++) {
          const html = `${dateExclutedValues1[i]}, `;
          ListofDates1 += html;
     }
     document.querySelector('.dateExclutedInputes1').innerHTML = ListofDates1;
     document.querySelector('.date-output1').innerHTML = (dateExclutedValues1.length);
     AllValues.row1.date_output1 = dateExclutedValues1.length;
}

function ShowValue2() {
     let ListofDates2 = '<div class="input-div"><input type="date" class="Date_Excluded2" onchange="ShowValue2();" name="Date-Excluded"></div>';
     dateValue2 = document.querySelector('.Date_Excluded2').value;
     dateExclutedValues2.push(dateValue2);
     AllValues.row2.dateExclutedInputes2.push(dateValue2);
     for (let i = 0; i < dateExclutedValues2.length; i++) {
          const html = `${dateExclutedValues2[i]}, `;
          ListofDates2 += html;
     }
     document.querySelector('.dateExclutedInputes2').innerHTML = ListofDates2;
     document.querySelector('.date-output2').innerHTML = (dateExclutedValues2.length);
     AllValues.row2.date_output2 = dateExclutedValues2.length;
}

function ShowValue3() {
     let ListofDates3 = '<div class="input-div"><input type="date" class="Date_Excluded3" onchange="ShowValue3();" name="Date-Excluded"></div>';
     dateValue3 = document.querySelector('.Date_Excluded3').value;
     AllValues.row3.dateExclutedInputes3.push(dateValue3);
     dateExclutedValues3.push(dateValue3);
     for (let i = 0; i < dateExclutedValues3.length; i++) {
          const html = `${dateExclutedValues3[i]}, `;
          ListofDates3 += html;
     }
     document.querySelector('.dateExclutedInputes3').innerHTML = ListofDates3;
     document.querySelector('.date-output3').innerHTML = (dateExclutedValues3.length);
     AllValues.row3.date_output3 = dateExclutedValues3.length;
}

function ShowValue4() {
     let ListofDates4 = '<div class="input-div"><input type="date" class="Date_Excluded4" onchange="ShowValue4();" name="Date-Excluded"></div>';
     dateValue4 = document.querySelector('.Date_Excluded4').value;
     dateExclutedValues4.push(dateValue4);
     AllValues.row4.dateExclutedInputes4.push(dateValue4);
     for (let i = 0; i < dateExclutedValues4.length; i++) {
          const html = `${dateExclutedValues4[i]}, `;
          ListofDates4 += html;
     }
     document.querySelector('.dateExclutedInputes4').innerHTML = ListofDates4;
     document.querySelector('.date-output4').innerHTML = (dateExclutedValues4.length);
     AllValues.row4.date_output4 = dateExclutedValues4.length;
}

function ShowValue5() {
     let ListofDates5 = '<div class="input-div"><input type="date" class="Date_Excluded5" onchange="ShowValue5();" name="Date-Excluded"></div>';
     dateValue5 = document.querySelector('.Date_Excluded5').value;
     dateExclutedValues5.push(dateValue5);
     AllValues.row5.dateExclutedInputes5.push(dateValue5);
     for (let i = 0; i < dateExclutedValues5.length; i++) {
          const html = `${dateExclutedValues5[i]}, `;
          ListofDates5 += html;
     }
     document.querySelector('.dateExclutedInputes5').innerHTML = ListofDates5;
     document.querySelector('.date-output5').innerHTML = (dateExclutedValues5.length);
     AllValues.row5.date_output5 = dateExclutedValues5.length;
}

function ShowValue6() {
     let ListofDates6 = '<div class="input-div"><input type="date" class="Date_Excluded6" onchange="ShowValue6();" name="Date-Excluded"></div>';
     dateValue6 = document.querySelector('.Date_Excluded6').value;
     dateExclutedValues6.push(dateValue6);
     AllValues.row6.dateExclutedInputes6.push(dateExclutedValues6[i]);
     for (let i = 0; i < dateExclutedValues6.length; i++) {
          const html = `${dateExclutedValues6[i]}, `;
          ListofDates6 += html;
     }
     document.querySelector('.dateExclutedInputes6').innerHTML = ListofDates6;
     document.querySelector('.date-output6').innerHTML = (dateExclutedValues6.length);
     AllValues.row6.date_output6 = dateExclutedValues6.length;
}

function leadandExpectedDDRcount() {
     const lead_Value1 = document.querySelector(`.Lead_Count1`).value;
     AllValues.row1.Lead_Count1 = lead_Value1;
     const Expected_Value1 = document.querySelector(`.Lead_Count1`).value;
     AllValues.row1.Expected_DDR1 = Expected_Value1;
     const lead_Value2 = document.querySelector(`.Lead_Count2`).value;
     AllValues.row2.Lead_Count2 = lead_Value2;
     const Expected_Value2 = document.querySelector(`.Lead_Count2`).value;
     AllValues.row2.Expected_DDR2 = Expected_Value2;
     const lead_Value3 = document.querySelector(`.Lead_Count3`).value;
     AllValues.row3.Lead_Count3 = lead_Value3;
     const Expected_Value3 = document.querySelector(`.Lead_Count3`).value;
     AllValues.row3.Expected_DDR3 = Expected_Value3;
     const lead_Value4 = document.querySelector(`.Lead_Count4`).value;
     AllValues.row4.Lead_Count4 = lead_Value4;
     const Expected_Value4 = document.querySelector(`.Lead_Count4`).value;
     AllValues.row4.Expected_DDR4 = Expected_Value4;
     const lead_Value5 = document.querySelector(`.Lead_Count5`).value;
     AllValues.row5.Lead_Count5 = lead_Value5;
     const Expected_Value5 = document.querySelector(`.Lead_Count5`).value;
     AllValues.row5.Expected_DDR5 = Expected_Value5;
     const lead_Value6 = document.querySelector(`.Lead_Count6`).value;
     AllValues.row6.Lead_Count6 = lead_Value6;
     const Expected_Value6 = document.querySelector(`.Lead_Count6`).value;
     AllValues.row6.Expected_DDR6 = Expected_Value6;
}


let Savebutton1 = document.querySelector('.Savebutton1');
Savebutton1.addEventListener('click', () => {
     leadandExpectedDDRcount();


     let xhr=new XMLHttpRequest();

     xhr.open('POST', "https://reqres.in/api/users", true);
     xhr.setRequestHeader("Content-Type", "application/json");

     xhr.onprogress=function(){
          console.log('on progress');
     }

     xhr.onload=function(){
          console.log(this.responseText);
     }

     params=JSON.stringify(AllValues.row1);

     xhr.send(params);
})

let Savebutton2 = document.querySelector('.Savebutton2');
Savebutton2.addEventListener('click', () => {
     leadandExpectedDDRcount();

     let xhr=new XMLHttpRequest();

     xhr.open('POST', "https://reqres.in/api/users", true);
     xhr.setRequestHeader("Content-Type", "application/json");

     xhr.onprogress=function(){
          console.log('on progress');
     }

     xhr.onload=function(){
          console.log(this.responseText);
     }

     params=JSON.stringify(AllValues.row2);

     xhr.send(params);
})

let Savebutton3 = document.querySelector('.Savebutton3');
Savebutton3.addEventListener('click', () => {
     leadandExpectedDDRcount();

     let xhr=new XMLHttpRequest();

     xhr.open('POST', "https://reqres.in/api/users", true);
     xhr.setRequestHeader("Content-Type", "application/json");

     xhr.onprogress=function(){
          console.log('on progress');
     }

     xhr.onload=function(){
          console.log(this.responseText);
     }

     params=JSON.stringify(AllValues.row3);

     xhr.send(params);
})

let Savebutton4 = document.querySelector('.Savebutton4');
Savebutton4.addEventListener('click', () => {
     leadandExpectedDDRcount();

     let xhr=new XMLHttpRequest();

     xhr.open('POST', "https://reqres.in/api/users", true);
     xhr.setRequestHeader("Content-Type", "application/json");

     xhr.onprogress=function(){
          console.log('on progress');
     }

     xhr.onload=function(){
          console.log(this.responseText);
     }

     params=JSON.stringify(AllValues.row4);

     xhr.send(params);
})

let Savebutton5 = document.querySelector('.Savebutton5');
Savebutton5.addEventListener('click', () => {
     leadandExpectedDDRcount();

     let xhr=new XMLHttpRequest();

     xhr.open('POST', "https://reqres.in/api/users", true);
     xhr.setRequestHeader("Content-Type", "application/json");

     xhr.onprogress=function(){
          console.log('on progress');
     }

     xhr.onload=function(){
          console.log(this.responseText);
     }

     params=JSON.stringify(AllValues.row5);

     xhr.send(params);
})

let Savebutton6 = document.querySelector('.Savebutton6');
Savebutton6.addEventListener('click', () => {
     leadandExpectedDDRcount();


     let xhr=new XMLHttpRequest();

     xhr.open('POST', "https://reqres.in/api/users", true);
     xhr.setRequestHeader("Content-Type", "application/json");

     xhr.onprogress=function(){
          console.log('on progress');
     }

     xhr.onload=function(){
          console.log(this.responseText);
     }

     params=JSON.stringify(AllValues.row6);

     xhr.send(params);
})
