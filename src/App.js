import { useState, useEffect } from "react";
import { MDBRow, MDBCol, MDBListGroup, MDBBtn } from "mdb-react-ui-kit";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Quiz from "./components/Quiz";
import { data, prizeMoney } from "./data";
import Start from "./components/Start";

function App() {
	const [name,setName]=useState(null)
	const [questionNumber, setQuestionNumber] = useState(1);
	const [timeOut, setTimeOut] = useState(false);
	const [earned, setEarned] = useState("₹ 0");
  
	useEffect(() => {
		questionNumber > 1 &&
			setEarned(
				prizeMoney.find((item) => item.id === questionNumber - 1).amount
			);
	}, [questionNumber]);
	return (
		<div className="App">
		{!name ? (<Start setName={setName} setTimeOut={setTimeOut}/>):(
			<div className="container d-flex align-items-center justify-content-center">
				<div className="row">
					<div className="col-md-12">
						<div className="main">
							{timeOut ? questionNumber -1 === data.length ? (<div className="winner"><div>Congratulations!</div>You Earned Total:<span className="earned_money"> {earned}</span></div>) :(
               
								<h1 className="earned" style={{color:'red'}}>Sorry! Better Luck Next Time</h1>
               
							) : (
								<>
									<div style={{ height: "50%" }}>
										<Quiz
											data={data}
											questionNumber={questionNumber}
											setQuestionNumber={setQuestionNumber}
											setTimeOut={setTimeOut}
										/>
									</div>
								</>
							)}
						</div>
					</div>
					
				</div>
			</div>
		)}
			
		</div>
	);
}

export default App;
