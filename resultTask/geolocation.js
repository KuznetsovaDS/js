function loadDemo() {
    "use strict";
    if (navigator.geolocation) {
      document.getElementById("status").innerText = "HTML5 Geolocation поддерживается в вашем браузере.";
      navigator.geolocation.getCurrentPosition(displayLocation, showError);
    } else {
      document.getElementById("status").innerText = "Ваш браузер не поддерживает HTML5 Geolocation.";
    }
  }
  
  function displayLocation(position) {
    document.getElementById("latitude").innerText = position.coords.latitude.toFixed(4);
    document.getElementById("longitude").innerText = position.coords.longitude.toFixed(4);
    document.getElementById("timestamp").innerText = new Date(position.timestamp).toLocaleString();
  }
  
  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("Пользователь отказал в предоставлении геолокации");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Информация о местоположении недоступна");
        break;
      case error.TIMEOUT:
        alert("Время ожидания запроса истекло");
        break;
      case error.UNKNOWN_ERROR:
        alert("Произошла неизвестная ошибка");
        break;
    }
  }