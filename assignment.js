import styles from "../styles/Booking.module.css";

export default function BookingPage() {
  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <button className={styles.backButton}>← Back</button>
      </div>

      {/* Profile Section */}
      <div className={styles.profile}>
        <img
          src="/profile-placeholder.png"
          alt="Swetha Varma"
          className={styles.profileImage}
        />
        <div className={styles.profileInfo}>
          <h2>Mohanakrishnan M</h2>
          <p>cloud & data engineer</p>
          <p>₹1200/session</p>
        </div>
      </div>

      {/* About Me Section */}
      <div className={styles.section}>
        <h3>About Me</h3>
        <p>
          Mohanakrishnan is a licensed data engineer dedicated to guiding individuals
          through solve the problem skills.
        </p>
      </div>

      {/* Credentials Section */}
      <div className={styles.section}>
        <h3>Credentials</h3>
        <ul>
          <li>Bachelor of engineering,CARE college of engineering</li>
          <li>Certified AWS practioner,AWS</li>
          <li>5+ years of experience in software industry</li>
        </ul>
      </div>

      {/* Availability Section */}
      <div className={styles.section}>
        <h3>Available On</h3>
        <div className={styles.tags}>
          <span className={styles.tag}>Call</span>
          <span className={styles.tag}>Video</span>
        </div>
      </div>

      {/* Therapy Services */}
      <div className={styles.section}>
        <h3>I Offer demo session For</h3>
        <div className={styles.tags}>
          <span className={styles.tag}>low code</span>
          <span className={styles.tag}>high placement</span>
          <span className={styles.tag}>no fear</span>
          <span className={styles.tag}>Help support</span>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className={styles.section}>
        <h3>Client Testimonials</h3>
        <div className={styles.testimonial}>
          "Mohanakrishnan helped me to solve the problem of cloud"
        </div>
        <div className={styles.testimonial}>
          "Her sessions were insightful and transformative."
        </div>
      </div>
    </div>
  );
}
