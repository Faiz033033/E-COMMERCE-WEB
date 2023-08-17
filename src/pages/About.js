import React from "react";
import design from "./about.jpg";
import "./About.css";
import "font-awesome/css/font-awesome.min.css";
const About = () => {
  return (
    <div>
      <div className="title">
        <h1>The Sharpner Store</h1>
      </div>
      <h1>About</h1>
      <div className="content">
        <img className="about-image" src={design} alt="design" />
        <p>
          Welcome to The Sharpner Store, your one-stop destination for all
          things trendy and stylish. With a passion for fashion and a commitment
          to quality, we curate a diverse collection of the latest apparel,
          accessories, and lifestyle products that cater to your unique tastes.
          Our mission is to provide you with an unparalleled shopping
          experience, where you can discover and express your personal style
          effortlessly. Explore our carefully selected range of products,
          designed to inspire confidence and individuality. Join us on a journey
          of fashion and self-expression, where every click brings you closer to
          a world of elegance and innovation. Shop with us today and embrace a
          new way of defining your style!Discover a World of Style and Elegance
          at Sharpner Store. At the heart of our platform lies a passion for
          fashion, a commitment to quality, and a dedication to delivering an
          exceptional shopping journey. We invite you to embark on an exciting
          adventure through our virtual aisles, where every click brings you
          closer to a curated selection of fashion-forward apparel, accessories,
          and lifestyle products. Founded with a vision to redefine online
          shopping, Sharpner Store is a hub of creativity, where trends meet
          tradition and innovation intertwines with timeless elegance. Our team
          of fashion enthusiasts scours the globe to bring you a meticulously
          chosen collection that not only resonates with the latest styles but
          also embodies the diverse expressions of modern aesthetics.
        </p>
      </div>
      <footer>
        <div>
          <h1>The Sharpner Store</h1>
        </div>
        
      </footer>
    </div>
  );
};

export default About;
