import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faCalendar,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import "./paymentPage.css";
export function PaymentPage() {
  return (
    <div className="payment-form-container">
      <div className="form-header">
        <h1 className="form-title">Choose the form of payment</h1>{" "}
        <div className="close-icon">
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </div>
      <div className="form-body">
        <div className="form-content">
          <div className="user-info">
            <div className="user-img">
              <span>J</span>
            </div>
            <div className="user-details">
              <div className="user-bio">
                <span className="user-name">John </span>
                <p className="user-cel">(88) 99602-2404</p>
              </div>
              <div className="user-logout-btn">Log out</div>
            </div>
          </div>
          <div className="user-selected-service-container">
            <h1 className="highlight-title">Selected Service</h1>
            <div className="user-selected-service">
              <div className="service-img">
                <img src="https://media.istockphoto.com/id/1193539086/photo/woman-in-red-silk-long-dress-train-with-umbrella-art-design-photography.jpg?s=612x612&w=0&k=20&c=W0NS0RIEGdn9ctPL7h6yO-UXuzBdMfWfxuzqCTe59zw=" />
              </div>
              <div className="service-info">
                <div className="service-details">
                  <h1 className="service-name">Japanese lessons</h1>
                  <div className="service-more-details">
                    <div className="service-detail">
                      <span className="service-detail-icon">
                        <FontAwesomeIcon icon={faCalendar} />
                      </span>
                      <span className="service-detail-name">
                        Dec 2, 2020 • 11:00 • 1 month
                      </span>
                    </div>
                    <div className="service-detail">
                      <span className="service-detail-icon">
                        <FontAwesomeIcon icon={faLocationDot} />
                      </span>
                      <span className="service-detail-name">
                        Client's place
                      </span>
                    </div>
                  </div>
                </div>
                <h1 className="service-fee">Rp 1.350.000</h1>
              </div>
            </div>
          </div>

          <div className="user-input-section">
            <label htmlFor="email" className="highlight-title">
              Enter your location
            </label>
            <input type="email" placeholder="Enter address" id="email" />
          </div>

          <div className="user-input-section">
            <label htmlFor="note" className="highlight-title">
              Note (optional)
            </label>
            <input type="text" placeholder="Enter text here" id="note" />
          </div>

          <div className="form-radio-section">
            <div className="form-radio-title">Choose a way to pay</div>

            <div className="form-radio-btns">
              <label>
                <input type="radio" name="option" value="option1" />
                Cash
              </label>
              <label>
                <input type="radio" name="option" value="option1" />
                Credit card
              </label>
              <label>
                <input type="radio" name="option" value="option1" />
                eWallet/Virtual bank
              </label>
            </div>

            <div className="checkbox-text">
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox">
                Lorem ipsum dolor sit amet. consectetur adipiscing elit, sed{" "}
                <a href="#">do elusmod</a>
              </label>
            </div>
          </div>
        </div>
        <div className="form-btns">
          <div className="previous-btn">Previous</div>
          <div className="next-btn">Next</div>
        </div>
      </div>
    </div>
  );
}
