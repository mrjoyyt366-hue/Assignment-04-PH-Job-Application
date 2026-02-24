let interviewList = [];
let rejectList = [];
let currentStatus = "all-filter-btn";

// for total, interview, reject and available count get
const totalCount = document.getElementById('total');
const interviewCount = document.getElementById('interview-count');
const rejectedCount = document.getElementById('reject-count');
const availableCount= document.getElementById('available-count');



//get all btn-filter for toggle function
const allFilterBtn = document.getElementById("all-filter-btn");
const interviewBtn = document.getElementById("interview-btn");
const rejectedBtn = document.getElementById("rejected-btn");

// get main tag for event delegation
const mainContainer = document.querySelector('main');

// get filter section 
const filterJobCardSection = document.getElementById('filter-job-cards');

// get card main section 
const cardsSection = document.getElementById('card');

function calculateCount() {
    totalCount.innerText = cardsSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectList.length;

    const availableTotal = cardsSection.children.length;
    

    if (currentStatus === 'interview-btn') {
        
        availableCount.innerText = interviewList.length + ` of ${availableTotal} job`;
    } 
    else if (currentStatus === 'rejected-btn') {
        
        availableCount.innerText = rejectList.length + ` of ${availableTotal} job`;
    } 
    else if(currentStatus === 'all-filter-btn'){
        
        availableCount.innerText = cardsSection.children.length + ' Jobs';
    }

// no jobs part
    const noJobView = document.getElementById('no-jobs-view');

    if (currentStatus === 'interview-btn' && interviewList.length === 0) {
        noJobView.classList.remove('hidden');
    } 
    else if (currentStatus === 'rejected-btn' && rejectList.length === 0) {
        noJobView.classList.remove('hidden');
    } 
    else if (currentStatus === 'all-filter-btn' && cardsSection.children.length === 0) {
        noJobView.classList.remove('hidden'); 
    }
    else {
        noJobView.classList.add('hidden'); 
    }

}
calculateCount()

 
   
// machine btn toggle click function
function toggleClick(id) {
    allFilterBtn.classList.remove('btn-primary')
    interviewBtn.classList.remove('btn-primary')
    rejectedBtn.classList.remove('btn-primary')

    allFilterBtn.classList.add('btn')
    interviewBtn.classList.add('btn')
    rejectedBtn.classList.add('btn')

    const selectedBtn = document.getElementById(id);

    selectedBtn.classList.add('btn-primary');
    
    currentStatus = id
    


    if (id == 'interview-btn') {
        cardsSection.classList.add('hidden');
        filterJobCardSection.classList.remove('hidden')
        renderInterviewSec();
    }
    else if (id == 'all-filter-btn') {
        cardsSection.classList.remove('hidden')
        filterJobCardSection.classList.add('hidden')


    }
    else if (id == 'rejected-btn') {
        cardsSection.classList.add('hidden');
        filterJobCardSection.classList.remove('hidden')
        renderRejectedSec();
    }
    calculateCount();
}