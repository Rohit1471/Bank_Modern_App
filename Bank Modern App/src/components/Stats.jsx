import React from 'react'
import { stats } from '../constants'

function Stats() {
  return (
    <section className='stats_section section_space'>
      <div className="stats_outer">
        <div className="wrapper">
          <div className="stats_inner flex align_center gap20 space_between">
            {stats.map((stat)=>(
              <div key={stat.id} className='stat_container flex align_center gap25'>
                <div className='stat_title'>
                  <h4>{stat.value}</h4>
                </div>
                <div className='stat_description transparent_text uppercase'>
                  <p>{stat.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats