#assignment.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Therapist Booking Page</title>
  <style>
    /* Include your CSS here */
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
      color: #333;
    }

    .container {
      max-width: 900px;
      margin: 20px auto;
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }

    .header {
      padding: 10px 20px;
      background-color: #007BFF;
      color: #fff;
      font-size: 18px;
    }

    .profile {
      display: flex;
      align-items: center;
      padding: 20px;
      border-bottom: 1px solid #ddd;
    }

    .profile img {
        <a href="https://th.bing.com/th/id/OIP.KJavbyxPhuZkw3fvzsiJiQHaE7?rs=1&pid=ImgDetMain">
      border-radius: 50%;
      width: 100px;
      height: 100px;
      margin-right: 20px;
    }

    .profile-info h2 {
      margin: 0;
      font-size: 22px;
    }

    .profile-info p {
      margin: 5px 0;
      color: #666;
    }

    .section {
      padding: 20px;
    }

    .section h3 {
      margin-top: 0;
      color: #007BFF;
      font-size: 18px;
    }

    .section ul {
      list-style: none;
      padding: 0;
    }

    .section ul li {
      margin-bottom: 10px;
    }

    .btn {
      display: inline-block;
      padding: 10px 20px;
      margin-top: 10px;
      background: #007BFF;
      color: #fff;
      text-decoration: none;
      border-radius: 5px;
      text-align: center;
    }

    .btn:hover {
      background: #0056b3;
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 10px;
    }

    .tag {
      background: #f1f1f1;
      color: #333;
      padding: 8px 12px;
      border-radius: 20px;
    }

    .testimonial {
      background: #f9f9f9;
      padding: 15px;
      border-left: 4px solid #007BFF;
      margin-top: 15px;
      font-style: italic;
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Header -->
    <div class="header">
      ← Back
    </div>

    <!-- Profile Section -->
    <div class="profile">
      <img src="https://images.unsplash.com/photo-1696505523865-84c7c9372901?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFzc3BvcnQlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D">
      <div class="profile-info">
        <h2>MOHANAKRISHNAN</h2>
        <p>Cloud and data engineer</p>
        <p>₹1200/session</p>
      </div>
    </div>

    <!-- About Me -->
    <div class="section">
      <h3>About Me</h3>
      <p>
        Mohanakrishnan is a licensed data engineer dedicated to guiding individuals
        through solve the problem skills.
      </p>
    </div>

    <!-- Credentials -->
    <div class="section">
      <h3>Credentials</h3>
      <ul>
        <li>Bachelor of engineering,CARE college of engineering</li>
        <li>Certified AWS practioner,AWS</li>
        <li>5+ years of experience in software industry</li>
      </ul>
    </div>

    <!-- Availability -->
    <div class="section">
      <h3>Available On</h3>
      <div class="tags">
        <span class="tag">Call</span>
        <span class="tag">Video</span>
      </div>
    </div>

    <!-- Therapy Services -->
    <div class="section">
      <h3>I Offer demo session For</h3>
      <div class="tags">
        <span class="tag">low code</span>
        <span class="tag">high placement</span>
        <span class="tag">no fear</span>
        <span class="tag">Help support</span>
      </div>
    </div>

    <!-- Testimonials -->
    <div class="section">
      <h3>Client Testimonials</h3>
      <div class="testimonial">
        "Mohanakrishnan helped me to solve the problem of cloud"
      </div>
      <div class="testimonial">
        "Her sessions were insightful and transformative."
      </div>
    </div>
  </div>
</body>
</html>
#assignment.css
/* General Styles */
.container {
    max-width: 900px;
    margin: 20px auto;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    font-family: Arial, sans-serif;
    color: #333;
  }
  
  /* Header */
  .header {
    padding: 10px 20px;
    background-color: #007BFF;
    color: #fff;
    font-size: 18px;
    display: flex;
    align-items: center;
  }
  
  .backButton {
    background: none;
    border: none;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
  }
  
  .backButton:hover {
    text-decoration: underline;
  }
  
  /* Profile Section */
  .profile {
    display: flex;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid #ddd;
  }
  
  .profileImage {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    margin-right: 20px;
    object-fit: cover;
  }
  
  .profileInfo h2 {
    margin: 0;
    font-size: 22px;
    color: #333;
  }
  
  .profileInfo p {
    margin: 5px 0;
    color: #666;
    font-size: 14px;
  }
  
  /* Sections */
  .section {
    padding: 20px;
  }
  
  .section h3 {
    margin-top: 0;
    color: #007BFF;
    font-size: 18px;
  }
  
  .section ul {
    list-style: none;
    padding: 0;
  }
  
  .section ul li {
    margin-bottom: 10px;
    color: #555;
    font-size: 14px;
  }
  
  /* Tags */
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 10px;
  }
  
  .tag {
    background: #f1f1f1;
    color: #333;
    padding: 8px 12px;
    border-radius: 20px;
    font-size: 14px;
    white-space: nowrap;
  }
  
  /* Testimonials */
  .testimonial {
    background: #f9f9f9;
    padding: 15px;
    border-left: 4px solid #007BFF;
    margin-top: 15px;
    font-style: italic;
    color: #555;
    font-size: 14px;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .profile {
      flex-direction: column;
      text-align: center;
    }
  
    .profileImage {
      margin-bottom: 10px;
    }
  
    .tags {
      justify-content: center;
    }
  }
  #assignment.js
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
