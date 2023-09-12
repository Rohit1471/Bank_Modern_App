import React from 'react'
import Button from './Button'
import { features } from '../constants'




function TwoColumn(data) {
  return (
    <section className="two_column section_space">
    <div className="two_column_outer">
        <div className="wrapper">
            <div className="two_column_inner flex align_center space_between gap20">
                <div className="column column1">
                    <div className="two_column_heading mw622">
                        <h2>You do the business, we'll handle the money.</h2>
                    </div>
                    <div className="two_column_description pt20 mw513 secondary_color">
                        <p>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
                    </div>
                    <div className='button_container pt40'>
                        <Button btnText="Get Started" btnClass="button" btnLink="google.com" />
                    </div>
                    
                </div>
                <div className="column column2 mw470">
                    {features.map((feature, index) => (
                        <div key={feature.id} className="listCard flex gap30 align_center">
                            <div className="left mw40">
                                <img src={feature.icon} alt="#" />
                            </div>
                            <div className="right">
                                <div className="title">
                                    <h5>{feature.title}</h5>
                                </div>
                                <div className="description pt10 tertiary_color">
                                    <p>{feature.content}</p>
                                </div>
                            </div>
                        </div>                                        
                    ))}
                </div>
            </div>
        </div>
    </div>
    </section>  
  )
}

export default TwoColumn