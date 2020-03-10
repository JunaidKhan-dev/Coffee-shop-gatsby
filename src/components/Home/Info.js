import React from 'react'
import { Link } from 'gatsby'
import Title from '../Globals/Title/Title'
const Info = () => {
  return (
    <section className='py-5'>
      <div className='container'>
        <Title title='our story' />
        <div className='row'>
          <div className='col-10 col-sm-8 mx-auto text-center'>
            <p className='lead text-muted mb-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, beatae facere iusto ipsum consequatur consequuntur quam repudiandae nemo atque ipsam? Placeat unde enim ipsa perspiciatis, laudantium quae neque. Eveniet adipisci iste libero, optio atque sapiente nemo facere ipsa possimus laborum sunt voluptatum, architecto dolorum quae ipsam quam dolores quasi? Illum.
            </p>
            <Link to='/about/'>
              <button className='btn text-uppercase btn-yellow'>about page</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
