$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");
  var note = $("#note");
  var noteTimer;

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
    note.removeClass("show");
    clearTimeout(noteTimer);
    noteTimer = setTimeout(function () {
      note.addClass("show");
    }, 10000);
  }

  function close() {
    envelope.addClass("close").removeClass("open");
    note.removeClass("show");
    clearTimeout(noteTimer);
  }
});
