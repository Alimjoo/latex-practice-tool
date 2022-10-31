function PrintElem()
{
    var mywindow = window.open('', 'PRINT', 'height=400,width=600');

    // mywindow.document.write('<html><head><title>' + document.title  + '</title>');
    // mywindow.document.write('</head><body >');
    // mywindow.document.write('<h1>' + document.title  + '</h1>');
    // mywindow.document.write(document.querySelector('').innerHTML);
    mywindow.document.write(`
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSS -->
    <link rel="stylesheet" href="index.css">
  
    <!-- JS -->
    <script src="index.js"></script>
    <script type="text/x-mathjax-config">
    MathJax.Hub.Config({"HTML-CSS": { preferredFont: "TeX", availableFonts: ["STIX","TeX"], linebreaks: { automatic:true }, EqnChunk: (MathJax.Hub.Browser.isMobile ? 10 : 50) },
        tex2jax: { inlineMath: [ ["$", "$"], ["\\\\(","\\\\)"] ], displayMath: [ ["$$","$$"], ["\\[", "\\]"] ], processEscapes: true, ignoreClass: "tex2jax_ignore|dno" },
        TeX: {
            extensions: ["begingroup.js"],
            noUndefined: { attributes: { mathcolor: "red", mathbackground: "#FFEEEE", mathsize: "90%" } }, 
            Macros: { href: "{}" } 
        },
        messageStyle: "none",
        styles: { ".MathJax_Display, .MathJax_Preview, .MathJax_Preview > *": { "background": "inherit" } },
        SEEditor: "mathjaxEditing"
  });
  </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-AMS_HTML-full"></script>
  
    <script>
      var Preview = {
        delay: 10,        // delay after keystroke before updating
        preview: null,     // filled in by Init below
        buffer: null,      // filled in by Init below
        timeout: null,     // store setTimout id
        mjRunning: false,  // true when MathJax is processing
        mjPending: false,  // true when a typeset has been queued
        oldText: null,     // used to check if an update is needed
        //
        //  Get the preview and buffer DIV's
        //
        Init: function () {
          this.preview = document.getElementById("MathPreview");
          this.buffer = document.getElementById("MathBuffer");
        },
        //
        //  Switch the buffer and preview, and display the right one.
        //  (We use visibility:hidden rather than display:none since
        //  the results of running MathJax are more accurate that way.)
        //
        SwapBuffers: function () {
          var buffer = this.preview, preview = this.buffer;
          this.buffer = buffer; this.preview = preview;
          buffer.style.visibility = "hidden"; buffer.style.position = "absolute";
          preview.style.position = ""; preview.style.visibility = "";
        },
        //
        //  This gets called when a key is pressed in the textarea.
        //  We check if there is already a pending update and clear it if so.
        //  Then set up an update to occur after a small delay (so if more keys
        //    are pressed, the update won't occur until after there has been 
        //    a pause in the typing).
        //  The callback function is set up below, after the Preview object is set up.
        //
        Update: function () {
          if (this.timeout) { clearTimeout(this.timeout) }
          this.timeout = setTimeout(this.callback, this.delay);
        },
        //
        //  Creates the preview and runs MathJax on it.
        //  If MathJax is already trying to render the code, return
        //  If the text hasn't changed, return
        //  Otherwise, indicate that MathJax is running, and start the
        //    typesetting.  After it is done, call PreviewDone.
        //  
        CreatePreview: function () {
          Preview.timeout = null;
          if (this.mjPending) return;
          var text = document.getElementById("MathInput").value;
          if (text === "") {
            text = document.getElementById("MathInput").placeholder;
          }
          if (text === this.oldtext) return;
          if (this.mjRunning) {
            this.mjPending = true;
            MathJax.Hub.Queue(["CreatePreview", this]);
          } else {
            this.buffer.innerHTML = this.oldtext = text;
            this.mjRunning = true;
            MathJax.Hub.Queue(
              ["Typeset", MathJax.Hub, this.buffer],
              ["PreviewDone", this]
            );
          }
        },
        //
        //  Indicate that MathJax is no longer running,
        //  and swap the buffers to show the results.
        //
        PreviewDone: function () {
          this.mjRunning = this.mjPending = false;
          this.SwapBuffers();
        }
      };
      //
      //  Cache a callback to the CreatePreview action
      //
      Preview.callback = MathJax.Callback(["CreatePreview", Preview]);
      Preview.callback.autoReset = true;  // make sure it can run more than once
      Preview.Update();
    </script>
    <style>
    #MathPreview, #MathBuffer, body{
        height:auto !important;
    }
    @media print {
        @page { margin: 0; }
        body { 
            margin: 1.6cm; 
            -webkit-print-color-adjust: exact;
        }
        
      }
    </style>
    `);
    mywindow.document.write(document.querySelector('#Output').innerHTML);
    // mywindow.document.write('</body></html>');
    // mywindow.document.querySelector('#MathPreview').style.height="auto";

    // mywindow.document.close(); // necessary for IE >= 10
    // mywindow.focus(); // necessary for IE >= 10*/

    setTimeout(function(){
        mywindow.document.querySelector('#print').style.display="none";
        mywindow.print();
        mywindow.close();
    }, 1000);
    // mywindow.print();
    // mywindow.close();


    // mywindow.addEventListener("load", function() {
    //     mywindow.document.close(); // necessary for IE >= 10
    //     mywindow.focus(); // necessary for IE >= 10*/
    //     mywindow.print();
    //     mywindow.close();
    // })
    return true;
}

