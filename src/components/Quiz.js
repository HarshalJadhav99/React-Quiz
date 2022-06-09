import React, { useState, useEffect } from "react";

const Quiz = ({ data, questionNumber, setQuestionNumber, setTimeOut }) => {
	const [question, setQuestion] = useState(null);
	const [selectedAnswer, setSelectedAnswer] = useState(null);
	const [className, setClassName] = useState("answer");

	useEffect(() => {
		if(questionNumber - 1 === data.length){
			setTimeOut(true)
		}
		setQuestion(data[questionNumber - 1]);
	}, [data, questionNumber,setTimeOut]);
const delay = (duration,callBack)=>{
    setTimeout(()=>{
        callBack()
    },duration)
}
    const handleClick = (item) =>{
        setSelectedAnswer(item);
        setClassName("answer active");

//         setTimeOut(()=>{
// setClassName(item.correct ? "answer correct" : "answer wrong");
//         },3000)
delay(100,()=>{
    setClassName(item.correct ? "answer correct" : "answer wrong");    
});
delay(100,()=>{
    if(item.correct){
        delay(300,()=>{
            setQuestionNumber((prev)=>prev+1);
            setSelectedAnswer(null)
        });
    }else{
        delay(100,()=>{
            setTimeOut(true);
        });
    }
})
}
const getRandomItem =(arr)=>{
	const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}
// const getRandomItem =(arr)=>{
// 	const randomIndex = Math.floor(Math.random() * arr.length);

//     // get random item
//     const item = arr[randomIndex];

//     return item;
// }
// var copy = array.slice(0);
//   return function() {
//     if (copy.length < 1) { copy = array.slice(0); }
//     var index = Math.floor(Math.random() * copy.length);
//     var item = copy[index];
//     copy.splice(index, 1);
//     return item;
//   };

const result = getRandomItem(data);
	return (
		<div className="quiz">
			<div className="question">{result?.question}</div>
			<div className="answers">
				{result?.answers.map((item) => (
					<div className={selectedAnswer === item ? className : "answer"} onClick={()=>!selectedAnswer && handleClick(item)}>
						{item.text}
					</div>
				))}
			</div>
		</div>
	);
};
export default Quiz;
