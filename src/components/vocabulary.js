import React from "react"
import VocabularyName from "./vocabulary-name"

function Vocabulary(props) {
  const { memrise, Anki, ClozeMaster } = props
  return (
    <div>
      <h4>Total</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Words/Events</th>
            <th>Minutes</th>
            <th>Streak</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <VocabularyName>Memrise</VocabularyName>
            </td>
            <td>{memrise.events}</td>
            <td>{memrise.minutes}</td>
            <td>{memrise.streak}</td>
          </tr>
          <tr>
            <td>
              <VocabularyName>Anki</VocabularyName>
            </td>
            <td>{Anki.events}</td>
            <td>{Anki.minutes}</td>
            <td>{Anki.streak}</td>
          </tr>
          <tr>
            <td>
              <VocabularyName>ClozeMaster</VocabularyName>
            </td>
            <td>{ClozeMaster.events}</td>
            <td>X</td>
            <td>{ClozeMaster.streak}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Vocabulary
