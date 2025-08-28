"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";

export default function ContactUs() {
  const phoneInputRef = useRef(null);
  const itiRef = useRef(null);

  const [formData, setFormData] = useState({
    website: "Gypsum Site",
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [turnstileToken, setTurnstileToken] = useState("");
  const turnstileWidgetId = useRef(null);

  useEffect(() => {
    // Load Cloudflare Turnstile script
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
    script.async = true;
    script.defer = true;
    
    const initializeTurnstile = () => {
      const widget = document.getElementById('turnstile-widget');
      if (window.turnstile && widget) {
        console.log('Initializing Turnstile with key:', process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY);
        turnstileWidgetId.current = window.turnstile.render('#turnstile-widget', {
          sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '1x00000000000000000000AA',
          callback: (token) => {
            setTurnstileToken(token);
            setErrors(prev => ({ ...prev, turnstile: '' }));
          },
          'error-callback': () => {
            setTurnstileToken('');
            setErrors(prev => ({ ...prev, turnstile: 'Verification failed. Please try again.' }));
          },
          'expired-callback': () => {
            setTurnstileToken('');
            setErrors(prev => ({ ...prev, turnstile: 'Verification expired. Please try again.' }));
          }
        });
      } else {
        console.log('Turnstile init failed:', {
          turnstile: !!window.turnstile,
          widget: !!widget,
          sitekey: !!process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY
        });
      }
    };

    script.onload = () => {
      // Add delay to ensure DOM is ready
      setTimeout(initializeTurnstile, 200);
    };

    document.head.appendChild(script);

    if (phoneInputRef.current) {
      itiRef.current = intlTelInput(phoneInputRef.current, {
        initialCountry: "ae",
        separateDialCode: true,
        preferredCountries: ["ae", "us", "gb"],
      });

      phoneInputRef.current.addEventListener("blur", () => {
        if (itiRef.current && phoneInputRef.current.value.trim()) {
          // Clear phone error when user starts typing
          setErrors((prev) => ({ ...prev, phone: "" }));
        }
      });

      phoneInputRef.current.addEventListener("input", () => {
        if (itiRef.current && phoneInputRef.current.value.trim()) {
          // Clear phone error on input
          setErrors((prev) => ({ ...prev, phone: "" }));
        }
      });
    }
  }, []);

  const validate = () => {
    let tempErrors = {};

    if (!formData.name.trim()) tempErrors.name = "Name is required.";

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Invalid email address.";
    }

    // Phone validation - check if phone input has value or if intl-tel-input has valid number
    if (itiRef.current) {
      const phoneValue = phoneInputRef.current?.value?.trim();
      if (!phoneValue) {
        tempErrors.phone = "Phone is required.";
      } else if (!itiRef.current.isValidNumber()) {
        // Only show validation error if there's a value but it's invalid
        const errorCode = itiRef.current.getValidationError();
        const errorMap = {
          0: "Invalid number",
          1: "Invalid country code", 
          2: "Too short",
          3: "Too long",
          4: "Invalid number",
        };
        tempErrors.phone = errorMap[errorCode] || "Invalid phone number";
      }
    } else if (!formData.phone.trim()) {
      tempErrors.phone = "Phone is required.";
    }

    if (!formData.subject.trim()) tempErrors.subject = "Subject is required.";
    if (!formData.message.trim()) tempErrors.message = "Message is required.";
    if (!turnstileToken) tempErrors.turnstile = "Please complete the security verification.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (itiRef.current) {
      const fullPhone = itiRef.current.getNumber();
      setFormData((prev) => ({ ...prev, phone: fullPhone }));
    }

    if (!validate()) return;

    try {
      const csrfRes = await fetch(
        "http://localhost/appello-portal/public/get-csrf-token",
        {
          method: "GET",
          credentials: "include",
        }
      );
      const { token } = await csrfRes.json();

      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });
      data.append('cf-turnstile-response', turnstileToken);

      const res = await fetch(
        "http://localhost/appello-portal/public/store-lead",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "X-CSRF-TOKEN": token,
          },
          body: data,
        }
      );

      const result = await res.json();

      if (res.ok) {
        toast.success("Form Submitted Successfully");
        setFormData({
          website: "Gypsum Site",
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setTurnstileToken("");
        if (phoneInputRef.current) phoneInputRef.current.value = "";
        if (window.turnstile && turnstileWidgetId.current) {
          window.turnstile.reset(turnstileWidgetId.current);
        }
      } else {
        toast.error(result.message || "Form submission failed.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Form submission failed.");
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <section className="bread_title py-5">
        <div className="container my-5">
          <div className="row py-5">
            <div className="col-md-12 mt-4 text-center">
              <h5
                className="main_heading text-white"
                style={{ fontSize: "55px" }}
              >
                Contact Us
              </h5>
              <p className="mt-4 text-white">
                Home/<span>Contact Us</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="feature_sec py-4">
        <div className="container my-5">
          <div className="row">
            <div className="col-md-5 my-auto">
              <h5 className="sub_heading">Contact Us</h5>
              <h2 className="main_heading">
                Happy to answer all your questions
              </h2>
              <p className="my-4 main_para">
                There are many variations of passages of Lorem Ipsum available...
              </p>
            </div>
            <div className="col-md-7 my-auto">
              <div className="form_box rounded">
                <h3 className="main_heading mb-4">Send a Message</h3>
                <form className="row g-3" onSubmit={handleSubmit}>
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control field"
                      placeholder="Name"
                    />
                    {errors.name && (
                      <small className="text-danger">{errors.name}</small>
                    )}
                  </div>

                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control field"
                      placeholder="Email"
                    />
                    {errors.email && (
                      <small className="text-danger">{errors.email}</small>
                    )}
                  </div>

                  <div className="col-md-6">
                    <input
                      type="tel"
                      ref={phoneInputRef}
                      name="phone"
                      defaultValue={formData.phone}
                      onChange={handleChange}
                      className="form-control field phone"
                      placeholder="50 123 4567"
                    />
                    {errors.phone && (
                      <small className="text-danger">{errors.phone}</small>
                    )}
                  </div>

                  <div className="col-md-6">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-control field"
                      placeholder="Subject"
                    />
                    {errors.subject && (
                      <small className="text-danger">{errors.subject}</small>
                    )}
                  </div>

                  <div className="col-12">
                    <textarea
                      className="form-control"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      placeholder="Type your message..."
                    ></textarea>
                    {errors.message && (
                      <small className="text-danger">{errors.message}</small>
                    )}
                  </div>

                  <div className="col-12 mb-3">
                    <div id="turnstile-widget"></div>
                    {errors.turnstile && (
                      <small className="text-danger d-block mt-2">{errors.turnstile}</small>
                    )}
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-primary main_btn">
                      Submit Now
                      <span className="arrow_btn3">
                        <img src="images/arrow.png" alt="arrow" />
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
