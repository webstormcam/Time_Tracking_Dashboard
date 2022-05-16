let json_doc = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]


  console.log(json_doc[0]['timeframes']['daily'])
let picked;

let choices = document.querySelectorAll('.choice');
// let work_large = document.getElementById('work-hours')
let large = document.querySelectorAll('.large');
let work_small = document.querySelectorAll('.small_hours');

let lower_Section = document.querySelectorAll('.lower-section');


  for(i = 0; i<choices.length;i++){
    choices[i].addEventListener("click",function(e){
        for(i=0; i<choices.length;i++){
            choices[i].classList.remove('click');
        }

        this.classList.add('click');
        console.log(this.innerHTML)

        for(let i=0;i<large.length;i++){
          large[i].innerHTML = json_doc[i]['timeframes'][this.innerHTML.toLowerCase()]['current']+'hrs'
        }

        for(let i=0; i<work_small.length;i++){
         let short_Time ='';
          if(this.innerHTML.toLowerCase()==='daily'){
            short_Time='Yesterday'
          } else if(this.innerHTML.toLowerCase()==='weekly'){
            short_Time='Last Week'
          } else{
            short_Time ='Last Month'
          }
         
          work_small[i].innerHTML = `${short_Time} - ${json_doc[i]['timeframes'][this.innerHTML.toLowerCase()]['previous']}hrs`
        }
        
    

        

      });
  }
  
  for(i=0;i<lower_Section.length;i++){
    lower_Section[i].addEventListener('mouseover',function(){
      for(i=0; i<lower_Section.length;i++){
        lower_Section[i].classList.remove('grey');
    }
    this.classList.add('grey');
    })
  }

  for(i=0;i<lower_Section.length;i++){
    lower_Section[i].addEventListener('mouseout',function(){
      this.classList.remove('grey')
    })
  }
  

    