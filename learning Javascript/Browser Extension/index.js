

let Myleads=[]
const inputEl=document.getElementById("input-el")
const inputbtn=document.getElementById('input-btn')
const ulEl=document.getElementById("ul-el")
const deletebtn=document.getElementById('delete-btn')
const tabBtn=document.getElementById("tab-btn")

const leadsFromLocalStorage=JSON.parse(localStorage.getItem("Myleads"))
if(leadsFromLocalStorage){
	Myleads=leadsFromLocalStorage
	render(Myleads)
}

function render(leads){
// DOM manipulation comes at a cost, which is why we added all items to the string and manipulated DOM only once.
	let listItems=""
	for (let i=0;i<leads.length;i++){
		// listItems+="<li><a target='_blank' href='"+Myleads[i]+"'>"+Myleads[i] +"</a></li>"
		listItems+=`<li>
		<a target='_blank' href='${leads[i]}'>${leads[i]}</a>
		</li>`
	}
	ulEl.innerHTML=listItems
}

tabBtn.addEventListener("click",function(){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		Myleads.push(tabs[0].url)
		localStorage.setItem("Myleads",JSON.stringify(Myleads))
		render(Myleads)
    })
	
})

inputbtn.addEventListener("click",function (){
	Myleads.push(inputEl.value)
	inputEl.value=""
	localStorage.setItem("Myleads",JSON.stringify(Myleads))
	render(Myleads)
})
deletebtn.addEventListener("dblclick",function(){
	localStorage.clear()
	Myleads=[]
	render(Myleads)
})




