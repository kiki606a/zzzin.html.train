$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query:"미움받을 용기" },
  headers:{Authorization:"KakaoAK 45bca94ff00c9e71aa07e4cf7dd5836b"}
})
  .done(function( msg ) {
    console.log(msg);
  });