$(document).ready(function () {
  var can_temp_aire_1 = document.getElementById("can_temp_aire_1");
  var chart_temp_aire_1 = new Chart(can_temp_aire_1, {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "Temp (C°)",
          borderColor: ["#28A745"],
          pointColor: ["#28A745"],
          strokeColor: ["#28A745"],
          fillColor: ["#28A745"],
          fill: false,
          data: [],
        },
      ],
      borderWidth: 1,
    },
    options: {
      scales: {
        xAxes: [
          {
            type: "time",
            time: {
              displayFormats: {
                quarter: "h:mm:ss a",
              },
            },
          },
        ],
      },
    },
  });

  function update_temp_aire_1_data(newValue) {
    let data = {
      x: new Date(),
      y: newValue,
    };
    chart_temp_aire_1.data.labels.push(new Date());
    chart_temp_aire_1.data.datasets.forEach((dataset) => {
      dataset.data.push(data);
    });
    chart_temp_aire_1.update();
  }

  function update_temp_aire_1() {
    $.ajax({
      url: "http://iot.laserud.co:8080/3RzhyagiSsL8n5V3LrYs40Sz8kv3UNCa/get/V0",
      type: "GET",
    }).done(function (data) {
      data = parseFloat(data[0], 10);
      let refMax = parseFloat($("#ref_temp_max").text(), 10);
      let refMin = parseFloat($("#ref_temp_min").text(), 10);
      let status = "Normal";
      if (data > refMax || data < refMin) {
        status = "ANORMAL - requiere atención";
      }
      $("#temp_aire_1").text(data + " C°" + "  - " + status);
      update_temp_aire_1_data(data);
    });
  }

  var can_temp_aire_2 = document.getElementById("can_temp_aire_2");
  var chart_temp_aire_2 = new Chart(can_temp_aire_2, {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "Temp (C°)",
          borderColor: ["#28A745"],
          pointColor: ["#28A745"],
          strokeColor: ["#28A745"],
          fillColor: ["#28A745"],
          fill: false,
          data: [],
        },
      ],
      borderWidth: 1,
    },
    options: {
      scales: {
        xAxes: [
          {
            type: "time",
            time: {
              displayFormats: {
                quarter: "h:mm:ss a",
              },
            },
          },
        ],
      },
    },
  });

  function update_temp_aire_2_data(newValue) {
    let data = {
      x: new Date(),
      y: newValue,
    };
    chart_temp_aire_2.data.labels.push(new Date());
    chart_temp_aire_2.data.datasets.forEach((dataset) => {
      dataset.data.push(data);
    });
    chart_temp_aire_2.update();
  }

  function update_temp_aire_2() {
    $.ajax({
      url: "http://iot.laserud.co:8080/3RzhyagiSsL8n5V3LrYs40Sz8kv3UNCa/get/V2",
      type: "GET",
    }).done(function (data) {
      data = parseFloat(data[0], 10);
      let refMax = parseFloat($("#ref_temp_max").text(), 10);
      let refMin = parseFloat($("#ref_temp_min").text(), 10);
      let status = "Normal";
      if (data > refMax || data < refMin) {
        status = "ANORMAL - requiere atención";
      }
      $("#temp_aire_2").text(data + " C°" + "  - " + status);
      update_temp_aire_2_data(data);
    });
  }

  var can_hum_aire_1 = document.getElementById("can_hum_aire_1");
  var chart_hum_aire_1 = new Chart(can_hum_aire_1, {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "Humedad (%)",
          borderColor: ["#28A745"],
          pointColor: ["#28A745"],
          strokeColor: ["#28A745"],
          fillColor: ["#28A745"],
          fill: false,
          data: [],
        },
      ],
      borderWidth: 1,
    },
    options: {
      scales: {
        xAxes: [
          {
            type: "time",
            time: {
              displayFormats: {
                quarter: "h:mm:ss a",
              },
            },
          },
        ],
      },
    },
  });

  function update_hum_aire_1_data(newValue) {
    let data = {
      x: new Date(),
      y: newValue,
    };
    chart_hum_aire_1.data.labels.push(new Date());
    chart_hum_aire_1.data.datasets.forEach((dataset) => {
      dataset.data.push(data);
    });
    chart_hum_aire_1.update();
  }

  function update_hum_aire_1() {
    $.ajax({
      url: "http://iot.laserud.co:8080/3RzhyagiSsL8n5V3LrYs40Sz8kv3UNCa/get/V1",
      type: "GET",
    }).done(function (data) {
      data = parseFloat(data[0], 10);
      let refMax = parseFloat($("#ref_hum_aire_max").text(), 10);
      let refMin = parseFloat($("#ref_hum_aire_min").text(), 10);
      let status = "Normal";
      if (data > refMax || data < refMin) {
        status = "ANORMAL - requiere atención";
      }
      $("#hum_aire_1").text(data + " %" + "  - " + status);
      update_hum_aire_1_data(data);
    });
  }

  var can_hum_aire_2 = document.getElementById("can_hum_aire_2");
  var chart_hum_aire_2 = new Chart(can_hum_aire_2, {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "Humedad (%)",
          borderColor: ["#28A745"],
          pointColor: ["#28A745"],
          strokeColor: ["#28A745"],
          fillColor: ["#28A745"],
          fill: false,
          data: [],
        },
      ],
      borderWidth: 1,
    },
    options: {
      scales: {
        xAxes: [
          {
            type: "time",
            time: {
              displayFormats: {
                quarter: "h:mm:ss a",
              },
            },
          },
        ],
      },
    },
  });

  function update_hum_aire_2_data(newValue) {
    let data = {
      x: new Date(),
      y: newValue,
    };
    chart_hum_aire_2.data.labels.push(new Date());
    chart_hum_aire_2.data.datasets.forEach((dataset) => {
      dataset.data.push(data);
    });
    chart_hum_aire_2.update();
  }

  function update_hum_aire_2() {
    $.ajax({
      url: "http://iot.laserud.co:8080/3RzhyagiSsL8n5V3LrYs40Sz8kv3UNCa/get/V3",
      type: "GET",
    }).done(function (data) {
      data = parseFloat(data[0], 10);
      let refMax = parseFloat($("#ref_hum_aire_max").text(), 10);
      let refMin = parseFloat($("#ref_hum_aire_min").text(), 10);
      let status = "Normal";
      if (data > refMax || data < refMin) {
        status = "ANORMAL - requiere atención";
      }
      $("#hum_aire_2").text(data + " %" + "  - " + status);
      update_hum_aire_2_data(data);
    });
  }

  var can_hum_suelo_1 = document.getElementById("can_hum_suelo_1");
  var chart_hum_suelo_1 = new Chart(can_hum_suelo_1, {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "Humedad (%)",
          borderColor: ["#28A745"],
          pointColor: ["#28A745"],
          strokeColor: ["#28A745"],
          fillColor: ["#28A745"],
          fill: false,
          data: [],
        },
      ],
      borderWidth: 1,
    },
    options: {
      scales: {
        xAxes: [
          {
            type: "time",
            time: {
              displayFormats: {
                quarter: "h:mm:ss a",
              },
            },
          },
        ],
      },
    },
  });

  function update_hum_suelo_1_data(newValue) {
    let data = {
      x: new Date(),
      y: newValue,
    };
    chart_hum_suelo_1.data.labels.push(new Date());
    chart_hum_suelo_1.data.datasets.forEach((dataset) => {
      dataset.data.push(data);
    });
    chart_hum_suelo_1.update();
  }

  function update_hum_suelo_1() {
    $.ajax({
      url: "http://iot.laserud.co:8080/3RzhyagiSsL8n5V3LrYs40Sz8kv3UNCa/get/V4",
      type: "GET",
    }).done(function (data) {
      data = parseFloat(data[0], 10);
      let refMax = parseFloat($("#ref_hum_suelo_max").text(), 10);
      let refMin = parseFloat($("#ref_hum_suelo_min").text(), 10);
      let status = "Normal";
      if (data > refMax || data < refMin) {
        status = "ANORMAL - requiere atención";
      }
      $("#hum_suelo_1").text(data + " %" + "  - " + status);
      update_hum_suelo_1_data(data);
    });
  }

  var can_hum_suelo_2 = document.getElementById("can_hum_suelo_2");
  var chart_hum_suelo_2 = new Chart(can_hum_suelo_2, {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "Humedad (%)",
          borderColor: ["#28A745"],
          pointColor: ["#28A745"],
          strokeColor: ["#28A745"],
          fillColor: ["#28A745"],
          fill: false,
          data: [],
        },
      ],
      borderWidth: 1,
    },
    options: {
      scales: {
        xAxes: [
          {
            type: "time",
            time: {
              displayFormats: {
                quarter: "h:mm:ss a",
              },
            },
          },
        ],
      },
    },
  });

  function update_hum_suelo_2_data(newValue) {
    let data = {
      x: new Date(),
      y: newValue,
    };
    chart_hum_suelo_2.data.labels.push(new Date());
    chart_hum_suelo_2.data.datasets.forEach((dataset) => {
      dataset.data.push(data);
    });
    chart_hum_suelo_2.update();
  }

  function update_hum_suelo_2() {
    $.ajax({
      url: "http://iot.laserud.co:8080/3RzhyagiSsL8n5V3LrYs40Sz8kv3UNCa/get/V4",
      type: "GET",
    }).done(function (data) {
      data = parseFloat(data[0], 10);
      let refMax = parseFloat($("#ref_hum_suelo_max").text(), 10);
      let refMin = parseFloat($("#ref_hum_suelo_min").text(), 10);
      let status = "Normal";
      if (data > refMax || data < refMin) {
        status = "ANORMAL - requiere atención";
      }
      $("#hum_suelo_2").text(data + " %" + "  - " + status);
      update_hum_suelo_2_data(data);
    });
  }

  var can_hum_suelo_3 = document.getElementById("can_hum_suelo_3");
  var chart_hum_suelo_3 = new Chart(can_hum_suelo_3, {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "Humedad (%)",
          borderColor: ["#28A745"],
          pointColor: ["#28A745"],
          strokeColor: ["#28A745"],
          fillColor: ["#28A745"],
          fill: false,
          data: [],
        },
      ],
      borderWidth: 1,
    },
    options: {
      scales: {
        xAxes: [
          {
            type: "time",
            time: {
              displayFormats: {
                quarter: "h:mm:ss a",
              },
            },
          },
        ],
      },
    },
  });

  function update_hum_suelo_3_data(newValue) {
    let data = {
      x: new Date(),
      y: newValue,
    };
    chart_hum_suelo_3.data.labels.push(new Date());
    chart_hum_suelo_3.data.datasets.forEach((dataset) => {
      dataset.data.push(data);
    });
    chart_hum_suelo_3.update();
  }

  function update_hum_suelo_3() {
    $.ajax({
      url: "http://iot.laserud.co:8080/3RzhyagiSsL8n5V3LrYs40Sz8kv3UNCa/get/V4",
      type: "GET",
    }).done(function (data) {
      data = parseFloat(data[0], 10);
      let refMax = parseFloat($("#ref_hum_suelo_max").text(), 10);
      let refMin = parseFloat($("#ref_hum_suelo_min").text(), 10);
      let status = "Normal";
      if (data > refMax || data < refMin) {
        status = "ANORMAL - requiere atención";
      }
      $("#hum_suelo_3").text(data + " %" + "  - " + status);
      update_hum_suelo_3_data(data);
    });
  }

  $("#fin-cosecha").on("click", function () {
    $.ajax({
      url: "/end-cultivo",
      type: "POST",
      data: { can_cosechada: $("#peso-cosecha").val() },
      dataType: "json",
    })
      .done(function (data) {
        alert("Cosecha terminada!");
        location.href = "/cultivos";
      })
      .fail(function (data) {
        alert("Hubo un error inténtelo nuevamente");
      });
  });

  setInterval(update_temp_aire_1, 5000);
  setInterval(update_temp_aire_2, 5000);
  setInterval(update_hum_aire_1, 5000);
  setInterval(update_hum_aire_2, 5000);
  setInterval(update_hum_suelo_1, 2000);
  setInterval(update_hum_suelo_2, 2000);
  setInterval(update_hum_suelo_3, 2000);
});
