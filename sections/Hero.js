import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import ShowCase from "@/components/ShowCase"
import Testimonial from "@/components/Testimonial"
import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
import { BlogCard, Brand } from "@/components/router"
import React from "react"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <TitleLogo title='Perfect' caption='Pixel' className='logobg' />
          <h1 className='hero-title'>WE BUILD DIGITAL EXPERIENCES</h1>

          <div className='sub-heading'>
            <TitleSm title='WEBSITES' /> <span>.</span>
            <TitleSm title='APPS' /> <span>.</span>
            <TitleSm title='DIGITAL MARKETING' />
          </div>
        </div>
      </section>
      <section className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='The last digital agency you ll ever need' />
            <p>Experience cutting-edge web design and development with our expert team. We craft innovative, tailored digital solutions to elevate your brand. From concept to launch, we&apos;re the only agency you'll ever need.</p>
          </div>
          <div className='hero-content grid-4'>
            {home.map((item, i) => (
              <div className='box' key={i}>
                <span className='green'>{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      <Banner />
      <Testimonial />
      <ShowCase />
      <Brand />

      {/* <div className='text-center'>
        <Title title='Latest news & articles' />
      </div>
      <BlogCard /> */}
    </>
  )
}

export default Hero
