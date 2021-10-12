const img='https://picsum.photos/200'

console.log('hu')
 const imgBox=document.querySelector('.imgBox')
 const whiteBoxes=document.getElementsByClassName('whiteBox')

 imgBox.addEventListener('dragstart',()=>{
     console.log('11object')
 })
 
 imgBox.addEventListener('dragend',()=>{
     console.log('100object')
 })

 for (  const whitebox of whiteBoxes) {
     whitebox.addEventListener('dragover',(e)=>{
         e.preventDefault()
     })
     whitebox.addEventListener('dragover',()=>{

     })
     whitebox.addEventListener('dragover',()=>{

     })
     whitebox.addEventListener('drop',(e)=>{
e.target.append(imgBox)
     })
 }