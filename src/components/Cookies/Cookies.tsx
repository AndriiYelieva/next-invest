import { useEffect, useState } from 'react';

import './cookies.scss';

import cookie from "../../images/cookie.svg"
import gingerbread from "../../images/gingerbread.svg"

export const Cookies = () => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    setTimeout(function () {
      setIsShow(true)
    }, 5000);
  }, [])

  return (
    <>
      {isShow && (
        <div className="cookies">
          <div className="cookies__images">
            <img
              src={cookie}
              alt="cookie"
            />
            <img
              src={gingerbread}
              alt="gingerbread"
            />
          </div>
          <p className="cookies__title">
            utilizziamo i cookie per migliorare il funzionamento del sito
          </p>
          <div className="cookies__buttons">
            <button
              className="cookies__button cookies__button--more"
              onClick={() => setIsShow(false)
              }
            >
              Per saperne di più
            </button>
            <button
              type="button"
              className="cookies__button cookies__button--close"
              onClick={() => setIsShow(false)}
            >
              chiudere
            </button>
          </div>
        </div>
      )}
    </>
  )
}