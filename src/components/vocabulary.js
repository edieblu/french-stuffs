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
            <td>866</td>
            <td>106</td>
            <td>4</td>
          </tr>
          <tr>
            <td>
              <VocabularyName>Anki</VocabularyName>
            </td>
            <td>314</td>
            <td>37</td>
            <td>4</td>
          </tr>
          <tr>
            <td>
              <VocabularyName>ClozeMaster</VocabularyName>
            </td>
            <td>143</td>
            <td>X</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Vocabulary
