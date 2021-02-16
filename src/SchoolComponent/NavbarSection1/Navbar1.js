import React from 'react'
import { Link } from 'react-router-dom'
import { showmobiles } from '../../HomeComponent/data'
import { Navbar1links } from '../Datafile'
import './Navbar1.css'

const Navbar1 = () => {
    return (
        <div className="header-wrap1">
            <div className="header-section section-lg-wrap">
                <div className="row">
                    <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 head-follow">


                        <ul>
                            <li>
                                <Link to="/">Follow us</Link>
                            </li>
                            {showmobiles.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={item.href}>
                                            <i className={item.iclass}></i>
                                        </Link>
                                    </li>
                                )
                            })}

                        </ul>



                    </div>
                    <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 head-quick">
                        <ul>
                            {Navbar1links.map((item, index) => {
                                return (

                                    <li key={index}>
                                        <Link to={item.href}>{item.title}</Link>
                                    </li>

                                )
                            })}

                        </ul>






                    </div>
                    {/*<div class="sidebar quick-links"> 
                    <span class="cross-button">  </span>


                        <div class="quicklinks">
                            <h5 class="heading" >See Abbotsleigh</h5>
                            <ul>
                                <li>
                                    <a href="https://www.abbotsleigh.nsw.edu.au/enrolment/meet-the-registrar#VisitUs" >Book a tour</a>
                                </li>
                                <li>
                                    <a href="https://enrol.abbotsleigh.nsw.edu.au/request-a-prospectus" >Order a prospectus</a>
                                </li>
                                <li>
                                    <a href="/enrolment/how-to-apply/application-for-enrolment">Apply now</a>
                                </li>
                            </ul>
                        </div>
                        <div class="calendar">
                            <h5 class="heading" >Useful links</h5>
                            <ul>
                                <li>
                                    <a href="/contact-us#map">Contact us</a>
                                </li>
                                <li>
                                    <a href="https://public.abbotsleigh.nsw.edu.au/boarding/Pages/FormPage_Boarding.aspx" >Boarder leave request form</a>
                                </li>
                                <li>
                                    <a href="/enrolment/uniform-shop" >Uniform Shop (information)</a>
                                </li>
                                <li>
                                    <a href="/enrolment/before-and-after-school-care" >Before and After School Care</a>
                                </li>
                                <li>
                                    <a href="/student-life-learning/student-life" >AbbSchool</a>
                                    <a href="/student-life-learning/student-life" >&nbsp;(inc. Holiday Program)</a>&nbsp;
                                        </li>
                                <li>
                                    <a href="https://order.campion.com.au/index.html#resourceListListView?code=55AAE7E2" >SS Campion book ordering</a>
                                </li>
                                <li>
                                    <a href="/community" >Aquatic Centre</a>
                                </li>
                                <li>
                                    <a href="/enrolment/scholarships/scholarships">Scholarships</a>
                                </li>
                                <li>
                                    <a href="https://public.abbotsleigh.nsw.edu.au/web/Pages/FormPage_Visit.aspx?Source=%2Fweb%2FPages%2FSuccessPages%2FVisitSuccess.aspx" >Request a professional visit</a>
                                </li>
                                <li>
                                    <a href="https://public.abbotsleigh.nsw.edu.au/web/Pages/bs4FormPage_ExternalResearch.html">External research application</a>
                                </li>
                            </ul>
                        </div>
                        <div class="online-services">
                            <h5 class="heading" >Services</h5>
                            <ul>
                                <li>
                                    <a href="https://abbnet.spf1.abbotsleigh.nsw.edu.au" >AbbNet</a>
                                </li>
                                <li>
                                    <a href="https://abbnet.spf1.abbotsleigh.nsw.edu.au" >Parent Portal</a>
                                </li>
                                <li>
                                    <a href="/" >Office 365&nbsp;</a>
                                </li>
                                <li>
                                    <a href="/quick-links/news-events" >The Shuttle newsletter</a>
                                </li>
                                <li>
                                    <a href="https://www.flexischools.com.au/" >Lunch orders</a>
                                </li>
                                <li>
                                    <a href="https://www.flexischools.com.au/" >Uniform Shop (uniform orders)</a>
                                </li>
                                <li>
                                    <a href="mailto:registrar@abbotsleigh.nsw.edu.au">Update my details</a>
                                </li>
                                <li>
                                    <a href="https://order.campion.com.au/index.html#resourceListListView?code=55AAE7E2" >Resource Orders</a>
                                </li>
                            </ul>
                        </div>
                        <div class="online-services">
                            <h5 class="heading" >Pay online</h5>
                            <ul>
                                <li>
                                    <a href="https://quickweb.westpac.com.au/OnlinePaymentServlet3?communityCode=ABBOTSLEIGH&amp;supplierBusinessCode=ABBSCHOOL&amp;returnUrl=www.abbotsleigh.nsw.edu.au" >AbbSchool/Aquatic Centre</a>
                                </li>
                                <li>
                                    <a href="https://quickweb.westpac.com.au/OnlinePaymentServlet3?communityCode=ABBOTSLEIGH&amp;supplierBusinessCode=ELC&amp;returnUrl=www.abbotsleigh.nsw.edu.au">ELC payments&nbsp;</a>
                                </li>
                                <li>
                                    <a href="https://quickweb.westpac.com.au/OnlinePaymentServlet3?communityCode=ABBOTSLEIGH&amp;supplierBusinessCode=ENROLMENT&amp;returnUrl=www.abbotsleigh.nsw.edu.au" >E</a>
                                    <a href="https://quickweb.westpac.com.au/OnlinePaymentServlet3?communityCode=ABBOTSLEIGH&amp;supplierBusinessCode=ENROLMENT&amp;returnUrl=www.abbotsleigh.nsw.edu.au" >nrolment fees&nbsp;</a>
                                </li>
                                <li>
                                    <a href="https://quickweb.westpac.com.au/OnlinePaymentServlet3?communityCode=ABBOTSLEIGH&amp;supplierBusinessCode=AOGU&amp;returnUrl=www.abbotsleigh.nsw.edu.au" >Old Girl payments</a>
                                </li>
                                <li>
                                    <a href="https://quickweb.westpac.com.au/OnlinePaymentServlet3?communityCode=ABBOTSLEIGH&amp;supplierBusinessCode=OTHER&amp;returnUrl=www.abbotsleigh.nsw.edu.au">Other payments</a>
                                </li>
                                <li>
                                    <a href="https://quickweb.westpac.com.au/OnlinePaymentServlet3?communityCode=ABBOTSLEIGH&amp;supplierBusinessCode=FOUNDATION&amp;returnUrl=www.abbotsleigh.nsw.edu.au/giving" >Abbotsleigh Foundation</a>
                                </li>
                            </ul>
                        </div>



                    </div>

                    {/*<div class="skip-link">

                        <a href="#intro">Skip to main content</a>

                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Navbar1
