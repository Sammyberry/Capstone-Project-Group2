import { useState } from "react";
import "./style.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (formData.message.length > 100) {
      setSuccessMessage("Message must not exceed 100 characters");
      return;
    }

    setIsLoading(true);

    const formBody = new URLSearchParams({
      fullName: formData.fullName,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      message: formData.message,
    });

    try {
      const response = await fetch(
        "https://whitebricks.com/tsacademy.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formBody.toString(),
        }
      );

      if (response.status === 200) {
        setSuccessMessage("Your message has been submitted successfully!");
        setFormData({
          fullName: "",
          phoneNumber: "",
          email: "",
          message: "",
        });
        
        // Auto-clear success message after 5 seconds
        setTimeout(() => setSuccessMessage(""), 5000);
      } else {
        setSuccessMessage(`Submission failed. Server returned status ${response.status}`);
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setSuccessMessage("Submission failed. Please check your network connection.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-header">
        <h2>Have Questions About Planetary Science?</h2>
        <p>
          Interested in learning more about space, astronomy, or how
          planetary data is collected and analyzed? Reach out and we'll
          get back to you.
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name*</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            placeholder="Full Name"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder="example@email.com"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number*</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            placeholder="Enter phone number"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message*</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            placeholder="Enter your message"
            onChange={handleChange}
            maxLength="100"
            required
          ></textarea>
          <p className="character-count">
            {formData.message.length}/100 characters
          </p>
        </div>

        <div className="submit-wrapper">
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>

      {successMessage && (
        <p className="success-message">
          {successMessage}
        </p>
      )}
    </section>
  );
}

export default ContactForm;