import './App.css';

import { useState } from "react";
import { TheoryWidget } from "./widgets/TheoryWidget.jsx";
import { TestWidget } from "./widgets/TestWidget.jsx";
import { globalCount } from "./api/scorm.js";


function App() {
	const [isTheoryOpened, setTheoryOpened] = useState(true)
	const [score, setScore] = useState(globalCount)
	const [isTestOpened, setTestOpened] = useState(false)

	return (
		<div className="App">
			{
				score < 63 ?
					<>
					</>
					:
					<>
						{
							isTestOpened ? <></> : <button onClick={() => {
								setTheoryOpened(false)
								setTestOpened(true)
							}}>Практика</button>
						}
					</>
			}
			{isTheoryOpened ? <TheoryWidget score={score} setScore={setScore}/> :
				<TestWidget score={score} setScore={setScore}/>}
		</div>
	)
}

export default App;
