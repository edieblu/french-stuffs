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
            <td>6199</td>
            <td>381</td>
            <td>20</td>
          </tr>
          <tr>
            <td>
              <VocabularyName>Anki</VocabularyName>
            </td>
            <td>2401</td>
            <td>294</td>
            <td>20</td>
          </tr>
          <tr>
            <td>
              <VocabularyName>ClozeMaster</VocabularyName>
            </td>
            <td>11621</td>
            <td>X</td>
            <td>17</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Vocabulary
