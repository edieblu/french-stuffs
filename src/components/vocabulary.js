import React from "react"

function Vocabulary() {
  return (
    <div>
      <h2>Vocabulary</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Words/Points</th>
            <th>Minutes</th>
            <th>Streak</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {" "}
              <span
                style={{
                  color: `white`,
                  backgroundColor: `rgb(35, 174, 49)`,
                  padding: `5px`,
                  borderRadius: `2px`,
                }}
              >
                Memrise
              </span>
            </td>
            <td>135</td>
            <td>24</td>
            <td>1</td>
          </tr>
          <tr>
            <td>
              <span
                style={{
                  color: `white`,
                  backgroundColor: `black`,
                  padding: `5px`,
                  borderRadius: `2px`,
                }}
              >
                Anki
              </span>
            </td>
            <td>43</td>
            <td>4</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Vocabulary
