
function changeArrow() {
    let navbarServiceRow = document.getElementById('navbarServiceRow');
    let arrow = document.getElementById('arrow');
    if (navbarServiceRow.className.indexOf('show') < 0) {   // 판단 시점은 클릭하기 전 단계.
      arrow.className = "ai-chevron-up d-lg-none ms-1 mb-1";
    } else {
      arrow.className = "ai-chevron-down d-lg-none ms-1 mb-1";
    }
}


// KakaoMap API
// let container = document.getElementById('kakaomap');
// let options = {
//   center: new kakao.maps.LatLng(37.41454903496425, 127.13462691306036),
//   level: 3
// };

// let map = new kakao.maps.Map(container, options);

// let imageSrc = "/img/damggi/service_area/map_marker.svg",
//     imageSize = new kakao.maps.Size(40,55),
//     imageOption = {offset: new kakao.maps.Point(20, 54)};

// let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
//     markerPosition = new kakao.maps.LatLng(37.41454903496425, 127.13462691306036);

// let marker = new kakao.maps.Marker({
//     position: markerPosition, 
//     image: markerImage
// });

// marker.setMap(map);