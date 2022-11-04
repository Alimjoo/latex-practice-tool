function toggleRTL(){
  var place_holder = document.querySelector("textarea");
  var to_right = document.querySelector('#outputLatex');
  var dir = to_right.getAttribute("dir");
  if(dir == "ltr"){
    to_right.setAttribute("dir", "rtl");
    // place_holder.setAttribute("dir", "rtl");
    to_right.style.fontFamily="chiwer kesme";
    place_holder.style.fontFamily="Menlo, Monaco, monospace, Ukij Tor";
    place_holder.setAttribute("placeholder", `قۇر ئىچىدىكى فورمىلا : $e^{i\\pi} + 1 = 0$ 
<br> 
قۇر تېشىدىكى فورمىلا : $$ e^{i\\pi} + 1 = 0 $$`);
  }
  else {
      to_right.setAttribute("dir", "ltr");
      // place_holder.setAttribute("dir", "ltr");
      to_right.style.fontFamily="Computer Modern";
      place_holder.style.fontFamily="Menlo, Monaco, 'Courier New', monospace";
      place_holder.setAttribute("placeholder", `行内公式 : $e^{i\\pi} + 1 = 0$ 
<br>
居中公式 : $$ e^{i\\pi} + 1 = 0 $$`);
  }
  Preview.Update();
};