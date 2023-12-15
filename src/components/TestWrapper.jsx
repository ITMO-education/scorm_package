import { useState } from "react";

export function TestWrapper(props) {
	const [answer, setAnswer] = useState("")
	return (
		<div>
			<h1>{props.question}</h1>
			<div style={{display: "flex", flexDirection: "column"}}>
				{props.variants.map((v) => <div key={v}>
					<div
						style={{display: "flex", flexDirection: "row"}}
					>
						<input
							type="radio"
							name={props.question}
							onClick={() => setAnswer(v)}
						/>
						<div>{v}</div>
					</div>
				</div>)}
			</div>
			<button onClick={() => props.sendAnswer(answer)}>Отправить</button>
		</div>
	)
}
