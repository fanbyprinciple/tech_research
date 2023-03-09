chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message, sender, sendResponse) {
  if (message.txt === "hello") {
    var selection = window.getSelection();
    alert(selection);
    boldText(selection);
  }
}

function boldText(selection) {
  alert(selection);
  selection = selection.toString().bold();
  return false;
}