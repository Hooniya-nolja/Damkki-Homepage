import React from 'react';

function RestaurantGuide() {
    return (
        <section class="container text-center pt-6 px-0 px-md-0">
            <p class="fs-xl fs-md-2xl fw-medium">가맹음식점 안내</p>
            <div class="btn-group dropdown mt-5">
            <button type="button" id="selectArea" class="btn btn-primary fw-bold dropdown-toggle py-1" style="border-radius: 24px;" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                지역 선택
            </button>
            <div class="dropdown-menu my-1">
                <span class="dropdown-item" onclick="changeList(this);">서현 1동</span>
                <span class="dropdown-item" onclick="changeList(this);">서현 2동</span>
                <span class="dropdown-item" onclick="changeList(this);">야탑 1동</span>
            </div>
            </div>
            <div class="bg-secondary mx-md-3 py-3 mt-4 fs-sm"><i class="ai-alert-circle fs-xl pb-1 me-3"></i>배달 음식을 받을 지역을 먼저 선택해주세요.</div>
            <div id="restaurantList" class="d-flex flex-md-row flex-column flex-wrap">

            </div>
        </section>
    );
}

export default RestaurantGuide;