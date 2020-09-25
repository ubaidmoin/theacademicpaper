 
import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import SectionNavbar from "components/Navbars/SectionNavbar";
import DemoFooter from "components/Footers/DemoFooter.js";
import SectionDownload from "views/index-sections/SectionDownload.js";
import {PageView, initGA} from '../settings/ReactGA';

function Prices() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });

  React.useEffect(() => {
    initGA('UA-163347648-1');
    PageView();
    document.title = "The Academic Paper - Services"
  }, [])
  
  return (
    <>
      {/* <IndexNavbar /> */}
      <SectionNavbar />
      <div style={{ marginTop: 120 }}>

      </div>
      <h2 align="center" style={{ fontWeight: 'bold' }}>Services</h2>
      <div className="main">
        <Container>
          <Row>
            <Col>
              <h4 style={{ fontWeight: 'bold' }}>Assignments</h4>
              <p>Routine homework and academic assignments at affordable prices. Give us your high school, college, university, or grad school assignment and a subject matter expert will get it done quickly and painlessly. Better grades can be yours without stress!</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4 style={{ fontWeight: 'bold' }}>Essays</h4>
              <p>Applying to college? Making an employment application? We specialize in writing dynamic and engaging personal statements and application essays. Our academic writers are experts at original compositions, creative writing, and literary analysis.</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4 style={{ fontWeight: 'bold' }}>Dissertations</h4>
              <p>The majority of our writers have advanced degrees and years of Ph.D.-level research & writing experience. They know what dissertation committees want. They’ll do the research and the writing and prepare you to defend your dissertation!</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4 style={{ fontWeight: 'bold' }}>Research Papers</h4>
              <p>Everyone on our writing team is an experts in academic research and in APA, MLA, Chicago, Harvard citation formats. Your project arrives fully-formatted and ready to submit. The research behind the writing is always 100% original, and the writing is guaranteed plagiarism-free.</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4 style={{ fontWeight: 'bold' }}>Term Papers</h4>
              <p>We deliver polished, flawless grammar and composition to guarantee the academic success of International and American Students. When you submit your paper, you can be confident that it’s written at the appropriate grade level and is ready to hand in to your teacher or professor. Better grades, less hassle!</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4 style={{ fontWeight: 'bold' }}>Non-Academic Custom Writing</h4>
              <p>Our seasoned business, internet blogging, and social media writers are true professionals with vast experience at turning words into action. Short deadlines under 24 hours are no problem for any correspondence, business plans, white papers, email marketing campaigns, and original, compelling web content. We have experienced, full-pro writers standing by to give you words that work for you!</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4 style={{ fontWeight: 'bold' }}>Editing & Proofreading</h4>
              <p>All academic and business writing simply has to have absolutely perfect grammar, punctuation, spelling, formatting, and composition. Our custom editorial and proofreading experts review your project with a detailed eye and with complete knowledge of all writing and style conventions. Proofreading sets any writing apart from “acceptable” and makes it exceptional.</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4 style={{ fontWeight: 'bold' }}>Thesis Writing</h4>
              <p>Masters Degree level research & writing by skilled writers who have earned graduate degrees in your subject matter. All citations and writing are 100% original. Your thesis is delivered to you ready to submit for faculty review. You can stand behind our writing and research with complete confidence.</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4 style={{ fontWeight: 'bold' }}>Nursing Assignments</h4>
              <p>Nursing Assignment Help for Improved Academic Performance.
Nursing is one of the few professions that allow you to make a difference to someone’s life. Nursing courses prepare you to face the tough challenges that come with working on the front lines in medicine. Once you become a nurse, you will be in direct contact with patients who’ll remember you long after being treated. Although the job makes you feel good, it requires extreme diligence, hard work and dedication. Even before you become a nurse, beating the challenges of nursing courses is even harder. Most nursing students complain that they do not have enough time. Also, they find it hard to stay organized with classes, assignments, workshops and practice sessions. Completing a nursing assignment may thus become tedious. Clubbed with the lack of time, it will only induce stress and worsen the academic performance of a student.</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4 style={{ fontWeight: 'bold' }}>Law Assignments</h4>
              <p>A degree in law is one of the most prestigious things a modern student can get. The majority of tasks in law entails using professional terminology, looking for solutions to legal cases, completing an in-depth analysis of criminal events, and other elements that are difficult to discuss without advanced knowledge of juridical principles and regulations. The thing is, this field differs from other studies significantly. How is it different from other disciplines? Writing a paper in this field of study requires a solid preparation and a variety of skills: from reading, comprehension, and writing, to research and analysis. Even the top students may need some professional help with law assignment. That is what our online writing company is ready to offer you.</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4 style={{ fontWeight: 'bold' }}>Book Report</h4>
              <p>The first day of college, you should have noticed the difference from high school. The people, the assignments, and your professor’s interactions with students are more intense. So it should be no surprise that a book report is no longer standard either. These are still a requirement and will be so for your continued educational career.

Let’s discuss how to write a book report effectively for college. If you want to save your time – ask our writers to help you!</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4 style={{ fontWeight: 'bold' }}>What is a Book Report</h4>
              <p>So far, you understand a book report to be a four or five paragraph summary of the book, proving to your teacher that you have read and understood the book. On a college level, it’s much more complex.
    Most Typical Book Report Topics
    When preparing your book report writing, of course, the most essential piece is discovering your book report topic. Many times your professor will indicate what topic you should write about. Other times, they will leave it up to the student.

Topics vary, including architecture, policies, performances, fashion, and other fields of literature. Don’t allow a topic to limit you. If there’s a listing assigned, select the one you have the greatest interest in or can learn more about. Here are 10 popular topics:</p>
              <ul style={{ fontWeight: 'bold' }}>
                <li>
                  The effect of capitalism
                </li>
                <li>
                  Building up the character
                </li>
                <li>Displacement</li>
                <li>Fate and free will
</li>
                <li>Injustice</li>
                <li>Knowledge versus ignorance
</li>
                <li>The complications of nationalism
</li>
                <li>Power of wealth
</li>
                <li>The illusion of progress
</li>
                <li>Technology in society – good or bad
</li>
                <li>Lab</li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4 style={{ fontWeight: 'bold' }}>Lab Report: What Are They?</h4>
              <p>Scientific research is done as group work. Individual scientists are responsible for performing experiments to test their hypotheses about different scientific phenomena.

Once all of the experiments are done, the researchers have the job of trying to persuade other individuals to either reject or accept their hypothesis by providing them with an interpretation of their data and findings.

The lab report is the primary tool used to try and convince others to join their side. If the results can withstand the harsh criticism of the public, they will end up becoming a widely accepted body of knowledge until someone is able to disprove them. Any lab report writer has to explain the experiment and methods of its realization, the results of this experiment and analyze them.

Because these reports are so labor-intensive, many people find themselves struggling to be able to get the reports done in time. That’s when many end up turning to someone else for lab report help to get the job done on time.</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4 style={{ fontWeight: 'bold' }}>Book Tips from Expert Writers to Create Lab Report</h4>
              <p>The major reason non-professional scholars fail to write a lab report is that they do not know where to start from. At The Academic Paper, we know that one should think of the structure of a custom lab report first hand.

Frequently, lab reports contain a title, abstract, introduction, materials, and methods, results, discussion and literature cited sections. Once our specialists have developed the lab reports outline, they begin filling in each part of the report with vital information. To make sure you have ample material to compile your report, follow our steps below:

<p style={{fontWeight:'bold'}}>Step 1.</p> Read through your lab manual to make sure you have a thorough understanding of what you need to do before beginning the experiment.
<p style={{fontWeight:'bold'}}>Step 2.</p> Consult with your supervisor as you go through the lab experiment.
<p style={{fontWeight:'bold'}}>Step 3.</p> Plan out the steps carefully with your lab partners. You don’t want to rush around trying to get everything done in a short amount of time. You could end up with inaccurate data in the process.
<p style={{fontWeight:'bold'}}>Step 4.</p> Record all of your findings carefully to make sure you have them right.Compare your notes with those of your partners.
<p style={{fontWeight:'bold'}}>Step 5.</p> Consult with your lab partners about everything that you are doing on your part of the project. You are to collaborate and be aware of each other`s progress in the project.
<p style={{fontWeight:'bold'}}>Step 6.</p> Think about your target audience. Take it beyond just your lab instructor.</p>
            </Col>
          </Row>
        </Container>
        <SectionDownload />
        <DemoFooter />
        {/* <SectionNavigation /> */}
      </div>
    </>
  );
}

export default Prices;
