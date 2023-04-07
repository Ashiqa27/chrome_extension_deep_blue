document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("redirect").addEventListener("click", function() {
    chrome.tabs.update({url: "https://ashiqa27-final-deep-blue-stm64-ly8843.streamlit.app/"});
  });
});
