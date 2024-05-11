import React from "react";
import LogoImage from "../assets/footer-logo.png"; // Ensure the path to your logo image is correct

const Footer = () => {
  return (
    <footer className="bg-white p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-start justify-between">
        {/* Logo and Description */}
        <div>
          <img src={LogoImage} alt="JoQbs Logo" className="w-20 mb-2" />
          <p>
            JoQbs is the largest talent platform in Southeast Asia and Taiwan
            for career development and recruitment.
          </p>
        </div>

        {/* Employer Links */}
        <div>
          <h3 className="font-semibold">Employer</h3>
          <ul className="mt-2">
            <li>
              <a href="#" className="text-black hover:text-blue-800">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-blue-800">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-blue-800">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Find Vacancy Based On */}
        <div>
          <h3 className="font-semibold">Find Vacancy Based On</h3>
          <ul className="mt-2">
            <li>
              <a href="#" className="text-black hover:text-blue-800">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-blue-800">
                Job Location
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-blue-800">
                Company Name
              </a>
            </li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h3 className="font-semibold">Address</h3>
          <p>hello@joqbs.com</p>
          <p>Jl. Setiabudhi No. 193 Sukasari, Bandung West Java, Indonesia</p>
        </div>
      </div>
      <div className="text-center text-sm mt-8">
        © 2024 Waseem Tasawar - All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
