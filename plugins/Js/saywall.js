const form = document.getElementById('messageForm');
    const textarea = form.querySelector('textarea');
    const messagesDiv = document.getElementById('messages');
    const infoText = document.getElementById('infoText');
    const storageKey = 'futureMessages';
    const maxMessages = 10;

    function loadMessages() {
      messagesDiv.innerHTML = '';
      const saved = localStorage.getItem(storageKey);
      const msgs = saved ? JSON.parse(saved) : [];

      msgs.forEach((msg, index) => {
        addMessageToDOM(msg, index, msgs.length >= maxMessages);
      });

      updateInfoText(msgs.length);
    }

    function updateInfoText(currentCount) {
      const remaining = maxMessages - currentCount;
      if (remaining > 0) {
        infoText.textContent = `你還可以留言 ${remaining} 則`;
        textarea.disabled = false;
        form.querySelector('button').disabled = false;
      } else {
        infoText.textContent = `留言已達上限，請刪除留言後再新增`;
        textarea.disabled = true;
        form.querySelector('button').disabled = true;
      }
    }

    function saveMessages(msgs) {
      localStorage.setItem(storageKey, JSON.stringify(msgs));
    }

    function addMessageToDOM({ text, date }, index, showDelete) {
      const msgDiv = document.createElement('div');
      msgDiv.className = 'message';
      msgDiv.innerHTML = `
        <p>${text}</p>
        <span class="timestamp">${date}</span>
      `;

      if (showDelete) {
        const delBtn = document.createElement('button');
        delBtn.textContent = '🗑 刪除';
        delBtn.className = 'delete-btn';
        delBtn.addEventListener('click', () => deleteMessage(index));
        msgDiv.appendChild(delBtn);
      }

      messagesDiv.appendChild(msgDiv);
    }

    function deleteMessage(index) {
      const saved = localStorage.getItem(storageKey);
      if (!saved) return;
      let msgs = JSON.parse(saved);
      msgs.splice(index, 1);
      saveMessages(msgs);
      loadMessages();
    }

    form.addEventListener('submit', e => {
      e.preventDefault();
      const text = textarea.value.trim();
      if (!text) return;
      const now = new Date();
      const dateStr = `${now.getFullYear()}/${now.getMonth()+1}/${now.getDate()}`;
      const message = { text, date: dateStr };

      const saved = localStorage.getItem(storageKey);
      const msgs = saved ? JSON.parse(saved) : [];

      if (msgs.length >= maxMessages) {
        alert('留言已達上限，請刪除留言後再新增');
        return;
      }

      msgs.push(message);
      saveMessages(msgs);
      textarea.value = '';
      loadMessages();
    });

    loadMessages();