let d = new Date();

/* Global Variables */


const apiKey = '&appid=16a7b7a8714156bc0edc543f70988eaa&units=imp';
let baseURL = 'http://api.openweathermap.org/data/2.5/forecast?zip=';



const dateEl = document.getElementById('date');
const tempEl = document.getElementById('temp');
const contentEl = document.getElementById('content');


// Event listener to add function to existing HTML DOM element

document.getElementById('generate').addEventListener('click', performAction);

//function submit
function performAction(e){
    const zipCodeEl = document.getElementById('zip').value;
    const feelingsEl = document.getElementById('feelings').value;
    getData(baseURL, zipCodeEl, apiKey)
        .then(function(data) {
             console.log(data);
             postData('/addData', {date:d, temp:data.list[0].main.temp, content:feelingsEl})
             updateUI();
    })
}

    const getData = async (baseURL, zip, key) => {
        const response = await fetch(baseURL + zip + key)
        try {
            const data = await response.json();
            return data;
          }  catch(error) {
            console.log("error", error);
          }
    }




//post data saving

const postData = async ( url = '', data = {})=>{
    console.log(data)
    const response = await fetch( url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {'content-Type': 'application/json', 
    },
        body: JSON.stringify(data)
    });
    try{
        const newData = await response.json();
        console.log(newData);
        return newData
    }catch(error){
        console.log("error",error);
    }
}


//update
async function updateUI(){
    const request = await fetch('/allData');
    try{
        const allInfo = await request.json();
           dateEl.innerHTML = `Date is: ${allInfo.date}`;
           tempEl.innerHTML = `Temp is: ${allInfo.temp}`;
           contentEl.innerHTML = `My feelings is: ${allInfo.content}`;
    }catch(error){
        console.log("error",error);
    }
}




// let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();