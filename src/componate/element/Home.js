import React from 'react'
import './homeStyle.css'
import './homeStyleForMobile.css'

// Import all Picture
import myPic from './image/MyPic.jpg'
import bitEmoji from './DEv.png'

import pro1 from './image/pic1.jpg'
import pro2 from './image/pic2.jpg'
import pro3 from './image/pic3.jpg'
import pro4 from './image/pic4.jpg'
import NavHead from './NavHead'


function Home() {


    return (
        <div className='TotalHomeView'>
            {/* This Head Profilw  start*/}
            <div className="myProfileHead">
                <NavHead />
                <div className="titleAnimation">
                   <p className='heyDev'>👋Hii| I'm DeB</p> 
                </div>
                <div className="profileDiv">
                    <div className="muPhoto">
                        <img className='profilePic' src={myPic} alt="myProfilePic" />
                    </div>
                    <div className="profileHead">
                        <h1 className='MeData'>React Js / Android Developer</h1>
                        <h3 className='placeEd'>Based in Odiash,India </h3>
                    </div>
                </div>
            </div>
            {/* This Head Profilw  End*/}

            <div className="elonDg">
                <h1 className='goldMusk'>A well thought out critique of whatever you’re doing is as valuable as gold.</h1>
                <h1 className='elonMk'>-Elon Musk</h1>
            </div>
            <hr className='hrOne' />
            {/* This Head Service  start*/}
            <div className="servicesView" id='TotalServices'>
                <h1 className='serviceIT'>My services</h1>
                <h3 className='workMate'>The most creative workmate.</h3>

                <div className="servisAndSkil">
                    <div className="skilImg">
                        <div className="skilDivOne">
                            <div className="androidLogo">
                                <i class="fa-brands fa-android fa-7x"></i>
                            </div>
                            <div className="githubLogo">
                                <i class="fa-brands fa-github fa-4x"></i>
                            </div>
                        </div>
                        <br />
                        <div className="bitEmojiImage">
                            <img className='bitEmojiImage' src={bitEmoji} alt='skillBitEmoji' />
                        </div>
                        <br />
                        <div className="skilDivTwo">
                            <div className="pythonLogo">
                                <i class="fa-brands fa-python fa-2x"></i>
                            </div>
                            <div className="reactLogo">
                                <i class="fa-brands fa-react fa-3x"></i>
                            </div>
                            <div className="codeLogo">
                                <i class="fa-solid fa-code fa-6x"></i>
                            </div>

                        </div>
                    </div>
                    <div className="serviceDevlopment">
                        <div className="skilIT">
                            <p className='skillITDiv1'><i class="fa-solid fa-feather-pointed"></i>Developer Skills</p>
                            <p className='ParaAppDevIT'>A great knowledge of HTML / CSS, React.js and other programming language,.
                                I make responsive application with interactive UI's designs.</p>
                        </div>
                        <div className="websiteIt">
                            <p className='skillITDiv2'><i class="fa-brands fa-react"></i>Website Development</p>
                            <p className='ParaAppDevIT'>Web development is the work involved in developing a website for the Internet or an intranet.
                                Web development can range from developing a simple single static page of plain text to complex web applica…</p>
                        </div>
                        <div className="appDevIT">
                            <p className='skillITDiv3'><i class="fa-solid fa-mobile"></i>App Development</p>
                            <p className='ParaAppDevIT'>Mobile app development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants,
                                enterprise digital assistants or mobile phones. These software …</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* This Service End*/}
            <hr className='hrTwo' />
            {/* This is My projects View Div */}

            <div className="ProjectView" id='myProjectView'>
                <h1 className='myProHead'><i class="fa-solid fa-diagram-project"></i>My projects</h1>

                <div className="projectPoster">
                    <div className="newsPro">
                        <img className='proPic' src={pro1} alt="" />
                        <h3 className="pro">News Project</h3>
                    </div>
                    <div className="voiceRecogNi">
                        <img className='proPic' src={pro2} alt="" />
                        <h3 className="pro">Voice recognition</h3>
                    </div>
                    <div className="noteMak">
                        <img className='proPic' src={pro3} alt="" />
                        <h3 className="pro">Note Making</h3>
                    </div>
                    <div className="nateflixCl">
                        <img className='proPic' src={pro4} alt="" />
                        <h3 className='pro'>Netflix Clone</h3>
                    </div>
                </div>


                <div className="upcomingPro">
                    <h1 className='comingProjectHead'>-feature Project coming soon</h1>
                    {/* <div className="gitIcon">
                        <i class="fa-brands fa-github fa-10x"></i>
                    </div> */}

                </div>
            </div>
            {/* End of project View */}
            <hr className='hrThree' />
            {/* All About o me  */}
            <div className="aboutMe" id='AllAboutMe'>
                <h1 className='headAbout'>About me</h1>
                <h1 className='welcomeDev'>Welcome to DeB World</h1>
                <h1 className='aboutName'>Hi I'm Debabrata </h1>
                <p className='paraAbout'>I'm Debabrat a Full Stack Web Developer and Android Devloper.
                    I Spend most of time coding outstanding projects or Click
                    some Interesting pictures and Watching Movie.</p>
                <div className="allAboutMe">
                    <div className="mainSkill">
                        <h3 className='skillHead'>Main Skill’s</h3>
                        <div className="skillMain">
                            <p>-React Js</p>
                            <p>-HTML,CSS,JS</p>
                            <p>-Android Development</p>
                            <p>-Python</p>
                            <hr />
                            <p>-Adobe Photoshop</p>
                            <p>-Adobe Premiere pro</p>
                        </div>
                    </div>
                    <div className="education">
                        <h3 className='skillHead'>Education &  Certification</h3>
                        <div className="educationAllAbout">
                            <p>-B.TECH : Gandhi Institute For Technology(Bhubaneswer)</p>
                            <p>2023</p>
                            <p>-BSe: Tetrahedron Junior Science College(Cuttack)</p>
                            <p>2019</p>
                            <p>-Android Development: Internshala Trainings Learn new-age skills</p>
                            <p>(Internship)</p>
                            <p>-React JS:  IIG Varsity</p>
                            <p>(Internship)</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* About Me is end */}

            <hr className='hrFour' />

            <div className="contactMe" id='contactMePage'>
                <h1 className='workToget'>Let's work together!</h1>
                <h1 className='contactMetittle'>Contact me</h1>
                <div className="btnContact">
                    <a href="https://www.instagram.com/_debabrata._giri._/">
                      <button  className='contactBtn'>Contact Me:,</button>  
                    </a>
                    
                </div>
            </div>
            <hr className='hrFive' />
            {/* End of Contact Page */}
            <div className="endSocialDiv">
                <div className="meName">
                    <h2>@_debabrata._giri._</h2>
                </div>
                <div className="socialIcon">
                    <a href="https://www.facebook.com/ddebabrata.giri/"><i class="fa-brands fa-facebook fa-3x"></i></a>
                    <a href="https://github.com/Debabrata-Giri-2001"><i class="fa-brands fa-github fa-3x"></i></a>
                    <a href="https://www.instagram.com/_debabrata._giri._/"><i class="fa-brands fa-instagram fa-3x"></i></a>
                    <a href="https://www.linkedin.com/in/debabrata-giri-587b6b233/"><i class="fa-brands fa-linkedin fa-3x"></i></a>
                    <a href="mailto:debabratagiri5525@gmail.com"><i class="fa-solid fa-envelope fa-3x"></i></a>
                    <a href="https://twitter.com/debabrata__giri"><i class="fa-brands fa-twitter fa-3x"></i></a>
                </div>
            </div>
            {/* <hr className='hrSix' /> */}
        </div>
    )
}

export default Home;
