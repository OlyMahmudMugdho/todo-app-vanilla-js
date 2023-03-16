let content = document.querySelector(".content");
const set_count = (count_val) => {
  localStorage.setItem("unique_id", count_val);
}

const get_count = () => {
  if (localStorage.length == 0) {
    set_count(0);
    return 0;
  }
  else {
    let count_get = localStorage.getItem("unique_id");
    let count_int = parseInt(count_get);
    return count_int;
  }
}

let count = get_count();

const show_data = () => {
  content.innerHTML = "";
  for (let i = count; i >= 0; i--) {
    if (localStorage.getItem(i) == null) {
      continue;
    }
    content.innerHTML = content.innerHTML + '<div class="item"><h5>' + localStorage.getItem(i) + '</h5>' + '<button class="btn" onclick="remove_data(' + i + ')"><i class="fa-solid fa-trash"></i></button>';
  }
}

show_data();

const set_keys = () => {
  let keys = [];
  for (let i = 0; i < count; i++) {
    if (localStorage.getItem(i) == null) {
      continue;
    }
    else {
      keys.push(i);
    }
  }
}

set_keys();

if (count != 0) {
  set_keys();
}

const add_data = () => {
  let text = document.querySelector(".text").value;
  if (text.trim() == "") {
    alert("can't add empty task");
    return -1;
  }
  count = get_count();
  index = count;
  set_count(count + 1)
  localStorage.setItem(index, text);
  count = get_count();
  show_data();
  set_keys();
}

const remove_data = (entry) => {
  localStorage.removeItem(entry);
  count = get_count();
  show_data();
  set_keys();
}

var text_box = document.querySelector(".text");
text_box.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.querySelector(".btn-green").click();
  }
});
