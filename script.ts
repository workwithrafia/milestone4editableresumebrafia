//Listening Element

document.getElementById(`resumeForm`)?.addEventListener(`submit`,function(event){
    event.preventDefault();

    const nameElement =document.getElementById(`name`) as HTMLTextAreaElement;
    const emailElement =document.getElementById(`email`)  as HTMLTextAreaElement;
    const phoneElement =document.getElementById(`phone`) as HTMLTextAreaElement; 
    const educationElement =document.getElementById(`education`) as HTMLTextAreaElement;
    const experienceElement =document.getElementById(`experience`) as HTMLTextAreaElement;
    const skillsElement =document.getElementById(`skills`) as HTMLTextAreaElement;


    if(nameElement && emailElement && phoneElement && educationElement && experienceElement &&  skillsElement) {
     const name = nameElement.value;
     const email = emailElement.value;
     const phone = phoneElement.value;
     const education = educationElement.value;
     const experience = experienceElement.value;
     const skills =skillsElement.value;

// create resumeOutput
const resumeOutput =`
<h2>Resume</h2>
<p><strong>Name:</strong> <span class="editable"> ${name} </span> </p>
<p><strong>Email:</strong> <span class="editable"> ${email} </span> </p>
<p><strong>Phone Number:</strong> <span class="editable"> ${phone} </span> </p>

<h3>Education</h3>
<p  class="editable"> ${education}</p>

<h3>Experience</h3>
<p class="editable"> ${experience}</p>

<h3>Skills</h3>
<p class="editable"> ${skills}</p>
`;


    const resumeOutputElement =document.getElementById(`resumeOutput`);
    if(resumeOutputElement){
    resumeOutputElement.innerHTML=resumeOutput;
    makeEditable();
    
    }

    }else{
        console.error(`one or more output elements are missing`)
    }

});

function makeEditable() {
    const editableElements = document.querySelectorAll(`.editable`);
    editableElements.forEach(element =>{
        element.addEventListener(`click`,function() {
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent ||"";
        

            if(currentElement.tagName === "P"||currentElement.tagName ==="SPAN"){
           const input = document.createElement('input');
           input.type= 'text'
           input.value= currentValue
           input.classList.add('editing-input')

           input.addEventListener (`blur`,function(){
            currentElement.textContent = input.value;
            currentElement.style.display = 'inline'
            input.remove()
           });



           currentElement.style.display='none'
           currentElement.parentNode?.insertBefore(input,currentElement)
           input.focus()
            }
        });
    })
};
