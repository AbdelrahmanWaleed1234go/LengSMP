let toastTimeout;

function copyIp(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      showToast("تم نسخ العنوان بنجاح: " + text);
    })
    .catch(() => {
      // طريقة بديلة في حالة عدم دعم الحافظة المباشرة
      const input = document.createElement("input");
      input.value = text;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      showToast("تم نسخ العنوان بنجاح: " + text);
    });
}

function showToast(message) {
  const toast = document.getElementById("toast");
  const toastText = document.getElementById("toast-text");

  toastText.innerText = message;
  toast.classList.add("show");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}
