(function () {
  "use strict";
  window.addEventListener("load", function () {
      if (!isSupportLocalStorage()) {
          alert("Ваш браузер не поддерживает localStorage.");
          return;
      }
      updateTable();
  }, false);

  function isSupportLocalStorage() {
      try {
          return 'localStorage' in window && window['localStorage'] !== null;
      } catch (e) {
          return false;
      }
  }
  function updateTable() {
      var tbody = document.getElementById("output");
      while (tbody.getElementsByTagName("tr").length > 0) {
          tbody.deleteRow(0);
      }
      if (localStorage.length === 0) {
          var row = tbody.insertRow();
          var cell = row.insertCell(0);
          cell.colSpan = "4";
          cell.textContent = "Записей нет";
      } else {
          for (var i = 0; i < localStorage.length; ++i) {
              var key = localStorage.key(i);
              var value = localStorage.getItem(key);
              var [name, phone] = value.split("|||");
              var row = tbody.insertRow();

              var cell = row.insertCell(0);
              cell.textContent = i + 1;
              cell = row.insertCell(1);
              cell.textContent = name || "Не задано";

              cell = row.insertCell(2);
              cell.textContent = phone || "Не задано";

              cell = row.insertCell(3);
              cell.innerHTML = "<button onclick='deleteItem(\"" + key + "\")'>Удалить</button>";
          }
      }
  }
  function deleteItem(key) {
      if (!confirm("Вы уверены, что хотите удалить номер?")) return;
      localStorage.removeItem(key);
      updateTable();
  }
  function clearStorage() {
      if (!confirm("Вы уверены, что хотите удалить все номера?")) return;
      localStorage.clear();
      updateTable();
  }
  function save() {
      const name = document.getElementById("name").value;
      const phone = document.getElementById("phone").value;

      if (name && phone) {
          const key = "contact_" + Date.now();
          const value = name + "|||" + phone;
          localStorage.setItem(key, value);
          updateTable();
      } else {
          alert("Необходимо заполнить оба поля");
      }
  }
  window.deleteItem = deleteItem;
  window.clearStorage = clearStorage;
  window.save = save;

})();
