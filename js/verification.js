personalInfo = document.querySelector(".verification .container .personalInfo")

nextStep = document.querySelector(".verification .nextStep")

inputs = document.querySelectorAll(".verification form input")

spanName = document.querySelector(".verification .required .rname")

spanEmail = document.querySelector(".verification .required .remail")

spanPhone = document.querySelector(".verification .required .rphone")

nam = document.querySelector(".verification form .name")

email = document.querySelector(".verification form .email")

phone = document.querySelector(".verification form .phone")

nextStep.addEventListener("click",(e)=> {

    if(spanPhone.classList.contains("finished") && spanEmail.classList.contains("finished") && spanName.classList.contains("finished") ) {
        
        personalInfo.style.display = "none" 

        plans.style.display = "block" 
    }
    if(spanPhone.classList.contains("finished") && spanEmail.classList.contains("finished") && spanName.classList.contains("finished") ) {
    circle.forEach((e)=> {
        e.classList.remove("active")
    })
    num2.classList.add("active")
}
})

//when bluring an input focus on the next one
nam.onblur = function () {
    if (email.value === "") { 
        email.focus() 
    }
    // if the input is filled remove the "this field is required statment"
    let namRE = /[a-zA-Z]+(\s\w+)?/ 

    let validationnam = namRE.test(nam.value) 

    if (validationnam === true) {

        spanName.style.opacity = 0

        spanName.classList.add("finished")

    }else {
        spanName.style.opacity = 1
        spanName.classList.remove("finished")

    }
    if(spanPhone.classList.contains("finished") && spanEmail.classList.contains("finished") && spanName.classList.contains("finished") ) {
        nextStep.style.opacity = 1 

        nextStep.style.cursor = "pointer" 
    }

}

email.onblur = function () {
    if (phone.value === "")  {    
        phone.focus() 
    }
        // if the input is filled remove the "this field is required statment"
        let emailRE = /\w+(.\w+)?@(yahoo|gmail).(com|net|org)/ 

        let validationemail = emailRE.test(email.value) 

        if (validationemail === true) {
            spanEmail.style.opacity = 0 
            spanEmail.classList.add("finished")

    
        }else {
            spanEmail.style.opacity = 1
            
            spanEmail.classList.remove("finished")

        }
        if(spanPhone.classList.contains("finished") && spanEmail.classList.contains("finished") && spanName.classList.contains("finished") ) {
            nextStep.style.opacity = 1 

            nextStep.style.cursor = "pointer" 

        }
}
phone.onblur = function () {
        nextStep.focus() 
            // if the input is filled remove the "this field is required statment"

    let phoneRE = /01\d{9}/ 

    let validationPhone = phoneRE.test(phone.value) 

    if (validationPhone === true) {
        spanPhone.style.opacity = 0 

        spanPhone.classList.add("finished")


    }else {
        spanPhone.style.opacity = 1

        spanPhone.classList.remove("finished")

    }

    if(spanPhone.classList.contains("finished") && spanEmail.classList.contains("finished") && spanName.classList.contains("finished") ) {
        nextStep.style.opacity = 1 

        nextStep.style.cursor = "pointer" 
    }
    
}

nextplan = document.querySelector(".verification .container .plan  .buttons .nextplan")

back = document.querySelector(".verification .container .plan  .buttons .back")

toggled = document.querySelector(".verification .container .plan  .toggle-switch ")

plans = document.querySelector(".verification .container .plan")

plan = document.querySelectorAll(".verification .container .plan .plans li")

one = document.querySelector(".verification .container .plan .plans .one")

two = document.querySelector(".verification .container .plan .plans .two")

three = document.querySelector(".verification .container  .plan .plans .three")

circle = document.querySelectorAll(".verification .container .circle")

num1 = document.querySelector(".verification .container .step .num1")

num2 = document.querySelector(".verification .container .step .num2")

num3 = document.querySelector(".verification .container .step .num3")

num4 = document.querySelector(".verification .container .step .num4")

ArcadeOrWhat = document.querySelector(".verification .container .finish .sub")

priceOrWhat = document.querySelector(".verification .container .finish .price")


// click on the plan you want to pick it
plan.forEach((li)=>{
    li.addEventListener("click",(e)=>{

        nextplan.classList.add("heClicked")

        nextplan.style.opacity = 1 

        nextplan.style.cursor = "pointer" 

        plan.forEach((li)=>{

            li.classList.remove("chosen")

        })
        e.currentTarget.classList.toggle("chosen")

    })
})

// click the go back button to go to the previous page
back.addEventListener("click",(e)=>{

    personalInfo.style.display = "block" 

    plans.style.display = "none" 

    circle.forEach((e)=> {

        e.classList.remove("active")

    })

    num1.classList.add("active")

})
// control monthly payment or yearly
toggled.onclick = function () {
    toggled.classList.toggle("toggled")
}
let x = 0;

nextplan.addEventListener("click",(e)=> {

    if (nextplan.classList.contains("heClicked")) {

        personalInfo.style.display = "none" 

        plans.style.display = "none" 

        AdOns.style.display = "block" 

        circle.forEach((e)=> {

            e.classList.remove("active")

        })

        num3.classList.add("active")
    }

// see what is the selected plan and add it in the summary

if (one.classList.contains("chosen")) {

    ArcadeOrWhat.innerHTML = "Arcade"

    priceOrWhat.innerHTML = "$9/mo"

x = 9

}else if (two.classList.contains("chosen")) {
    
    ArcadeOrWhat.innerHTML = "advanced"

    priceOrWhat.innerHTML = "$12/mo"

  x = 12

}else if (three.classList.contains("chosen")) {

    ArcadeOrWhat.innerHTML = "pro"

    priceOrWhat.innerHTML = "$15/mo"

x = 15
}
})
nextplan2 = document.querySelector(".verification .container .AdOns  .buttons .nextplan")

back2 = document.querySelector(".verification .container .AdOns .buttons .back")

AdOns = document.querySelector(".verification .container .AdOns")

AD = document.querySelectorAll(".verification .container .AdOns li")

n1 = document.querySelector(".verification .container .AdOns .one")

n2 = document.querySelector(".verification .container .AdOns .two")

n3 = document.querySelector(".verification .container .AdOns .three")

n4 = document.querySelector(".verification .container .AdOns .four")

r1 = document.querySelector(".verification .container .finish .r1")

r2 = document.querySelector(".verification .container .finish .r2")

r3 = document.querySelector(".verification .container .finish .r3")


// click on the plan you want to pick it
AD.forEach((li)=>{
    li.addEventListener("click",(e)=>{

        nextplan2.classList.add("heClicked")

        nextplan2.style.opacity = 1 

        nextplan2.style.cursor = "pointer" 

        e.currentTarget.classList.toggle("chosen")
    })
})

// click the go back button to go to the previous page
back2.addEventListener("click",(e)=>{

    personalInfo.style.display = "none" 

    plans.style.display = "block" 

    AdOns.style.display = "none" 

    circle.forEach((e)=> {

        e.classList.remove("active")

    })

    num2.classList.add("active")

})


nextplan2.addEventListener("click",(e)=> {

    if (nextplan2.classList.contains("heClicked")) {

        personalInfo.style.display = "none" 

        plans.style.display = "none" 

        AdOns.style.display = "none" 

        finish.style.display = "block" 

        circle.forEach((e)=> {

            e.classList.remove("active")

        })

        num4.classList.add("active")

    }

    // see what is the selected Adons and add it in the summary
if (n1.classList.contains("chosen")) {

    r1.style.setProperty("display","flex","important")

x = x + 1
    
}else {
    r1.style.setProperty("display","none","important")

}
if (n2.classList.contains("chosen")) {

    r2.style.setProperty("display","flex","important")

x = x + 2

}else {
    r2.style.setProperty("display","none","important")

}
if (n3.classList.contains("chosen")) {

    x = x + 2

    r3.style.setProperty("display","flex","important")
    

}else {
    r3.style.setProperty("display","none","important")

}
if (toggled.classList.contains ("toggled")) {

    TotalPerMonth.innerHTML = x

    month.innerHTML = "/mo"
    
}else {
    TotalPerMonth.innerHTML = x * 12

    month.innerHTML = "yearly"
}
})

confirmm = document.querySelector(".verification .container .finish  .buttons .nextplan")

back2 = document.querySelector(".verification .container .finish .buttons .back")

finish = document.querySelector(".verification .container .finish")

change = document.querySelector(".verification .container .finish .change")

fin = document.querySelectorAll(".verification .container .finish li")

thanks = document.querySelector(".verification .container .thanks")

TotalPerMonth = document.querySelector(".verification .container .TotalPerMonth")

month = document.querySelector(".verification .container .month")

// click the go back button to go to the previous page
back2.addEventListener("click",(e)=>{

    personalInfo.style.display = "none" 

    plans.style.display = "none" 

    AdOns.style.display = "block" 

    finish.style.display = "none" 

    circle.forEach((e)=> {

        e.classList.remove("active")

    })
    num3.classList.add("active")

    if (n1.classList.contains("chosen")) {
    x = x - 1
        
    }else {
    
    }
    if (n2.classList.contains("chosen")) {
    x = x - 2
        
    
    }
    if (n3.classList.contains("chosen")) {
        x = x - 2
    }

})


confirmm.addEventListener("click",(e)=> {
    if (nextplan2.classList.contains("heClicked")) {

        personalInfo.style.display = "none" 

        plans.style.display = "none" 

        AdOns.style.display = "none" 

        finish.style.display = "none" 

        thanks.style.display = "block" 
    }

})

// click on change to reassign your arcade mode
change.addEventListener("click",(e)=> {

    personalInfo.style.display = "none" 

    plans.style.display = "block" 

    AdOns.style.display = "none" 

    finish.style.display = "none" 

    thanks.style.display = "none" 

    circle.forEach((e)=> {

        e.classList.remove("active")

    })
    num2.classList.add("active")
})