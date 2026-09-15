

let Myleads=["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl=document.getElementById("input-el")
const inputbtn=document.getElementById('input-btn')
const ulEl=document.getElementById("ul-el")

// DOM manipulation comes at a cost, which is why we added all items to the string and manipulated DOM only once.

inputbtn.addEventListener("click",function (){
	Myleads.push(inputEl.value)
	inputEl.value=""
	renderLeads()
})

function renderLeads(){
	let listItems=""
	for (let i=0;i<Myleads.length;i++){
		// listItems+="<li><a target='_blank' href='"+Myleads[i]+"'>"+Myleads[i] +"</a></li>"
		listItems+=`<li>
		<a target='_blank' href='${Myleads[i]}'>${Myleads[i]}</a>
		</li>`
	}
	ulEl.innerHTML=listItems
}
