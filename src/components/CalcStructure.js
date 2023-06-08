import { useState } from 'react';
import calculate from '../logic/calculate';

const CalcStructure = () => {
  const [result, setResult] = useState('0');
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (event) => {
    const buttonValue = event.target.textContent;
    const updatedCalculatorData = calculate(calculatorData, buttonValue);
    setCalculatorData(updatedCalculatorData);

    // Update the result display
    if (updatedCalculatorData.operation) {
      if (updatedCalculatorData.next) {
        setResult(`${updatedCalculatorData.total.toString()
        }  ${updatedCalculatorData.operation.toString()}  ${updatedCalculatorData.next.toString()}`);
      } else {
        setResult(`${updatedCalculatorData.total.toString()}  ${updatedCalculatorData.operation}`);
      }
    } else if (updatedCalculatorData.next) {
      setResult(updatedCalculatorData.next.toString());
    } else if (updatedCalculatorData.total) {
      setResult(updatedCalculatorData.total.toString());
    } else {
      setResult('0');
    }
  };

  return (
    <div>
      <div className="output-screen">
        {result}
      </div>
      <table className="numbers-container">
        <tbody>
          <tr className="numbers">
            <td>
              <button type="button" onClick={handleButtonClick}>
                AC
              </button>
            </td>
            <td>
              <button type="button" onClick={handleButtonClick}>
                +/-
              </button>
            </td>
            <td>
              <button type="button" onClick={handleButtonClick}>
                %
              </button>
            </td>
            <td className="orangeBg">
              <button type="button" onClick={handleButtonClick}>
                ÷
              </button>
            </td>
          </tr>
          <tr className="numbers">
            <td>
              <button type="button" onClick={handleButtonClick}>
                7
              </button>
            </td>
            <td>
              <button type="button" onClick={handleButtonClick}>
                8
              </button>
            </td>
            <td>
              <button type="button" onClick={handleButtonClick}>
                9
              </button>
            </td>
            <td className="orangeBg">
              <button type="button" onClick={handleButtonClick}>
                x
              </button>
            </td>
          </tr>
          <tr className="numbers">
            <td>
              <button type="button" onClick={handleButtonClick}>
                4
              </button>
            </td>
            <td>
              <button type="button" onClick={handleButtonClick}>
                5
              </button>
            </td>
            <td>
              <button type="button" onClick={handleButtonClick}>
                6
              </button>
            </td>
            <td className="orangeBg">
              <button type="button" onClick={handleButtonClick}>
                -
              </button>
            </td>
          </tr>
          <tr className="numbers">
            <td>
              <button type="button" onClick={handleButtonClick}>
                1
              </button>
            </td>
            <td>
              <button type="button" onClick={handleButtonClick}>
                2
              </button>
            </td>
            <td>
              <button type="button" onClick={handleButtonClick}>
                3
              </button>
            </td>
            <td className="orangeBg">
              <button type="button" onClick={handleButtonClick}>
                +
              </button>
            </td>
          </tr>
          <tr className="numbers">
            <td colSpan="2">
              <button type="button" onClick={handleButtonClick}>
                0
              </button>
            </td>
            <td>
              <button type="button" onClick={handleButtonClick}>
                .
              </button>
            </td>
            <td className="orangeBg">
              <button type="button" onClick={handleButtonClick}>
                =
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CalcStructure;
