function isPortalDebug() {
  let portalDebug = new URLSearchParams(window.location.search).get("portalDebug");
  if (portalDebug == 1) { document.getElementById("portalDebugView").setAttribute("style", "display: block;"); }
}

function dlNow(arg) {
  let dl;
  switch (arg) {
    case "cGFyYWdvbnRvb2xzemlw":
      dl = Object.assign(document.createElement("a"), {
        href: `./paragontools_src/${arg}`,
        rel: "noopener noreferrer",
        download: "paragontoolsv2.zip",
      });
      dl.click();
      dl.remove();
      return;
    case "cGFyYWdvbnRvb2xzZmlsZQ==":
      fetch(`./paragontools_src/${decodeURIComponent(arg)}`).then((response) => response.text()).then((htmlContent) => {
          dl = document.createElement("a");
          dl.href = URL.createObjectURL(new Blob([htmlContent], { type: "text/html" }));
          dl.download = "paragontoolsv2.html";
          dl.click();
          URL.revokeObjectURL(dl.href);
          dl.remove();
        });
      return;
    default:
      throw new Error("undefined");
  }
}

function dlDebug(folder) {
  let dl = Object.assign(document.createElement("a"), {
    href: `./zip/edwhonti_${folder}.zip` ,
    rel: "noopener noreferrer",
    download: `edwhonti_${folder}.zip`,
  });
  dl.click();
  dl.remove();
}