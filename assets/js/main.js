$(document).ready(function () {
    $('.qr-code-btn').on('click', function (e) {
        e.preventDefault();

        if ($('.button__text').hasClass('active')) {
            $('.button__text').removeClass('active');
            $('.button__img').addClass('active');

            $('.price-list__contacts').removeClass('d-flex').addClass('d-none');
            $('.price-list__qr-code').removeClass('d-none').addClass('d-flex');
        } else {
            $('.button__img').removeClass('active');
            $('.button__text').addClass('active');

            $('.price-list__qr-code').removeClass('d-flex').addClass('d-none');
            $('.price-list__contacts').removeClass('d-none').addClass('d-flex');
        }
    })

    // header menu

    let headerMenuBtn = $(".header-nav__menu");
    let headerMenu = $(".header-nav__links");
    let backgroundMenu = $(".backgroundBlack");
    let closeMenuBtn = $(".closeMenuBtn");
    let body = $("body");
    headerMenuBtn.on('click', function (e) {
        e.preventDefault();
        headerMenu.addClass('actived');
        backgroundMenu.addClass('actived');
        body.addClass("actived");
    });
    closeMenuBtn.on('click', function (e) {
        e.preventDefault();
        headerMenu.removeClass("actived");
        backgroundMenu.removeClass("actived");
        body.removeClass("actived");
    });

    /* Swiper */
    const swiper = new Swiper('.gallery_swiper', {
        // Default parameters
        slidesPerView: 1,
        loop: true,
        spaceBetween: 15,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    })
    swiper.on('slideChange', function (e) {
        if (e.activeIndex == 3 || e.activeIndex == 1) {
            $('#communal').removeClass('show')
            $('#repair').addClass('show')
        } else {
            $('#repair').removeClass('show')
            $('#communal').addClass('show')
        }
    });

    // accordion
    $(".accordion__title").each(function () {
        $(this).on('click', function (e) {
            e.preventDefault();
            $(this).toggleClass("actived");
            $(this).next(".accordion__content").toggleClass("actived");
        });
    });

    let accordionRadios = $(".accordion__item-label");
    accordionRadios.each(function (btn) {
        $(this).on("click", function (e) {
            $(this).addClass("actived");
            accordionRadios.not($(this)).removeClass("actived");
            accordionRadios.parent().removeClass("actived");
            $(this).parent().addClass("actived");
        });
    });

    // leasing form
    let leasingFormInput = $(".leasing-calc__form input");
    let leasingFormBtn = $(".leasing-calc__btn");
    leasingFormInput.on("change", function (e) {
        leasingFormBtn.addClass("actived");
        leasingFormBtn.removeAttr("disabled");
    });

    $(".watchTech-popup__video").magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    // leasing range
    let rangeInp = $(".leasing-calc__ranges-item__range");
    let priceProcInp = $(".leasing-calc__ranges-item-title__span.priceProcInput");
    let monthsInp = $(".leasing-calc__ranges-item-title__span.monthsInput");
    rangeInp.each(function (e) {
        $(this).on("input", function () {

            const min = $(this).attr("min");
            const max = $(this).attr("max");
            const val = $(this).val();

            $(this).css({
                "background-size": (val / max) * 100 + '% 100%'
            });

            if ($(this).hasClass("priceRange")) {
                console.log($(this));
                priceProcInp.val($(this).val() + "%");
            } else if ($(this).hasClass("monthsRange")) {
                monthsInp.val($(this).val() * 12 + " месяцев");
            }
        });
    });

    // faq accordion
    let accordionItemBtn = $(".faq-block__acc-item__title");
    accordionItemBtn.each(function () {
        $(this).on("click", function () {
            $(this).toggleClass("actived");
            $(this).next().toggleClass("actived");
        });
    });

    // catalog show more filters btn 
    let showMoreFiltersBtn = $(".showMoreItems-btn");
    showMoreFiltersBtn.on("click", function (e) {
        e.preventDefault();
        $(this).toggleClass("actived");
        $(this).parent().find(".moreItems").toggleClass("actived");
    });

    // catalog show more items btn
    let showMoreItemsBtn = $(".catalog-showMore__item-btn");
    showMoreItemsBtn.on("click", function (e) {
        e.preventDefault();
        $(this).toggleClass("actived");
        $(this).parent().find(".more-item").toggleClass("actived");
    });
    
    // catalog mobile list

    let showListSelect = $(".catalog-mob__List");
    let catalogBlockList = $(".catalog-block__B-L");
    let filterMobCloseBtn = $(".filterClose");
    showListSelect.on("click", function (e) {
        e.preventDefault();
        catalogBlockList.addClass("actived");
    });
    filterMobCloseBtn.on("click", function () {
        catalogBlockList.removeClass("actived");
    });

    // catalog lice select mobile
    let selectMobileListBtn = $(".catalog-mob__select");
    let selectBlock = $(".catalog-select");
    selectMobileListBtn.on("click", function (e) {
        e.preventDefault();
        selectBlock.next().css("display", "flex");
        selectBlock.next().addClass("actived");
        backgroundMenu.addClass("actived");

        let selectCurrent = selectBlock.find(".current");
        console.log(selectCurrent);
        selectCurrent.on("change", function () {
            backgroundMenu.removeClass("actived");
            selectBlock.next().removeClass("actived");
            selectBlock.next().css("display", "none");
        })
    });

    // catalog modal
    let openCatalogModalBtns = $(".catalog-block__B-R-main__item-b__btn");
    let catalogcloseModalX = $(".catalog-modal__closeBtn");
    let catalogModal = $(".catalog-modal");
    openCatalogModalBtns.on("click", function (e) {
        e.preventDefault();
        catalogModal.addClass("actived");
    });

    catalogcloseModalX.on("click", function (e) {
        e.preventDefault();
        catalogModal.removeClass("actived");
    });

    // lizing procesing show

    let lizingProcBtns = $(".procBuying-block__L-link");
    lizingProcBtns.each(function (btn) {
        $(this).on("click", function (e) {
            e.preventDefault();
            $(this).addClass("actived");
            $(this).parent().find("a").not($(this)).removeClass("actived");
            let lizingProcItems = $(this).parent().parent().find(".procBuying-block__R-item");
            let linkData = $(this).attr("data-link");
            console.log(linkData);
            lizingProcItems.each(function (item) {
                if ($(this).attr("data-link") == linkData) {
                    $(this).addClass("actived");
                    $(this).parent().find("div").not($(this)).removeClass("actived");
                }
            });
        });
    });

    // product swiper
    const product_thumb = new Swiper(".product_thumb", {
        spaceBetween: 15,
        slidesPerView: 8,
        freeMode: true,
        watchSlidesProgress: true,
    });

    const product_main = new Swiper(".product_main", {
        spaceBetween: 10,
        pagination: {
            el: ".catalog-item .swiper-pagination",
            type: "bullets",
            clickable: true,
        },
        thumbs: {
            swiper: product_thumb,
        },
    });

    const recallSwiper = new Swiper(".recalls-swiper", {
        spaceBetween: 20,
        slidesPerView: 2,
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            1024: {
                spaceBetween: 20,
                slidesPerView: 2,
            },
        },
    });

    const oapSwiper = new Swiper(".oap-swiper", {
        spaceBetween: 20,
        slidesPerView: 4,
        freeMode: true,
        centeredSlides: true,
        navigation: {
            nextEl: ".oap-swiper-next",
            prevEl: ".oap-swiper-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            1024: {
                spaceBetween: 20,
                slidesPerView: 4,
            },
        },
    });

    const StepDevelopSwiper = new Swiper(".stageDevelop-swiper", {
        spaceBetween: 20,
        slidesPerView: 3,
        freeMode: true,
        navigation: {
            nextEl: ".stageDevelop-swiper-next",
            prevEl: ".stageDevelop-swiper-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            1024: {
                spaceBetween: 20,
                slidesPerView: 3,
            },
        },
    });

    const reviewsSwiper = new Swiper(".aboutUs-Reviews__block-swiper", {
        spaceBetween: 20,
        slidesPerView: 4,
        freeMode: true,
        centeredSlides: true,
        navigation: {
            nextEl: ".stageDevelop-swiper-next",
            prevEl: ".stageDevelop-swiper-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            1024: {
                spaceBetween: 20,
                slidesPerView: 4,
            },
        },
    });

    $('body').on('click',function(e){
        if($(e.target).parents().hasClass('catalog-select')){
            $('.catalog-select.nice-select').removeClass('actived')
            $('.catalog-select.nice-select').hide()
            $('.backgroundBlack').removeClass('actived')
        }
    })

    // nice selects
    $('select').niceSelect();


    // input mask //
    // $('.price-block-min').inputmask({"mask": "9 999 999"}); 
    $('.price-block-max').inputmask({"mask": "9 999 999"}); 
    $(".catalog-modal__form-number").inputmask({"mask": "+7 (999) 999-99-99"});
    $(".reqCond-tel").inputmask({"mask": "+7 (999) 999-99-99"});
});