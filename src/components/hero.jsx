import * as React from "react";
import { StaticImage } from "gatsby-plugin-image"
import { hero, inner } from '../components/hero.module.css'

export function Hero() {
    return (
      <div className={hero}>
        {/* You can use a GatsbyImage component if the image is dynamic */}
        <StaticImage
          layout="fullWidth"
          aspectRatio={16/7}
          alt="Hero image"
          src={
            "../../static/hero.jpg"
          }
          formats={["auto", "webp", "avif"]}
        />
          {/* <div className={inner}>
            <h1>Hero text</h1>
            <a href="">sdfds</a>
          </div> */}
        </div>
    )
  }