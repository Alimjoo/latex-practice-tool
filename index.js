function toggleRTL(){
  var place_holder = document.querySelector("textarea");
  var to_right = document.querySelector('#outputLatex');
  var dir = to_right.getAttribute("dir");
  if(dir == "ltr"){
    to_right.setAttribute("dir", "rtl");
    place_holder.setAttribute("dir", "rtl");
    place_holder.setAttribute("placeholder", `قۇر ئىچىدىكى فورمىلا : $e^{i\\pi} + 1 = 0$ 
<br> 
قۇر تېشىدىكى فورمىلا : $$ e^{i\\pi} + 1 = 0 $$`);
  }
  else {
      to_right.setAttribute("dir", "ltr");
      place_holder.setAttribute("dir", "ltr");
      place_holder.setAttribute("placeholder", `行内公式 : $e^{i\\pi} + 1 = 0$ 
<br>
居中公式 : $$ e^{i\\pi} + 1 = 0 $$`);
  }
  Preview.Update();
};

function handleTextDir(){
  var R_Lvalue = document.querySelector('#outputLatex').getAttribute("dir");
  var areaval = document.querySelector("textarea").value;
  var place_holder = document.querySelector("textarea");
  if (areaval == ''){
    if(R_Lvalue == 'rtl'){
      place_holder.setAttribute("dir", "rtl");
    }else{
      place_holder.setAttribute("dir", "auto");
    }
  }else{
    if(R_Lvalue != 'auto'){
      place_holder.setAttribute("dir", "auto");
    }
  }
  Preview.Update();
}