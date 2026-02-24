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
    
    // get the clicked btn
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

// main container event delegation
mainContainer.addEventListener('click', function (event) {
    
    
    if (event.target.classList.contains('card-interview-btn')) {

        const parentNode = event.target.parentNode.parentNode;
        const companyName = parentNode.querySelector('.company-name').innerText;
        const postOfJob = parentNode.querySelector('.post-of-job').innerText;
        const facilities = parentNode.querySelector('.facilities').innerText;
        const applicationStatus = 'Interviewed'
        const responsibilites = parentNode.querySelector('.responsibilites').innerText;
        


        const cardsInformation = {
            companyName,
            postOfJob,
            facilities,
            applicationStatus,
            responsibilites
        }
        parentNode.querySelector('.application-status').innerText = 'Interviewed';
        parentNode.querySelector('.application-status').classList.add('btn-success');
        
        const cardNameExist = interviewList.find(item => item.companyName == cardsInformation.companyName);


        if (!cardNameExist) {
            interviewList.push(cardsInformation);
        }
        rejectList = rejectList.filter(item => item.companyName != cardsInformation.companyName);
         if (currentStatus == 'rejected-btn') {
            renderRejectedSec()
        }
        calculateCount()
    }

    else if (event.target.classList.contains('card-reject-btn')) {

        const parentNode = event.target.parentNode.parentNode;
        const companyName = parentNode.querySelector('.company-name').innerText;
        const postOfJob = parentNode.querySelector('.post-of-job').innerText;
        const facilities = parentNode.querySelector('.facilities').innerText;
        const applicationStatus = "Rejected";
        const responsibilites = parentNode.querySelector('.responsibilites').innerText;


        const cardsInformation = {
            companyName,
            postOfJob,
            facilities,
            applicationStatus,
            responsibilites
        }

        
        const cardNameExist = rejectList.find(item => item.companyName == cardsInformation.companyName);

        parentNode.querySelector('.application-status').innerText = 'Rejected'
        parentNode.querySelector('.application-status').classList.add('btn-error')
        if (!cardNameExist) {
            rejectList.push(cardsInformation);
        }
        interviewList = interviewList.filter(item => item.companyName != cardsInformation.companyName);
        if (currentStatus == 'interview-btn') {
            renderInterviewSec()
        }
        calculateCount()
    }

    // for delete trash icon btn
     else if (event.target.closest('.deleted-btn')) {
    const cardWrapper = event.target.closest('.cards-container');

    if (cardWrapper) {
        const companyName = cardWrapper.querySelector('.company-name').innerText;
       
        cardWrapper.remove();
        interviewList = interviewList.filter(item => item.companyName !== companyName);
        rejectList = rejectList.filter(item => item.companyName !== companyName);
    }
     
   }
   calculateCount();

})



// interview render
function renderInterviewSec() {
    availableCount.innerText = interviewList.length + " jobs";
    filterJobCardSection.innerHTML = '';
    
    

    for (let interview of interviewList) {
        let div = document.createElement('div')
        div.className = "cards-container p-6 bg-base-100 rounded-[10px] mb-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-green-400 border-2 border-transparent cursor-pointer"
        const statusColorClass = interview.applicationStatus === 'Interviewed' ? 'btn-success text-white' : '';
        div.innerHTML = `
       <div class="flex justify-between">
                    <div class="space-y-5">
                        <div class="job-content ">
                            <div>
                                <h2 class="company-name text-xl font-medium text-[#002C5C] ">${interview.companyName}</h2>
                                <p class="post-of-job  text-[#64748B]">${interview.postOfJob}</p>
                            </div>
                            <p class="facilities  text-[#64748B] pt-4">${interview.facilities}</p>
                        </div>
                        <div>
                            <p class="application-status  btn font-bold text-[#64748B] ${statusColorClass}">${interview.applicationStatus}</p>
                            <p class="responsibilites text-[14px] text-[#323B49] pt-1.5">${interview.responsibilites}</p>
                        </div>
                        <div class="flex gap-4">
                            <button
                                class="card-interview-btn btn btn-outline btn-success py-2 px-3 font-bold ">Interview</button>
                            <button
                                class="card-reject-btn btn btn-outline btn-error py-2 px-3 font-bold ">Rejected</button>
                        </div>
                    </div>
                    <div>
                        <button id="deleted-btn"><i class="fa-regular fa-trash-can"></i></button>
                    </div>
                </div>
        `
        filterJobCardSection.appendChild(div)   
    }
}

// reject render
function renderRejectedSec() {
    availableCount.innerText = rejectList.length + " jobs";
    filterJobCardSection.innerHTML = '';
    
    for (let reject of rejectList) {
        let div = document.createElement('div')
        div.className = "cards-container p-6 bg-base-100 rounded-[10px] mb-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-red-400 border-2 border-transparent cursor-pointer"
        const statusColorClass = reject.applicationStatus === 'Rejected' ? 'btn-error text-white' : '';
        div.innerHTML = `
       <div class="flex justify-between">
                    <div class="space-y-5">
                        <div class="job-content ">
                            <div>
                                <h2 class="company-name text-xl font-medium text-[#002C5C] ">${reject.companyName}</h2>
                                <p class="post-of-job  text-[#64748B]">${reject.postOfJob}</p>
                            </div>
                            <p class="facilities  text-[#64748B] pt-4">${reject.facilities}</p>
                        </div>
                        <div>
                            <p class="application-status  btn font-bold text-[#64748B] ${statusColorClass}">${reject.applicationStatus}</p>
                            <p class="responsibilites text-[14px] text-[#323B49] pt-1.5">${reject.responsibilites}</p>
                        </div>
                        <div class="flex gap-4">
                            <button
                                class="card-interview-btn btn btn-outline btn-success py-2 px-3 font-bold ">Interview</button>
                            <button
                                class="card-reject-btn btn btn-outline btn-error py-2 px-3 font-bold ">Rejected</button>
                        </div>
                    </div>
                    <div>
                        <button id="deleted-btn"><i class="fa-regular fa-trash-can"></i></button>
                    </div>
                </div>
        `

        filterJobCardSection.appendChild(div)
        
    }
    
}






