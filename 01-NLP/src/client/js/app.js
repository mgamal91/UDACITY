export function generateFn(event) {
    const myURL = document.getElementById('myURL').value;
    const loadState = document.getElementById('loadState');
    loadState.textContent = "Loading Please Wait!";
    if (myURL == '') {
        window.alert('You Have To Enter a URL!');
    } else {
        if (Client.urlChecker(myURL)) {
            console.log("Valid URL->Process");
            let options = {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                headers: {
                    'Content-Type': 'application/json'
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                //want the data body to be sent as JSON, i want the JS object data to be made into JSON string
                body: JSON.stringify({ myURL: myURL }) // body data type must match "Content-Type" header
            };
            fetch("http://localhost:3000/api", options)
                .then(res => res.json())
                .then(res => {
                    console.log(res);
                    return res;
                })
                //Update UI
                .then(res => {
                    loadState.textContent = "Loaded Successfully!";
                    document.getElementById('scoreTag').innerHTML = res.score_tag;
                    document.getElementById('agreement').innerHTML = res.agreement;
                    document.getElementById('subjectivity').innerHTML = res.subjectivity;
                    document.getElementById('confidence').innerHTML = res.confidence;
                    document.getElementById('irony').innerHTML = res.irony;
                    document.getElementById('status').innerHTML = res.status.msg;
                });
        } else {
            console.log('BAD URL->Stop')
        }
    }

}