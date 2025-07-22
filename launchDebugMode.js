function debugInit() {
  document.getElementById("portalDebugView").innerHTML = `
    <div style="padding: 1rem; background-color: black; color: white;"><b>DEBUG VIEWER</b></div>
    <div>
      <br><br>
      <p><b>choose a folder to download</b></p>
      <br>
      <div style="margin: 0 auto;">
        <button onclick="dlDebug(this.innerText)">Desktop</button>
        <button onclick="dlDebug(this.innerText)">Documents</button>
        <button onclick="dlDebug(this.innerText)">Downloads</button>
        <button onclick="dlDebug(this.innerText)">Music</button>
        <button onclick="dlDebug(this.innerText)">Pictures</button>
        <!-- <button onclick="dlDebug(this.innerText)">Videos</button> -->
      </div>
    </div>
  `;
}