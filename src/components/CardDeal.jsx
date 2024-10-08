import React from 'react'
import styles, { layout } from '../style'
import Button from './Button';
import { card } from '../assets';

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden' /> in few easy steps.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`} >
        Our card deal finder helps you find the best deals on credit cards, prepaid cards, and gift cards. Just enter your credit card or prepaid card details, and we'll show you the best deals available.
      </p>
      <Button styles='mt-10'/>
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className='w-[100%] h-[100%]' />
    </div>
  </section>
);

export default CardDeal
