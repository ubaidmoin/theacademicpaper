 
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
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

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));


function Prices() {
    const classes = useStyles();

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
        document.title = "The Academic Paper - FAQs"
      }, [])
      
    return (
        <>
            {/* <IndexNavbar /> */}
            <SectionNavbar />
            <div style={{ marginTop: 120 }}>

            </div>
            <h2 align="center" style={{ fontWeight: 'bold' }}>FAQs</h2>
            <div className={classes.root}>
                <Container>
                    <Row>
                        <Col>
                            <h4 style={{ fontWeight: 'bold', marginBottom: 20 }}>Questions about our products</h4>
                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className={classes.heading}>What kinds of writing services do you provide?</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                        We provide primarily academic writing services. This includes essays, research papers, lab reports, and term papers. We also help students with admissions and scholarship essays. Graduate students frequently come to us for help with dissertation and thesis work. Finally, we also provide resume and CV writing services, along with business content writing.
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography className={classes.heading}>How Long Does it Take to Finish a Writing Project?</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                        This depends. A basic homework assignment might take less than an hour. Thesis and dissertation services may take several months. Likewise, editing a resume will go much faster than writing one from scratch. When you place your order we will try to provide you with as accurate a time estimate as possible.
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography className={classes.heading}>Who do You Write For?</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                        We write primarily for secondary and university level students. This includes students pursuing high-level degrees. We also write for business professionals and job seekers.
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography className={classes.heading}>What About Editing And Proofreading?</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                        We are happy to provide proofreading and editing services. In most cases the turnaround time on these is quite rapid.
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h4 style={{ fontWeight: 'bold', marginBottom: 20 }}>Questions about TheAcademicPaper procedures</h4>
                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className={classes.heading}>How do I request revisions?</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                    Contact customer service or fill out the form provided to you when you receive your completed document.
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography className={classes.heading}>Can Someone Steal my Information?</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                    We guarantee that both your personal and financial information is safe. In addition to this, we do not provide this information to any third parties.
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography className={classes.heading}>How do You Guarantee Originality?</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                    We use a plagiarism scanner to check all documents for complete originality. We also ensure that our staff is educated on the rules regarding quoting and citing sources.
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography className={classes.heading}>Can Others Find Out That I am Using This Service?</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                    If you don’t tell anybody that you are using our services, neither will we. In fact, we take special steps to ensure that the charges that show up on your bank or debit card statement will not reveal the fact that you are using an academic writing service.
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>                            
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h4 style={{ fontWeight: 'bold', marginBottom: 20 }}>Questions about discounts and pricing</h4>
                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className={classes.heading}>Are Prices Negotiable?</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                    Absolutely! Please check out our discounts page or speak to one of our representatives. We can also send you information about special discount offers. Chances are good that if you place an order with  us right now, there is a discount you can apply to your order.
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography className={classes.heading}>What About Discounts?</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                    We guarantee that both your personal and financial information is safe. In addition to this, we do not provide this information to any third parties.
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography className={classes.heading}>How will I know How Much This Will Cost?</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                    We provide the cost of your order at the time that you place it. If additional costs are accrued, we will let you know and wait for your approval before continuing with your order.
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>                                                        
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h4 style={{ fontWeight: 'bold', marginBottom: 20 }}>Questions about our writers and reps</h4>
                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className={classes.heading}>Who do I Contact With Questions?</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                    If you have a general question about our products, services, or policies please contact a customer service representative. If you have questions about a writing project that is currently in progress, please contact your writer directly. Complaints should also be directed to customer service reps as they will be able to connect you with the person most qualified to assist you.
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography className={classes.heading}>How Are Writers Selected?</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                    We use a rigorous selection and training process when hiring new writers. When you place an order with us, your writer is selected based upon the subject matter, academic level, and deadline. Be assured that any writer we use has both academic and real world experience that more than qualifies them.
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography className={classes.heading}>Can I Request a Specific Writer?</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                    Absolutely! There is a space on our order form to provide us with this information. We will do everything that we can to honor these requests.
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <ExpansionPanel style={{marginBottom: 20}}>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography className={classes.heading}>Additional Questions</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                    If you have any other questions, please contact us. We are always available to provide any answers that you need.
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>                           
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
