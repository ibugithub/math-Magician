import { useState } from 'react';
import calculate from '../logic/calculate';
import Button from './button';

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
              <Button click={handleButtonClick} text="AC" />
            </td>
            <td>
              <Button click={handleButtonClick} text="+/-" />
            </td>
            <td>
              <Button click={handleButtonClick} text="%" />
            </td>
            <td className="orangeBg">
              <Button click={handleButtonClick} text="÷" />
            </td>
          </tr>
          <tr className="numbers">
            <td>
              <Button click={handleButtonClick} text="7" />
            </td>
            <td>
              <Button click={handleButtonClick} text="8" />
            </td>
            <td>
              <Button click={handleButtonClick} text="9" />
            </td>
            <td className="orangeBg">
              <Button click={handleButtonClick} text="x" />
            </td>
          </tr>
          <tr className="numbers">
            <td>
              <Button click={handleButtonClick} text="4" />
            </td>
            <td>
              <Button click={handleButtonClick} text="5" />
            </td>
            <td>
              <Button click={handleButtonClick} text="6" />
            </td>
            <td className="orangeBg">
              <Button click={handleButtonClick} text="-" />
            </td>
          </tr>
          <tr className="numbers">
            <td>
              <Button click={handleButtonClick} text="1" />
            </td>
            <td>
              <Button click={handleButtonClick} text="2" />
            </td>
            <td>
              <Button click={handleButtonClick} text="3" />
            </td>
            <td className="orangeBg">
              <Button click={handleButtonClick} text="+" />
            </td>
          </tr>
          <tr className="numbers">
            <td colSpan="2">
              <Button click={handleButtonClick} text="0" />
            </td>
            <td>
              <Button click={handleButtonClick} text="." />
            </td>
            <td className="orangeBg">
              <Button click={handleButtonClick} text="=" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CalcStructure;
