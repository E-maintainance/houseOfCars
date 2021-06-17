'use strict';
let form = document.getElementById('user');
let feedbackArr = [];
function Feedback(name, feedback) {
  this.name = name;
  this.feedback = feedback;
  feedbackArr.push(this);
}
if (localStorage.getItem('feedback')) {
  gettingData();
}
function render() {
  let ulEl = document.getElementById('ul');
  for (let i = 0; i < feedbackArr.length; i++) {
    let list = document.createElement('li');
    list.setAttribute('id', 'li');
    ulEl.appendChild(list);

    let h2El = document.createElement('h2');
    list.appendChild(h2El);
    h2El.id = 'h2';
    h2El.textContent = i+1 ;
    let h3El = document.createElement('h3');
    list.appendChild(h3El);
    h3El.id = 'h3';
    h3El.textContent = feedbackArr[i].name;

    let pEl = document.createElement('p');
    pEl.id = 'textP';
    list.appendChild(pEl);
    pEl.textContent = feedbackArr[i].feedback;
  }
}
render();
form.addEventListener('submit', handleFeedback);
function handleFeedback(event) {
  event.preventDefault();
  let zaid = event.target.name.value;
  let asia = event.target.feedback.value;
  new Feedback(zaid, asia);
  saving();
  render();
  location.reload();
}
function saving() {
  let userNameLs = JSON.stringify(feedbackArr);
  localStorage.setItem('feedback', userNameLs);
}
function gettingData() {
  let getFeed = localStorage.getItem('feedback');
  feedbackArr = JSON.parse(getFeed);
}