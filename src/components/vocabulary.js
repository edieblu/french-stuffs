import React from "react"
import VocabularyName from "./vocabulary-name"

function Vocabulary() {
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
            <td>8195</td>
            <td>482</td>
            <td>25</td>
          </tr>
          <tr>
            <td>
              <VocabularyName>Anki</VocabularyName>
            </td>
            <td>3040</td>
            <td>363</td>
            <td>25</td>
          </tr>
          <tr>
            <td>
              <VocabularyName>ClozeMaster</VocabularyName>
            </td>
            <td>15285</td>
            <td>X</td>
            <td>21</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Vocabulary
