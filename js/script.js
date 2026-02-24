let interviewList = [];
let rejectList = [];

const totalCount = document.getElementById('total');
const interviewCount = document.getElementById('interview-count');
const rejectedCount = document.getElementById('reject-count');

const cardsSection = document.getElementById('card');

function calculateCount(){
    totalCount.innerText = cardsSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectList.length;
}
calculateCount()