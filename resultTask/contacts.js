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
      const tbody = document.getElementById("output");
      while (tbody.getElementsByTagName("tr").length > 0) {
        tbody.deleteRow(0);
      }
      if (localStorage.length === 0) {
        const row = tbody.insertRow();
        const cell = row.insertCell(0);
        cell.colSpan = "4";
        cell.textContent = "Записей нет";
      } else {
        for (let i = 0; i < localStorage.length; ++i) {
          const key = localStorage.key(i);
          const value = localStorage.getItem(key);
          const [name, phone] = value.split("|||");
          const row = tbody.insertRow();
  
          let cell = row.insertCell(0);
          cell.textContent = i + 1;
          cell = row.insertCell(1);
          cell.textContent = name || "Не задано";
  
          cell = row.insertCell(2);
          cell.textContent = phone || "Не задано";
  
          cell = row.insertCell(3);
          cell.innerHTML = `<button onclick='deleteItem("${key}")'>Удалить</button>`;
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
        const value = `${name}|||${phone}`;
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