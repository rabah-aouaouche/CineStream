import React from "react";
import { FiUser } from "react-icons/fi";

function Promos() {
  return (
    <div className="my-20 py-10 md:px-20 px-8 bg-dry">
      <div className="lg:grid lg:grid-cols-2 lg:gap-10 items-center">
        <div className="flex lg:gap-10 gap-6 flex-col">
          <h1 className="wl:text-3xl text-xl capitalize font-sans font-medium leading-relaxed">
            Download Your Movies & Watch Offline. <br /> Enjoy on Your Mobile
          </h1>
          <p className="text-text text-sm xl:text-base leading-6 xl:leading-8">
            Avec CineStream Regardez vos films préférés en ligne et
            téléchargez-les facilement avec notre service de streaming de films.
            Profitez de la meilleure qualité vidéo et audio pour une expérience
            de visionnage inoubliable. Avec une vaste sélection de films dans
            toutes les catégories, vous êtes sûr de trouver quelque chose que
            vous allez adorer. Rejoignez notre communauté de cinéphiles dès
            maintenant et commencez à télécharger des films dès aujourd'hui !
          </p>
          <div className="flex gap-4 md:text-lg text-sm">
            <div className="flex-colo bg-black text-subMain px-6 py-3 rounded-md font-bold">
              HD 4K
            </div>
            <div className="flex-rows gap-4 bg-black text-subMain px-6 py-3 rounded-md font-bold">
              <FiUser /> 2K
            </div>
          </div>
        </div>
        <div className=" sm:block md:block lg:flex gap-10 mt-5">
          <img
            src="/images/mobile.png"
            alt=""
            className=" khraa object-contain ml-20 "
          />
          <img
            src="/images/mobilee.png"
            alt=""
            className=" khra  object-contain mt-5"
          />
        </div>
      </div>
    </div>
  );
}

export default Promos;
