// document.getElementById('removeButton').addEventListener('click', () => {
//     const className = document.getElementById('className').value;
//     chrome.scripting.executeScript({
//       target: { tabId: tab.id },
//       function: removeElementsByClass,
//       args: [className]
//     });
//   });
  
//   function removeElementsByClass(className) {
//     const elements = document.getElementsByClassName(className);
//     for (let i = 0; i < elements.length; i++) {
//       elements[i].remove();
//     }
//   }
document.getElementsByClassName('navbar').style.display = 'none'

console.log('hello,world')

  