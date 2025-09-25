import { useState } from "react";
import { Button } from "@/components/ui/button";

export const QuoteForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    zip: "",
    message: "",
    consent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      alert(data.message);
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="bg-gradient-to-r from-green-900 via-green-700 to-green-600 p-[2px] rounded-xl shadow-lg w-full max-w-2xl">
      <div className="bg-white rounded-xl p-6 lg:p-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Get Your Free Estimate
        </h2>
        <p className="text-sm text-muted-foreground mb-6">All Fields Required</p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            type="text"
            placeholder="First Name"
            className="border-b p-2 focus:outline-none focus:border-green-600 col-span-1"
            required
          />
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            type="text"
            placeholder="Last Name"
            className="border-b p-2 focus:outline-none focus:border-green-600 col-span-1"
            required
          />
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type="tel"
            placeholder="Phone Number"
            className="border-b p-2 focus:outline-none focus:border-green-600 col-span-1"
            pattern="^[0-9]{10}$"
            title="Enter a valid 10-digit phone number"
            required
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Email Address"
            className="border-b p-2 focus:outline-none focus:border-green-600 col-span-1"
            required
          />
          <input
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            type="text"
            placeholder="Zip/Postal Code"
            className="border-b p-2 focus:outline-none focus:border-green-600 col-span-2"
            pattern="^[0-9]+$"
            title="Only numbers are allowed"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows={2}
            className="border-b p-2 focus:outline-none focus:border-green-600 col-span-2"
            required
          />

          <div className="flex items-start space-x-2 text-sm col-span-2">
            <input
              name="consent"
              type="checkbox"
              checked={formData.consent}
              onChange={handleChange}
              className="mt-1"
              required
            />
            <span>
              Yes, send me SMS updates on my estimate and promotions. Opt-out at
              any time by replying STOP. Data/text messaging rates may apply.
            </span>
          </div>

          <div className="col-span-2">
            <Button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3"
            >
              Request Estimate
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
