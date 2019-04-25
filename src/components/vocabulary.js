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
            <td>7796</td>
            <td>459</td>
            <td>24</td>
          </tr>
          <tr>
            <td>
              <VocabularyName>Anki</VocabularyName>
            </td>
            <td>2914</td>
            <td>352</td>
            <td>24</td>
          </tr>
          <tr>
            <td>
              <VocabularyName>ClozeMaster</VocabularyName>
            </td>
            <td>14553</td>
            <td>X</td>
            <td>20</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Vocabulary
