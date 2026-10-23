// 문의 메일 주소를 페이지에 바로 적지 않고 화면에서 조립한다(스팸 수집 방지).
(function () {
  var user = ["evan", "3055"].join("");
  var domain = ["naver", "com"].join(".");
  var address = user + "@" + domain;
  var links = document.querySelectorAll("[data-contact]");
  for (var i = 0; i < links.length; i++) {
    links[i].textContent = address;
    links[i].setAttribute("href", "mailto:" + address + "?subject=" + encodeURIComponent("아기햄스터 방위대 문의"));
  }
})();
