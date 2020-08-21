$(document).ready(function () {
  var conf = false;
  $("button").on("click", function () {
    var pkCultivo = $("#pk_cultivo").text();
    $.ajax({
      url: "/set-cultivo/",
      type: "POST",
      data: { pk: pkCultivo, conf: conf },
      dataType: "json",
    })
      .done(function (data) {
        $("#fail-alert").hide();
        console.log(data);
        $("#done-alert").show();
      })
      .fail(function (data) {
        $("#fail-alert").show();
        conf = true;
      });
  });
});
