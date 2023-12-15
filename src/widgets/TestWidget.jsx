import { TestWrapper } from "../components/TestWrapper.jsx";
import { useState } from "react";
import { doneTests } from "../api/scorm.js";

export function TestWidget() {

	const [localScore, setLocalScore] = useState(0);
	const [questionBank] = useState([
		{
			text: "Биткоин был придуман как...",
			variants: ["Акт неповиновения", "Акт повиновения", "Одиночный акт"],
			rightAnswer: "Акт неповиновения",
		},
		{
			text: "Биткоин стремился заменить услуги, предоставляемые этими посредниками с помощью ...",
			variants: ["специального кода и криптографии", "распределения сетевых ресурсов по миру", "vpn соединений"],
			rightAnswer: "специального кода и криптографии",
		},
		{
			text: "В каком году анонимный хакер (или группа хакеров), под псевдонимом Сатоши Накамото, создал первую цифровую валюту?",
			variants: ["2009", "2008", "2010"],
			rightAnswer: "2009",
		},
		{
			text: "Когда майнер, добавляет новый блок, он должен предоставить ...?",
			variants: ["криптографическое доказательство транзакции", "свой приватный ключ", "свой публичный ключ", "подписанный сертификат"],
			rightAnswer: "криптографическое доказательство транзакции",
		},
		{
			text: "Что тратят майнеры на поддержку сети?",
			variants: ["Ресурсы (оборудование, электричество)", "Время", "Деньги"],
			rightAnswer: "Ресурсы (оборудование, электричество)",
		}
	])


	const [currentQ, setCurrentQ] = useState(0)

	const [testIsDone, setTestIsDone] = useState(false)

	return (
		<div>
			{!testIsDone ? currentQ < questionBank.length ? <TestWrapper
				question={questionBank[currentQ].text}
				variants={questionBank[currentQ].variants}
				sendAnswer={(answer) => {
					if (answer === questionBank[currentQ].rightAnswer) {
						setLocalScore(localScore + 1)
					}
					setCurrentQ(currentQ + 1)
				}}
			/> : <button onClick={() => {
					doneTests(questionBank.length, localScore)
					setTestIsDone(true)
				}}>Закончить</button>
				: <div>Спасибо! Это окно можно закрыть</div>
			}

		</div>
	)
}
