"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import Layout from "../layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import style from "./Index.module.scss";
import Image from "next/image";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface ApiResponse {
  success?: boolean;
  error?: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [response, setResponse] = useState<ApiResponse | null>(null);

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const res = await fetch("/api/submit-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data: ApiResponse = await res.json();
      setResponse(data);
      if (data.success) {
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
        setTimeout(() => {
          setResponse(null);
        }, 2000);
      }
    } catch (error) {
      setResponse({ error: "An error occurred while submitting the form." });
    }
  };

  const getMailtoLink = () => {
    const { name, email, message } = formData;
    return `mailto:anibolokadze@gmail.com?subject=Contact%20Form%20Submission&body=Name:%20${encodeURIComponent(
      name
    )}%0AEmail:%20${encodeURIComponent(
      email
    )}%0AMessage:%20${encodeURIComponent(message)}`;
  };

  return (
    <Layout>
      {response && (
        <div className={style.alert}>
          {response.error ? response.error : "Message sent successfully!"}
        </div>
      )}

      <div className={style.wrapper}>
        <div className={style.contact}>
          <h2>Reach Us</h2>
          <p>
            <FontAwesomeIcon icon={faPhone} /> 555 54 50 03
          </p>
          <button onClick={() => (window.location.href = getMailtoLink())}>
            <FontAwesomeIcon icon={faEnvelope} />
            anibolokadze@gmail.com
          </button>
          <p>
            <FontAwesomeIcon icon={faLocationDot} />
            Tbilisi Georgia
          </p>

          <Image
            src={"/Ellipse 794.png"}
            width={200}
            height={200}
            alt="elipse"
            className={style.elipse_1}
          />

          <Image
            src={"/Ellipse 793.png"}
            width={210}
            height={210}
            alt="elipse"
            className={style.elipse_2}
          />
        </div>

        <form onSubmit={handleSubmit} className={style.form}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="name"
          />
          {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email"
          />
          {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="type message"
          ></textarea>
          {errors.message && (
            <span style={{ color: "red" }}>{errors.message}</span>
          )}

          <div className={style.buttons}>
            <button type="submit">Submit</button>
            <button onClick={() => (window.location.href = getMailtoLink())}>
              Send with Email Client
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
