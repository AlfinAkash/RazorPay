import './App.css';
import React, { useState } from 'react';
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa'; // Import icons from react-icons

function App() {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount === "") {
      alert("Please enter an amount");
    } else {
      const options = {
        key: "rzp_test_D2huYxwxY9jGTv", 
        key_secret:"y2IeDQPM1OmDnKOlGd5iTi3q", 
        amount: amount * 100, 
        currency: "INR",
        name: "AlfinAkash RazorProject",
        description: "Test Mode Testing",
        handler: function (response) {
          alert("Payment ID: " + response.razorpay_payment_id);
        },
        prefill: {
          name: "AlfinAkash",
          email: "alfinakash2001@gmail.com",
          contact: "9150407570"
        },
        notes: {
          address: "RazorPay Test Mode"
        },
        theme: {
          color: "#3399cc"
        }
      };

      var pay = new window.Razorpay(options);
      pay.open();
    }
  };

  return (
    <div className="App">
      <div className="payment-container">
        <h1 className="heading">AlfinAkash Razor Pay</h1>
        <form className="payment-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="amount">Enter Amount (INR)</label>
            <input 
              type="number" 
              id="amount" 
              placeholder="Amount in INR"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="input-field"
              required
            />
          </div>
          <button type="submit" className="submit-btn">Pay Now</button>
        </form>
      </div>

      <footer className="footer">
        <h3>Follow Me on Social Media</h3>
        <div className="social-icons">
          <a href="https://www.instagram.com/a.alfinakash" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
          <a href="https://www.twitter.com/AlfinAkash" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/AlfinAkash" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
          <a href="https://github.com/AlfinAkash" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
          </a>
          <a href="https://alfinakash.vercel.app" target="_blank" rel="noopener noreferrer">
            <FaGlobe className="icon" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
