        // Функция для установки cookie
        function setCookie(name, value, days) {
          var expires = "";
          if (days) {
              var date = new Date();
              date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
              expires = "; expires=" + date.toUTCString();
          }
          document.cookie = name + "=" + (value || "") + expires + "; path=/";
      }

      // Функция для получения cookie
      function getCookie(name) {
          var nameEQ = name + "=";
          var ca = document.cookie.split(';');
          for (var i = 0; i < ca.length; i++) {
              var c = ca[i];
              while (c.charAt(0) == ' ') c = c.substring(1, c.length);
              if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
          }
          return null;
      }

      // Функция для проверки количества вращений и отображения модальных окон
      function checkTurns() {
          var turns = getCookie("turns");
          if (turns && turns >= 2) {
              // Если пользователь крутил 2 раза, показать модальное окно secondTurn
              $('#secondTurn').modal({
                  escapeClose: false,
                  clickClose: false,
                  showClose: false
              });
          }
      }

      // Увеличиваем счетчик вращений при нажатии на кнопку
      document.getElementById("spinButton").addEventListener("click", function() {
          var turns = getCookie("turns") ? parseInt(getCookie("turns")) : 0;
          turns++;
          setCookie("turns", turns, 7); // Сохраняем на 7 дней
        
          // Показываем соответствующее модальное окно
          if (turns === 1) {
              $('#firstTurn').modal();
          } else if (turns === 2) {
              $('#secondTurn').modal();
          }
      });

      // Проверяем состояние при загрузке страницы
      window.onload = checkTurns;