$(document).ready(function () {

    $("button[data-bs-toggle='modal'], a.confirm").on("click", function() {
        $(this).closest(".modal.fade.show").find(".btn-close").click();
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
                } else {
                    $(this).toggleClass("active");
                }
            }
        });
    }

    accordion(".faq-block__title", ".faq-block__item");
    
    accordion(".bless-modal__link");
});