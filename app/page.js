'use client'

import { useState } from 'react'

const ZODIAC_SIGNS = [
  { name: 'Capricorn', dates: 'Dec 22 - Jan 19', emoji: '♑', color: 'from-gray-700 to-gray-900' },
  { name: 'Aquarius', dates: 'Jan 20 - Feb 18', emoji: '♒', color: 'from-blue-400 to-blue-600' },
  { name: 'Pisces', dates: 'Feb 19 - Mar 20', emoji: '♓', color: 'from-green-400 to-blue-500' },
  { name: 'Aries', dates: 'Mar 21 - Apr 19', emoji: '♈', color: 'from-red-500 to-orange-500' },
  { name: 'Taurus', dates: 'Apr 20 - May 20', emoji: '♉', color: 'from-green-600 to-green-800' },
  { name: 'Gemini', dates: 'May 21 - Jun 20', emoji: '♊', color: 'from-yellow-400 to-yellow-600' },
  { name: 'Cancer', dates: 'Jun 21 - Jul 22', emoji: '♋', color: 'from-orange-400 to-red-400' },
  { name: 'Leo', dates: 'Jul 23 - Aug 22', emoji: '♌', color: 'from-yellow-500 to-orange-500' },
  { name: 'Virgo', dates: 'Aug 23 - Sep 22', emoji: '♍', color: 'from-amber-600 to-yellow-600' },
  { name: 'Libra', dates: 'Sep 23 - Oct 22', emoji: '♎', color: 'from-pink-400 to-rose-500' },
  { name: 'Scorpio', dates: 'Oct 23 - Nov 21', emoji: '♏', color: 'from-purple-700 to-red-900' },
  { name: 'Sagittarius', dates: 'Nov 22 - Dec 21', emoji: '♐', color: 'from-purple-500 to-indigo-600' },
]

const ZODIAC_TRAITS = {
  Capricorn: {
    element: 'Earth',
    ruling: 'Saturn',
    traits: ['Disciplined', 'Responsible', 'Self-controlled', 'Good managers'],
    lucky: ['Friday', 'Number 8', 'Color: Brown'],
  },
  Aquarius: {
    element: 'Air',
    ruling: 'Uranus',
    traits: ['Independent', 'Intellectual', 'Humanitarian', 'Innovative'],
    lucky: ['Saturday', 'Number 4', 'Color: Blue'],
  },
  Pisces: {
    element: 'Water',
    ruling: 'Neptune',
    traits: ['Compassionate', 'Artistic', 'Intuitive', 'Gentle'],
    lucky: ['Thursday', 'Number 7', 'Color: Sea Green'],
  },
  Aries: {
    element: 'Fire',
    ruling: 'Mars',
    traits: ['Courageous', 'Determined', 'Confident', 'Enthusiastic'],
    lucky: ['Tuesday', 'Number 9', 'Color: Red'],
  },
  Taurus: {
    element: 'Earth',
    ruling: 'Venus',
    traits: ['Reliable', 'Practical', 'Devoted', 'Stable'],
    lucky: ['Friday', 'Number 6', 'Color: Green'],
  },
  Gemini: {
    element: 'Air',
    ruling: 'Mercury',
    traits: ['Adaptable', 'Outgoing', 'Intelligent', 'Curious'],
    lucky: ['Wednesday', 'Number 5', 'Color: Yellow'],
  },
  Cancer: {
    element: 'Water',
    ruling: 'Moon',
    traits: ['Protective', 'Intuitive', 'Sentimental', 'Persuasive'],
    lucky: ['Monday', 'Number 2', 'Color: Silver'],
  },
  Leo: {
    element: 'Fire',
    ruling: 'Sun',
    traits: ['Creative', 'Generous', 'Warm-hearted', 'Charismatic'],
    lucky: ['Sunday', 'Number 1', 'Color: Gold'],
  },
  Virgo: {
    element: 'Earth',
    ruling: 'Mercury',
    traits: ['Loyal', 'Analytical', 'Practical', 'Organized'],
    lucky: ['Wednesday', 'Number 5', 'Color: Green'],
  },
  Libra: {
    element: 'Air',
    ruling: 'Venus',
    traits: ['Diplomatic', 'Graceful', 'Fair-minded', 'Social'],
    lucky: ['Friday', 'Number 6', 'Color: Pink'],
  },
  Scorpio: {
    element: 'Water',
    ruling: 'Pluto',
    traits: ['Determined', 'Secretive', 'Passionate', 'Resourceful'],
    lucky: ['Tuesday', 'Number 8', 'Color: Dark Red'],
  },
  Sagittarius: {
    element: 'Fire',
    ruling: 'Jupiter',
    traits: ['Optimistic', 'Freedom-loving', 'Honest', 'Philosophical'],
    lucky: ['Thursday', 'Number 3', 'Color: Purple'],
  },
}

function getZodiacSign(month, day) {
  for (const sign of ZODIAC_SIGNS) {
    const [startMonth, startDay] = sign.dates.split(' - ')[0].split(' ').map(Number)
    const [endMonth, endDay] = sign.dates.split(' - ')[1].split(' ').map(Number)

    if (month === startMonth && day >= startDay) return sign
    if (month === endMonth && day <= endDay) return sign
  }
  return null
}

export default function ZodiacApp() {
  const [birthDate, setBirthDate] = useState('')
  const [zodiacSign, setZodiacSign] = useState(null)

  const handleDateChange = (e) => {
    const date = e.target.value
    setBirthDate(date)

    if (date) {
      const [year, month, day] = date.split('-').map(Number)
      const sign = getZodiacSign(month, day)
      setZodiacSign(sign)
    } else {
      setZodiacSign(null)
    }
  }

  const traits = zodiacSign ? ZODIAC_TRAITS[zodiacSign.name] : null

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
            ✨ Zodiac Sign Predictor ✨
          </h1>
          <p className="text-gray-300 text-lg">Discover your cosmic identity</p>
        </div>

        {/* Input Section */}
        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-8 border border-purple-300 border-opacity-20 mb-8">
          <label className="block text-white text-lg font-semibold mb-4">
            Enter Your Birth Date:
          </label>
          <input
            type="date"
            value={birthDate}
            onChange={handleDateChange}
            className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-90 text-gray-900 font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Results Section */}
        {zodiacSign && traits && (
          <div className="space-y-6 animate-fadeIn">
            {/* Main Card */}
            <div className={`bg-gradient-to-br ${zodiacSign.color} rounded-lg p-8 text-white shadow-2xl`}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-4xl font-bold">{zodiacSign.name}</h2>
                <span className="text-6xl">{zodiacSign.emoji}</span>
              </div>
              <p className="text-lg opacity-90">{zodiacSign.dates}</p>
            </div>

            {/* Traits Card */}
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-8 border border-purple-300 border-opacity-20">
              <h3 className="text-2xl font-bold text-white mb-4">Characteristics</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {traits.traits.map((trait, idx) => (
                  <div key={idx} className="bg-purple-500 bg-opacity-30 rounded-lg p-3 text-white">
                    ✓ {trait}
                  </div>
                ))}
              </div>
            </div>

            {/* Details Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 border border-purple-300 border-opacity-20">
                <h4 className="text-white font-bold text-lg mb-2">Element</h4>
                <p className="text-2xl font-bold text-purple-300">{traits.element}</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 border border-purple-300 border-opacity-20">
                <h4 className="text-white font-bold text-lg mb-2">Ruling Planet</h4>
                <p className="text-2xl font-bold text-purple-300">{traits.ruling}</p>
              </div>
            </div>

            {/* Lucky Info */}
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-8 border border-purple-300 border-opacity-20">
              <h3 className="text-2xl font-bold text-white mb-4">Lucky Attributes</h3>
              <div className="space-y-3">
                {traits.lucky.map((item, idx) => (
                  <div key={idx} className="text-white text-lg">
                    ⭐ {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Age Info */}
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg p-6 text-white text-center">
              <p className="text-lg font-semibold">
                Born on {new Date(birthDate).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <p className="text-sm opacity-80 mt-2">
                Age: {new Date().getFullYear() - new Date(birthDate).getFullYear()} years
              </p>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!zodiacSign && (
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-12 border border-purple-300 border-opacity-20 text-center">
            <p className="text-gray-300 text-xl">👆 Select your birth date to discover your zodiac sign</p>
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-12 text-gray-400 text-sm">
          <p>🌙 Explore the mysteries of the cosmos 🌟</p>
        </div>
      </div>
    </div>
  )
}
