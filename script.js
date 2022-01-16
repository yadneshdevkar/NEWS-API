// 6c17a585608d424eb93f69dce5f3540e

let news_accordion = document.getElementById('news')
// console.log(news_accordian)

// Create an xml request
let xhr = new XMLHttpRequest()

// Stored api key n soucres in variables
let api_key = '6c17a585608d424eb93f69dce5f3540e';
let sources = 'techcrunch';

// Get data from this url
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${sources}&apiKey=${api_key}`, true)

xhr.onload = function () {

    if (this.status === 200) {

        //    console.log(this.responseText)
        let json_obj = JSON.parse(this.responseText)
        //    console.log(json_obj);
        let arr = json_obj['articles']
        let headlines = '';

        arr.forEach(function (element, index) {

            let news1 =
                `<div class="card my-3">
                              <div class="card-header" id="heading${index}">
                                <h5 class="mb-0">
                                 <b>Breaking news no. ${index + 1}</b>  
                                 
                                 <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                                     ${element['title']}
                                     <span class='mx-3 '><a href="${element['url']}"  target="_blank">Read more</a></span>
                                  </button>
                                 
                                </h5>
                              </div>
                          
                              <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#news">
                                <div class="card-body">
                                     ${element['content']}
                            

                                </div>
                              </div>
                            </div>`
            headlines += news1;


        });

        news_accordion.innerHTML = headlines;

        let shortnews = document.getElementById("shortnews")
        let short = ''

        let author = document.getElementById('author')

        author.addEventListener('click', Display)

        function Display() {

            arr.forEach(function (element, index) {
                let news2 =
                    `<hr><p>
            <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                Author-${index + 1}
            </a>
          
          </p>
          <div class="collapsed" id="collapseExample">
            <div class="card card-body">
            ${element['author']}
          </div>`

                short += news2;

            });

            shortnews.innerHTML = short;
        }
    }
    else {

        console.log(" Sorry Error", this.status)
    }
}

xhr.send()
