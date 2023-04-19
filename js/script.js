$(document).ready(function () {

    $("button[data-bs-toggle='modal']").on("click", function () {
        if (!$(this).hasClass("btn-close")) {
            $(this).closest(".modal.fade.show").find(".btn-close").click();
        } else {
            $(this).click();
        }
    });

    $(".navbar-toggler").on("click", function () {
        $(".modal-backdrop.fade.show").remove();
        $("body").append('<div class="modal-backdrop fade show"></div>');
        $("body").addClass("open-modal");
    });

    $(".navbar-collapse .btn-close").on("click", function () {
        $(".navbar-toggler").click();
        $("body").removeClass("open-modal");
        $(".modal-backdrop.fade.show").remove();
    });

    $("body").on("click", ".btn-close, .confirm", function () {
        $("body").removeClass("open-modal");
        $(".modal-backdrop.fade.show").remove();
    });

    $("body").on("click", ".navbar-collapse.show .nav-link", function () {
        $(".navbar-toggler").click();
        $("body").removeClass("open-modal");
    });

    $(".name-link").on("click", function () {
        var name = $(this).find(".name-title").text();
        $("#BlockTypeModalLabel,#BlockNameModalLabel,#BlockTokenModalLabel").text(name);
        $("#BlockCertificateModalLabel").text("Certificate of " + name);
    });

    $(".btn-confirm").on("click", function () {
        $(".modal-backdrop.fade.show").remove();
        $("body").append('<div class="modal-backdrop fade show"></div>');
        $("body").addClass("open-modal");

        setTimeout(function () {
            if ($('#BlockAnimationModal').hasClass('show')) {
                setTimeout(function () {
                    $('#BlockAnimationModal').modal('hide');
                    $('#BlockCertificateModal').modal('show');
                }, 5000);
            }
        }, 1000);
    });

    $(".btn-back").on("click", function () {
        $(".input-confirm").val("");
        $(".bless-modal__link").removeClass("active");
        $(".btn-confirm").attr('disabled', true);
    });

    $(".input-confirm").on("change input", function () {
        // $(this).val($(this).val().replace(/[^a-zA-Z ]/g,''));
        if ($(this).val() !== "") {
            $(this).closest(".modal-content").find(".btn-confirm").removeAttr("disabled");
        } else {
            $(this).closest(".modal-content").find(".btn-confirm").attr('disabled', true);
        }
    });


    function accordion(title, child) {
        $(title).on("click", function () {
            if (child !== undefined) {
                if (!$(this).closest(child).hasClass("active")) {
                    $(child).removeClass("active");
                    $(this).closest(child).addClass("active");
                } else {
                    $(this).closest(child).toggleClass("active");
                }
            } else {
                if (!$(this).hasClass("active")) {
                    $(title).removeClass("active");
                    $(this).addClass("active");
                    $(this).closest(".modal-content").find(".btn-confirm").removeAttr("disabled");
                } else {
                    $(this).toggleClass("active");
                    $(this).closest(".modal-content").find(".btn-confirm").attr('disabled', true);
                }
            }
        });
    }

    accordion(".faq-block__title", ".faq-block__item");

    accordion(".bless-modal__link");


});