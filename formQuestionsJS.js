"use strict";

let time = 300;

function startAdPage() {

  setInterval("startCountdown()", 1000);

}
function startCountdown() {

    if(time > 0){

      let minute = parseInt(time / 60);

            if(time % 60 < 10)
            {
              document.getElementById('timer').innerHTML = minute + ":0" + time % 60;
            }
            else
            {
              document.getElementById('timer').innerHTML = minute + ":" + time % 60;
            }
            time -= 1;
     }
      else
      {
        location.href = 'timeOut.html';
      }


}

  const demoId = document.getElementById('demo');
const demoId1 = document.getElementById('demo1');
  function tooltip(help){
    demoId.style.border = '1px solid red';
    demoId.style.borderRadius = '4px';
    demoId.textContent=`Please answer all questions in this section`;

    demoId1.style.border = '1px solid red';
    demoId1.style.borderRadius = '4px';
    demoId1.textContent=`Please answer all questions in this section`;

}
  function closetooltip(){

  demoId.style.border = 'none';
  demoId.textContent="";
    demoId1.style.border = 'none';
    demoId1.textContent="";
}
//local storage would not show the results when I had them all in the one array for some reason.
let itemsArray = [];
let itemsArray1 = [];
let itemsArray2 = [];
let itemsArray3 = [];
let itemsArray4 = [];
let itemsArray5 = [];
let itemsArray6 = [];
let itemsArray7 = [];
let itemsArray8 = [];
let itemsArray9 = [];
let itemsArray10 = [];
let itemsArray12 = [];
//end of local storage arrays
let total =[0,0,0,0,0,0,0,0,0,0,0];
let ans =[0,0,0,0,0,0,0,0,0,0,0];

//I know I have duplicated code but was unable to get it running with either one by itself.
//the query selector and for loops are doing the same thing.
document.getElementById("continue").addEventListener("click", function () {

//https://www.youtube.com/watch?v=MBUc-hfxB2s validating radio buttons
    let question1 = document.getElementsByName('q1');
    let question2 = document.getElementsByName('q2');
    let question3 = document.getElementsByName('q3');
    let question4 = document.getElementsByName('q4');

    let valid1 = false;
    let valid2 = false;
    let valid3 = false;
    let valid4 = false;

    for (let i = 0; i < question1.length; i++) {

      if (question1[i].checked) {
        valid1 = true;
      }
    }

    for (let i = 0; i < question2.length; i++) {
      if (question2[i].checked) {
        valid2 = true;

      }
    }

    for (let i = 0; i < question3.length; i++) {
      if (question3[i].checked) {
        valid3 = true;

      }
    }

    for (let i = 0; i < question4.length; i++) {
      if (question4[i].checked) {
        valid4 = true;

      }
    }

    if(valid1 == true && valid2 == true && valid3 == true && valid4 == true)
    {

                    var cbChecked = document.querySelector('[name="q1"]:checked')

                    if(cbChecked != null){
                      ans[0] += parseInt(cbChecked.value);
                      document.getElementById("firstQ").style.color = "black";

                    }
                    var cbChecked = document.querySelector('[name="q2"]:checked')

                    if(cbChecked != null){
                      ans[0] += parseInt(cbChecked.value);
                      document.getElementById("SecondQ").style.color = "black";

                    }
                    var cbChecked = document.querySelector('[name="q3"]:checked')

                    if(cbChecked != null){
                      ans[0] += parseInt(cbChecked.value);
                      document.getElementById("thirdQ").style.color = "black";

                    }
                    var cbChecked = document.querySelector('[name="q4"]:checked')

                    if(cbChecked != null){
                      ans[0] += parseInt(cbChecked.value);
                      document.getElementById("fourthQ").style.color = "black";
                    }

                    document.getElementById('show').style.display = 'block';
                    document.getElementById('continue').style.display = 'none';

                    total[0] += ans[0];
                    displayText();
                    document.getElementById('score').style.display = 'block';
                    localStorage.clear();
                    itemsArray.push(document.getElementById("score").value);
                    localStorage.setItem('score', JSON.stringify(itemsArray));

    }
    else if (valid1 == false)
    {

        document.getElementById("firstQ").style.color = "red";
        alert("Please answer question 1");
        document.getElementById("firstQ").focus();
        document.getElementById("firstQ").select();

    }
    else if (valid2 == false)
    {
      document.getElementById("SecondQ").style.color = "red";
      alert("Please answer question 2");
    }
    else if (valid3 == false)
     {
        alert("Please answer question 3");
        document.getElementById("thirdQ").style.color = "red";
      }
    else if (valid4 == false)
    {
        document.getElementById("fourthQ").style.color = "red";
        alert("Please answer question 4");
    }
  });

  function displayText() {

    if (total[0] >= 16 && total[0] <= 20) {
      document.getElementById('score').value = ` Well done you are clearly being proactive in considering making your services more universal ! `;

    } if (total[0] >= 10 && total[0] <= 15) {
      document.getElementById('score').value = ` With a little more thought you will see more opportunities for increasing the universability of your services!`;
    } if (total[0] >= 4 && total[0] <= 9) {
      document.getElementById('score').value = ` The face to face training session will be a great opportunity for you to get guidance on progressing the universability of your organisation ! `;
    }

}

  document.getElementById("continue1").addEventListener("click", function () {

    let s2question1 = document.getElementsByName('s2q1');
    let s2question2 = document.getElementsByName('s2q2');
    let s2question3 = document.getElementsByName('s2q3');
    let s2question4 = document.getElementsByName('s2q4');
    let s2question5 = document.getElementsByName('s2q5');

    let s2valid1 = false;
    let s2valid2 = false;
    let s2valid3 = false;
    let s2valid4 = false;
    let s2valid5 = false;

    for (let i = 0; i < s2question1.length; i++) {

      if (s2question1[i].checked) {
        s2valid1 = true;
      }
    }

    for (let i = 0; i < s2question2.length; i++) {
      if (s2question2[i].checked) {
        s2valid2 = true;

      }
    }

    for (let i = 0; i < s2question3.length; i++) {
      if (s2question3[i].checked) {
        s2valid3 = true;

      }
    }

    for (let i = 0; i < s2question4.length; i++) {
      if (s2question4[i].checked) {
        s2valid4 = true;

      }
    }
    for (let i = 0; i < s2question5.length; i++) {
      if (s2question5[i].checked) {
        s2valid5 = true;

      }
    }

    if(s2valid1 && s2valid2 && s2valid3 && s2valid4 && s2valid5)
    {

                                var s2q1cbChecked = document.querySelector('[name="s2q1"]:checked')

                                if(s2q1cbChecked != null){
                                  ans[1] += parseInt(s2q1cbChecked.value);
                                  document.getElementById("s2FirstQ").style.color = "black";

                                }
                                var s2q2cbChecked = document.querySelector('[name="s2q2"]:checked')

                                if(s2q2cbChecked != null){
                                  ans[1] += parseInt(s2q2cbChecked.value);
                                  document.getElementById("s2SecondQ").style.color = "black";

                                }
                                var s2q3cbChecked = document.querySelector('[name="s2q3"]:checked')

                                if(s2q3cbChecked != null){
                                  ans[1] += parseInt(s2q3cbChecked.value);
                                  document.getElementById("s2ThirdQ").style.color = "black";

                                }
                                var s2q4cbChecked = document.querySelector('[name="s2q4"]:checked')

                                if(s2q4cbChecked != null){
                                  ans[1] += parseInt(s2q4cbChecked.value);
                                  document.getElementById("s2FourthQ").style.color = "black";

                                }

                                var s2q5cbChecked = document.querySelector('[name="s2q5"]:checked')

                                if(s2q5cbChecked != null){
                                  ans[1] += parseInt(s2q5cbChecked.value);
                                  document.getElementById("s2FifthQ").style.color = "black";

                                }
                                document.getElementById('show1').style.display = 'block';
                                document.getElementById('continue1').style.display = 'none';
                                total[1] += ans[1];
                                displayText1();
                                document.getElementById('score2').style.display = 'block';
                                itemsArray1.push(document.getElementById("score2").value);
                                localStorage.setItem('score2', JSON.stringify(itemsArray1));

    }
    else if(s2valid1 == false){
      document.getElementById("s2FirstQ").style.color = "red"
      alert("Please answer question 1")


    }
    else if(s2valid2 == false){
      document.getElementById("s2SecondQ").style.color = "red"
      alert("Please answer question 2")

    }
    else if(s2valid3 == false){

      document.getElementById("s2ThirdQ").style.color = "red"
      alert("Please answer question 3")


    }
    else if(s2valid4 == false){

      document.getElementById("s2FourthQ").style.color = "red"
      alert("Please answer question 4")

    }

    else if(s2valid5 == false){

      document.getElementById("s2FifthQ").style.color = "red"
      alert("Please answer question 5")

    }

  });



function displayText1(){

  if ( total[1] >= 20 &&  total[1] <= 25) {
    document.getElementById('score2').value = ` You have a very high level of appreciation of the mutual benefits for all stakeholders in an inclusive organisation !`;

  }
  else if ( total[1] >= 12 &&  total[1] <= 19) {
    document.getElementById('score2').value = ` You have some sense of the benefits of a universal organisation !`;
  }
  else if ( total[1] >= 5 &&  total[1] <= 11) {
    document.getElementById('score2').value = ` The face to face training session will be a great opportunity for you to gain some perspective of the benefits of universability to your organisation and its members !`;
  }
}

document.getElementById("continue2").addEventListener("click", function () {

//https://www.youtube.com/watch?v=MBUc-hfxB2s validating radio buttons

  let s3question1 = document.getElementsByName('s3q1');
  let s3question2 = document.getElementsByName('s3q2');


  let s3valid1 = false;
  let s3valid2 = false;


  for (let i = 0; i < s3question1.length; i++) {

    if (s3question1[i].checked) {
      s3valid1 = true;
    }
  }

  for (let i = 0; i < s3question2.length; i++) {
    if (s3question2[i].checked) {
      s3valid2 = true;

    }
  }

  if(s3valid1 == true && s3valid2 == true)
  {

                        var cbChecked = document.querySelector('[name="s3q1"]:checked')

                        if(cbChecked != null){
                          ans[2] += parseInt(cbChecked.value);
                          document.getElementById("s3firstQ").style.color = "black";

                        }
                        var cbChecked = document.querySelector('[name="s3q2"]:checked')

                        if(cbChecked != null){
                          ans[2] += parseInt(cbChecked.value);
                          document.getElementById("s3secondQ").style.color = "black";
                          document.getElementById("s3thirdQ").style.color = "black";
                          document.getElementById("s3fourthQ").style.color = "black";
                          document.getElementById("s3fifthQ").style.color = "black";
                          document.getElementById("s3sixthQ").style.color = "black";

                        }
                        total[2] += ans[2];
                        displayText2();
                        document.getElementById('show2').style.display = 'block';
                        document.getElementById('continue2').style.display = 'none';
                        document.getElementById('score3').style.display = 'block';
                        itemsArray2.push(document.getElementById("score3").value);
                        localStorage.setItem('score3', JSON.stringify(itemsArray2));

  }
  else if (s3valid1 == false)
  {

    document.getElementById("s3firstQ").style.color = "red";
    alert("Please answer question 1");
    return;
  }
  else if (s3valid2 == false)
  {

    document.getElementById("s3secondQ").style.color = "red";
    document.getElementById("s3thirdQ").style.color = "red";
    document.getElementById("s3fourthQ").style.color = "red";
    document.getElementById("s3fifthQ").style.color = "red";
    document.getElementById("s3sixthQ").style.color = "red";
    alert("Please answer one of the questions in red ");

  }

});

function displayText2(){

  if ( total[2] >= 6 &&  total[2] <= 10) {
    document.getElementById('score3').value = ` You can see an inclusive future for your organisation and its members,
    the challenge is now to ensure that your decisions and resource allocations make this happen !`;

  }
  else if ( total[2] >= 2 &&  total[2] <= 5) {
    document.getElementById('score3').value = ` The face to face session has great scope to convince you of the feasibility of promoting inclusion - just keep your
    mind open to the possibility   !`;
  }

}

document.getElementById("continue3").addEventListener("click", function () {

//https://www.youtube.com/watch?v=MBUc-hfxB2s validating radio buttons

  let s4question1 = document.getElementsByName('s4yes_no');

  let s4valid1 = false;

  for (let i = 0; i < s4question1.length; i++) {

    if (s4question1[i].checked) {
      s4valid1 = true;
    }
  }

  if(s4valid1 === true )
  {

                              var s4cbChecked = document.querySelector('[name="s4yes_no"]:checked')

                              if(s4cbChecked != null){
                                ans[3] += parseInt(s4cbChecked.value);

                                document.getElementById("s4firstQ").style.color = "black";

                              }

                                  var s4cbChecked2 = document.querySelector('[name="s4check"]:checked')
                                  if(s4cbChecked2 != null) {
                                    ans[3] += parseInt(s4cbChecked2.value);

                                  }
                                    var s4cbChecked3 = document.querySelector('[name="s4check1"]:checked')
                                    if (s4cbChecked3 != null) {
                                      ans[3] += parseInt(s4cbChecked3.value);

                                    }
                                    var s4cbChecked4 = document.querySelector('[name="s4check2"]:checked')
                                    if (s4cbChecked4 != null) {
                                      ans[3] += parseInt(s4cbChecked4.value);

                                    }
                                    total[3] += ans[3];
                                    displayText3();
                                    document.getElementById('show3').style.display = 'block';
                                    document.getElementById('continue3').style.display = 'none';
                                    document.getElementById('score4').style.display = 'block';
                                    itemsArray3.push(document.getElementById("score4").value);
                                    localStorage.setItem('score4', JSON.stringify(itemsArray3));

  }
  else
  {

    document.getElementById("s4firstQ").style.color = "red";
    alert("Please answer question 1");
    return;
  }


});

function displayText3(){

  if ( total[3] >= 30 &&  total[3] <= 40) {
    document.getElementById('score4').value = ` Your organisation’s value system is an inclusive one. Your challenge will be to safeguard this and promote this philosophy within the wider fitness sector  !`;

  }
  else if ( total[3] >= 20 && total[3] < 30 ) {
    document.getElementById('score4').value = ` While there is some openness to equity in your organisation the commitment is not yet wholly embraced by all. Belief systems within the organisation may be confused and possibly conflicting. It would be desirable to promote dialogue amongst your stakeholders around the topic of inclusion !`;
  }else {

    document.getElementById('score4').value = ` The face to face training session will only be of value to progressing your universability if you are willing to challenge your belief system about access to fitness services being a fundamental !`;

  }

}

document.getElementById("continue4").addEventListener("click", function () {

//https://www.youtube.com/watch?v=MBUc-hfxB2s validating radio buttons
  let s5question1 = document.getElementsByName('s5yes_no');
  let s5question2 = document.getElementsByName('s5q2yes_no');
  let s5question3 = document.getElementsByName('s5q3yes_no');
  let s5question3B = document.getElementsByName('s5q3B_yes_no');
  let s5question4 = document.getElementsByName('s5q4yes_no');

  let s5valid1 = false;
  let s5valid2 = false;
  let s5valid3 = false;
  let s5valid3B = false;
  let s5valid4 = false;

  for (let i = 0; i < s5question1.length; i++) {

    if (s5question1[i].checked) {
      s5valid1 = true;
    }
  }

  for (let i = 0; i < s5question2.length; i++) {
    if (s5question2[i].checked) {
      s5valid2 = true;

    }
  }

  for (let i = 0; i < s5question3.length; i++) {
    if (s5question3[i].checked) {
      s5valid3 = true;

    }
  }
  for (let i = 0; i < s5question3B.length; i++) {
    if (s5question3B[i].checked) {
      s5valid3B = true;

    }
  }

  for (let i = 0; i < s5question4.length; i++) {
    if (s5question4[i].checked) {
      s5valid4 = true;

    }
  }

  if(s5valid1 == true && s5valid2 == true && s5valid3 == true && s5valid4 == true)
  {

                            var cbChecked = document.querySelector('[name="s5yes_no"]:checked')

                            if(cbChecked != null){
                              ans[4] += parseInt(cbChecked.value);
                              document.getElementById("s5firstQ").style.color = "black";

                            }
                            var cbChecked = document.querySelector('[name="s5q2yes_no"]:checked')

                            if(cbChecked != null){
                              ans[4] += parseInt(cbChecked.value);
                              document.getElementById("s5secondQ").style.color = "black";

                            }
                            var cbChecked = document.querySelector('[name="s5q3yes_no"]:checked')

                            if(cbChecked != null){
                              ans[4] += parseInt(cbChecked.value);
                              document.getElementById("s5thirdQ").style.color = "black";

                            }

                            var cbChecked = document.querySelector('[name="s5q3B_yes_no"]:checked')

                            if(cbChecked != null){
                              ans[4] += parseInt(cbChecked.value);
                              document.getElementById("s5thirdQ_B").style.color = "black";

                            }
                            var cbChecked = document.querySelector('[name="s5q4yes_no"]:checked')

                            if(cbChecked != null){
                              ans[4] += parseInt(cbChecked.value);
                              document.getElementById("s5fourthQ").style.color = "black";
                            }

                            document.getElementById('show4').style.display = 'block';
                            document.getElementById('continue4').style.display = 'none';
                            total[4] += ans[4];
                            displayText4();
                            document.getElementById('score5').style.display = 'block';
                            itemsArray4.push(document.getElementById("score5").value);
                            localStorage.setItem('score5', JSON.stringify(itemsArray4));
  }
  else if (s5valid1 == false)
  {

    document.getElementById("s5firstQ").style.color = "red";
    alert("Please answer question 1");
    return;
  }
  else if (s5valid2 == false)
  {

    document.getElementById("s5secondQ").style.color = "red";
    alert("Please answer question 2");

  }
  else if (s5valid3 == false)
  {

    alert("Please answer question 3");
    document.getElementById("s5thirdQ").style.color = "red";

  }
  else if (s5valid3B == false)
  {

    alert("Please answer question 3B");
    document.getElementById("s5thirdQ_B").style.color = "red";

  }

  else if (s5valid4 == false)
  {

    document.getElementById("s5fourthQ").style.color = "red";
    alert("Please answer question 4");

  }


});

function displayText4() {

  if (total[4] == 40 || total[4] <= 50) {
    document.getElementById('score5').value = ` Your intentions are very sound in respect of inclusion and you have the potential to be a high achiever in this respect !`;

  }else if (total[4] == 30 || total[4] == 20) {
    document.getElementById('score5').value = ` Your journey of making organisational policies inclusive has started well and this may be the catalyst for enhanced universability – if you are open to progressive change !`;
  } else if (total[4] == 10 ) {
    document.getElementById('score5').value = ` The face to face training session will be a great opportunity for you to get guidance on progressing the universability of your organisation !`;
  }else {
    document.getElementById('score5').value = ` Universability is not something with which you have yet engaged, so the face to face training session will be an opportunity for significant learning in this respect!`;
  }

}


document.getElementById("continue5").addEventListener("click", function (){

//https://www.youtube.com/watch?v=MBUc-hfxB2s validating radio buttons
  let s6question1 = document.getElementsByName('s6q1yes_no');
  let s6question2 = document.getElementsByName('s6q2yes_no');
  let s6question3 = document.getElementsByName('s6q3yes_no');
  let s6question4 = document.getElementsByName('s6q4yes_no');
  let s6question5 = document.getElementsByName('s6q5yes_no');

  let s6valid1 = false;
  let s6valid2 = false;
  let s6valid3 = false;
  let s6valid4 = false;
  let s6valid5 = false;

  for (let i = 0; i < s6question1.length; i++) {
    if (s6question1[i].checked) {
      s6valid1 = true;
    }
  }

  for (let i = 0; i < s6question2.length; i++) {
    if (s6question2[i].checked) {
      s6valid2 = true;
    }
  }
  for (let i = 0; i < s6question3.length; i++) {
    if (s6question3[i].checked) {
      s6valid3 = true;
    }
  }
  for (let i = 0; i < s6question4.length; i++) {
    if (s6question4[i].checked) {
      s6valid4 = true;
    }
  }

  for (let i = 0; i < s6question5.length; i++) {
    if (s6question5[i].checked) {
      s6valid5 = true;
    }
  }

  if(s6valid1 == true && s6valid2 == true && s6valid3 == true && s6valid4 == true && s6valid5 == true)
  {

                                  var s6q1cbChecked = document.querySelector('[name="s6q1yes_no"]:checked')

                                  if(s6q1cbChecked != null){
                                    ans[5] += parseInt(s6q1cbChecked.value);
                                    document.getElementById("s6firstQ").style.color = "black";

                                  }
                                  var s6q2cbChecked = document.querySelector('[name="s6q2yes_no"]:checked')

                                  if(s6q2cbChecked != null){
                                    ans[5] += parseInt(s6q2cbChecked.value);
                                    document.getElementById("s6secondQ").style.color = "black";

                                  }
                                  var s6q3cbChecked = document.querySelector('[name="s6q3yes_no"]:checked')

                                  if(s6q3cbChecked != null){
                                    ans[5] += parseInt(s6q3cbChecked.value);
                                    document.getElementById("s6thirdQ").style.color = "black";

                                  }

                                  var s6q4cbChecked = document.querySelector('[name="s6q4yes_no"]:checked')

                                  if(s6q4cbChecked != null){
                                    ans[5] += parseInt(s6q4cbChecked.value);
                                    document.getElementById("s6fourthQ").style.color = "black";

                                  }
                                  var s6q5cbChecked = document.querySelector('[name="s6q5yes_no"]:checked')

                                  if(s6q5cbChecked != null){
                                    ans[5] += parseInt(s6q5cbChecked.value);
                                    document.getElementById("s6fifthQ").style.color = "black";
                                  }

                                  document.getElementById('show5').style.display = 'block';
                                  document.getElementById('continue5').style.display = 'none';
                                  total[5] += ans[5];
                                  displayText5();
                                   document.getElementById('score6').style.display = 'block';
                                    itemsArray5.push(document.getElementById("score6").value);
                                    localStorage.setItem('score6', JSON.stringify(itemsArray5));

  }
  else if (s6valid1 === false)
  {

    document.getElementById("s6firstQ").style.color = "red";
    alert("Please answer question 1");
    return;

  }
  else if (s6valid2 === false)
  {
    document.getElementById("s6secondQ").style.color = "red";
    alert("Please answer question 2");
  }
  else if (s6valid3 === false)
  {
    alert("Please answer question 3");
    document.getElementById("s6thirdQ").style.color = "red";
  }
  else if (s6valid4 === false)
  {
    alert("Please answer question 4");
    document.getElementById("s6fourthQ").style.color = "red";
  }
  else if (s6valid5 === false)
  {
    document.getElementById("s6fifthQ").style.color = "red";
    alert("Please answer question 5");
  }
});

function displayText5() {

  if (total[5] >= 30 && total[5] <= 50) {
    document.getElementById('score6').value = ` You are already a potential resource for people with disabilities in your community, as your networks are an essential element in the UFIT approach`;
  }else if (total[5] >= 10 && total[5] <= 20) {
    document.getElementById('score6').value = ` You have made a positive start upon which your organisation can build sound relationships with people with disabilities.Unit three will offer you more ideas in respect of forging alliances with people with disabilities`;
  } else  {
    document.getElementById('score6').value = `You have great scope for learning during the face to face training session, once you have an open mind to the possibilities that an inclusive approach can offer`;
  }

}

document.getElementById("continue6").addEventListener("click", function (){

//https://www.youtube.com/watch?v=MBUc-hfxB2s validating radio buttons
  let s7question1 = document.getElementsByName('s7q1yes_no');
  let s7question2 = document.getElementsByName('s7q2yes_no');
  let s7valid1 = false;
  let s7valid2 = false;

  for (let i = 0; i < s7question1.length; i++) {
    if (s7question1[i].checked) {
      s7valid1 = true;
    }
  }
  for (let i = 0; i < s7question2.length; i++) {
    if (s7question2[i].checked) {
      s7valid2 = true;
    }
  }

  if(s7valid1 == true && s7valid2 == true )
  {
                                    var s7q1cbChecked = document.querySelector('[name="s7q1yes_no"]:checked')

                                    if(s7q1cbChecked != null){
                                      ans[6] += parseInt(s7q1cbChecked.value);
                                      document.getElementById("s7firstQ").style.color = "black";
                                    }
                                    var s7q2cbChecked = document.querySelector('[name="s7q2yes_no"]:checked')

                                    if(s7q2cbChecked != null){
                                      ans[6] += parseInt(s7q2cbChecked.value);
                                      document.getElementById("s7secondQ").style.color = "black";
                                    }
                                    document.getElementById('show6').style.display = 'block';
                                    document.getElementById('continue6').style.display = 'none';
                                    total[6] += ans[6];
                                    displayText6();
                                    document.getElementById('score7').style.display = 'block';
                                    itemsArray6.push(document.getElementById("score7").value);
                                    localStorage.setItem('score7', JSON.stringify(itemsArray6));
  }
  else if (s7valid1 === false)
  {
    document.getElementById("s7firstQ").style.color = "red";
    alert("Please answer question 1");
    return;
  }
  else if (s7valid2 === false)
  {
    document.getElementById("s7secondQ").style.color = "red";
    alert("Please answer question 2");
  }

});

function displayText6() {

  if (total[6] >= 10 && total[6] <= 20) {
    document.getElementById('score7').value = ` As a listening organisation you have important information that can guide your journey towards universability. Your challenge is to interpret what is being said and to translate it into inclusive actions`;

  }else {
    document.getElementById('score7').value = `Your organisation has yet to learn the power of dialogue as a means of providing desirable fitness services to all members of the community`;

  }

}

document.getElementById("continue7").addEventListener("click", function () {

//https://www.youtube.com/watch?v=MBUc-hfxB2s validating radio buttons

  let s8question1 = document.getElementsByName('s8q1yes_no');
  let s8question2 = document.getElementsByName('s8q2yes_no');

  let s8valid1 = false;
  let s8valid2 = false;

  for (let i = 0; i < s8question1.length; i++) {

    if (s8question1[i].checked) {
      s8valid1 = true;

    }
  }
  for (let i = 0; i < s8question2.length; i++) {

    if (s8question2[i].checked) {
      s8valid2 = true;
    }
  }

  if(s8valid1 === true && s8valid2 === true )
  {

                                        var s8q1cbChecked = document.querySelector('[name="s8check1"]:checked')

                                        if(s8q1cbChecked != null){
                                          ans[7] += parseInt(s8q1cbChecked.value);
                                          document.getElementById("s8firstQ").style.color = "black";
                                        }
                                        var s8cbChecked2 = document.querySelector('[name="s8check2"]:checked')
                                        if(s8cbChecked2 != null) {
                                          ans[7] += parseInt(s8cbChecked2.value);
                                        }
                                        var s8cbChecked3 = document.querySelector('[name="s8check3"]:checked')
                                        if (s8cbChecked3 != null) {
                                          ans[7] += parseInt(s8cbChecked3.value);
                                        }
                                        var s8cbChecked4 = document.querySelector('[name="s8check4"]:checked')
                                        if (s8cbChecked4 != null) {
                                          ans[7] += parseInt(s8cbChecked4.value);
                                        }
                                        var s8cbChecked5 = document.querySelector('[name="s8check5"]:checked')

                                        if(s8cbChecked5 != null){
                                          ans[7] += parseInt(s8cbChecked5.value);

                                        }

                                        var s8cbChecked6 = document.querySelector('[name="s8check6"]:checked')
                                        if(s8cbChecked6 != null) {
                                          ans[7] += parseInt(s8cbChecked6.value);

                                        }
                                        var s8cbChecked7 = document.querySelector('[name="s8check7"]:checked')
                                        if (s8cbChecked7 != null) {
                                          ans[7] += parseInt(s8cbChecked7.value);

                                        }
                                        var s8cbChecked8 = document.querySelector('[name="s8check8"]:checked')
                                        if (s8cbChecked8 != null) {
                                          ans[7] += parseInt(s8cbChecked8.value);

                                        }
                                        document.getElementById("s8secondQ").style.color = "black";
                                        total[7] += ans[7];
                                        displayText7();
                                        document.getElementById('show7').style.display = 'block';
                                        document.getElementById('score8').style.display = 'block';
                                        document.getElementById('continue7').style.display = 'none';
                                        itemsArray7.push(document.getElementById("score8").value);
                                        localStorage.setItem('score8', JSON.stringify(itemsArray7));
  }
  else if (s8valid1 == false)
  {

    document.getElementById("s8firstQ").style.color = "red";
    alert("Please answer question 1");
    return;
  }
  else if(s8valid2 == false){
    document.getElementById("s8secondQ").style.color = "red";
    alert("Please answer question 2");
  }

});

function displayText7() {

  if (total[7] >= 30 && total[7] <= 80) {
    document.getElementById('score8').value = ` You have the potential to be a role model of provision in the fitness sector. Programming is the basic unit of service delivery – where this is inclusive, your relevance to the wider community is enhanced`;

  }else if(total[7] >=10 && total[7] <= 20) {
    document.getElementById('score8').value = `You have made a positive start – you can use the questions here to reflect on how you can make more progress in this respect`;

  }else
  {
    document.getElementById('score8').value ="You have great scope for learning during the face to face training session, once you have an open mind to the possibilities that an inclusive approach can offer";
  }

}

document.getElementById("continue8").addEventListener("click", function (){

//https://www.youtube.com/watch?v=MBUc-hfxB2s validating radio buttons
  let s9question1 = document.getElementsByName('s9q1yes_no');
  let s9question2 = document.getElementsByName('s9q2yes_no');
  let s9question3 = document.getElementsByName('s9q3yes_no');
  let s9question4 = document.getElementsByName('s9q4yes_no');
  let s9question5 = document.getElementsByName('s9q5yes_no');
  let s9question6 = document.getElementsByName('s9q6yes_no');

  let s9valid1 = false;
  let s9valid2 = false;
  let s9valid3 = false;
  let s9valid4 = false;
  let s9valid5 = false;
  let s9valid6 = false;

  for (let i = 0; i < s9question1.length; i++) {
    if (s9question1[i].checked) {
      s9valid1 = true;
    }
  }
  for (let i = 0; i < s9question2.length; i++) {
    if (s9question2[i].checked) {
      s9valid2 = true;
    }
  }
  for (let i = 0; i < s9question3.length; i++) {
    if (s9question3[i].checked) {
      s9valid3 = true;
    }
  }
  for (let i = 0; i < s9question4.length; i++) {
    if (s9question4[i].checked) {
      s9valid4 = true;
    }
  }
  for (let i = 0; i < s9question5.length; i++) {
    if (s9question5[i].checked) {
      s9valid5 = true;
    }
  }
  for (let i = 0; i < s9question6.length; i++) {
    if (s9question6[i].checked) {
      s9valid6 = true;
    }
  }
  if(s9valid1 == true && s9valid2 == true && s9valid3 == true && s9valid4 == true && s9valid5 == true  && s9valid6 == true)
  {

                              var s9q1cbChecked = document.querySelector('[name="s9q1yes_no"]:checked')

                              if(s9q1cbChecked != null){
                                ans[8] += parseInt(s9q1cbChecked.value);
                                document.getElementById("s9firstQ").style.color = "black";
                              }
                              var s9q2cbChecked = document.querySelector('[name="s9q2yes_no"]:checked')

                              if(s9q2cbChecked != null){
                                ans[8] += parseInt(s9q2cbChecked.value);
                                document.getElementById("s9secondQ").style.color = "black";
                              }
                              var s9q3cbChecked = document.querySelector('[name="s9q3yes_no"]:checked')

                              if(s9q3cbChecked != null){
                                ans[8] += parseInt(s9q3cbChecked.value);
                                document.getElementById("s9thirdQ").style.color = "black";
                              }
                              var s9q4cbChecked = document.querySelector('[name="s9q4yes_no"]:checked')

                              if(s9q4cbChecked != null){
                                ans[8] += parseInt(s9q4cbChecked.value);
                                document.getElementById("s9fourthQ").style.color = "black";
                              }
                              var s9q5cbChecked = document.querySelector('[name="s9q5yes_no"]:checked')

                              if(s9q5cbChecked != null){
                                ans[8] += parseInt(s9q5cbChecked.value);
                                document.getElementById("s9fifthQ").style.color = "black";
                              }
                              var s9q6cbChecked = document.querySelector('[name="s9q6yes_no"]:checked')

                              if(s9q6cbChecked != null){
                                ans[8] += parseInt(s9q6cbChecked.value);
                                document.getElementById("s9sixthQ").style.color = "black";
                              }
                              document.getElementById('show8').style.display = 'block';
                              document.getElementById('continue8').style.display = 'none';
                              total[8] += ans[8];
                              displayText8();
                              itemsArray8.push(document.getElementById("score9").value);
                              localStorage.setItem('score9', JSON.stringify(itemsArray8));

  }
  else if (s9valid1 === false)
  {
    document.getElementById("s9firstQ").style.color = "red";
    alert("Please answer question a");
    return;
  }
  else if (s9valid2 === false)
  {
    document.getElementById("s9secondQ").style.color = "red";
    alert("Please answer question b");
  }
  else if (s9valid3 === false)
  {
    alert("Please answer question c");
    document.getElementById("s9thirdQ").style.color = "red";
  }
  else if (s9valid4 === false)
  {
    alert("Please answer question d");
    document.getElementById("s9fourthQ").style.color = "red";
  }
  else if (s9valid5 === false)
  {
    document.getElementById("s9fifthQ").style.color = "red";
    alert("Please answer question 2");
  }
  else if (s9valid6 === false)
  {
    document.getElementById("s9sixthQ").style.color = "red";
    alert("Please answer question 3");
  }

});

function displayText8() {

  if (total[8] >= 40 && total[8] <= 60) {
    document.getElementById('score9').value = ` You have invested in your organisation’s most important asset. Your potential to offer inclusive services is vast. The challenge is to make sure that you optimally deploy this wisdom to make all aspects of your service provision truly inclusive`;

  }else if(total[8] >=20 && total[8] <= 30) {
    document.getElementById('score9').value = `There is some scope within your organisation to promote universability principles and broaden your organisation’s relevance in the wider community `;

  }else if(total[8] == 10)
  {
    document.getElementById('score9').value ="Depending on the strength of influence of those with some perspective on inclusion, you may have scope to drive improvements from within. Consider the scope for repositioning those with training and knowledge in the area of inclusion to optimise their influence";
  }else{
    document.getElementById('score9').value ="Universability is not something with which you have engaged so the face to face training session will be an opportunity for significant learning in this respect";

  }

}
document.getElementById("continue9").addEventListener("click", function () {
//https://www.youtube.com/watch?v=MBUc-hfxB2s validating radio buttons

  let s10question1 = document.getElementsByName('s10q1yes_no');
  let s10valid1 = false;

  for (let i = 0; i < s10question1.length; i++) {

    if (s10question1[i].checked) {
      s10valid1 = true;
    }
  }
  if(s10valid1 === true)
  {
                                  var s10q1cbChecked = document.querySelector('[name="s10check1"]:checked')

                                  if(s10q1cbChecked != null){
                                    ans[9] += parseInt(s10q1cbChecked.value);
                                  }

                                  var s10cbChecked2 = document.querySelector('[name="s10check2"]:checked')
                                  if(s10cbChecked2 != null) {
                                    ans[9] += parseInt(s10cbChecked2.value);

                                  }
                                  var s10cbChecked3 = document.querySelector('[name="s10check3"]:checked')
                                  if (s10cbChecked3 != null) {
                                    ans[9] += parseInt(s10cbChecked3.value);

                                  }
                                  var s10cbChecked4 = document.querySelector('[name="s10check4"]:checked')
                                  if (s10cbChecked4 != null) {
                                    ans[9] += parseInt(s10cbChecked4.value);

                                  }

                                  document.getElementById("s10firstQ").style.color = "black";
                                  total[9] += ans[9];
                                  displayText9();
                                  document.getElementById('show9').style.display = 'block';
                                  document.getElementById('continue9').style.display = 'none';
                                  itemsArray9.push(document.getElementById("score10").value);
                                  localStorage.setItem('score10', JSON.stringify(itemsArray9));
  }
  else if (s10valid1 == false)
  {
    document.getElementById("s10firstQ").style.color = "red";
    alert("Please answer question 1");
    return;
  }

});
function displayText9() {

  if (total[9] >= 40 && total[9] <= 50) {
    document.getElementById('score10').value = ` The facility is largely accessible and hence there is significant scope for promoting universability. `;

  }else if(total[9] >=20 && total[9] <= 30) {
    document.getElementById('score10').value = `While some aspects of your facility are accessible there is scope for enhancement. The face to face training session will offer you some suggestions for improvement here.`;

  }else if(total[9] == 10)
  {
    document.getElementById('score10').value = " While you have made a start in the direction of universability there is considerable scope for improvements.";
  }else{
    document.getElementById('score10').value ="The face to face training session will provide you with wonderful ideas for making small (and inexpensive) changes to enhance the universability of the facility.";

  }

}
document.getElementById("continue10").addEventListener("click", function (){

//https://www.youtube.com/watch?v=MBUc-hfxB2s validating radio buttons
  let s11question1 = document.getElementsByName('s11q1yes_no');
  let s11question2 = document.getElementsByName('s11q2yes_no');
  let s11valid1 = false;
  let s11valid2 = false;

  for (let i = 0; i < s11question1.length; i++) {
    if (s11question1[i].checked) {
      s11valid1 = true;
    }
  }
  for (let i = 0; i < s11question2.length; i++) {
    if (s11question2[i].checked) {
      s11valid2 = true;
    }
  }

  if(s11valid1 == true && s11valid2 == true )
  {
                                  var s11q1cbChecked = document.querySelector('[name="s11q1yes_no"]:checked')

                                  if(s11q1cbChecked != null){
                                    ans[10] += parseInt(s11q1cbChecked.value);
                                    document.getElementById("s11firstQ").style.color = "black";
                                  }
                                  var s11q2cbChecked = document.querySelector('[name="s11q2yes_no"]:checked')

                                  if(s11q2cbChecked != null){
                                    ans[10] += parseInt(s11q2cbChecked.value);
                                    document.getElementById("s11secondQ").style.color = "black";
                                  }

                                  document.getElementById('continue10').style.display = 'none';

                                  total[10] += ans[10];
                                  displayText10();
                                  document.getElementById('continue11').style.display = 'block';
                                    itemsArray10.push(document.getElementById("score11").value);
                                    localStorage.setItem('score11', JSON.stringify(itemsArray10));
  }
  else if (s11valid1 === false)
  {
    document.getElementById("s11firstQ").style.color = "red";
    alert("Please answer question 1");
    return;
  }
  else if (s11valid2 === false)
  {
    document.getElementById("s11secondQ").style.color = "red";
    alert("Please answer question 2");
  }

});

function displayText10() {

  if (total[10] >= 10 && total[10] <= 20) {
    document.getElementById('score11').value = ` As a listening organisation you have important information that can guide your journey towards universability. Your challenge is to interpret what is being said and to translate it into inclusive actions`;

  }else {
    document.getElementById('score11').value = `Your organisation has yet to learn the power of dialogue as a means of providing desirable fitness services to all members of the community`;

  }
}
let totalPoints=0;
function calTotal(){

  for(let i=0; i<total.length; i++){
     totalPoints += total[i];
  }
  alert("Your total score is " + totalPoints);

  if (totalPoints >= 340 && totalPoints <= 425) {
    document.getElementById('totalScore').value = `Your organisation is evidently committed to inclusion.Your perspective will be most valuable at the face to face training session as both an advocate and a guide for inclusive fitness service provision. You are highly relevant in your community and hence the organisation is sustainable and will remain so once your current commitment is supported and enhanced over time.`;

  }else if (totalPoints >= 245 && totalPoints <= 339){
    document.getElementById('totalScore').value = `Your organisation is making genuine and meaningful efforts in the direction of universability.  However provision is probably patchy and inconsistent, which may cause some confusion among members and potential members. Promotion of inclusive opportunities as an organisational priority has the potential to broaden your relevance to an even greater number of community members. `;

  }else if (totalPoints >= 150 && totalPoints <= 244){
    document.getElementById('totalScore').value = `While some work is being done to enhance inclusive provision, there is scope for significant gains in this aspect. Building on what you are doing well and embracing new ideas will see your organisation make the transitions to inclusivity with some ease. The face to face training session will be a unique opportunity to learn from others in your sector.`;

  }else{
    document.getElementById('totalScore').value = " The face to face training session will be of immense value to your organisation. An exciting challenge awaits as you move towards universability. It will take some time but the secret is to keep doing what you are doing well and gradually add other initiatives to make your services more inclusive. The face to face training session will lead to significant learning for your organisation.  ";
  }
  itemsArray12.push(document.getElementById("totalPoints").value);
  localStorage.setItem('totalScore', JSON.stringify(itemsArray12));

}

//http://jsfiddle.net/C6mSZ/
$(document).ready(function()
{
  $('#age').change(UpdateInfo);
});
function UpdateInfo()
{
  let age = $('#age').val();
  let info = ' ('+ age + ') Procced';
  document.getElementById('hidden').style.display = 'block';
  $('#info').val(info);
}

