import React from 'react';
import '../styles/HeroSection.css';

function HeroSection() {
  return (
   <div class="hero">
  <div class="hero-content">
    <h1 class="hero-logo">BENGKERR</h1>
    <p class="hero-address">Layanan Bengkel Online | Jl. Menuju Surga No.9661, gang Jalur Vip, antahberantah, 89875</p>
    <a href="../pages/Services">
        <button className="order-button">Lihat Layanan</button>
        </a>   
  </div>
</div>

  );
}

export default HeroSection;
