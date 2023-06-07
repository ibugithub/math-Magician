const CalcStructure = () => (
  <div>
    <div className="output-screen">
      0
    </div>
    <table className="numbers-container">
      <tr className="numbers">
        <td>AC</td>
        <td>+/-</td>
        <td>%</td>
        <td className="orangeBg">÷</td>
      </tr>
      <tr className="numbers">
        <td>7</td>
        <td>8</td>
        <td>9</td>
        <td className="orangeBg">&times;</td>
      </tr>
      <tr className="numbers">
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td className="orangeBg">-</td>
      </tr>
      <tr className="numbers">
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td className="orangeBg">+</td>
      </tr>
      <tr className="numbers">
        <td colSpan="2">0</td>
        <td> . </td>
        <td className="orangeBg">=</td>
      </tr>
    </table>

  </div>
);
export default CalcStructure;
