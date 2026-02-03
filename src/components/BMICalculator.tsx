'use client';

import { useState } from 'react';

export default function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [heightUnit, setHeightUnit] = useState('cm');
  const [weightUnit, setWeightUnit] = useState('kg');
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = () => {
    if (!height || !weight) return;

    let heightInMeters = parseFloat(height);
    let weightInKg = parseFloat(weight);

    // Convert height to meters if needed
    if (heightUnit === 'cm') {
      heightInMeters = heightInMeters / 100;
    } else if (heightUnit === 'ft') {
      heightInMeters = heightInMeters * 0.3048;
    }

    // Convert weight to kg if needed
    if (weightUnit === 'lbs') {
      weightInKg = weightInKg * 0.453592;
    }

    const bmiResult = weightInKg / (heightInMeters * heightInMeters);
    setBmi(Math.round(bmiResult * 10) / 10);
  };

  return (
    <div className="bg-gray-100 rounded-xl md:rounded-2xl p-4 md:p-8 w-full">
      <h2 className="text-lg md:text-3xl lg:text-4xl font-bold text-black mb-3 md:mb-4">
        BMI Calculator
      </h2>

      <div className="space-y-3 md:space-y-0 md:flex md:flex-row md:gap-8">
        {/* Body Characteristics Section */}
        <div className="bg-white rounded-lg p-4 md:p-5 md:flex-1 w-full">
          <h3 className="text-sm md:text-lg font-medium text-gray-900 mb-3">Body Characteristics</h3>
          
          <div className="flex flex-col md:flex-row items-stretch md:items-end gap-3 md:gap-4">
            {/* Height Input */}
            <div className="flex-1">
              <div className="flex border-b border-gray-300">
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="flex-1 px-3 py-2 md:px-4 md:py-3 border-0 bg-transparent focus:ring-0 focus:outline-none text-sm md:text-base"
                  placeholder="Height"
                />
                <select
                  value={heightUnit}
                  onChange={(e) => setHeightUnit(e.target.value)}
                  className="px-3 py-2 md:px-4 md:py-3 border-0 bg-transparent focus:ring-0 focus:outline-none text-sm md:text-base appearance-none"
                >
                  <option value="cm">cm</option>
                  <option value="ft">ft</option>
                </select>
              </div>
            </div>

            {/* Weight Input */}
            <div className="flex-1">
              <div className="flex border-b border-gray-300">
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="flex-1 px-3 py-2 md:px-4 md:py-3 border-0 bg-transparent focus:ring-0 focus:outline-none text-sm md:text-base"
                  placeholder="Weight"
                />
                <select
                  value={weightUnit}
                  onChange={(e) => setWeightUnit(e.target.value)}
                  className="px-3 py-2 md:px-4 md:py-3 border-0 bg-transparent focus:ring-0 focus:outline-none text-sm md:text-base appearance-none"
                >
                  <option value="kg">kg</option>
                  <option value="lbs">lbs</option>
                </select>
              </div>
            </div>

            {/* Calculate Button */}
            <button
              onClick={calculateBMI}
              className="w-full md:w-12 h-10 md:h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition-colors duration-200 disabled:opacity-50"
              disabled={!height || !weight}
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        </div>

        {/* BMI Result Section */}
        <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 md:w-32 flex flex-row md:flex-col items-center justify-between md:justify-center gap-4 md:gap-2">
          <h3 className="text-xs md:text-sm font-medium text-gray-900 md:mb-2">Your BMI Result</h3>
          <div className="flex items-center justify-center">
            {bmi !== null ? (
              <div className="text-center">
                <div className="text-2xl md:text-2xl font-bold text-gray-900">{bmi}</div>
                <div className="text-xs text-gray-600 mt-1">
                  {bmi < 18.5 && "Underweight"}
                  {bmi >= 18.5 && bmi < 25 && "Normal"}
                  {bmi >= 25 && bmi < 30 && "Overweight"}
                  {bmi >= 30 && "Obese"}
                </div>
              </div>
            ) : (
              <div className="text-3xl md:text-4xl text-gray-400">?</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 