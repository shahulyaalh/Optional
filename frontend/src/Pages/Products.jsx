"use client";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Products = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const products = [
    {
      id: "solar",
      title: "Solar Energy Solutions",
      shortDesc: "Harness clean, renewable energy for your home or business",
      longDesc:
        "Our solar energy solutions help you reduce electricity bills while contributing to a greener planet. We offer complete systems including high-efficiency panels, inverters, and batteries.",
      images: [
        "/images/panel.png",
        "/images/inverter.png",
        "/images/battery.png",
      ],
    },
  ];
};

export default Products;
