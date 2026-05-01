import "./page.css";

export const metadata = {
  title: "Terms of Service | Crossover Global Travel",
  description: "Read our terms of service to understand the rules and regulations for using our travel services.",
};

export default function TermsOfService() {
  return (
    <main className="legal-page">
      
      {/* Header */}
      <section className="legal-header">
        <div className="container">
          <h1>Terms of Service</h1>
          <p>Last Updated: April 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="legal-content">
        <div className="container">
          <div className="legal-body">
            
            <h2>1. Agreement to Terms</h2>
            <p>By accessing or using the services provided by Crossover Global Travel, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>

            <h2>2. Travel Services</h2>
            <p>Crossover Global Travel acts as an agent for third-party travel providers (airlines, hotels, tour operators). While we strive for accuracy, all bookings are subject to the terms and conditions of these third-party providers.</p>
            <ul>
              <li><strong>Bookings:</strong> All bookings are subject to availability at the time of processing.</li>
              <li><strong>Pricing:</strong> Prices are subject to change until the booking is confirmed and fully paid.</li>
              <li><strong>Documentation:</strong> It is your responsibility to ensure you have valid passports, visas, and health documents required for your travel.</li>
            </ul>

            <h2>3. Payments and Refunds</h2>
            <p>Payment terms vary depending on the specific service or package booked. Our refund policy is as follows:</p>
            <ul>
              <li><strong>Cancellations:</strong> Cancellation fees apply as per the policy of the specific airline, hotel, or tour provider.</li>
              <li><strong>Refunds:</strong> Refunds, where applicable, will be processed according to the timeline of the third-party providers, which may take 30-90 days.</li>
              <li><strong>Service Fees:</strong> Our consultation and service fees are generally non-refundable once the service has been rendered.</li>
            </ul>

            <h2>4. User Responsibilities</h2>
            <p>You agree to provide accurate, current, and complete information during the booking process. You are responsible for maintaining the confidentiality of any account details and for all activities that occur under your account.</p>

            <h2>5. Limitation of Liability</h2>
            <p>Crossover Global Travel shall not be liable for any injury, loss, claim, damage, or any special, exemplary, punitive, indirect, incidental or consequential damages of any kind which arises out of or is in any way connected with your travel.</p>

            <h2>6. Governing Law</h2>
            <p>These terms are governed by and construed in accordance with the laws of the jurisdiction in which our headquarters are located, without regard to its conflict of law principles.</p>

            <h2>7. Contact Information</h2>
            <p>For any questions regarding these Terms of Service, please contact us at:</p>
            <p>
              <strong>Crossover Global Travel</strong><br />
              <strong>GST No:</strong> 09AALCC2007R1Z9<br />
              <strong>Office Address:</strong> D-60, Sector-2, Noida, Uttar Pradesh, India<br /><br />
              <strong>Email:</strong> crossoversupport@gmail.com<br />
              <strong>Phone:</strong> +1 (888) 400-7136
            </p>

          </div>
        </div>
      </section>

    </main>
  );
}
