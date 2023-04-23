const tabsArray = Array.from(document.querySelectorAll('#select-tab'))
const contentArray =Array.from(document.querySelectorAll('#select-content'))



tabsArray.forEach(tab=>{
tab.addEventListener('click',()=>{
   target = tab
   tabsArray.forEach(t=>{
    t.classList.remove('bg-[#fae4ca]')
   })
   const currentTab = tabsArray.indexOf(target)
 contentArray.forEach(content=>{
    if(contentArray.indexOf(content) === currentTab){
     content.classList.remove('hidden')
    }else if(contentArray.indexOf(content) !== currentTab){
        content.classList.add('hidden')
    }
 })
   target.classList.add('bg-[#fae4ca]')
})
})