import './Projects.css'

import indicfood from '../../assets/images/projects/indicfood.webp'
import blackWhiteLab from '../../assets/images/projects/black-white-lab.webp'
import indicquiz from '../../assets/images/projects/quiz-app.webp'
import indic_products from '../../assets/images/projects/indic-products-app.webp'
import expenses from '../../assets/images/projects/expense-app.webp'
import shoe_company from '../../assets/images/projects/shoe-companyapp.webp'
// import explore_nation from '../../assets/images/projects/nation-app.webp'

import { FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="central-line"></div>
      <h2>Latest Works</h2>
      
      <div className="project black-white-lab right">
        <div className="project-intro">
          <h3 className="project-title"><a target='_blank' href="https://black-white-lab.vercel.app/">Black White Lab</a></h3>
          <a target='_blank' href="https://github.com/vijay-jadhav1997/black_white_lab" className="github-link">(Github - black_white_lab)</a>
          <p className="project-details">A web application that allows users to upload colorful images, converts them to black-and-white (grayscale), and displays the converted image back to the user.</p>
          <ul className='tech-stack'>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS (ES6+)</li>
            <li>React.js</li>
            <li>React Router DOM</li>
            <li>Tailwind CSS</li>
            <li>Python</li>
            <li>Django</li>
            <li>Django Rest Framework</li>
            <li>simple_jwt</li>
            <li>vite</li>
          </ul>
        </div>

        <div>
          <div className="project-img-wrapper">
            <span className="tooltip"><span></span><a target='_blank' href="https://indicfood.vercel.app/">BlackWhiteLab <FaExternalLinkAlt /></a> </span>
            <img src={blackWhiteLab} alt="BlackWhiteLab" />
          </div>
          <div className="connecting-line"><span></span></div>
        </div>
      </div>
      
      <div className="project indic-food left">
        <div>
          <div className="project-img-wrapper">
            <span className="tooltip"><span></span><a target='_blank' href="https://indicfood.vercel.app/">IndicFood <FaExternalLinkAlt /></a> </span>
            <img src={indicfood} alt="indic food" />
          </div>
          <div className="connecting-line"><span></span></div>
        </div>
        <div className="project-intro">
          <h3 className="project-title"><a target='_blank' href="https://indicfood.vercel.app/">Indic Food</a></h3>
          <a target='_blank' href="https://github.com/vijay-jadhav1997/react-projects/tree/main/indic_food" className="github-link">(Github - indic_food)</a>
          <p className="project-details">The Indic Food App is designed to bring the rich diversity of Indian cuisine to your fingertips from restaurants and hotels across India.</p>
          <ul className='tech-stack'>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS (ES6+)</li>
            <li>React.js</li>
            <li>Redux.js</li>
            <li>Parcel</li>
          </ul>
        </div>
      </div>

      <div className="project indic-quiz right">
        <div className="project-intro">
          <h3 className="project-title"><a target='_blank' href="https://indic-quiz-app.vercel.app/">Indic Quiz</a></h3>
          <a target='_blank' href="https://github.com/vijay-jadhav1997/indic-quiz-app" className="github-link">(Github - indic_quiz)</a>
          <p className="project-details">The Indic Quiz offers a variety of quizzes across different subjects, each with multiple levels. The application features a progressive unlocking system where users must achieve a minimum score to unlock higher levels. After completing a quiz, users are presented with a detailed scoreboard, including progress bars, a pie chart, and a scorecard.</p>
          <ul className='tech-stack'>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS (ES6+)</li>
            <li>Parcel</li>
          </ul>
        </div>
      
        <div>
          <div className="project-img-wrapper">
            <span className="tooltip"><span></span><a target='_blank' href="https://indic-quiz-app.vercel.app/">IndicQuiz <FaExternalLinkAlt /></a> </span>
            <img src={indicquiz} alt="indic food" />
          </div>
          <div className="connecting-line"><span></span></div>
        </div>
       
      </div>
      
      <div className="project indic-product left">
        <div>
          <div className="project-img-wrapper">
            <span className="tooltip"><span></span><a target='_blank' href="https://vijayjadhav1997.pythonanywhere.com/">Indic Products <FaExternalLinkAlt /></a> </span>
            <img src={indic_products} alt="Explore Nation" />
          </div>
          <div className="connecting-line"><span></span></div>
        </div>
        <div className="project-intro">
          <h3 className="project-title"><a target='_blank' href="">Indic Products</a></h3>
          <a target='_blank' href="https://github.com/vijay-jadhav1997/E-Commerce.git" className="github-link">(Github - Indic_Products)</a>
          <p className="project-details">Indic Products, a Django-based e-commerce platform where users can create accounts to buy and sell various products. The platform supports seamless product listings, secure transactions, and personalized experiences for both buyers and sellers.</p>
          <ul className='tech-stack'>
            <li>Python</li>
            <li>Django</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS (ES6+)</li>
          </ul>
        </div>
      </div>
      
      <div className="project track-expenses right tab">
        <div className="project-intro">
          <h3 className="project-title"><a target='_blank' href="https://track-your-expenses-livid.vercel.app/">Track Your Expenses</a></h3>
          <a target='_blank' href="https://github.com/vijay-jadhav1997/react-projects/tree/main/track-your-expenses" className="github-link">(Github - track_your_expenses)</a>
          <p className="project-details">Track Your Expenses is a modern React application designed to help users manage their expenses efficiently. The application supports adding, deleting, updating, and clearing expenses, as well as filtering and sorting by various criteria.</p>
          <ul className='tech-stack'>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS (ES6+)</li>
            <li>React</li>
            <li>vite</li>
          </ul>
        </div>
        
        <div>
          <div className="project-img-wrapper">
            <span className="tooltip"><span></span><a target='_blank' href="https://track-your-expenses-livid.vercel.app/">Track Expenses <FaExternalLinkAlt /></a> </span>
            <img src={expenses} alt="Track Expenses" />
          </div>
          <div className="connecting-line"><span></span></div>
        </div>
      </div>
      
      <div className="project shoe-company left tab">
        <div>
          <div className="project-img-wrapper">
            <span className="tooltip"><span></span><a target='_blank' href="https://tailwind-css-projects.vercel.app/">ShoeCompany <FaExternalLinkAlt /></a> </span>
            <img src={shoe_company} alt="Shoe Company" />
          </div>
          <div className="connecting-line"><span></span></div>
        </div>
        
        <div className="project-intro">
          <h3 className="project-title"><a target='_blank' href="https://tailwind-css-projects.vercel.app/">Shoe Company</a></h3>
          <a target='_blank' href="https://github.com/vijay-jadhav1997/Tailwind_CSS_Projects" className="github-link">(Github - shoe_company)</a>
          <p className="project-details">This project involves coding a fully responsive landing page of a shoe company from figma design using Tailwind CSS.</p>
          <ul className='tech-stack'>
            <li>HTML</li>
            <li>CSS</li>
            <li>Tailwind CSS</li>
            <li>Parcel</li>
          </ul>
        </div>
      </div>

    </section>
  )
}

export default Projects