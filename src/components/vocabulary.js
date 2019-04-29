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
            <td>9528</td>
            <td>550</td>
            <td>28</td>
          </tr>
          <tr>
            <td>
              <VocabularyName>Anki</VocabularyName>
            </td>
            <td>3434</td>
            <td>395</td>
            <td>28</td>
          </tr>
          <tr>
            <td>
              <VocabularyName>ClozeMaster</VocabularyName>
            </td>
            <td>17465</td>
            <td>X</td>
            <td>24</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Vocabulary
