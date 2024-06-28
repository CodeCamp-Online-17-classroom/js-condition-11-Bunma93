// write code here
let user = prompt("ชื่อผู้ใช้");
if (!user) {
    user = "guest"
} else if (user == "codecamp") {
   passWord = prompt("กรอกพาสเวิร์ด")
   if (passWord == "123456") {
    user = "codecamp"
   } else {
    alert("Wrong password")
    user = "guest"
   }
} else {
    user = "guest"
};
alert(`Welcome ${user}`);