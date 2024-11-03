import React, { useEffect } from "react";
import "../../styles/modal.scss";
import $ from "jquery";
import pienso from "@/public/pienso_3.jpg";
export const ChallengueModal = ({ closeModal }: { closeModal: () => void }) => {
  useEffect(() => {
    resetButtonColor();

    $('.modal__close').on('click', handleClose);

    const handleClickOutside = (event: JQuery.MouseDownEvent) => {
      const $modal = $('#paymentModal');
      if (!$modal.is(event.target) && $modal.has(event.target).length === 0) {
        handleClose();
      }
    };

    $(document).on('mousedown', handleClickOutside);

    const handleButtonClick = (event: JQuery.ClickEvent) => {
      event.preventDefault();
      $(event.currentTarget).removeClass('modal__button--primary').addClass('modal__button--secondary');
      setTimeout(() => {
        handleClose();
      }, 1000);
    };

    $('.modal__button--primary').on('click', handleButtonClick);

    return () => {
      $('.modal__close').off('click', handleClose);
      $(document).off('mousedown', handleClickOutside);
      $('.modal__button--primary').off('click', handleButtonClick);
    };
  }, [closeModal]);

  const handleClose = () => {
    $('#paymentModal').hide();
    resetButtonColor();
    closeModal();
  };

  const resetButtonColor = () => {
    $('.modal__button').removeClass('modal__button--secondary').addClass('modal__button--primary');
  };

  return (
    <div
      id="paymentModal"
      className="modal"
      style={{ display: "none" }}
      tabIndex={-1}
      role="dialog"
    >
      <div className="modal__dialog" role="document">
        <div className="modal__content">
          <img src={pienso.src} alt="Descripción de la imagen" className="modal__image" />
          <div className="modal__text-container">
            <p className="modal__main-text">A partir de 12 meses</p>
            <p className="modal__sub-text">Pienso especializado saludable</p>
          </div>
          <button
            type="button"
            className="modal__button modal__button--primary"
          >
            ¡Comprar Ahora!
          </button>
        </div>
      </div>
    </div>
  );
};
